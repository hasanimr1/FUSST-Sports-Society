
import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import University_logo from './University_logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue p-1.5 rounded-lg">
                <img 
                  src={University_logo} 
                  className="w-10 h-10 object-contain" 
                  alt="Foundation University Logo" 
                />
              </div>
              <h2 className="font-oswald text-2xl font-bold tracking-tighter uppercase">
                FUSST <span className="text-amber-500">SPORTS</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading the athletic charge at Foundation University School of Science and Technology. 
              Developing champions on and off the field since 2012.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-oswald text-lg font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#register" className="hover:text-amber-500 transition-colors">Sports Registration</a></li>
              <li><a href="#society" className="hover:text-amber-500 transition-colors">About Society</a></li>
              <li><a href="#media" className="hover:text-amber-500 transition-colors">Media & Highlights</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Code of Conduct</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-oswald text-lg font-bold uppercase tracking-wider mb-6">Sports Categories</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#register" className="hover:text-amber-500 transition-colors">Futsal & Cricket</a></li>
              <li><a href="#register" className="hover:text-amber-500 transition-colors">Basketball & Volleyball</a></li>
              <li><a href="#register" className="hover:text-amber-500 transition-colors">Racket Sports</a></li>
              <li><a href="#register" className="hover:text-amber-500 transition-colors">Athletics & Fun Games</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-oswald text-lg font-bold uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>Foundation University, Sialkot Bypass, Rawalpindi, Pakistan</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>+92 51 1234567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>sports@fusst.edu.pk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 uppercase tracking-widest font-bold">
          <p>© 2024 FUSST Sports Society. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Developed by FUSST Tech Society</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
