import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Future from './components/Future';

// Import icons to ensure they are available if needed globally, 
// though they are used in sub-components.
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  // Simple "Back to Top" button logic
  const [showTopBtn, setShowTopBtn] = React.useState(false);

  React.useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-900 antialiased selection:bg-gray-200">
      <Navbar />
      
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Future />
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 text-center border-t border-gray-100">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} 张伟. All rights reserved.
        </p>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-white border border-gray-200 shadow-lg rounded-full text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-all duration-300 z-40 ${
          showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default App;