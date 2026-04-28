'use client';

import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">OmniAva</h3>
            <p className="text-gray-400">
              {t('hero.subtitle')}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('common.products')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/products" className="hover:text-white">{t('common.products')}</a></li>
              <li><a href="/cart" className="hover:text-white">{t('common.cart')}</a></li>
              <li><a href="/orders" className="hover:text-white">{t('common.orders')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">support@omniava.com</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} OmniAva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
