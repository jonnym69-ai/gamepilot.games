/**
 * Bottleneck Detection Algorithm
 * Pure logic - no AI required
 * Identifies which component limits gaming performance
 */

import { classifyCPU, classifyGPU, classifyRAM, getHardwareScore } from './hardwareTiers';
import { GameRequirements } from './gameRequirements';

export interface HardwareProfile {
  cpu: string;
  gpu: string;
  ram: number; // GB
  storage: number; // GB
  os: string;
}

export interface PerformanceScore {
  cpu: number; // 1-100
  gpu: number; // 1-100
  ram: number; // 1-100
  overall: number; // 1-100
}

export interface Bottleneck {
  component: 'cpu' | 'gpu' | 'ram' | 'balanced';
  severity: 'none' | 'minor' | 'moderate' | 'severe';
  percentage: number; // How much this component limits performance (0-100)
  impact: string; // Human-readable impact description
}

export interface GameCompatibility {
  gameId: string;
  gameName: string;
  canRunMinimum: boolean;
  canRunRecommended: boolean;
  bottleneck: Bottleneck;
  fps_estimate: {
    minimum: number; // Estimated FPS at minimum settings
    recommended: number; // Estimated FPS at recommended settings
  };
}

/**
 * Analyze user hardware and generate performance scores
 */
export function analyzeHardware(profile: HardwareProfile): PerformanceScore {
  const cpuTier = classifyCPU(profile.cpu);
  const gpuTier = classifyGPU(profile.gpu);
  const ramTier = classifyRAM(profile.ram);

  const cpuScore = cpuTier.score;
  const gpuScore = gpuTier.score;
  const ramScore = ramTier.score;

  // Overall score is the average, but weighted toward GPU for gaming
  const overall = Math.round((cpuScore * 0.25 + gpuScore * 0.65 + ramScore * 0.1));

  return {
    cpu: cpuScore,
    gpu: gpuScore,
    ram: ramScore,
    overall,
  };
}

/**
 * Detect bottleneck in hardware
 * Identifies which component is limiting performance
 */
export function detectBottleneck(scores: PerformanceScore): Bottleneck {
  const { cpu, gpu, ram } = scores;

  // Calculate the difference between components
  const cpuGpuDiff = Math.abs(cpu - gpu);
  const cpuRamDiff = Math.abs(cpu - ram);
  const gpuRamDiff = Math.abs(gpu - ram);

  // Determine which is the limiting factor
  const minScore = Math.min(cpu, gpu, ram);
  const maxScore = Math.max(cpu, gpu, ram);
  const range = maxScore - minScore;

  // If all components are balanced (within 15 points)
  if (range <= 15) {
    return {
      component: 'balanced',
      severity: 'none',
      percentage: 0,
      impact: 'Your hardware is well-balanced. All components work together efficiently.',
    };
  }

  // Determine which component is the bottleneck
  let bottleneckComponent: 'cpu' | 'gpu' | 'ram';
  if (cpu === minScore) {
    bottleneckComponent = 'cpu';
  } else if (gpu === minScore) {
    bottleneckComponent = 'gpu';
  } else {
    bottleneckComponent = 'ram';
  }

  // Calculate bottleneck severity (0-100)
  // The larger the gap, the more severe the bottleneck
  const bottleneckPercentage = Math.min(100, Math.round((range / maxScore) * 100));

  // Determine severity level
  let severity: 'minor' | 'moderate' | 'severe';
  if (bottleneckPercentage < 20) {
    severity = 'minor';
  } else if (bottleneckPercentage < 50) {
    severity = 'moderate';
  } else {
    severity = 'severe';
  }

  // Generate impact description
  const impactDescriptions: Record<string, Record<string, string>> = {
    cpu: {
      minor: 'Your CPU is slightly holding back your GPU in demanding games.',
      moderate: 'Your CPU is limiting GPU performance in AAA titles.',
      severe: 'Your CPU is significantly bottlenecking your GPU. Upgrading would unlock much better performance.',
    },
    gpu: {
      minor: 'Your GPU is slightly limiting your CPU in demanding games.',
      moderate: 'Your GPU is limiting performance in modern AAA titles.',
      severe: 'Your GPU is significantly bottlenecking your system. A GPU upgrade would dramatically improve gaming performance.',
    },
    ram: {
      minor: 'Your RAM is slightly limiting performance in memory-heavy games.',
      moderate: 'Your RAM is limiting performance in modern games. 16GB is the sweet spot.',
      severe: 'Your RAM is severely limiting performance. Upgrading to 16GB+ would help significantly.',
    },
  };

  return {
    component: bottleneckComponent,
    severity,
    percentage: bottleneckPercentage,
    impact: impactDescriptions[bottleneckComponent][severity],
  };
}

/**
 * Check if hardware meets game requirements
 */
