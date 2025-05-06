import React from 'react';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600">
            Last updated: March 15, 2024
          </p>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Shield className="h-8 w-8 text-rose-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Data Protection</h3>
            <p className="text-gray-600">
              We implement industry-standard security measures to protect your personal information.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Lock className="h-8 w-8 text-rose-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Secure Transactions</h3>
            <p className="text-gray-600">
              All payment information is encrypted and processed securely.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Eye className="h-8 w-8 text-rose-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Transparency</h3>
            <p className="text-gray-600">
              We're clear about how we collect, use, and protect your data.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <UserCheck className="h-8 w-8 text-rose-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">User Control</h3>
            <p className="text-gray-600">
              You have full control over your personal data and privacy settings.
            </p>
          </div>
        </div>

        {/* Policy Content */}
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Shipping addresses</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Process your orders and payments</li>
              <li>Communicate with you about your orders</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our services and user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-4">
              We share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Payment processors for secure transactions</li>
              <li>Shipping partners to deliver your orders</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
            </ul>
          </section>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 p-8 rounded-lg mt-12">
          <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about our privacy practices or would like to
            exercise your privacy rights, please contact our Privacy Team:
          </p>
          <div className="text-gray-600">
            <p>Email: privacy@ex-voto.com</p>
            <p>Phone: 1-800-EX-VOTO</p>
            <p>Address: 123 Privacy Street, Security City, 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;