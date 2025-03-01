import React, { useState } from 'react';
import { Store, Search, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/animations/FadeIn';

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');

  const categories = ['All', 'Retail', 'Services', 'Food', 'Entertainment'];
  
  return (
    <div className="pt-24">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
            <p className="text-xl text-gray-600">Discover businesses near you</p>
          </div>
        </FadeIn>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search businesses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              {categories.map((cat) => (
                <option key={cat.toLowerCase()} value={cat.toLowerCase()}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=800&q=80`}
                  alt={`Business ${i}`}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Business Name {i}</h3>
                <p className="text-gray-600 mb-4">Category • 2.3km away</p>
                <div className="flex items-center justify-between">
                  <button className="text-green-600 hover:text-green-700 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Get Directions
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}