export function checkGameCompatibility(
  userProfile: HardwareProfile,
  gameRequirements: GameRequirements
): GameCompatibility {
  const userCpuScore = classifyCPU(userProfile.cpu).score;
  const userGpuScore = classifyGPU(userProfile.gpu).score;
  const userRamScore = classifyRAM(userProfile.ram).score;

  const minCpuScore = classifyCPU(gameRequirements.requirements.minimum.cpu).score;
  const minGpuScore = classifyGPU(gameRequirements.requirements.minimum.gpu).score;
  const minRamScore = classifyRAM(gameRequirements.requirements.minimum.ram).score;

  const recCpuScore = classifyCPU(gameRequirements.requirements.recommended.cpu).score;
  const recGpuScore = classifyGPU(gameRequirements.requirements.recommended.gpu).score;
  const recRamScore = classifyRAM(gameRequirements.requirements.recommended.ram).score;

  // Check if meets minimum requirements
  const meetsMinimum = userCpuScore >= minCpuScore && userGpuScore >= minGpuScore && userRamScore >= minRamScore;

  // Check if meets recommended requirements
  const meetsRecommended =
    userCpuScore >= recCpuScore && userGpuScore >= recGpuScore && userRamScore >= recRamScore;

  // Calculate bottleneck for this specific game
  const gameBottleneck = detectBottleneck({
    cpu: userCpuScore,
    gpu: userGpuScore,
    ram: userRamScore,
    overall: (userCpuScore + userGpuScore + userRamScore) / 3,
  });

  // Estimate FPS based on GPU performance and bottleneck
  const fpsEstimate = estimateGameFPS(userGpuScore, gameBottleneck, meetsRecommended);

  return {
    gameId: gameRequirements.id,
    gameName: gameRequirements.name,
    canRunMinimum: meetsMinimum,
    canRunRecommended: meetsRecommended,
    bottleneck: gameBottleneck,
    fps_estimate: fpsEstimate,
  };
}

/**
 * Estimate FPS for a game based on GPU score and bottleneck
 */
function estimateGameFPS(
  gpuScore: number,
  bottleneck: Bottleneck,
  meetsRecommended: boolean
): { minimum: number; recommended: number } {
  // Base FPS estimates for different GPU tiers at 1080p
  const baseFpsMap: Record<number, { min: number; rec: number }> = {
    15: { min: 30, rec: 45 },
    30: { min: 45, rec: 60 },
    35: { min: 60, rec: 75 },
    50: { min: 75, rec: 90 },
    55: { min: 90, rec: 120 },
    70: { min: 120, rec: 144 },
    75: { min: 144, rec: 165 },
    90: { min: 165, rec: 200 },
    95: { min: 200, rec: 240 },
    100: { min: 240, rec: 360 },
  };

  // Find closest GPU tier
  let baseFps = { min: 30, rec: 45 };
  for (const [score, fps] of Object.entries(baseFpsMap)) {
    if (parseInt(score) <= gpuScore) {
      baseFps = fps;
    }
  }

  // Apply bottleneck penalty
  let fpsMultiplier = 1;
  if (bottleneck.component === 'cpu') {
    fpsMultiplier = 1 - bottleneck.percentage / 100 * 0.5; // CPU bottleneck reduces FPS by up to 50%
  } else if (bottleneck.component === 'ram') {
    fpsMultiplier = 1 - bottleneck.percentage / 100 * 0.3; // RAM bottleneck reduces FPS by up to 30%
  }

  return {
    minimum: Math.max(20, Math.round(baseFps.min * fpsMultiplier)),
    recommended: Math.max(30, Math.round(baseFps.rec * fpsMultiplier)),
  };
}

/**
 * Analyze entire library and generate upgrade recommendations
 */
export function analyzeLibrary(
  userProfile: HardwareProfile,
  games: GameRequirements[]
): {
  totalGames: number;
  canRunAll: number;
  canRunRecommended: number;
  bottlenecks: Record<string, number>; // Count of games bottlenecked by each component
  topBottleneck: 'cpu' | 'gpu' | 'ram' | 'balanced';
  recommendedUpgrade: string;
} {
  const compatibilities = games.map((game) => checkGameCompatibility(userProfile, game));

  const canRunAll = compatibilities.filter((c) => c.canRunMinimum).length;
  const canRunRecommended = compatibilities.filter((c) => c.canRunRecommended).length;

  // Count bottlenecks
  const bottlenecks: Record<string, number> = {
    cpu: 0,
    gpu: 0,
    ram: 0,
    balanced: 0,
  };

  compatibilities.forEach((c) => {
    bottlenecks[c.bottleneck.component]++;
  });

  // Find the most common bottleneck
  const topBottleneck = (
    Object.entries(bottlenecks).sort(([, a], [, b]) => b - a)[0][0] as 'cpu' | 'gpu' | 'ram' | 'balanced'
  ) || 'balanced';

  // Generate upgrade recommendation
  let recommendedUpgrade = '';
  if (topBottleneck === 'gpu') {
    recommendedUpgrade = 'Upgrading your GPU would unlock the best performance gains for your library.';
  } else if (topBottleneck === 'cpu') {
    recommendedUpgrade = 'Upgrading your CPU would improve performance in CPU-intensive games.';
  } else if (topBottleneck === 'ram') {
    recommendedUpgrade = 'Upgrading to 16GB+ RAM would help with modern games.';
  } else {
    recommendedUpgrade = 'Your hardware is well-balanced. No urgent upgrades needed.';
  }

  return {
    totalGames: games.length,
    canRunAll,
    canRunRecommended,
    bottlenecks,
    topBottleneck,
    recommendedUpgrade,
  };
}
