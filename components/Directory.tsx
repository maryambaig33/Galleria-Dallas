import React, { useState, useMemo } from 'react';
import { Store, StoreCategory } from '../types';
import { STORES } from '../constants';
import { Search, MapPin, Clock } from 'lucide-react';

const Directory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredStores = useMemo(() => {
    return STORES.filter(store => {
      const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            store.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || store.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const categories = ['All', ...Object.values(StoreCategory)];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-brand-light">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-gold-600 font-bold tracking-widest text-xs uppercase mb-3">Curated Selection</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-dark">Directory</h1>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          {/* Categories */}
          <div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 gap-2 hide-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 text-sm tracking-wide transition-all border ${
                  activeCategory === cat 
                    ? 'border-brand-dark bg-brand-dark text-white' 
                    : 'border-transparent text-gray-500 hover:text-brand-dark hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Find a boutique or restaurant..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border-b-2 border-gray-200 focus:border-gold-500 outline-none text-sm transition-colors"
            />
            <Search className="absolute left-0 top-3.5 w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStores.map((store) => (
            <div key={store.id} className="group bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={store.image} 
                  alt={store.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  Level {store.level}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-medium text-brand-dark">{store.name}</h3>
                  {store.isOpen ? (
                    <span className="flex items-center text-green-600 text-[10px] font-bold uppercase tracking-wider gap-1">
                      <Clock className="w-3 h-3" /> Open
                    </span>
                  ) : (
                    <span className="text-red-500 text-[10px] font-bold uppercase tracking-wider">Closed</span>
                  )}
                </div>
                
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{store.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gold-600 font-medium uppercase tracking-wide">{store.category}</span>
                  <button className="text-brand-dark hover:text-gold-600 text-xs font-bold uppercase flex items-center gap-1 transition-colors">
                    Map <MapPin className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredStores.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg font-serif italic">No boutiques found matching your criteria.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Directory;
