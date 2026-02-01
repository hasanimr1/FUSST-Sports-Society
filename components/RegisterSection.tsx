
import React, { useState } from 'react';
import { User, Users, CheckCircle, Info, ChevronRight, X } from 'lucide-react';
import { SPORTS } from '../constants';
import { Gender, Sport } from '../types';

const RegisterSection: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<Gender>('Male');
  const [selectedSport, setSelectedSport] = useState<Sport | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const openRegisterModal = (sport: Sport) => {
    setSelectedSport(sport);
    setIsRegistering(true);
  };

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsRegistering(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section id="register" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase tracking-tight text-blue-900 mb-4">
            Select Your <span className="text-amber-600">Discipline</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose your gender and browse through our available sports. Each discipline is managed by expert trainers 
            to ensure you reach your maximum potential.
          </p>
        </div>

        {/* Gender Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center shadow-inner">
            <button
              onClick={() => setSelectedGender('Male')}
              className={`flex items-center space-x-2 px-8 py-3 rounded-xl font-bold uppercase tracking-wider transition-all ${
                selectedGender === 'Male' 
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                  : 'text-slate-500 hover:text-blue-600'
              }`}
            >
              <User className="w-5 h-5" />
              <span>Male</span>
            </button>
            <button
              onClick={() => setSelectedGender('Female')}
              className={`flex items-center space-x-2 px-8 py-3 rounded-xl font-bold uppercase tracking-wider transition-all ${
                selectedGender === 'Female' 
                  ? 'bg-rose-500 text-white shadow-lg transform scale-105' 
                  : 'text-slate-500 hover:text-rose-500'
              }`}
            >
              <User className="w-5 h-5" />
              <span>Female</span>
            </button>
          </div>
        </div>

        {/* Success Alert */}
        {isSuccess && (
          <div className="max-w-md mx-auto mb-8 animate-bounce">
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md flex items-center space-x-3">
              <CheckCircle className="text-green-500" />
              <p className="font-bold">Successfully Registered for {selectedSport?.name}!</p>
            </div>
          </div>
        )}

        {/* Sports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPORTS.map((sport) => (
            <div 
              key={sport.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={sport.imageUrl} 
                  alt={sport.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-slate-800">
                  {sport.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <span className="text-3xl filter grayscale-0">{sport.icon}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-oswald text-2xl font-bold uppercase text-slate-900 mb-2">
                  {sport.name}
                </h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {sport.description}
                </p>
                <button 
                  onClick={() => openRegisterModal(sport)}
                  className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-2 ${
                    selectedGender === 'Male' 
                      ? 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white' 
                      : 'bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white'
                  }`}
                >
                  <span>Apply Now</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Modal Overlay */}
      {isRegistering && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-sm" onClick={() => setIsRegistering(false)}></div>
          <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden relative shadow-2xl animate-fade-in-up">
            <button 
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors"
              onClick={() => setIsRegistering(false)}
            >
              <X className="w-6 h-6 text-slate-400" />
            </button>

            <div className="grid md:grid-cols-5 h-full">
              <div className={`hidden md:flex md:col-span-2 p-8 text-white flex-col justify-between ${selectedGender === 'Male' ? 'bg-blue-600' : 'bg-rose-500'}`}>
                <div>
                  <h4 className="font-oswald text-3xl font-bold uppercase mb-4">Registration</h4>
                  <p className="text-white/80 text-sm mb-6">You are applying for {selectedSport?.name} ({selectedGender} Category)</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-xs uppercase tracking-widest font-bold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Free Entry</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs uppercase tracking-widest font-bold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Official Kits Provided</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs uppercase tracking-widest font-bold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Certified Mentors</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 p-8">
                <form onSubmit={handleRegistrationSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Roll Number</label>
                      <input 
                        required
                        type="text" 
                        placeholder="F21-BCS-001" 
                        className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Semester</label>
                      <select className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                        {[1,2,3,4,5,6,7,8].map(s => <option key={s} value={s}>Sem {s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Department</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Computer Science / Engineering" 
                      className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Contact Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+92 3XX XXXXXXX" 
                      className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className={`w-full py-4 mt-4 rounded-xl text-white font-bold uppercase tracking-widest shadow-xl transition-all transform hover:scale-[1.02] ${
                      selectedGender === 'Male' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-rose-500 hover:bg-rose-600'
                    }`}
                  >
                    Submit Registration
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2">By clicking submit, you agree to the society code of conduct.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RegisterSection;
