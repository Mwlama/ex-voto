import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Building, Users, Globe, Trophy } from 'lucide-react';

const AboutPage = () => {
  useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Ex-voto</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connecting artisans and devotees worldwide through meaningful religious artifacts
        </p>
      </div>

      {/* Mission and Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Ex-voto is dedicated to preserving and promoting religious artistic traditions
            by creating a global marketplace where artisans can share their craft with
            devoted collectors and practitioners worldwide.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-rose-600 rounded-full"></span>
              Authenticity in religious art and artifacts
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-rose-600 rounded-full"></span>
              Support for traditional artisans and craftspeople
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-rose-600 rounded-full"></span>
              Cultural preservation and education
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-rose-600 rounded-full"></span>
              Community-driven marketplace
            </li>
          </ul>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <div className="text-3xl font-bold text-rose-600 mb-2">10K+</div>
          <div className="text-gray-600">Active Artisans</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-rose-600 mb-2">50K+</div>
          <div className="text-gray-600">Unique Products</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-rose-600 mb-2">100+</div>
          <div className="text-gray-600">Countries Served</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-rose-600 mb-2">1M+</div>
          <div className="text-gray-600">Happy Customers</div>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <Building className="h-12 w-12 text-rose-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Established Platform</h3>
          <p className="text-gray-600">
            A trusted marketplace for religious artifacts since 2020
          </p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <Users className="h-12 w-12 text-rose-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Global Community</h3>
          <p className="text-gray-600">
            Connect with artisans and collectors worldwide
          </p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <Globe className="h-12 w-12 text-rose-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Worldwide Shipping</h3>
          <p className="text-gray-600">
            Reliable shipping to devotees around the globe
          </p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm">
          <Trophy className="h-12 w-12 text-rose-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
          <p className="text-gray-600">
            Verified artisans and authenticated products
          </p>
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Maria Santos',
              role: 'Head of Marketing',
              image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg'
            },
            {
              name: 'John Martinez',
              role: 'Chief Operating Officer',
              image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
            },
            {
              name: 'Sarah Chen',
              role: 'Head of Community',
              image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
            }
          ].map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Join Us */}
      <div className="text-center bg-gray-50 rounded-lg p-12">
        <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Whether you're an artisan looking to share your craft or a devotee seeking
          meaningful religious artifacts, Ex-voto is your trusted platform for authentic
          religious art and community.
        </p>
        <button className="bg-rose-600 text-white px-8 py-3 rounded-md hover:bg-rose-700">
          Start Your Journey
        </button>
      </div>
    </div>
  );
};

export default AboutPage;