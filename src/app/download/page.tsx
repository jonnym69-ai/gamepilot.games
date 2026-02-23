"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Download() {
  useEffect(() => {
    window.location.href = "https://www.patreon.com/posts/gamepilot-v1-its-151426657?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        <h1 className="text-3xl font-bold mb-4">Redirecting to Patreon...</h1>
        <p className="text-gray-400 mb-8">
          You&apos;ll be redirected to our Patreon page to download GamePilot.
        </p>
        <Link 
          href="https://www.patreon.com/posts/gamepilot-v1-its-151426657?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link" 
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
        >
          Go to Patreon Now
        </Link>
      </div>
    </div>
  );
}
