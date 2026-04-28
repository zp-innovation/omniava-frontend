'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/lib/api';

const mockProducts: Product[] = [
  {
    id: '1',
    slug: 'wireless-headphones',
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    category: 'Electronics',
  },
  {
    id: '2',
    slug: 'smart-watch',
    name: 'Smart Watch Pro',
    description: 'Advanced fitness tracking, heart rate monitor, GPS enabled',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    category: 'Electronics',
  },
  {
    id: '3',
    slug: 'running-shoes',
    name: 'Running Shoes Elite',
    description: 'Lightweight breathable running shoes with cushioned sole',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    category: 'Sports',
  },
  {
    id: '4',
    slug: 'leather-backpack',
    name: 'Leather Backpack',
    description: 'Genuine leather backpack with laptop compartment',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    category: 'Fashion',
  },
  {
    id: '5',
    slug: 'coffee-maker',
    name: 'Espresso Machine',
    description: 'Professional-grade espresso machine with milk frother',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400',
    category: 'Home',
  },
  {
    id: '6',
    slug: 'yoga-mat',
    name: 'Premium Yoga Mat',
    description: 'Non-slip eco-friendly yoga mat with carrying strap',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400',
    category: 'Sports',
  },
];

export default function ProductsPage() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">{t('common.products')}</h1>
      
      <div className="mb-8">
        <input
          type="text"
          placeholder={t('common.search')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 py-12">No products found</p>
      )}
    </div>
  );
}
