import React from 'react';
import { motion } from 'framer-motion';

export default function HeroImage() {
  return (
    <motion.div 
      className="lg:w-1/2 mt-12 lg:mt-0"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <img 
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80" 
        alt="Business Growth"
        className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
      />
    </motion.div>
  );
}