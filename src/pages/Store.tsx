import React from 'react';
import { Receipt, BookOpen, FileText, Settings } from 'lucide-react';

export default function Store() {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Findin Store</h1>
          <p className="text-xl text-gray-600">Complete business management solution</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <Receipt className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Receipt Generator</h3>
            <p className="text-gray-600 mb-4">Create professional receipts for your business transactions.</p>
            <button className="text-green-600 hover:text-green-700 font-medium">
              Generate Receipt →
            </button>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <BookOpen className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Bookkeeping</h3>
            <p className="text-gray-600 mb-4">Track your business finances and manage accounts efficiently.</p>
            <button className="text-green-600 hover:text-green-700 font-medium">
              View Books →
            </button>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <FileText className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Invoice Generator</h3>
            <p className="text-gray-600 mb-4">Create and manage professional invoices for your clients.</p>
            <button className="text-green-600 hover:text-green-700 font-medium">
              Create Invoice →
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Recent Transactions</h2>
            <button className="text-green-600 hover:text-green-700 font-medium">
              View All
            </button>
          </div>
          
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">Transaction #{i}</h3>
                  <p className="text-gray-500 text-sm">March {i}, 2024</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">$199.99</p>
                  <p className="text-sm text-green-600">Completed</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}