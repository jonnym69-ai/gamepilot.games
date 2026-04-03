"use client";

import Link from "next/link";

// TypeScript declaration for itch.io API
declare global {
  interface Window {
    Itch?: {
      attachBuyButton: (element: HTMLElement, options: { user: string; game: string }) => void;
    };
  }
}

export default function Download() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-white">GamePilot</Link>
            </div>
            <div className="flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/download" className="text-white font-medium">Download</Link>
              <Link href="/community" className="text-gray-300 hover:text-white transition-colors">Community</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Download Content */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Download GamePilot</h1>
          <p className="text-xl text-gray-300 mb-12">
            Download GamePilot and enhance your gaming experience today!
          </p>

          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">GamePilot Update 1.3 - Latest Version</h2>
            <p className="text-gray-400 mb-8">
              Your PC library is a playground, not a storefront. Get the newest update with enhanced features and improvements.
            </p>
            
            {/* Itch.io Embed Iframe for GamePilot Update 1.3 */}
            <div className="flex justify-center mb-8">
              <iframe 
                frameBorder="0" 
                src="https://itch.io/embed/4442348?linkback=true&bg_color=9c483c&fg_color=020202&link_color=1a1a27&border_color=e04c48" 
                width="552" 
                height="167"
                className="max-w-full"
                title="GamePilot Update 1.3 on itch.io"
              >
                <a href="https://moz91.itch.io/gamepilot-update-13">Your PC library is a playground, not a storefront. by MoZ91</a>
              </iframe>
            </div>

            <div className="text-gray-500 text-sm">
              <p>Secure download through itch.io</p>
              <p>Pay what you want or download for free</p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-2">GamePilot v1.2 — Previous Release</h3>
              <p className="text-sm text-gray-500 mb-4">Stable version before Update 1.3</p>
              <p className="text-gray-400 mb-6">
                The previous stable version of GamePilot with enhanced features and improvements.
              </p>
              <div className="flex justify-center mb-6">
                <iframe 
                  frameBorder="0" 
                  src="https://itch.io/embed/4386676?linkback=true&border_width=0&bg_color=496a31&link_color=71fa5b" 
                  width="550" 
                  height="165"
                  className="max-w-full"
                  title="GamePilot 1.2 on itch.io"
                >
                  <a href="https://moz91.itch.io/gamepilot-12">Gamepilot 1.2 by MoZ91</a>
                </iframe>
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-2">GamePilot v1.1 — Supporter Build</h3>
              <p className="text-sm text-purple-400 mb-4">Unlock via Patreon (includes supporter perks)</p>
              <p className="text-gray-400 mb-6">
                This build adds the first wave of atmosphere packs, button SFX packs, and early animated themes. Available when you support the project on Patreon and receive an instant itch.io key.
              </p>
              <div className="flex justify-center mb-6">
                <iframe
                  frameBorder="0"
                  src="https://itch.io/embed/4368866"
                  width="552"
                  height="167"
                  className="max-w-full"
                  title="GamePilot 1.1 on itch.io"
                >
                  <a href="https://moz91.itch.io/gamepilot-v11">GamePilot V1.1 by MoZ91</a>
                </iframe>
              </div>
              <Link
                href="https://www.patreon.com/posts/gamepilot-1-1-to-152727989?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition"
              >
                Become a Supporter & Get v1.1+
              </Link>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-2">GamePilot 0.1.0 — Legacy Snapshot</h3>
              <p className="text-sm text-gray-500 mb-4">For nostalgia & archival purposes</p>
              <p className="text-gray-400 mb-6">
                Take a tour back to the very first public prototype. This legacy build is preserved for the community and remains pay-what-you-want on itch.io.
              </p>
              <div className="flex justify-center">
                <iframe
                  frameBorder="0"
                  src="https://itch.io/embed/4327426?bg_color=2e055a&fg_color=d16607&link_color=624bfd&border_color=63448d"
                  width="552"
                  height="167"
                  className="max-w-full"
                  title="GamePilot 0.1.0 on itch.io"
                >
                  <a href="https://moz91.itch.io/gamepilot">Gamepilot by MoZ91</a>
                </iframe>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4">Already downloaded?</h3>
            <p className="text-gray-400 mb-4">Use your itch.io library for updates or grab the latest direct link below.</p>
            <Link
              href="https://moz91.itch.io/gamepilot-update-13"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-all inline-block"
            >
              Open GamePilot Update 1.3 on itch.io
            </Link>
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-600/30">
            <h3 className="text-2xl font-bold mb-4">🎨 Unlock Premium Features with Patreon</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to the GamePilot Patreon to unlock exclusive themes and get your name on the Founders Board in the app!
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="font-bold text-purple-400 mb-2">✨ Exclusive Themes</h4>
                <p className="text-sm text-gray-400">Access premium color schemes and customization options</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="font-bold text-blue-400 mb-2">🏆 Founders Board</h4>
                <p className="text-sm text-gray-400">Your name displayed in the app as a supporter</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://www.patreon.com/posts/gamepilot-1-1-to-152727989?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                Get GamePilot 1.1 to 1.2 on Patreon
              </Link>
              <Link 
                href="https://www.patreon.com/posts/gamepilot-v1-its-151426657?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-all"
              >
                Get Original GamePilot v1
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">Try GamePilot 0.1.0</h3>
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 max-w-2xl mx-auto">
              <p className="text-gray-400 mb-6">
                Get the early version of GamePilot to see how it all began!
              </p>
              
              {/* Itch.io Embed Iframe */}
              <div className="flex justify-center">
                <iframe 
                  frameBorder="0" 
                  src="https://itch.io/embed/4327426?bg_color=2e055a&fg_color=d16607&link_color=624bfd&border_color=63448d" 
                  width="552" 
                  height="167"
                  className="max-w-full"
                  title="GamePilot 0.1.0 on itch.io"
                >
                  <a href="https://moz91.itch.io/gamepilot">Gamepilot by MoZ91</a>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">GamePilot</h3>
              <p className="text-gray-400 text-sm">Your comprehensive PC gaming library manager.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/download" className="text-white">Download</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="https://youtube.com/@mozmakesstuff?si=OzuCVp-HYAmjv7Zm" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a></li>
                <li><a href="https://discord.gg/K9sEA4dn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="https://moz91.itch.io/gamepilot-v11" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">itch.io</a></li>
                <li><a href="https://www.patreon.com/posts/gamepilot-v1-its-151426657?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Patreon</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; 2024 GamePilot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
