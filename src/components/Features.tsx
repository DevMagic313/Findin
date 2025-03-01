import React from 'react';
import { MapPin, Users, Store, Navigation, Globe, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';

const features = [
  {
    icon: <Navigation className="w-8 h-8 text-green-600" />,
    title: 'Findin Navigator',
    description: 'Real-time location tracking and path guiding system for secure navigation.',
    image: 'https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <Store className="w-8 h-8 text-green-600" />,
    title: 'Marketplace',
    description: 'Connect businesses with potential customers through our geo-location enabled platform.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: 'Findin Connect',
    description: 'Social networking platform with private communities and business catalogs.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <Globe className="w-8 h-8 text-green-600" />,
    title: 'Findin Store',
    description: 'Complete business management with receipt generation and bookkeeping.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Platform Features</h2>
            <p className="text-xl text-gray-600">Discover the tools that make Findin Platform powerful</p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.2}>
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
          ))}
        </div>
      </div>
    </section>
  );
}