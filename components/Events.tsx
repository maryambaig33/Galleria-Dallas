import React from 'react';
import { EVENTS } from '../constants';
import { Calendar } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gold-600 font-bold tracking-widest text-xs uppercase mb-3">Mark Your Calendar</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-dark">Upcoming Events</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {EVENTS.map((event, index) => (
            <div key={event.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[4/3]">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 bg-white/90 px-4 py-3 backdrop-blur-md text-center min-w-[80px]">
                  <span className="block text-2xl font-serif font-bold text-brand-dark">{index + 25}</span>
                  <span className="block text-xs font-bold text-gold-600 uppercase tracking-wider">OCT</span>
                </div>
              </div>
              
              <div className="pr-4">
                <div className="flex items-center gap-2 text-gold-600 text-xs font-bold uppercase tracking-widest mb-2">
                  <Calendar className="w-3 h-3" />
                  {event.date}
                </div>
                <h3 className="text-2xl font-serif text-brand-dark mb-3 group-hover:text-gold-600 transition-colors">{event.title}</h3>
                <p className="text-gray-500 leading-relaxed">{event.description}</p>
                <button className="mt-4 text-sm font-bold border-b-2 border-brand-dark pb-1 hover:text-gold-600 hover:border-gold-600 transition-all">
                  Reserve Spot
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-24 bg-brand-dark text-white p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-serif mb-4">Join the Inner Circle</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Be the first to know about exclusive pop-ups, runway shows, and private sales.</p>
            <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="px-6 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-gold-400 w-full"
              />
              <button className="bg-gold-500 text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-gold-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        </div>

      </div>
    </div>
  );
};

export default Events;
