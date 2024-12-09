import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-light">
            config<span className="text-accent">Manager</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/docs">Documentation</NavLink>
            <NavLink href="/examples">Examples</NavLink>
            <NavLink href="https://github.com/LetsFocus/configManager">GitHub</NavLink>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-light"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/95 backdrop-blur-lg"
          >
            <div className="px-4 py-6 space-y-4">
              <MobileNavLink href="/docs" onClick={() => setIsOpen(false)}>
                Documentation
              </MobileNavLink>
              <MobileNavLink href="/examples" onClick={() => setIsOpen(false)}>
                Examples
              </MobileNavLink>
              <MobileNavLink href="https://github.com/LetsFocus/configManager" onClick={() => setIsOpen(false)}>
                GitHub
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-gray-400 hover:text-light transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </a>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="block text-gray-400 hover:text-light transition-colors"
    >
      {children}
    </a>
  );
}