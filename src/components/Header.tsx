import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' }, // Use "#hero" or "#home" as needed
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo - Fixed width to prevent overlap */}
          <div className="flex items-center space-x-2 flex-shrink-0 min-w-0">
            <img 
              src="/111.jpg" 
              alt="NAZStudio Logo" 
              className="h-10 w-10 object-contain flex-shrink-0"
            />
            <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
              NAZ<span className="font-light">Studio</span>
            </span>
          </div>

          {/* Desktop Navigation - Added proper spacing */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side controls - Fixed width */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            {/* Desktop Dark Mode Toggle */}
            <div className="hidden md:block">
              <DarkModeToggle />
            </div>
            
            {/* Mobile Menu Button and Dark Mode Toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <DarkModeToggle />
              <button
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;