import React from 'react';
import { MapPin, Navigation, Shield } from 'lucide-react';

export default function Navigator() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Findin Navigator</h1>
          <p className="text-xl text-gray-600">Real-time location tracking and secure path guidance</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Create and Share Secure Paths</h2>
            <p className="text-gray-600 mb-8">
              As a Coder, create paths and share them with Encoders. Enable real-time tracking
              and monitoring for enhanced security and convenience.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
              Start Navigation
            </button>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
              {/* Map placeholder */}
              <div className="flex items-center justify-center h-full">
                <MapPin className="w-16 h-16 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <Navigation className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Route Optimization</h3>
            <p className="text-gray-600">Find the best routes with real-time traffic updates and smart pathfinding.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <Shield className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Tracking</h3>
            <p className="text-gray-600">Share your location only with trusted contacts and maintain privacy control.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <MapPin className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location History</h3>
            <p className="text-gray-600">Access detailed location history and track your previous routes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}