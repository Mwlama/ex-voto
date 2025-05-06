import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className="flex items-center gap-2 text-white hover:text-rose-400 transition-colors"
    >
      <Globe className="h-5 w-5" />
      <span>{language === 'en' ? 'FR' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitch;