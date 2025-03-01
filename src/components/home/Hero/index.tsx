import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </div>
  );
}