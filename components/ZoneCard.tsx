import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ZoneConfig } from '../types';

interface ZoneCardProps {
  zone: ZoneConfig;
  onClick: (zone: ZoneConfig) => void;
}

const ZoneCard: React.FC<ZoneCardProps> = ({ zone, onClick }) => {
  return (
    <div 
      onClick={() => onClick(zone)}
      className={`group relative p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden`}
    >
      <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-20 transition-transform group-hover:scale-150 ${zone.bgColor}`}></div>
      
      <div className="relative z-10">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${zone.bgColor} ${zone.color}`}>
          {zone.icon}
        </div>
        
        <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-brand-600 transition-colors">
          {zone.title}
        </h3>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          {zone.description}
        </p>
        
        <div className="flex items-center text-sm font-medium text-slate-400 group-hover:text-brand-500 transition-colors">
          Enter Zone <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default ZoneCard;