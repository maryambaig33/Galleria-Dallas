import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Clock, ChevronRight, ChevronLeft } from 'lucide-react';

interface HeroProps {
  onNavigate: (tab: string) => void;
}

const SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    subtitle: "WELCOME TO DALLAS",
    title: "Elevate Your Experience",
    description: "Discover a world where luxury fashion, exquisite dining, and iconic entertainment meet under the glass vault.",
    align: "center"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop",
    subtitle: "WINTER COLLECTION",
    title: "The Art of Style",
    description: "Explore the latest collections from the world's most renowned fashion houses.",
    align: "left"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070&auto=format&fit=crop",
    subtitle: "CULINARY JOURNEY",
    title: "Taste the Extraordinary",
    description: "Savor every moment with our curated selection of fine dining and casual eateries.",
    align: "right"
  }
];

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const activeSlide = SLIDES[currentSlide];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Slides */}
      {SLIDES.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img 
            src={slide.image} 
            alt={slide.title} 
            className={`w-full h-full object-cover transform transition-transform duration-[10000ms] ease-out ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}
          />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12">
        <div className={`max-w-7xl mx-auto w-full flex ${
          activeSlide.align === 'center' ? 'justify-center text-center' : 
          activeSlide.align === 'right' ? 'justify-end text-right' : 'justify-start text-left'
        }`}>
          <div className="max-w-3xl">
            <h2 className={`text-sm md:text-base font-medium tracking-[0.3em] mb-4 text-gold-300 uppercase animate-fade-in-up`}>
              {activeSlide.subtitle}
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight tracking-tight text-white animate-fade-in-up delay-100">
              {activeSlide.title}
            </h1>
            <p className={`text-gray-200 text-lg md:text-xl mb-10 font-light leading-relaxed animate-fade-in-up delay-200 ${
              activeSlide.align === 'center' ? 'mx-auto' : activeSlide.align === 'right' ? 'ml-auto' : 'mr-auto'
            } max-w-xl`}>
              {activeSlide.description}
            </p>
            
            <div className={`flex flex-col md:flex-row gap-4 animate-fade-in-up delay-300 ${
              activeSlide.align === 'center' ? 'justify-center' : 
              activeSlide.align === 'right' ? 'justify-end' : 'justify-start'
            }`}>
              <button 
                onClick={() => onNavigate('directory')}
                className="group bg-white text-brand-dark px-8 py-4 min-w-[200px] font-bold tracking-widest text-xs uppercase hover:bg-gold-50 transition-colors flex items-center justify-center gap-2"
              >
                Directory
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('concierge')}
                className="group border border-white/30 backdrop-blur-sm bg-white/10 text-white px-8 py-4 min-w-[200px] font-bold tracking-widest text-xs uppercase hover:bg-white/20 transition-colors"
              >
                Concierge
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-32 right-6 md:right-12 z-30 flex gap-2">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-6 md:left-12 z-30 flex gap-3">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-300 ${
              index === currentSlide ? 'w-12 bg-gold-400' : 'w-6 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 w-full z-30 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-white/80 text-xs tracking-widest uppercase font-medium gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold-400" />
            <span>Open Today: 10AM - 8PM</span>
          </div>
          <div className="hidden md:flex h-4 w-px bg-white/20"></div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold-400" />
            <span>13350 Dallas Pkwy, Dallas, TX</span>
          </div>
          <div className="hidden md:flex h-4 w-px bg-white/20"></div>
          <div className="flex items-center gap-2">
            <span className="text-gold-400">#</span>
            <span>GalleriaLuxe</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;