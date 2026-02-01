
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RegisterSection from './components/RegisterSection';
import SocietySection from './components/SocietySection';
import MediaSection from './components/MediaSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <RegisterSection />
        <SocietySection />
        <MediaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
