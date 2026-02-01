
import React from 'react';
import { Target, Shield, Zap, Users2 } from 'lucide-react';

const SocietySection: React.FC = () => {
  return (
    <section id="society" className="py-24 bg-slate-900 text-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 transform origin-top"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight mb-8">
              A Legacy of <br />
              <span className="text-blue-500">Excellence</span> & Grit
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Founded in 2012, the FUSST Sports Society has evolved from a small student group to a 
              powerhouse of athletic achievement. We believe that sports are not just about winning medals; 
              they are about building character, discipline, and lifelong bonds.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <Target className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-2">Our Mission</h4>
                <p className="text-slate-400 text-sm">To foster a vibrant sports culture that empowers every student to excel physically and mentally.</p>
              </div>
              <div className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <Shield className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-2">Values</h4>
                <p className="text-slate-400 text-sm">Integrity, Teamwork, and Respect. We play hard but always play fair.</p>
              </div>
              <div className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <Zap className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-2">Opportunities</h4>
                <p className="text-slate-400 text-sm">From regional tournaments to national university games, we open doors for talented athletes.</p>
              </div>
              <div className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <Users2 className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-lg mb-2">Community</h4>
                <p className="text-slate-400 text-sm">Join a network of over 2000 alumni athletes who continue to support the society.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-slate-800 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1526676037777-05a23fe55866?auto=format&fit=crop&q=80&w=1200" 
                alt="Society Leadership" 
                className="w-full h-auto"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-2xl shadow-xl z-20 hidden md:block">
              <p className="text-5xl font-oswald font-bold text-white mb-1">98%</p>
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocietySection;
