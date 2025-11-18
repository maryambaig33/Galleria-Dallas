import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-light pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="font-serif text-2xl font-bold tracking-widest mb-6 text-brand-dark">
              GALLERIA<span className="text-gold-600">LUXE</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              The premier destination for shopping, dining, and entertainment in North Dallas.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-brand-dark mb-6">Visit</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>13350 Dallas Pkwy</li>
              <li>Dallas, TX 75240</li>
              <li className="pt-2">Mon-Sat: 10AM - 8PM</li>
              <li>Sun: 12PM - 6PM</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-brand-dark mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gold-600">Valet Parking</a></li>
              <li><a href="#" className="hover:text-gold-600">Personal Styling</a></li>
              <li><a href="#" className="hover:text-gold-600">Tax Free Shopping</a></li>
              <li><a href="#" className="hover:text-gold-600">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-brand-dark mb-6">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Galleria Dallas Luxe. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-400">
            <a href="#" className="hover:text-brand-dark">Privacy Policy</a>
            <a href="#" className="hover:text-brand-dark">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
