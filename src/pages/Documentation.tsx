import React, { useState } from 'react';
import { Book, ChevronRight, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/animations/FadeIn';

const docs = [
  {
    category: 'Getting Started',
    items: [
      { title: 'Introduction', link: '#introduction' },
      { title: 'Quick Start Guide', link: '#quick-start' },
      { title: 'Installation', link: '#installation' }
    ]
  },
  {
    category: 'Features',
    items: [
      { title: 'Navigator', link: '#navigator' },
      { title: 'Marketplace', link: '#marketplace' },
      { title: 'Connect', link: '#connect' },
      { title: 'Store', link: '#store' }
    ]
  },
  {
    category: 'API Reference',
    items: [
      { title: 'Authentication', link: '#auth' },
      { title: 'Endpoints', link: '#endpoints' },
      { title: 'Error Handling', link: '#errors' }
    ]
  }
];

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-gray-600">Everything you need to know about Findin Platform</p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docs.map((section, index) => (
              <FadeIn key={section.category} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <Book className="w-6 h-6 text-green-600 mr-2" />
                    <h2 className="text-xl font-semibold">{section.category}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item.title}>
                        <a
                          href={item.link}
                          className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
                        >
                          <ChevronRight className="w-4 h-4 mr-2" />
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}