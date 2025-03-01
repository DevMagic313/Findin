import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '../../animations/FadeIn';
import { Feature } from './types';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <FadeIn delay={index * 0.2}>
      <motion.div 
        className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ y: -5 }}
      >
        <div className="absolute inset-0">
          <img 
            src={feature.image} 
            alt={feature.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        </div>
        <div className="relative p-6 h-full flex flex-col justify-end text-white">
          <div className="mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-200 text-sm">{feature.description}</p>
        </div>
      </motion.div>
    </FadeIn>
  );
}