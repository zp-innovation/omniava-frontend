const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  orderNumber: string;
  items: CartItem[];
  total: number;
  shippingAddress: Address;
  createdAt: string;
}

export interface Address {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export const api = {
  async getProducts(): Promise<Product[]> {
    const res = await fetch(`${API_URL}/api/products`);
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
  },

  async getProduct(slug: string): Promise<Product> {
    const res = await fetch(`${API_URL}/api/products/${slug}`);
    if (!res.ok) throw new Error('Failed to fetch product');
    return res.json();
  },

  async createOrder(items: CartItem[], shippingAddress: Address): Promise<Order> {
    const res = await fetch(`${API_URL}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items, shippingAddress }),
    });
    if (!res.ok) throw new Error('Failed to create order');
    return res.json();
  },

  async getOrder(orderNumber: string): Promise<Order> {
    const res = await fetch(`${API_URL}/api/orders/${orderNumber}`);
    if (!res.ok) throw new Error('Failed to fetch order');
    return res.json();
  },
};
