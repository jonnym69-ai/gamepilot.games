"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
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
          <p className="text-sm uppercase tracking-[0.4em] text-purple-400 mb-4">Local-First Decision Layer</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-600/30 text-purple-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            V1.7.0 now available
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            GamePilot
          </h1>
          <p className="text-2xl md:text-4xl font-semibold text-white mb-6">
            Stop scrolling. Start playing.
          </p>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            GamePilot isn&apos;t a launcher. It&apos;s a local-first decision-making layer for your game library. It learns your taste, tracks every session, and tells you what to play next — even when Steam is offline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/download" 
              className="px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 text-lg shadow-lg"
            >
              Download GamePilot V1.7.0 Free
            </Link>
            <Link 
              href="#features" 
              className="px-10 py-5 border-2 border-purple-600 text-white font-bold rounded-lg hover:bg-purple-600/10 transition-colors text-lg"
            >
              See How It Works
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-400">
            <span className="px-3 py-1 rounded-full border border-gray-700 bg-gray-900/60">Free latest build</span>
            <span className="px-3 py-1 rounded-full border border-gray-700 bg-gray-900/60">No account required</span>
            <span className="px-3 py-1 rounded-full border border-gray-700 bg-gray-900/60">No telemetry</span>
            <span className="px-3 py-1 rounded-full border border-gray-700 bg-gray-900/60">Windows 10/11</span>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30 border-y border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Too many games. Not enough decisions.</h2>
          <p className="text-xl text-gray-300 mb-8">
            You own hundreds of games across Steam, Epic, GOG, Xbox, and more. Every evening you spend more time browsing than playing. GamePilot fixes that by turning your library into a personal recommendation engine.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <p className="text-purple-400 font-bold mb-2">🎮 Library scattered</p>
              <p className="text-gray-400 text-sm">Games across launchers, subscriptions, and folders with no single view.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <p className="text-purple-400 font-bold mb-2">⏳ Decision fatigue</p>
              <p className="text-gray-400 text-sm">Spending 20 minutes choosing what to play before you even launch.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
              <p className="text-purple-400 font-bold mb-2">📊 No insight</p>
              <p className="text-gray-400 text-sm">You forget what you enjoy, when you play, and what&apos;s gathering dust.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden border border-purple-600/30 shadow-2xl shadow-purple-900/20">
            <img src="/gifs/gamepilot perfect play.gif" alt="GamePilot Perfect Play recommendations" className="w-full h-full object-cover" />
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">Perfect Play picks a game based on your mood, time, genre, and actual library.</p>
        </div>
      </section>

      {/* Local-First Pillars */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-gray-800 bg-black">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm uppercase tracking-[0.4em] text-purple-400 mb-3">Local-First, Always</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Your Library. Your Stats. Your Machine.</h2>
          <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">Your gaming data never leaves your machine. No login walls, no cloud sync anxiety, no tracking. GamePilot is yours — permanently.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6 text-center">
              <p className="text-2xl mb-2">🔒</p>
              <p className="font-bold mb-1">No Account</p>
              <p className="text-sm text-gray-400">No sign-ups, no logins, no passwords. Install and launch.</p>
            </div>
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6 text-center">
              <p className="text-2xl mb-2">📡</p>
              <p className="font-bold mb-1">No Telemetry</p>
              <p className="text-sm text-gray-400">GamePilot doesn&apos;t phone home or track your behaviour.</p>
            </div>
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6 text-center">
              <p className="text-2xl mb-2">☁️</p>
              <p className="font-bold mb-1">No Cloud</p>
              <p className="text-sm text-gray-400">No servers between you and your library. It just runs.</p>
            </div>
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-6 text-center">
              <p className="text-2xl mb-2">💾</p>
              <p className="font-bold mb-1">Your Data Stays Local</p>
              <p className="text-sm text-gray-400">Stats, identity, and insights live on your machine. Backup and restore included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Built around your gaming identity</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">Identity, Insights, and Smart Shelves work together to turn your library into something that actually knows you.</p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
              <div className="aspect-video bg-gray-800">
                <img src="/gifs/gamepilot identity.png" alt="Gaming Identity" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-3">Identity</p>
                <h3 className="text-2xl font-bold mb-4">Who you are as a gamer</h3>
                <p className="text-gray-400">Built from real playtime, top genres, signature games, and your unique taste. GamePilot turns your habits into a profile that feels personal — not generic.</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
              <div className="aspect-video bg-gray-800">
                <img src="/gifs/gamepilot insights.gif" alt="Habit Insights" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-3">Insights</p>
                <h3 className="text-2xl font-bold mb-4">Understand your habits</h3>
                <p className="text-gray-400">Peak play times, session trends, mood distribution, library health, and time-of-day heatmaps. See your gaming life clearly — without sharing it with anyone.</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
              <div className="aspect-video bg-gray-800">
                <img src="/gifs/gamepilot smart shelves.gif" alt="Smart Shelves" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-3">Smart Shelves</p>
                <h3 className="text-2xl font-bold mb-4">Curated without the clutter</h3>
                <p className="text-gray-400">Auto-curated collections like Continue This, Backlog Rediscovery, Comfort Picks, Hidden Gems, Deep Dives, One More Run, Quick Fix, Mood Match, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How it works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-600/30">
                <span className="text-2xl font-bold text-purple-300">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Scan</h3>
              <p className="text-gray-400 text-sm">GamePilot reads your library from Steam, Epic, GOG, Xbox, Ubisoft, and local folders.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-600/30">
                <span className="text-2xl font-bold text-purple-300">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Play</h3>
              <p className="text-gray-400 text-sm">Launch games through GamePilot. It tracks playtime, sessions, and habits — even when Steam is offline.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-600/30">
                <span className="text-2xl font-bold text-purple-300">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Learn</h3>
              <p className="text-gray-400 text-sm">Your taste clusters and gaming identity emerge from your real play data.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-600/30">
                <span className="text-2xl font-bold text-purple-300">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Recommend</h3>
              <p className="text-gray-400 text-sm">Perfect Play suggests the right game for your mood, time, and taste — no AI needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Taste Clusters */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-3">Taste Clusters</p>
            <h2 className="text-4xl font-bold mb-6">Your taste has a name</h2>
            <p className="text-gray-300 text-lg mb-6">
              GamePilot finds patterns in your play history and turns them into clusters: Souls-like Specialist, Run Chaser, Precision Platformer, Comfort Co-op, Deep-Dive RPG, and more. They&apos;re not labels from a store — they&apos;re discovered from what you actually play.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-400">★</span>
                <span>Emerges from real playtime, not wishlists or browsing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400">★</span>
                <span>Updates as your taste evolves</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400">★</span>
                <span>Powers recommendations and smart shelves</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-2xl overflow-hidden border border-purple-600/30">
            <img src="/gifs/gamepilot rec reasoning.gif" alt="Recommendation reasoning showing taste clusters" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Screenshots Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">See it in action</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">A few of the views that make GamePilot feel like it knows your library.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-800">
              <img src="/gifs/gamepilot home.gif" alt="GamePilot home dashboard" className="w-full h-full object-cover" />
            </div>
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-800">
              <img src="/gifs/gamepilot library reclaimer.gif" alt="Library Reclaimer" className="w-full h-full object-cover" />
            </div>
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-800">
              <img src="/gifs/gamepilot wishlist.gif" alt="Wishlist recommendations" className="w-full h-full object-cover" />
            </div>
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-800">
              <img src="/gifs/gamepilot smart shelves.gif" alt="Smart Shelves" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to stop scrolling?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Download GamePilot for Windows and turn your library into something that actually helps you decide what to play.
          </p>
          <Link 
            href="/download" 
            className="px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 text-lg shadow-lg inline-block"
          >
            Download GamePilot V1.7.0 Free
          </Link>
          <p className="text-gray-500 text-sm mt-6">Windows 10/11 (64-bit) • No account required • No telemetry</p>
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

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="flex space-x-6 mb-4">
              <a 
                href="https://youtube.com/@mozog91" 
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
                href="https://x.com/Mozog91" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="X / Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
            <p className="text-gray-400 text-center">&copy; 2026 GamePilot. All rights reserved.</p>
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
    text: "The Perfect Play recommendations are spot on. I finally have a system that understands what I want to play based on my mood and time. Game-changer!"
  },
  {
    initials: "SL",
    name: "Sarah L.",
    role: "Active Community Member",
    colors: "from-pink-400 to-red-400",
    text: "Seeing my gaming identity and taste clusters form over time is addictive. It feels like the app actually gets me without spying on me."
  },
  {
    initials: "MK",
    name: "Marcus K.",
    role: "Founder Member",
    colors: "from-green-400 to-cyan-400",
    text: "GamePilot has completely changed how I manage my library. The Smart Shelves keep my backlog manageable and the dev listens to feedback. Highly recommend!"
  },
  {
    initials: "AJ",
    name: "Alex J.",
    role: "Community Moderator",
    colors: "from-orange-400 to-yellow-400",
    text: "As a moderator, I see how much the community loves the insights. The local-first approach is a huge selling point for privacy-conscious gamers."
  },
  {
    initials: "RP",
    name: "Rachel P.",
    role: "Patreon Supporter",
    colors: "from-indigo-400 to-purple-400",
    text: "Backlog Rediscovery found games I forgot I owned. The Smart Shelves make my library feel curated instead of chaotic. Absolutely worth supporting!"
  },
  {
    initials: "TW",
    name: "Tyler W.",
    role: "Discord Member",
    colors: "from-cyan-400 to-blue-400",
    text: "The stats and habit insights are unreal. Finally understanding when and how I play has made my gaming time way more satisfying."
  },
  {
    initials: "EK",
    name: "Emma K.",
    role: "Active Community Member",
    colors: "from-rose-400 to-pink-400",
    text: "Sharing my gaming identity with friends is so cool. They can see my taste clusters and top games without me giving up any privacy."
  },
  {
    initials: "DC",
    name: "David C.",
    role: "Early Adopter",
    colors: "from-amber-400 to-orange-400",
    text: "The insights page is incredible. Finally understand my gaming patterns. This app is a must-have for any serious gamer."
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
