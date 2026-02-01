
import React from 'react';
import { Camera, ExternalLink, Play } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';

const MediaSection: React.FC = () => {
  return (
    <section id="media" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Organizers & Sports Week */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Organizers */}
          <div>
            <div className="flex items-center space-x-2 text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
              <Camera className="w-5 h-5" />
              <span>Organizers</span>
            </div>
            <h3 className="font-oswald text-2xl font-bold uppercase tracking-tight text-slate-900 mb-6">Meet The Team</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                'Abdul Ahad',
                'Dua',
                'Hassaan',
                'Dr Abdul Rehman',
                'Miss Dareema Ali',
                'Engr. Sharjeel Farooqui'
              ].map((name) => {
                const initials = name.split(' ').map(n => n[0]).join('').slice(0,3).toUpperCase();
                return (
                  <div key={name} className="flex flex-col items-center text-center">
                    <div className="w-28 h-28 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-lg font-bold mb-3 border border-slate-200">
                      <span aria-hidden>{initials}</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-700">{name}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sports Week 2025 */}
          <div>
            <div className="flex items-center space-x-2 text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
              <Play className="w-5 h-5" />
              <span>Sports Week 2025</span>
            </div>
            <h3 className="font-oswald text-2xl font-bold uppercase tracking-tight text-slate-900 mb-6">Collage & Video</h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="h-32 rounded-lg border-2 border-dashed border-slate-200 bg-white flex items-center justify-center text-slate-300">Placeholder</div>
              <div className="h-32 rounded-lg border-2 border-dashed border-slate-200 bg-white flex items-center justify-center text-slate-300">Placeholder</div>
              <div className="h-32 rounded-lg border-2 border-dashed border-slate-200 bg-white flex items-center justify-center text-slate-300">Placeholder</div>
              <div className="h-32 rounded-lg border-2 border-dashed border-slate-200 bg-white flex items-center justify-center text-slate-300">Placeholder</div>
            </div>

            <div className="rounded-lg border-2 border-dashed border-slate-200 bg-black/5 h-48 flex items-center justify-center">
              <div className="flex flex-col items-center text-center text-slate-500">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-blue-600 mb-3 shadow">
                  <Play className="w-8 h-8" />
                </div>
                <p className="font-bold uppercase tracking-widest text-xs">Video Placeholder</p>
                <p className="text-xs text-slate-400">Replace with event highlight video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
