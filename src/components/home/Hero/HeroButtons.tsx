import React from 'react';
import { MapPin, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '../../animations/FadeIn';

export default function HeroButtons() {
  return (
    <FadeIn delay={0.4}>
      <div className="flex flex-col sm:flex-row gap-4">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 flex items-center justify-center shadow-lg"
        >
          <MapPin className="mr-2" />
          Start Locating
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-full hover:bg-green-50 flex items-center justify-center shadow-lg"
        >
          <Search className="mr-2" />
          Explore Platform
        </motion.button>
      </div>
    </FadeIn>
  );
}