'use client';

import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { CheckCircle, Package, Mail } from 'lucide-react';

export default function OrderConfirmationPage() {
  const { t } = useTranslation();
  const params = useParams();
  const orderNumber = params.orderNumber as string;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {t('order.confirmed')}
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          {t('order.thankYou')}
        </p>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-center gap-2 text-lg">
            <span className="text-gray-600">{t('order.number')}:</span>
            <span className="font-semibold text-indigo-600">{orderNumber}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold">Confirmation Email</h3>
              <p className="text-sm text-gray-500">Sent to your email address</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <Package className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold">Shipping Update</h3>
              <p className="text-sm text-gray-500">Track your delivery in real-time</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            {t('common.home')}
          </Link>
        </div>
      </div>
    </div>
  );
}
