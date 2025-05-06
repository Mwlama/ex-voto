import React from 'react';
import { Store, Image, DollarSign, Truck, Shield, CreditCard } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ShopForm = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">{t('shop.title')}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t('shop.subtitle')}
        </p>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-between items-center mb-12">
        {[
          t('shop.steps.details'),
          t('shop.steps.shipping'),
          t('shop.steps.payment'),
          t('shop.steps.review')
        ].map((step, index) => (
          <div key={step} className="flex items-center">
            <div className={`
              flex items-center justify-center w-8 h-8 rounded-full border-2
              ${index === 0 ? 'border-rose-600 bg-rose-600 text-white' : 'border-gray-300 text-gray-500'}
            `}>
              {index + 1}
            </div>
            <span className={`ml-2 text-sm ${index === 0 ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              {step}
            </span>
            {index < 3 && (
              <div className="w-12 h-0.5 mx-2 bg-gray-300" />
            )}
          </div>
        ))}
      </div>
      
      <form className="space-y-8">
        {/* Shop Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
          <h2 className="text-xl font-semibold mb-4">{t('shop.form.info')}</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('shop.form.name')}
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
              placeholder={t('shop.form.name.placeholder')}
            />
            <p className="mt-1 text-sm text-gray-500">
              {t('shop.form.name.help')}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('shop.form.description')}
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"
              placeholder={t('shop.form.description.placeholder')}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('shop.form.banner')}
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-rose-500 transition-colors">
              <div className="space-y-1 text-center">
                <Image className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-rose-600 hover:text-rose-500">
                    <span>{t('shop.form.upload')}</span>
                    <input type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">{t('shop.form.drag')}</p>
                </div>
                <p className="text-xs text-gray-500">{t('shop.form.file_types')}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('shop.form.category')}
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500">
                <option value="">{t('categories.all')}</option>
                <option>{t('categories.religious_art')}</option>
                <option>{t('categories.saints')}</option>
                <option>{t('categories.miracles')}</option>
                <option>{t('categories.paintings')}</option>
                <option>{t('categories.sculptures')}</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('shop.form.language')}
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500">
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>

        {/* Shop Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-rose-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
              <Truck className="h-6 w-6 text-rose-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">{t('shop.features.shipping')}</h3>
            <p className="text-sm text-gray-500">{t('shop.features.shipping.desc')}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-rose-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-rose-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">{t('shop.features.protection')}</h3>
            <p className="text-sm text-gray-500">{t('shop.features.protection.desc')}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-rose-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
              <CreditCard className="h-6 w-6 text-rose-600" />
            </div>
            <h3 className="text-lg font-medium mb-2">{t('shop.features.payments')}</h3>
            <p className="text-sm text-gray-500">{t('shop.features.payments.desc')}</p>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            {t('shop.buttons.save')}
          </button>
          <button
            type="submit"
            className="px-8 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
          >
            {t('shop.buttons.continue')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShopForm;