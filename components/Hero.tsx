import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (tab: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image (Simulating Video) */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Galleria Dallas Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-6">
        <h2 className="text-sm md:text-base font-medium tracking-[0.3em] mb-4 text-gold-300 animate-fade-in-up">
          WELCOME TO DALLAS
        </h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight max-w-4xl animate-fade-in-up delay-100">
          Elevate Your <br/><span className="italic font-light">Experience</span>
        </h1>
        <p className="text-gray-200 max-w-lg text-lg mb-10 animate-fade-in-up delay-200 font-light">
          Discover a world where luxury fashion, exquisite dining, and iconic entertainment meet under the glass vault.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up delay-300">
          <button 
            onClick={() => onNavigate('directory')}
            className="group bg-white text-brand-dark px-8 py-4 min-w-[200px] font-bold tracking-widest text-xs uppercase hover:bg-gold-50 transition-colors flex items-center justify-center gap-2"
          >
            Explore Directory
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => onNavigate('concierge')}
            className="group border border-white/30 backdrop-blur-sm bg-white/10 text-white px-8 py-4 min-w-[200px] font-bold tracking-widest text-xs uppercase hover:bg-white/20 transition-colors"
          >
            Ask Concierge
          </button>
        </div>
      </div>

      {/* Bottom Scroller */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
