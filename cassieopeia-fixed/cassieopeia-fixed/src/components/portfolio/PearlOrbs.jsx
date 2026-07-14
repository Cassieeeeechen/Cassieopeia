import React from 'react';

export default function PearlOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large pearl orb */}
      <div 
        className="pearl-orb absolute w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          top: '-10%',
          right: '-5%',
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(232,180,203,0.4), rgba(196,181,253,0.3), rgba(147,197,253,0.2), transparent)',
        }}
      />
      {/* Medium pearl orb */}
      <div 
        className="pearl-orb-delayed absolute w-[350px] h-[350px] rounded-full opacity-25"
        style={{
          bottom: '10%',
          left: '-5%',
          background: 'radial-gradient(circle at 40% 40%, rgba(255,255,255,0.9), rgba(196,181,253,0.4), rgba(134,239,172,0.3), rgba(253,230,138,0.2), transparent)',
        }}
      />
      {/* Small pearl orb */}
      <div 
        className="pearl-orb-slow absolute w-[200px] h-[200px] rounded-full opacity-20"
        style={{
          top: '40%',
          left: '60%',
          background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9), rgba(147,197,253,0.4), rgba(196,181,253,0.3), rgba(232,180,203,0.2), transparent)',
        }}
      />
    </div>
  );
}