import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, MapPin, Calendar, Sparkles } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: null },
    { id: 'directory', label: 'Directory', icon: <ShoppingBag className="w-4 h-4" /> },
    { id: 'events', label: 'Events', icon: <Calendar className="w-4 h-4" /> },
    { id: 'concierge', label: 'Concierge', icon: <Sparkles className="w-4 h-4" /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className={`font-serif text-2xl font-bold tracking-widest cursor-pointer ${scrolled ? 'text-brand-dark' : 'text-white'}`}
          onClick={() => setActiveTab('home')}
        >
          GALLERIA<span className="text-gold-400">LUXE</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center space-x-2 text-sm font-medium tracking-wide transition-colors duration-300 
                ${activeTab === item.id 
                  ? 'text-gold-400' 
                  : scrolled ? 'text-gray-800 hover:text-gold-500' : 'text-white hover:text-gold-300'
                }`}
            >
              {item.icon}
              <span>{item.label.toUpperCase()}</span>
            </button>
          ))}
          <button className="bg-gold-500 hover:bg-gold-600 text-white px-5 py-2 rounded-none text-xs tracking-widest uppercase font-bold transition-colors">
            Visit
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${scrolled ? 'text-gray-800' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className="py-4 px-6 border-b border-gray-100 text-left text-gray-800 font-medium uppercase text-sm hover:bg-gray-50 flex items-center space-x-3"
            >
              <span className="text-gold-500">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
