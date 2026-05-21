/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { ThemeVariant } from './theme';
import { Settings2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [theme, setTheme] = useState<ThemeVariant>('minimal');
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen app-container transition-colors duration-500">
      <Navbar variant={theme} />
      
      <main>
        <Hero variant={theme} />
        <Features variant={theme} />
        <HowItWorks variant={theme} />
        <Testimonials variant={theme} />
        <Pricing variant={theme} />
      </main>

      <Footer variant={theme} />

      {/* Theme Switcher Floating Tool */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl ring-1 ring-slate-900/5 p-4 mb-4"
            >
              <h3 className="font-semibold text-slate-900 text-sm mb-3">Estilos visuales</h3>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setTheme('minimal')}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-colors ${theme === 'minimal' ? 'bg-[#F7F5F2] text-[#4B3621] font-bold ring-1 ring-[#4B3621]/20' : 'hover:bg-slate-50 text-slate-600'}`}
                >
                  <div className="w-5 h-5 rounded-sm bg-[#4B3621]"></div>
                  Clean Minimalism
                </button>
                <button
                  onClick={() => setTheme('modern')}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-colors ${theme === 'modern' ? 'bg-emerald-50 text-emerald-700 font-medium ring-1 ring-emerald-200' : 'hover:bg-slate-50 text-slate-600'}`}
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-600"></div>
                  Tech Moderno (Emerald)
                </button>
                <button
                  onClick={() => setTheme('classic')}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-colors ${theme === 'classic' ? 'bg-amber-50 text-amber-900 font-medium ring-1 ring-amber-200' : 'hover:bg-slate-50 text-slate-600'}`}
                >
                  <div className="w-5 h-5 rounded-sm bg-amber-900"></div>
                  Premium Clásico (Amber)
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-14 h-14 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-lg ml-auto transition-transform hover:scale-105"
        >
          <Settings2 size={24} />
        </button>
      </div>
    </div>
  );
}
