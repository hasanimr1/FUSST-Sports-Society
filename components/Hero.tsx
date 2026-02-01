
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Video Placeholder/Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="Stadium background"
        />
        <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">Registrations Open 2024</span>
          </div>
          
          <h1 className="font-oswald text-6xl md:text-8xl text-white font-bold leading-tight mb-6 uppercase tracking-tighter">
            UNLEASH YOUR <br />
            <span className="text-amber-500 italic">INNER ATHLETE.</span>
          </h1>
          
          <p className="text-slate-200 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            Join the most prestigious sports community at FUSST. Whether you're a pro or a beginner, 
            there's a spot on the team for you. Register today and make history.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#register" 
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-2xl transition-all transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <button className="flex items-center space-x-3 text-white font-bold uppercase tracking-widest hover:text-amber-500 transition-colors group">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center group-hover:border-amber-500 transition-colors">
                <Play className="w-4 h-4 fill-current ml-1" />
              </div>
              <span>Watch Highlights</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-12 right-0 left-0 hidden lg:block">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 gap-8 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl">
            <div>
              <p className="text-amber-500 font-oswald text-4xl font-bold">08+</p>
              <p className="text-slate-300 text-xs uppercase tracking-widest font-semibold">Sports Categories</p>
            </div>
            <div>
              <p className="text-amber-500 font-oswald text-4xl font-bold">500+</p>
              <p className="text-slate-300 text-xs uppercase tracking-widest font-semibold">Active Members</p>
            </div>
            <div>
              <p className="text-amber-500 font-oswald text-4xl font-bold">25+</p>
              <p className="text-slate-300 text-xs uppercase tracking-widest font-semibold">Annual Trophies</p>
            </div>
            <div>
              <p className="text-amber-500 font-oswald text-4xl font-bold">01</p>
              <p className="text-slate-300 text-xs uppercase tracking-widest font-semibold">Unified Vision</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
