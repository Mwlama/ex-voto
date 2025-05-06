import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure Navbar uses NavbarProps
import ProductCard from './components/ProductCard';
import ShopForm from './components/ShopForm';
import SellerDashboard from './components/SellerDashboard';
import Blog from './components/Blog';
import ProductPage from './components/ProductPage';
import AboutPage from './pages/AboutPage';
import HelpCenterPage from './pages/HelpCenterPage';
import PrivacyPage from './pages/PrivacyPage';
import { Filter, ChevronDown } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';

const categories = [
  "categories.all",
  "categories.religious_art",
  "categories.saints",
  "categories.miracles",
  "categories.paintings",
  "categories.sculptures",
  "categories.clothing"
];

const products = [
  {
    id: 1,
    image: "/1.png",
    title: "Ex-voto, Votive heart with flame 8x6cm",
    price: 23.99,
    seller: "ArtisanCrafts",
    rating: 3
  },
  {
    id: 2,
    image: "/2.png",
    title: "Ex voto Votive heart silver 800/00 cm 8x4.5",
    price: 127.99,
    seller: "VintageFinds",
    rating: 4
  },
  {
    id: 3,
    image: "/3.png",
    title: "Ex voto heart pierced with sword in 925 silver flames",
    price: 154.85,
    seller: "WoodArtistry",
    rating: 5
  },
  {
    id: 4,
    image: "/4.png",
    title: "Ex-voto heart 925 silver flame Ave Maria decor 10x7 cm",
    price: 91.71,
    seller: "MetalWorks",
    rating: 4
  },
  {
    id: 5,
    image: "/5.png",
    title: "Ex-voto, heart with flame and cross 13x20cm",
    price: 153.64,
    seller: "SacredArtStudio",
    rating: 5
  },
  {
    id: 6,
    image: "/6.png",
    title: "Votive sacred heart with Marian symbol 15x11cm",
    price: 129.82,
    seller: "CeramicArtistry",
    rating: 4
  }
];

function HomePage() {
  const { t } = useLanguage();

  const setCurrentView = (view: string): void => {
    console.log(`Navigating to view: ${view}`);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <div className="relative h-[400px] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="/VIDEO.mp4"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('hero.title')}</h1>
              <p className="text-xl mb-8">{t('hero.subtitle')}</p>
              <button
                onClick={() => setCurrentView('create-shop')}
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100"
              >
                {t('hero.start_selling')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="flex overflow-x-auto pb-4 hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              className="flex-none px-4 py-2 mr-2 text-sm font-medium rounded-full border border-gray-300 hover:border-gray-400"
            >
              {t(category)}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex justify-between items-center mt-8 mb-6">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg">
            <Filter className="h-5 w-5" />
            <span>{t('filters.title')}</span>
          </button>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">{t('filters.sort_by')}</span>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg">
              <span>{t('filters.featured')}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}

function App() {
  const setCurrentView = (view: string): void => {
    console.log(`Navigating to view: ${view}`);
  };
  const { t } = useLanguage();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar onNavigate={setCurrentView} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/create-shop" element={<ShopForm />} />
          <Route path="/dashboard" element={<SellerDashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/help" element={<HelpCenterPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">{t('footer.shop')}</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">{t('footer.gift_cards')}</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">{t('footer.ex_voto_map')}</a></li>
                  <li>
                    <Link to="/blog" className="text-gray-400 hover:text-white">
                      {t('footer.blog')}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">{t('footer.sell')}</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/create-shop" className="text-gray-400 hover:text-white">
                      {t('footer.sell_on_ex_voto')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/teams" className="text-gray-400 hover:text-white">
                      {t('footer.teams')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/forums" className="text-gray-400 hover:text-white">
                      {t('footer.forums')}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">{t('footer.about')}</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/about" className="text-gray-400 hover:text-white">
                      {t('footer.about_company')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/policies" className="text-gray-400 hover:text-white">
                      {t('footer.policies')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/investors" className="text-gray-400 hover:text-white">
                      {t('footer.investors')}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">{t('footer.help')}</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/help" className="text-gray-400 hover:text-white">
                      {t('footer.help_center')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-gray-400 hover:text-white">
                      {t('footer.privacy_settings')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-400 hover:text-white">
                      {t('footer.contact_us')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8">
              <p className="text-gray-400 text-sm text-center">
                {t('footer.copyright')}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
