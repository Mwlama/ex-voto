import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, Store, Package, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitch from './LanguageSwitch';
import { Link } from 'react-router-dom';

// Update the NavbarProps type to include the onNavigate prop
type NavbarProps = {
  onNavigate: (view: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { t } = useLanguage();
  
  // Helper function to handle navigation and close menu
  const handleNavigation = (view: string) => {
    setShowUserMenu(false);
    onNavigate(view);
  };
  
  return (
    <nav className="sticky top-0 z-50 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 lg:hidden" />
            <Link 
              to="/" 
              className="text-2xl font-bold tracking-tight"
              onClick={() => onNavigate('home')}
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
              onClick={() => onNavigate('home')}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/blog"
              className="text-white hover:text-rose-400 transition-colors"
              onClick={() => onNavigate('blog')}
            >
              {t('nav.blog')}
            </Link>
            <button 
              className="flex items-center space-x-1 hover:text-rose-400 transition-colors"
              onClick={() => onNavigate('favorites')}
            >
              <Heart className="h-5 w-5" />
            </button>
            <button 
              className="flex items-center space-x-1 hover:text-rose-400 transition-colors"
              onClick={() => onNavigate('cart')}
            >
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
                    onClick={() => handleNavigation('dashboard')}
                  >
                    <Store className="inline h-4 w-4 mr-2" />
                    {t('nav.seller_dashboard')}
                  </Link>
                  <Link 
                    to="/create-shop"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-800"
                    onClick={() => handleNavigation('create-shop')}
                  >
                    <Package className="inline h-4 w-4 mr-2" />
                    {t('nav.open_shop')}
                  </Link>
                  <hr className="my-1 border-gray-700" />
                  <button 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-800"
                    onClick={() => handleNavigation('account-settings')}
                  >
                    {t('nav.account_settings')}
                  </button>
                  <button 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-800"
                    onClick={() => handleNavigation('sign-out')}
                  >
                    {t('nav.sign_out')}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;