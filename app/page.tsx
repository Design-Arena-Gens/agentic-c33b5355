'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.1),transparent_50%)]" />

        <div className={`relative max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
            <span className="text-purple-300 text-sm font-medium">👋 Hey there!</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            I'm <span className="gradient-text">Rakib</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            From a curious mind to a confident designer
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <span className="px-6 py-3 bg-indigo-600/30 border border-indigo-500/50 rounded-lg text-indigo-200 font-medium">
              UI/UX Designer
            </span>
            <span className="px-6 py-3 bg-purple-600/30 border border-purple-500/50 rounded-lg text-purple-200 font-medium">
              Creative Thinker
            </span>
            <span className="px-6 py-3 bg-pink-600/30 border border-pink-500/50 rounded-lg text-pink-200 font-medium">
              Problem Solver
            </span>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            My <span className="gradient-text">Design Journey</span>
          </h2>

          <div className="space-y-8">
            {/* Timeline Item 1 */}
            <div className={`card-hover bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
                  🎯
                </div>
                <div>
                  <div className="text-purple-400 font-semibold mb-2">November 2021</div>
                  <h3 className="text-2xl font-bold text-white mb-3">The Beginning</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I started learning design when UI/UX wasn't so popular where I live. But I was super curious.
                    I loved how apps and websites looked and wanted to know how they worked.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className={`card-hover bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-2xl">
                  📚
                </div>
                <div>
                  <div className="text-purple-400 font-semibold mb-2">Learning Phase</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Full Focus Mode</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I joined a design course and was so into it — I gave my full focus.
                    Every day was about learning something new, understanding design principles, and exploring creativity.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className={`card-hover bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center text-2xl">
                  💼
                </div>
                <div>
                  <div className="text-purple-400 font-semibold mb-2">Real Experience</div>
                  <h3 className="text-2xl font-bold text-white mb-3">2-Month Internship</h3>
                  <p className="text-gray-300 leading-relaxed">
                    After learning the basics, I did a 2-month internship to get some real experience.
                    This was where theory met practice, and I learned what it really means to be a designer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-lg border border-white/10 rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The <span className="gradient-text">Real Me</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Let me tell you who I am not with fancy words, just the real me.
              I'm someone who believes in curiosity, dedication, and continuous learning.
              Design isn't just what I do — it's how I see the world.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="px-8 py-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-3xl font-bold gradient-text mb-1">2021</div>
                <div className="text-gray-400 text-sm">Started Journey</div>
              </div>
              <div className="px-8 py-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-3xl font-bold gradient-text mb-1">2+</div>
                <div className="text-gray-400 text-sm">Months Internship</div>
              </div>
              <div className="px-8 py-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-3xl font-bold gradient-text mb-1">100%</div>
                <div className="text-gray-400 text-sm">Dedicated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 text-center">
        <p className="text-gray-400">
          Made with curiosity and passion by Rakib
        </p>
      </footer>
    </main>
  );
}
