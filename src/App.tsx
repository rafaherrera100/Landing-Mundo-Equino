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
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { ThemeVariant } from './theme';

export default function App() {
  const [theme] = useState<ThemeVariant>('minimal');

  return (
    <div className="min-h-screen app-container transition-colors duration-500">
      <Navbar variant={theme} />
      
      <main>
        <Hero variant={theme} />
        <Features variant={theme} />
        <HowItWorks variant={theme} />
        <Testimonials variant={theme} />
        <Pricing variant={theme} />
        <FAQ variant={theme} />
      </main>

      <Footer variant={theme} />
    </div>
  );
}
