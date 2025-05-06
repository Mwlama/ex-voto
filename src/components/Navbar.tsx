import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, Store, Package, ChevronDown, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitch from './LanguageSwitch';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md lg:hidden hover:bg-gray-800"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <Link
              to="/"
              className="flex items-center ml-2 lg:ml-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <img
                src="/10.png" // Replace with the path to your image
                alt="Ex-voto Logo"
                className="h-20 w-auto" // Adjust the size as needed
              />
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="w-full relative">
              <input
                type="text"
                placeholder={t('nav.search.placeholder')}
                className="w-full px-4 py-2 rounded-full border border-gray-700 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-rose-400 transition-colors"
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-rose-400 transition-colors"
            >
              {t('nav.blog')}
            </Link>
            <button className="flex items-center space-x-1 hover:text-rose-400 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-1 hover:text-rose-400 transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <LanguageSwitch />
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-1 hover:text-rose-400 transition-colors"
              >
                <User className="h-5 w-5" />
                <ChevronDown className="h-4 w-4" />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg py-1">
                  <Link
                    to="/dashboard"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-800"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <Store className="inline h-4 w-4 mr-2" />
                    {t('nav.seller_dashboard')}
                  </Link>
                  <Link
                    to="/create-shop"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-800"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <Package className="inline h-4 w-4 mr-2" />
                    {t('nav.open_shop')}
                  </Link>
                  <hr className="my-1 border-gray-700" />
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-800">
                    {t('nav.account_settings')}
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-800">
                    {t('nav.sign_out')}
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4 lg:hidden">
            <button className="hover:text-rose-400 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="hover:text-rose-400 transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.blog')}
            </Link>
            <Link
              to="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.seller_dashboard')}
            </Link>
            <Link
              to="/create-shop"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.open_shop')}
            </Link>
            <div className="px-3 py-2">
              <LanguageSwitch />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
