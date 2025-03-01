import React from 'react';
import { MapPin, Search, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <FadeIn>
              <h1 className="text-5xl font-bold leading-tight mb-6">
                Go <span className="text-green-600">borderless</span> with Findin Platform
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-600 mb-8">
                Position your business to be seen easily. Connect with customers and grow your presence with just a tap.
              </p>
            </FadeIn>
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
          </div>
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
        </div>
      </div>
    </div>
  );
}