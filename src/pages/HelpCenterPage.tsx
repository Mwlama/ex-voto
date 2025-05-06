import React from 'react';
import { Search, HelpCircle, MessageCircle, Book, Phone } from 'lucide-react';

const HelpCenterPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="Search for help articles..."
            className="w-full px-6 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <HelpCircle className="h-8 w-8 text-rose-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">FAQ</h3>
          <p className="text-gray-600 mb-4">
            Find answers to commonly asked questions about our platform.
          </p>
          <button className="text-rose-600 hover:text-rose-700">
            View FAQs →
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <MessageCircle className="h-8 w-8 text-rose-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Contact Support</h3>
          <p className="text-gray-600 mb-4">
            Get in touch with our support team for personalized help.
          </p>
          <button className="text-rose-600 hover:text-rose-700">
            Contact Us →
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <Book className="h-8 w-8 text-rose-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Guides</h3>
          <p className="text-gray-600 mb-4">
            Learn how to make the most of Ex-voto's features.
          </p>
          <button className="text-rose-600 hover:text-rose-700">
            Read Guides →
          </button>
        </div>
      </div>

      {/* Popular Topics */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Popular Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'Getting Started',
            'Shipping & Delivery',
            'Returns & Refunds',
            'Account Settings',
            'Payment Methods',
            'Seller Guidelines',
            'Buyer Protection',
            'Product Authentication',
            'Community Guidelines'
          ].map((topic) => (
            <button
              key={topic}
              className="text-left p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Contact Options */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Still Need Help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 text-rose-600" />
            <div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">
                Available Monday to Friday, 9am - 5pm EST
              </p>
              <p className="text-rose-600 font-semibold mt-2">
                1-800-EX-VOTO
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MessageCircle className="h-6 w-6 text-rose-600" />
            <div>
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600">
                We'll respond within 24 hours
              </p>
              <p className="text-rose-600 font-semibold mt-2">
                support@ex-voto.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;