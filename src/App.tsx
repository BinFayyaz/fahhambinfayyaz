import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CustomCursor } from './components/CustomCursor';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { GithubStats } from './components/GithubStats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Loader } from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader onComplete={() => setLoading(false)} key="loader" />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen bg-[#030712] overflow-x-hidden flex flex-col"
            key="content"
          >
            {/* Drifting particle backdrop from Code.txt */}
            <ParticleBackground />

            {/* Main Navigation */}
            <Navbar />

            {/* Core Sections */}
            <main className="flex-grow">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Achievements />
              <GithubStats />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Utility Floating Actions */}
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
