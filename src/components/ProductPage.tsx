import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Truck, Shield, ArrowLeft, Heart, ShoppingCart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const products = [
  {
    id: 1,
    image: "/1.png",
    title: "Ex-voto, Votive heart with flame ",
    price: 23.99,
    seller: "ArtisanCrafts",
    rating: 5,
    description: "A beautifully crafted silver ex-voto heart, handmade with attention to detail and spiritual significance. Perfect for devotional displays or as a meaningful gift.",
    dimensions: "8cm x 6cm",
    weight: "250g",
    material: "Sterling Silver",
    stock: 15
  },
  {
    id: 2,
    image: "/2.png",
    title: "Ex voto Votive heart silver 800/00",
    price: 127.99,
    seller: "VintageFinds",
    rating: 4,
    description: "An exquisite vintage painting depicting the Sacred Heart, featuring rich colors and traditional artistic techniques. A stunning piece of religious art.",
    dimensions: "8 cm x 4.5cm",
    material: "Oil on Canvas",
    stock: 8
  },
  {
    id: 3,
    image: "/3.png",
    title: "Ex voto heart pierced with sword in 925 silver flames",
    price: 154.85,
    seller: "WoodArtistry",
    rating: 5,
    description: "A handcrafted silver ex-voto plaque, carefully carved and finished to create a unique piece of devotional art. Each piece tells its own story.",
    dimensions: "10cm x 20cm",
    material: "Solid Oak",
    stock: 12
  },
  {
    id: 4,
    image: "/4.png",
    title: "Ex-voto heart 925 silver flame Ave Maria decor",
    price: 91.71,
    seller: "MetalWorks",
    rating: 4,
    description: "A detailed bronze token commemorating miracles, featuring intricate engravings and traditional symbolism. A meaningful addition to any collection.",
    dimensions: "10cm x 7cm",
    material: "Bronze",
    stock: 20
  },
  {
    id: 5,
    image: "/5.png",
    title: "Ex-voto, heart with flame and cross",
    price: 153.64,
    seller: "SacredArtStudio",
    rating: 5,
    description: "A handcrafted silver ex-voto plaque, carefully carved and finished to create a unique piece of devotional art. Each piece tells its own story.",
    dimensions: "13cm x 20cm",
    material: "",
    stock: 5
  },
  {
    id: 6,
    image: "/6.png",
    title: "Votive sacred heart with Marian symbol",
    price: 129.82,
    seller: "CeramicArtistry",
    rating: 4,
    description: "A beautifully crafted ceramic prayer offering, featuring delicate details and glazed finish. An elegant piece for your sacred space.",
    dimensions: "15 cm x 11cm",
    material: "Ceramic",
    stock: 18
  }
];

const ProductPage = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">{t('product.not_found')}</h2>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button 
        onClick={() => window.history.back()}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        {t('product.back')}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={t(product.title)}
            className="w-full rounded-lg shadow-lg object-cover aspect-square"
          />
          <button 
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
            aria-label={t('product.add_to_favorites')}
          >
            <Heart className="h-6 w-6 text-gray-600 hover:text-rose-600" />
          </button>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t(product.title)}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < product.rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-gray-600">({product.rating}/5)</span>
          </div>

          <p className="text-3xl font-bold text-gray-900 mb-6">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-gray-600 mb-8">{product.description}</p>

          <div className="space-y-4 mb-8">
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">{t('product.dimensions')}</span>
              <span className="font-medium">{product.dimensions}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">{t('product.material')}</span>
              <span className="font-medium">{product.material}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">{t('product.seller')}</span>
              <span className="font-medium">{product.seller}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">{t('product.stock')}</span>
              <span className="font-medium">{product.stock} {t('product.available')}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <select
              value={quantity}
              onChange={handleQuantityChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            >
              {Array.from({ length: Math.min(10, product.stock) }).map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <button className="flex-1 bg-rose-600 text-white px-8 py-3 rounded-md hover:bg-rose-700 flex items-center justify-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              {t('product.add_to_cart')}
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-600">
              <Truck className="h-5 w-5" />
              <span>{t('product.free_shipping_message')}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Shield className="h-5 w-5" />
              <span>{t('product.buyer_protection')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;