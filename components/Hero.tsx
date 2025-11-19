import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Clock, ChevronRight, ChevronLeft } from 'lucide-react';

interface HeroProps {
  onNavigate: (tab: string) => void;
}

const SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop",
    subtitle: "THE DESTINATION",
    title: "Iconic Style",
    description: "Experience the premier shopping and dining destination in North Texas.",
    align: "left"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3d9f?q=80&w=2070&auto=format&fit=crop",
    subtitle: "DINING & ENTERTAINMENT",
    title: "Taste & Gather",
    description: "From world-class ice skating to exquisite culinary delights.",
    align: "center"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    subtitle: "WINTER 2024",
    title: "Curated Luxury",
    description: "Discover the latest collections from legendary fashion houses.",
    align: "right"
  }
];

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  const activeSlide = SLIDES[currentSlide];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Slides */}
      {SLIDES.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Image with Ken Burns effect when active */}
          <div className={`absolute inset-0 w-full h-full ${index === currentSlide ? 'animate-scale-slow' : ''}`}>
             <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
           {/* Text Content based on alignment */}
           <div className={`max-w-2xl flex flex-col ${
             activeSlide.align === 'center' ? 'mx-auto text-center items-center' : 
             activeSlide.align === 'right' ? 'ml-auto text-right items-end' : 
             'mr-auto text-left items-start'
           }`}>
              <span className="inline-block text-gold-400 tracking-[0.3em] text-sm font-medium uppercase mb-6 animate-fade-in-up">
                {activeSlide.subtitle}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-none mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                {activeSlide.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 font-light mb-10 max-w-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                {activeSlide.description}
              </p>
              
              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <button 
                  onClick={() => onNavigate('directory')}
                  className="bg-white text-brand-dark px-8 py-4 min-w-[160px] text-xs font-bold uppercase tracking-widest hover:bg-gold-50 transition-colors flex items-center justify-center gap-2 group"
                >
                  Directory
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate('concierge')}
                  className="backdrop-blur-md bg-white/10 border border-white/30 text-white px-8 py-4 min-w-[160px] text-xs font-bold uppercase tracking-widest hover:bg-white/20 transition-colors"
                >
                  Concierge
                </button>
              </div>
           </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-12 pt-24 flex items-end justify-between bg-gradient-to-t from-black/90 to-transparent">
          
          {/* Left: Indicators */}
          <div className="flex items-center gap-4">
             {SLIDES.map((_, idx) => (
               <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-0.5 transition-all duration-300 ${
                  idx === currentSlide ? 'w-12 bg-gold-400' : 'w-6 bg-white/40 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
               />
             ))}
          </div>

          {/* Right: Arrows & Info */}
          <div className="flex items-center gap-8">
             <div className="hidden md:flex items-center gap-6 text-white/80 text-xs font-bold tracking-widest uppercase">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <span>10AM - 8PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span>Level 1, Center Court</span>
                </div>
             </div>

             <div className="flex gap-2">
               <button 
                onClick={prevSlide}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
               >
                 <ChevronLeft className="w-4 h-4" />
               </button>
               <button 
                onClick={nextSlide}
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
               >
                 <ChevronRight className="w-4 h-4" />
               </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;