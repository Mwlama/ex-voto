import React from 'react';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  seller: string;
  rating: number;
  sales?: number;
  freeShipping?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id,
  image, 
  title, 
  price, 
  seller, 
  rating,
  sales = 0,
  freeShipping = false
}) => {
  const { t } = useLanguage();

  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button 
            className="p-2 rounded-full bg-white/90 hover:bg-white shadow-sm hover:shadow transition-all"
            aria-label={t('product.add_to_favorites')}
          >
            <Heart className="h-5 w-5 text-gray-600 hover:text-rose-600" />
          </button>
          <button 
            className="p-2 rounded-full bg-white/90 hover:bg-white shadow-sm hover:shadow transition-all"
            aria-label={t('product.add_to_cart')}
          >
            <ShoppingCart className="h-5 w-5 text-gray-600 hover:text-rose-600" />
          </button>
        </div>
        {freeShipping && (
          <span className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded">
            {t('product.free_shipping')}
          </span>
        )}
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-sm text-gray-700 font-medium group-hover:text-rose-600 transition-colors">
            {t(title)}
          </h3>
          <p className="text-lg font-semibold text-gray-900">${price.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="flex items-center text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < rating ? 'fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">({sales})</span>
          </div>
          <span className="text-sm text-gray-500 hover:text-rose-600 cursor-pointer">
            {t('product.by')} {seller}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5">
          <Link 
            to={`/product/${id}`}
            className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transform hover:scale-105 transition-all"
          >
            {t('product.view_details')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;