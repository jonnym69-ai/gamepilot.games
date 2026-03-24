"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// TypeScript declaration for itch.io API
declare global {
  interface Window {
    Itch?: {
      attachBuyButton: (element: HTMLElement, options: { user: string; game: string }) => void;
    };
  }
}

export default function Home() {
  useEffect(() => {
    // Load itch.io API script
    const script = document.createElement('script');
    script.src = 'https://static.itch.io/api.js';
    script.type = 'text/javascript';
    script.onload = () => {
      // Initialize itch.io buy button after script loads
      const buyButton = document.getElementById('home_buy_button');
      if (window.Itch && buyButton) {
        window.Itch.attachBuyButton(buyButton, {
          user: "moz91",
          game: "gamepilot-v11"
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src="/gifs/a 3_4 angled disc lo.png" alt="GamePilot Logo" className="w-8 h-8 object-contain" />
              <h1 className="text-2xl font-bold text-white">GamePilot</h1>
            </div>
            <div className="flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/download" className="text-gray-300 hover:text-white transition-colors">Download</Link>
              <Link href="/community" className="text-gray-300 hover:text-white transition-colors">Community</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-purple-400 mb-4">Local-First Gaming Companion</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            GamePilot
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Never Stare at Your Game Library Again
          </p>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            GamePilot helps you actually use your library. Discover what fits your mood, track meaningful sessions, unlock identity-driven rewards, and build a gaming companion that gets more personal the more you use it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/download" 
              className="px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 text-lg shadow-lg"
            >
              Download GamePilot 1.2 Free
            </Link>
            <Link 
              href="#features" 
              className="px-10 py-5 border-2 border-purple-600 text-white font-bold rounded-lg hover:bg-purple-600/10 transition-colors text-lg"
            >
              See What&apos;s Included
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-400">
            <span className="px-3 py-1 rounded-full border border-gray-700 bg-gray-900/60">Free latest build</span>
            <span className="px-3 py-1 rounded-full border border-gray-700 bg-gray-900/60">Local-first progression</span>
            <span className="px-3 py-1 rounded-full border border-gray-700 bg-gray-900/60">Works with Steam, Epic, and more</span>
            <span className="px-3 py-1 rounded-full border border-gray-700 bg-gray-900/60">Community-driven development</span>
          </div>
        </div>
      </section>

      {/* Find Your Perfect Play Spotlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/60 border-y border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-3">Find Your Perfect Play</p>
            <h2 className="text-4xl font-bold mb-4">Tell GamePilot Your Mood, Time, and Platform</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Type in how much time you have, what vibe you&apos;re feeling, or the platform you want to use. GamePilot scans your entire library, cross-checks playtime, backlog status, and multiplatform installs, then serves up three tailored picks so you can launch instantly.
            </p>
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-400">★</span>
                <span>Custom sliders for mood, intensity, multiplayer preference, and session length</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400">★</span>
                <span>Auto-filtering for games you own across Steam, Epic, Game Pass, and more</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400">★</span>
                <span>Instant launch shortcuts plus backlog reminders so nothing gathers dust</span>
              </li>
            </ul>
            <Link
              href="/download"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
            >
              Try Find Your Perfect Play →
            </Link>
          </div>
          <div className="bg-gray-800 rounded-2xl overflow-hidden border border-purple-600/30">
            <img src="/gifs/gp gif 2.gif" alt="Find Your Perfect Play Flow" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">See GamePilot in Action</h2>
          <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden border border-purple-600/30">
            <img src="/gifs/gp gif1.gif" alt="GamePilot Library View" className="w-full h-full object-cover" />
          </div>
          <p className="text-center text-gray-400 mt-4">Browse your gaming library with flexible views and get personalized recommendations based on your mood and preferences</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Why GamePilot Feels Different</h2>
          <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">Built to make your library more usable now, while growing into a deeper progression and discovery companion over time.</p>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-xl font-bold mb-3">Local-First by Design</h3>
              <p className="text-gray-400">Your stats, progression, recommendations, and identity are designed around your own device and your own library.</p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-xl font-bold mb-3">Built Around Real Play</h3>
              <p className="text-gray-400">GamePilot is moving toward fairer session-based progression, where real play matters more than just launching a game.</p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-xl font-bold mb-3">Smarter Recommendations</h3>
              <p className="text-gray-400">Perfect Play, Surprise Me, Rediscover, and Continue Playing are all designed to become more useful the more you use GamePilot.</p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-xl font-bold mb-3">Progression With Personality</h3>
              <p className="text-gray-400">Unlock themes, audio, layouts, cosmetics, and supporter perks that make GamePilot feel more like your own space.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Powerful Features</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">Everything you need to discover, track, and share your gaming journey</p>
          
          <div className="space-y-16">
            {/* Feature 1 with GIF */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Smart Game Discovery</h3>
                <p className="text-gray-400 text-lg mb-4">Get personalized game recommendations based on your mood, available time, and favorite genres. Never waste time deciding what to play again.</p>
              </div>
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-purple-600/30 aspect-video">
                <img src="/gifs/gp gif 2.gif" alt="Smart Game Discovery Demo" className="w-full h-full object-cover" />
              </div>
            </div>
            <p className="text-center text-gray-400 mt-2">GamePilot analyzes your library and suggests the perfect game for your current mood and time constraints</p>

            {/* Feature 2 with GIF */}
            <div className="grid md:grid-cols-2 gap-8 items-center md:grid-flow-dense">
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-purple-600/30 aspect-video">
                <img src="/gifs/gp gif 3.gif" alt="Surprise Me Demo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Surprise Me Feature</h3>
                <p className="text-gray-400 text-lg mb-4">Feeling adventurous? Let GamePilot pick a random game from your library. Discover games you forgot you owned.</p>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-2">Let GamePilot randomly select a game from your collection - perfect for when you can&apos;t decide what to play</p>

            {/* Feature 3 with GIF */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Rediscover Hidden Gems</h3>
                <p className="text-gray-400 text-lg mb-4">Find games in your library that haven&apos;t been played much. Uncover forgotten favorites and give them another chance.</p>
              </div>
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-purple-600/30 aspect-video">
                <img src="/gifs/gp gif 4.gif" alt="Rediscover Hidden Gems Demo" className="w-full h-full object-cover" />
              </div>
            </div>
            <p className="text-center text-gray-400 mt-2">GamePilot identifies underplayed games in your library and brings them to your attention</p>

            {/* Feature 4 with GIF */}
            <div className="grid md:grid-cols-2 gap-8 items-center md:grid-flow-dense">
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-purple-600/30 aspect-video">
                <img src="/gifs/gp gif 5.gif" alt="Detailed Gaming Stats Demo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Comprehensive Gaming Statistics</h3>
                <p className="text-gray-400 text-lg mb-4">Track real playtime data, see your gaming habits, and understand your gaming identity through comprehensive statistics.</p>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-2">Monitor your gaming patterns with detailed statistics, playtime tracking, and habit analysis</p>

            {/* Feature 5 with GIF */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Achievements &amp; XP System</h3>
                <p className="text-gray-400 text-lg mb-4">Earn XP and unlock achievements for playing your games. Gamify your gaming experience and track your progress.</p>
              </div>
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-purple-600/30 aspect-video">
                <img src="/gifs/gp gif 6.gif" alt="Achievements and XP Demo" className="w-full h-full object-cover" />
              </div>
            </div>
            <p className="text-center text-gray-400 mt-2">Level up your gaming experience with XP points, achievements, and comprehensive progress tracking</p>

            {/* Additional Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-600 transition-colors">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4.242 4.242a4 4 0 105.656 5.656l4.242-4.242a4 4 0 00-5.656-5.656l-4.242 4.242"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Gaming Links Hub</h3>
                <p className="text-gray-400">Create a customizable collection of your favorite gaming websites and resources. Keep everything you need in one place.</p>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-600 transition-colors">
                <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Founders Board</h3>
                <p className="text-gray-400">Support development and get your name on the Founders Board. Help shape the future of GamePilot.</p>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-purple-600 transition-colors">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C9.547 15.714 11.641 17.479 14.118 17.479c3.592 0 6.5-2.907 6.5-6.5s-2.908-6.5-6.5-6.5c-2.477 0-4.571 1.765-5.434 4.138m-9.68.02h15.396m-1.49 4.112v-3.971m0 3.971v-3.971m0 3.971V8.07m0 0l-4.038-4.038m4.038 4.038L2.982 2.032"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Share Your Gaming Identity</h3>
                <p className="text-gray-400">Export and share your library, stats, achievements, and profile as images or files. Show off your gaming journey.</p>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-700/40 rounded-2xl p-10">
              <p className="text-sm uppercase tracking-[0.4em] text-purple-300 mb-4">Supporter Perks</p>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-lg font-bold text-purple-200">Atmosphere Packs</p>
                  <p className="text-sm text-gray-400">Cinematic overlays & lighting presets</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-purple-200">Button SFX Packs</p>
                  <p className="text-sm text-gray-400">Swap click sounds with retro or arcade audio</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-purple-200">Music Pack</p>
                  <p className="text-sm text-gray-400">Lo-fi & synthwave soundtrack for browsing</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-purple-200">Animated Themes</p>
                  <p className="text-sm text-gray-400">Live backgrounds + parallax hero layouts</p>
                </div>
              </div>
              <p className="text-center text-gray-300 mt-6">Become a supporter to unlock premium customization while keeping GamePilot free for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Testimonials Carousel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Loved by Gamers</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">See what the community is saying about GamePilot</p>
          
          <TestimonialCarousel />
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Built for the Long Game</h2>
          <p className="text-xl text-gray-300 mb-12">
            GamePilot already helps you discover what to play and express your gaming identity. The roadmap pushes that further with fairer progression, deeper stats, better goals, and richer recaps without losing the local-first feel.
          </p>
          
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 border border-purple-600/30 mb-8">
            <h3 className="text-2xl font-bold mb-6">What&apos;s Coming Next</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-10 text-left">
              <div>
                <div className="text-lg font-bold text-purple-300 mb-2">Fairer Session-Based Progression</div>
                <p className="text-gray-300">A small launch reward, bigger session rewards, and a progression loop tied more closely to real play.</p>
              </div>
              <div>
                <div className="text-lg font-bold text-purple-300 mb-2">Unified Stats and Smarter Picks</div>
                <p className="text-gray-300">A cleaner stats backbone feeding recommendations, profile identity, active-day history, and session trends.</p>
              </div>
              <div>
                <div className="text-lg font-bold text-purple-300 mb-2">Weekly Goals and GamePilot Picks</div>
                <p className="text-gray-300">A mix of system-generated quests and your own curated goals to keep your backlog active.</p>
              </div>
              <div>
                <div className="text-lg font-bold text-purple-300 mb-2">Year in Review and Exports</div>
                <p className="text-gray-300">Recap pages, milestone highlights, and exportable share cards built from your own local play history.</p>
              </div>
            </div>
            
            <Link 
              href="/download" 
              className="px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 text-lg shadow-lg inline-block"
            >
              Download GamePilot Now
            </Link>
          </div>

          <p className="text-gray-400 text-sm">
            💜 Free latest build • 🔒 Your data, your control • 🌍 Community-driven development
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="flex space-x-6 mb-4">
              <a 
                href="https://youtube.com/@mozmakesstuff?si=OzuCVp-HYAmjv7Zm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="YouTube Channel"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://discord.gg/K9sEA4dn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-500 transition-colors"
                aria-label="Discord Server"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
            <p className="text-gray-400 text-center">&copy; 2024 GamePilot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const testimonials = [
  {
    initials: "JM",
    name: "James M.",
    role: "Discord Member",
    colors: "from-purple-400 to-blue-400",
    text: "The mood-based recommendations are incredible. I finally have a system that understands what I want to play based on how I&apos;m feeling. Game-changer!"
  },
  {
    initials: "SL",
    name: "Sarah L.",
    role: "Active Community Member",
    colors: "from-pink-400 to-red-400",
    text: "The achievements and XP system makes gaming more rewarding. Love tracking my stats and sharing my gaming identity with friends!"
  },
  {
    initials: "MK",
    name: "Marcus K.",
    role: "Founder Member",
    colors: "from-green-400 to-cyan-400",
    text: "GamePilot has completely changed how I manage my library. The community is amazing and the dev listens to feedback. Highly recommend!"
  },
  {
    initials: "AJ",
    name: "Alex J.",
    role: "Community Moderator",
    colors: "from-orange-400 to-yellow-400",
    text: "As a moderator, I see how much the community loves this app. The dev is responsive, features get implemented based on feedback, and the support is incredible. Best gaming community I&apos;ve been part of!"
  },
  {
    initials: "RP",
    name: "Rachel P.",
    role: "Patreon Supporter",
    colors: "from-indigo-400 to-purple-400",
    text: "Rediscover feature saved my gaming life. Found so many games with low playtime that I actually love. Absolutely worth supporting!"
  },
  {
    initials: "TW",
    name: "Tyler W.",
    role: "Discord Member",
    colors: "from-cyan-400 to-blue-400",
    text: "The gaming links hub keeps all my favorite sites organized. Simple but incredibly useful. GamePilot just gets it."
  },
  {
    initials: "EK",
    name: "Emma K.",
    role: "Active Community Member",
    colors: "from-rose-400 to-pink-400",
    text: "Sharing my profile with friends is so cool. They can see my stats, achievements, and gaming habits. Love the social aspect!"
  },
  {
    initials: "DC",
    name: "David C.",
    role: "Early Adopter",
    colors: "from-amber-400 to-orange-400",
    text: "The stats page is incredible. Finally understand my gaming patterns. This app is a must-have for any serious gamer."
  }
];

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <div className="relative">
      <div className="bg-gray-900 p-12 rounded-lg border border-gray-800 min-h-96 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-6">
            <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.colors} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
              {testimonial.initials}
            </div>
            <div className="ml-6">
              <p className="font-semibold text-white text-lg">{testimonial.name}</p>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          </div>
          <p className="text-gray-300 italic text-lg mb-6">&quot;{testimonial.text}&quot;</p>
        </div>
        <div className="flex text-yellow-400 text-xl">★★★★★</div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-colors"
        aria-label="Previous testimonial"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-colors"
        aria-label="Next testimonial"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-purple-600 w-8"
                : "bg-gray-600 w-3 hover:bg-gray-500"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
