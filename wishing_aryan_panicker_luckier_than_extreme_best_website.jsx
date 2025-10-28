import React from 'react';
import { motion } from 'framer-motion';

export default function WishAryan() {
  function printCard() {
    window.print();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-indigo-50 p-8 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold">Luck Booster — For Aryan Panicker</h1>
          <div className="text-sm opacity-80">Send this wish — make the universe wink ✨</div>
        </header>

        <main className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <section className="p-6 bg-gradient-to-br from-rose-50 to-amber-50 rounded-xl">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl font-bold">Wishing Aryan the luckier-than-extreme best</h2>
              <p className="mt-3 text-sm opacity-80">May every door open, every light turn green, and every improbable win land in Aryan's lap. This is an amplified cosmic wish — sealed, stamped, and delivered with confetti.</p>

              <div className="mt-4 space-y-3">
                <button onClick={printCard} className="w-full px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold">Print / Save Wish Card</button>
                <button className="w-full px-4 py-2 rounded-xl border">Share to socials</button>
              </div>
            </motion.div>
          </section>

          <section className="p-6 rounded-xl flex flex-col items-center justify-center relative">
            <div className="absolute -top-10 right-6 text-xs opacity-70">Certified Positive Vibes</div>

            <div className="w-full p-6 bg-white rounded-xl shadow-inner text-center">
              <h3 className="text-xl font-bold">Extreme Luck Certificate</h3>
              <p className="mt-2 text-sm opacity-80">Awarded to <strong>Aryan Panicker</strong></p>

              <div className="mt-4 text-xs opacity-70">This certificate verifies that Aryan has been granted an extra layer of improbable good fortune for the next 365 days.</div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-amber-50 rounded">Luck Level: <strong>999/900</strong></div>
                <div className="p-3 bg-rose-50 rounded">Cosmic Boost: <strong>Activated</strong></div>
                <div className="p-3 bg-indigo-50 rounded">Expires: <strong>Never (renewable)</strong></div>
                <div className="p-3 bg-green-50 rounded">Verified by: <strong>Universe</strong></div>
              </div>

              <div className="mt-6">
                <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="80" cy="80" r="72" stroke="#F59E0B" strokeWidth="4" strokeOpacity="0.6" />
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fontWeight="700">LUCK</text>
                </svg>
              </div>
            </div>

            <div className="mt-6 text-xs opacity-80 text-center">Tip: Click "Print / Save Wish Card" to keep a copy. Share widely to multiply effects.</div>
          </section>
        </main>

        <footer className="mt-6 text-center text-sm opacity-70">Made with intention — sprinkle generosity, gratitude, and action to make wishes come true.</footer>
      </div>

      {/* Confetti using purely CSS animated dots */}
      <style>{`
        @keyframes floaty { 0% { transform: translateY(0) } 100% { transform: translateY(-40px) } }
        .confetti-dot { position: fixed; width: 10px; height: 10px; border-radius: 50%; opacity: 0.9; animation: floaty 2.5s linear infinite; }
        .c1{ left: 20%; top: 10%; background: #F472B6; animation-duration:2.2s; }
        .c2{ left: 40%; top: 5%; background: #FB923C; animation-duration:2.8s; }
        .c3{ left: 60%; top: 12%; background: #60A5FA; animation-duration:2.4s; }
        .c4{ left: 80%; top: 8%; background: #34D399; animation-duration:2.7s; }
      `}</style>

      <div className="confetti-dot c1" />
      <div className="confetti-dot c2" />
      <div className="confetti-dot c3" />
      <div className="confetti-dot c4" />
    </div>
  );
}
