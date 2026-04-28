'use client';

import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

const mockProduct = {
  id: '1',
  slug: 'wireless-headphones',
  name: 'Wireless Headphones',
  description: 'Experience premium sound quality with our Wireless Headphones. These headphones feature advanced noise-cancelling technology that blocks out ambient noise, allowing you to focus on your music or calls. With a 30-hour battery life, you can enjoy uninterrupted audio throughout the day. The comfortable over-ear design and soft cushioned ear cups ensure a pleasant wearing experience, even during extended use. Quick charging capability gives you 5 hours of playtime with just 15 minutes of charging.',
  price: 299.99,
  image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
  category: 'Electronics',
  features: [
    'Active Noise Cancellation',
    '30-hour battery life',
    'Quick charge (15 min = 5 hours)',
    'Bluetooth 5.0 connectivity',
    'Built-in microphone for calls',
    'Foldable design with carrying case',
  ],
  reviews: 124,
  rating: 4.8,
};

export default function ProductDetailPage() {
  const { t } = useTranslation();
  const params = useParams();
  const slug = params.slug as string;

  // In real app, fetch product by slug
  const product = mockProduct;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link href="/products" className="inline-flex items-center text-gray-600 hover:text-indigo-600 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="text-sm text-indigo-600 font-medium">{product.category}</span>
          <h1 className="text-3xl font-bold mt-2 mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-lg ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-gray-500">{product.rating} ({product.reviews} reviews)</span>
          </div>

          <p className="text-4xl font-bold text-indigo-600 mb-6">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 flex items-center justify-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            {t('product.addToCart')}
          </button>
        </div>
      </div>
    </div>
  );
}
