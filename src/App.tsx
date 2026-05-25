import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [view, setView] = useState<'portfolio' | 'cv'>('portfolio');

  // Sync state with URL Hash
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#cv' || window.location.hash === '#resume') {
        setView('cv');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setView('portfolio');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Trigger on initial mount
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = () => {
    window.location.hash = '#home';
  };

  if (view === 'cv') {
    return <Resume onBack={navigateToHome} />;
  }

  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Certificates />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
