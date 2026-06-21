"use client";

import Link from "next/link";

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
            Get the latest version for Windows 10/11 (64-bit).
          </p>

          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-2">GamePilot V1.5.0</h2>
            <p className="text-sm text-purple-400 mb-6">Latest release</p>
            <p className="text-gray-400 mb-8">
              Download the installer, source code, or grab the latest release directly from GitHub. GamePilot is free — no account required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://github.com/jonnym69-ai/the-gamepilot/releases/tag/V1.5.0"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Download V1.5.0 from GitHub
              </a>
              <a
                href="https://moz91.itch.io/gamepilot-update-13"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-all inline-flex items-center justify-center gap-2"
              >
                Get it on itch.io
              </a>
            </div>

            <div className="text-gray-500 text-sm">
              <p>Free download. Windows 10/11 (64-bit).</p>
              <p>Source code available on GitHub.</p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-600/30 text-left">
            <h3 className="text-2xl font-bold mb-4 text-center">🎨 Support GamePilot on Patreon</h3>
            <p className="text-gray-300 mb-6 text-center">
              Keep GamePilot free for everyone and unlock extras for yourself.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="font-bold text-purple-400 mb-2">✨ Exclusive Themes</h4>
                <p className="text-sm text-gray-400">Access premium colour schemes and customisation options.</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="font-bold text-blue-400 mb-2">🏆 Founders Board</h4>
                <p className="text-sm text-gray-400">Your name displayed in the app as a supporter.</p>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                href="https://www.patreon.com/posts/gamepilot-1-1-to-152727989?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                Become a Supporter
              </Link>
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
                <li><a href="https://youtube.com/@mozog91" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a></li>
                <li><a href="https://x.com/Mozog91" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X / Twitter</a></li>
                <li><a href="https://discord.gg/K9sEA4dn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="https://github.com/jonnym69-ai/the-gamepilot/releases/tag/V1.5.0" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub Releases</a></li>
                <li><a href="https://www.patreon.com/posts/gamepilot-1-1-to-152727989?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Patreon</a></li>
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
