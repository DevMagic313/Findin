import React from 'react';
import { Users, MessageSquare, Image, Globe } from 'lucide-react';

export default function Connect() {
  const [activeTab, setActiveTab] = React.useState('xplore');
  
  return (
    <div className="pt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Findin Connect</h1>
          <p className="text-xl text-gray-600">Your social business network</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex border-b border-gray-200 mb-8">
            <button
              className={`px-6 py-3 font-medium ${
                activeTab === 'xplore'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('xplore')}
            >
              Xplore
            </button>
            <button
              className={`px-6 py-3 font-medium ${
                activeTab === 'clique'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('clique')}
            >
              My Clique
            </button>
            <button
              className={`px-6 py-3 font-medium ${
                activeTab === 'catalog'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('catalog')}
            >
              Catalog
            </button>
          </div>

          {activeTab === 'xplore' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  <div className="flex-1">
                    <textarea
                      placeholder="Share something with your network..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      rows={3}
                    ></textarea>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex space-x-4">
                        <button className="text-gray-500 hover:text-green-600">
                          <Image className="w-5 h-5" />
                        </button>
                        <button className="text-gray-500 hover:text-green-600">
                          <Globe className="w-5 h-5" />
                        </button>
                      </div>
                      <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sample posts */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                    <div className="flex-1">
                      <h3 className="font-semibold">User Name {i}</h3>
                      <p className="text-gray-500 text-sm">2 hours ago</p>
                      <p className="mt-2">This is a sample post content. It can contain text, images, and other media.</p>
                      <div className="flex items-center space-x-4 mt-4">
                        <button className="text-gray-500 hover:text-green-600 flex items-center">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          Comment
                        </button>
                        <button className="text-gray-500 hover:text-green-600">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}