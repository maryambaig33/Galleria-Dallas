import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Directory from './components/Directory';
import Concierge from './components/Concierge';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'directory':
        return <Directory />;
      case 'concierge':
        return <Concierge />;
      case 'events':
        return <Events />;
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={setActiveTab} />
            <div id="featured-directory">
              <Directory />
            </div>
            <Events />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-dark selection:bg-gold-200 selection:text-brand-dark">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="min-h-screen animate-fade-in">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
}

export default App;
