"use client";

import Link from "next/link";
import { useEffect } from "react";

// TypeScript declaration for itch.io API
declare global {
  interface Window {
    Itch?: {
      attachBuyButton: (element: HTMLElement, options: { user: string; game: string }) => void;
    };
  }
}

export default function Download() {
  useEffect(() => {
    // Load itch.io API script
    const script = document.createElement('script');
    script.src = 'https://static.itch.io/api.js';
    script.type = 'text/javascript';
    script.onload = () => {
      // Initialize itch.io buy button after script loads
      const buyButton = document.getElementById('buy_button');
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
          <h1 className="text-5xl font-bold mb-6">Get GamePilot</h1>
          <p className="text-xl text-gray-300 mb-12">
            Purchase your copy of GamePilot and enhance your gaming experience today!
          </p>

          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">GamePilot v1.1</h2>
            <p className="text-gray-400 mb-8">
              Get the latest version of GamePilot with all features and updates.
            </p>
            
            {/* Itch.io Buy Button */}
            <div className="mb-8">
              <button id="buy_button" className="px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 text-xl">
                Download for free or make a donation
              </button>
            </div>

            <div className="text-gray-500 text-sm">
              <p>Secure payment through itch.io</p>
              <p>Instant download after purchase</p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">Already purchased?</h3>
            <Link 
              href="https://moz91.itch.io/gamepilot-v11" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-all inline-block"
            >
              Access Your Download
            </Link>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Want to support development?</h3>
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
                <li><a href="https://discord.gg/K9sEA4dn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="https://youtube.com/@mozmakesstuff?si=f6oeFxqs6BoL62ee" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a></li>
                <li><a href="https://www.reddit.com/r/Gamepilot/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Reddit</a></li>
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
