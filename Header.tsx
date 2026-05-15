import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Sun, Moon, Instagram, Twitter, Facebook, Youtube, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BloggerExportModal from './BloggerExportModal';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${searchQuery}`);
      setIsSearchOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Health', path: '/category/health-tips' },
    { name: 'Fitness', path: '/category/fitness' },
    { name: 'Wealth', path: '/category/investing' },
    { name: 'Motivation', path: '/category/motivation' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <BloggerExportModal isOpen={isExportOpen} onClose={() => setIsExportOpen(false)} />
      {/* Top Bar - Socials */}
      <div className="hidden md:flex bg-brand-black text-white py-2 px-6 justify-between items-center text-xs uppercase tracking-widest border-b border-white/10">
        <div className="flex gap-4">
          <a href="#" className="hover:text-brand-gold transition-colors"><Facebook size={14} /></a>
          <a href="#" className="hover:text-brand-gold transition-colors"><Twitter size={14} /></a>
          <a href="#" className="hover:text-brand-gold transition-colors"><Instagram size={14} /></a>
          <a href="#" className="hover:text-brand-gold transition-colors"><Youtube size={14} /></a>
        </div>
        <div className="flex items-center gap-2">
          Better Health, Smarter Wealth 
          <button 
            onClick={() => setIsExportOpen(true)}
            className="ml-4 bg-brand-gold text-brand-black px-2 py-0.5 rounded font-bold hover:bg-brand-gold-dark transition-colors flex items-center gap-1"
          >
            <Download size={10} /> Get Blogger Theme
          </button>
        </div>
        <div className="flex gap-4">
          <Link to="/contact" className="hover:text-brand-gold">Contact</Link>
          <Link to="/privacy-policy" className="hover:text-brand-gold">Privacy</Link>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`bg-white dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-white/10 px-8 py-4 flex justify-between items-center transition-colors duration-300`}>
        <div className="flex items-center gap-8">
          <button 
            className="md:hidden text-brand-emerald dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-brand-emerald dark:text-white">
              Healthy <span className="text-brand-gold">&</span> Wealthy
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-[13px] uppercase tracking-widest font-semibold text-brand-text/70 dark:text-white/70 hover:text-brand-emerald dark:hover:text-brand-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden lg:flex relative w-48">
            <input 
              type="text" 
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
              className="w-full bg-gray-100 dark:bg-white/5 border-none rounded-full py-1.5 px-4 text-xs focus:ring-1 ring-brand-gold dark:text-white"
            />
          </div>
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="lg:hidden text-brand-text dark:text-white hover:text-brand-emerald transition-colors"
          >
            <Search size={20} />
          </button>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-brand-text dark:text-white transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <div className="flex gap-3">
             <div className="w-8 h-8 bg-brand-emerald rounded-full flex items-center justify-center text-white text-[10px] font-bold">HW</div>
          </div>
        </div>
      </nav>

      {/* Search Bar Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-[#1a1a1a] shadow-xl p-6 border-b border-gray-100 dark:border-white/10"
          >
            <form onSubmit={handleSearch} className="max-w-4xl mx-auto flex gap-4">
              <input 
                type="text" 
                placeholder="Search for health or wealth tips..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="flex-grow bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-brand-green text-brand-black dark:text-white"
              />
              <button 
                type="submit"
                className="bg-brand-green hover:bg-brand-green-dark text-white rounded-full px-8 py-3 font-semibold transition-colors"
              >
                Search
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            className="fixed inset-0 top-[110px] md:hidden z-40 bg-white dark:bg-[#121212] flex flex-col p-8 gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-serif font-bold text-brand-black dark:text-white hover:text-brand-green transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-auto flex gap-6 pb-12">
              <Facebook className="text-brand-black dark:text-white" size={24} />
              <Twitter className="text-brand-black dark:text-white" size={24} />
              <Instagram className="text-brand-black dark:text-white" size={24} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
