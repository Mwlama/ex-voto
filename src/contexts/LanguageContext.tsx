import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.search.placeholder': 'Search for unique items...',
    'nav.seller_dashboard': 'Seller Dashboard',
    'nav.open_shop': 'Open your shop',
    'nav.account_settings': 'Account Settings',
    'nav.sign_out': 'Sign Out',

    // Hero Section
    'hero.title': 'Discover Unique Ex-voto Art',
    'hero.subtitle': 'Handcrafted religious artifacts and devotional pieces',
    'hero.start_selling': 'Start Selling',

    // Categories
    'categories.all': 'All Items',
    'categories.religious_art': 'Religious Art',
    'categories.saints': 'Saints',
    'categories.miracles': 'Miracles',
    'categories.paintings': 'Paintings',
    'categories.sculptures': 'Sculptures',
    'categories.clothing': 'Clothing',

    // Filters
    'filters.title': 'Filters',
    'filters.sort_by': 'Sort by:',
    'filters.featured': 'Featured',

    // Footer
    'footer.shop': 'Shop',
    'footer.gift_cards': 'Gift Cards',
    'footer.ex_voto_map': 'Ex-voto Map',
    'footer.blog': 'Blog',
    'footer.sell': 'Sell',
    'footer.sell_on_ex_voto': 'Sell on Ex-voto',
    'footer.teams': 'Teams',
    'footer.forums': 'Forums',
    'footer.about': 'About',
    'footer.about_company': 'Ex-voto, Inc.',
    'footer.policies': 'Policies',
    'footer.investors': 'Investors',
    'footer.help': 'Help',
    'footer.help_center': 'Help Center',
    'footer.privacy_settings': 'Privacy Settings',
    'footer.contact_us': 'Contact Us',
    'footer.copyright': '© 2024 Ex-voto, Inc. All rights reserved.',

    // Shop Form
    'shop.title': 'Open your Ex-voto shop',
    'shop.subtitle': 'Join our community of artisans and share your unique religious artifacts with devoted collectors worldwide.',
    'shop.steps.details': 'Shop Details',
    'shop.steps.shipping': 'Shipping',
    'shop.steps.payment': 'Payment',
    'shop.steps.review': 'Review',
    'shop.form.info': 'Shop Information',
    'shop.form.name': 'Shop name',
    'shop.form.name.placeholder': 'Enter your shop name',
    'shop.form.name.help': 'Choose a memorable name that reflects your brand',
    'shop.form.description': 'Shop description',
    'shop.form.description.placeholder': 'Tell customers about your shop and what makes it special',
    'shop.form.banner': 'Shop banner',
    'shop.form.upload': 'Upload a file',
    'shop.form.drag': 'or drag and drop',
    'shop.form.file_types': 'PNG, JPG, GIF up to 10MB',
    'shop.form.category': 'Shop category',
    'shop.form.language': 'Shop language',
    'shop.features.shipping': 'Free Shipping',
    'shop.features.shipping.desc': 'Offer free shipping to attract more customers',
    'shop.features.protection': 'Seller Protection',
    'shop.features.protection.desc': 'Your transactions are always protected',
    'shop.features.payments': 'Secure Payments',
    'shop.features.payments.desc': 'Accept payments securely from anywhere',
    'shop.buttons.save': 'Save Draft',
    'shop.buttons.continue': 'Continue',

    // Product Card
    'product.add_to_favorites': 'Add to favorites',
    'product.add_to_cart': 'Add to cart',
    'product.free_shipping': 'Free Shipping',
    'product.by': 'by',
    'product.view_details': 'View Details',

    // Blog
    'blog.title': 'Understanding Ex-votos',
    'blog.subtitle': 'Explore the rich tradition of religious offerings and their significance in spiritual practice',
    'blog.search.placeholder': 'Search articles...',
    'blog.newsletter.title': 'Stay Updated',
    'blog.newsletter.subtitle': 'Subscribe to our newsletter for the latest articles and insights about ex-votos',
    'blog.newsletter.placeholder': 'Enter your email',
    'blog.newsletter.button': 'Subscribe',
    'blog.read_more': 'Read More',

    // Seller Dashboard
    'dashboard.title': 'Seller Dashboard',
    'dashboard.welcome': 'Welcome back',
    'dashboard.add_product': 'Add New Product',
    'dashboard.tabs.overview': 'Overview',
    'dashboard.tabs.orders': 'Orders',
    'dashboard.tabs.products': 'Products',
    'dashboard.tabs.analytics': 'Analytics',
    'dashboard.tabs.settings': 'Settings',
    'dashboard.search.orders': 'Search orders...',
    'dashboard.search.products': 'Search products...',
    'dashboard.status.completed': 'Completed',
    'dashboard.status.processing': 'Processing',
    'dashboard.status.shipped': 'Shipped',
    'dashboard.export': 'Export Orders',
    'dashboard.recent_orders': 'Recent Orders',
    'dashboard.view_details': 'View Details',
    'dashboard.total_revenue': 'Total Revenue',
    'dashboard.total_orders': 'Total Orders',
    'dashboard.avg_order': 'Avg. Order Value',
    'dashboard.conversion': 'Conversion Rate',

    // Product Page
    'product.back': 'Back to products',
    'product.dimensions': 'Dimensions',
    'product.material': 'Material',
    'product.seller': 'Seller',
    'product.stock': 'Stock',
    'product.available': 'available',
    'product.not_found': 'Product not found',
    'product.free_shipping_message': 'Free shipping on this item',
    'product.buyer_protection': 'Buyer Protection: Full refund if item not as described',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.blog': 'Blog',
    'nav.search.placeholder': 'Rechercher des articles uniques...',
    'nav.seller_dashboard': 'Tableau de bord vendeur',
    'nav.open_shop': 'Ouvrir votre boutique',
    'nav.account_settings': 'Paramètres du compte',
    'nav.sign_out': 'Déconnexion',

    // Hero Section
    'hero.title': 'Découvrez l\'Art Ex-voto Unique',
    'hero.subtitle': 'Objets religieux et pièces dévotionnelles artisanales',
    'hero.start_selling': 'Commencer à vendre',

    // Categories
    'categories.all': 'Tous les articles',
    'categories.religious_art': 'Art religieux',
    'categories.saints': 'Saints',
    'categories.miracles': 'Miracles',
    'categories.paintings': 'Peintures',
    'categories.sculptures': 'Sculptures',
    'categories.clothing': 'Vêtements',

    // Filters
    'filters.title': 'Filtres',
    'filters.sort_by': 'Trier par :',
    'filters.featured': 'En vedette',

    // Footer
    'footer.shop': 'Boutique',
    'footer.gift_cards': 'Cartes cadeaux',
    'footer.ex_voto_map': 'Carte Ex-voto',
    'footer.blog': 'Blog',
    'footer.sell': 'Vendre',
    'footer.sell_on_ex_voto': 'Vendre sur Ex-voto',
    'footer.teams': 'Équipes',
    'footer.forums': 'Forums',
    'footer.about': 'À propos',
    'footer.about_company': 'Ex-voto, Inc.',
    'footer.policies': 'Politiques',
    'footer.investors': 'Investisseurs',
    'footer.help': 'Aide',
    'footer.help_center': 'Centre d\'aide',
    'footer.privacy_settings': 'Paramètres de confidentialité',
    'footer.contact_us': 'Contactez-nous',
    'footer.copyright': '© 2024 Ex-voto, Inc. Tous droits réservés.',

    // Shop Form
    'shop.title': 'Ouvrez votre boutique Ex-voto',
    'shop.subtitle': 'Rejoignez notre communauté d\'artisans et partagez vos objets religieux uniques avec des collectionneurs dévoués du monde entier.',
    'shop.steps.details': 'Détails de la boutique',
    'shop.steps.shipping': 'Expédition',
    'shop.steps.payment': 'Paiement',
    'shop.steps.review': 'Révision',
    'shop.form.info': 'Informations de la boutique',
    'shop.form.name': 'Nom de la boutique',
    'shop.form.name.placeholder': 'Entrez le nom de votre boutique',
    'shop.form.name.help': 'Choisissez un nom mémorable qui reflète votre marque',
    'shop.form.description': 'Description de la boutique',
    'shop.form.description.placeholder': 'Parlez de votre boutique et de ce qui la rend spéciale',
    'shop.form.banner': 'Bannière de la boutique',
    'shop.form.upload': 'Télécharger un fichier',
    'shop.form.drag': 'ou glisser-déposer',
    'shop.form.file_types': 'PNG, JPG, GIF jusqu\'à 10MB',
    'shop.form.category': 'Catégorie de la boutique',
    'shop.form.language': 'Langue de la boutique',
    'shop.features.shipping': 'Livraison gratuite',
    'shop.features.shipping.desc': 'Offrez la livraison gratuite pour attirer plus de clients',
    'shop.features.protection': 'Protection vendeur',
    'shop.features.protection.desc': 'Vos transactions sont toujours protégées',
    'shop.features.payments': 'Paiements sécurisés',
    'shop.features.payments.desc': 'Acceptez les paiements en toute sécurité de partout',
    'shop.buttons.save': 'Enregistrer le brouillon',
    'shop.buttons.continue': 'Continuer',

    // Product Card
    'product.add_to_favorites': 'Ajouter aux favoris',
    'product.add_to_cart': 'Ajouter au panier',
    'product.free_shipping': 'Livraison gratuite',
    'product.by': 'par',
    'product.view_details': 'Voir les détails',

    // Blog
    'blog.title': 'Comprendre les Ex-votos',
    'blog.subtitle': 'Explorez la riche tradition des offrandes religieuses et leur importance dans la pratique spirituelle',
    'blog.search.placeholder': 'Rechercher des articles...',
    'blog.newsletter.title': 'Restez informé',
    'blog.newsletter.subtitle': 'Abonnez-vous à notre newsletter pour les derniers articles et aperçus sur les ex-votos',
    'blog.newsletter.placeholder': 'Entrez votre email',
    'blog.newsletter.button': 'S\'abonner',
    'blog.read_more': 'Lire la suite',

    // Seller Dashboard
    'dashboard.title': 'Tableau de bord vendeur',
    'dashboard.welcome': 'Bienvenue',
    'dashboard.add_product': 'Ajouter un produit',
    'dashboard.tabs.overview': 'Aperçu',
    'dashboard.tabs.orders': 'Commandes',
    'dashboard.tabs.products': 'Produits',
    'dashboard.tabs.analytics': 'Analyses',
    'dashboard.tabs.settings': 'Paramètres',
    'dashboard.search.orders': 'Rechercher des commandes...',
    'dashboard.search.products': 'Rechercher des produits...',
    'dashboard.status.completed': 'Terminé',
    'dashboard.status.processing': 'En cours',
    'dashboard.status.shipped': 'Expédié',
    'dashboard.export': 'Exporter les commandes',
    'dashboard.recent_orders': 'Commandes récentes',
    'dashboard.view_details': 'Voir les détails',
    'dashboard.total_revenue': 'Revenu total',
    'dashboard.total_orders': 'Total des commandes',
    'dashboard.avg_order': 'Valeur moyenne des commandes',
    'dashboard.conversion': 'Taux de conversion',

    // Product Page
    'product.back': 'Retour aux produits',
    'product.dimensions': 'Dimensions',
    'product.material': 'Matériau',
    'product.seller': 'Vendeur',
    'product.stock': 'Stock',
    'product.available': 'disponible',
    'product.not_found': 'Produit non trouvé',
    'product.free_shipping_message': 'Livraison gratuite sur cet article',
    'product.buyer_protection': 'Protection acheteur : Remboursement intégral si l\'article ne correspond pas à la description',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);