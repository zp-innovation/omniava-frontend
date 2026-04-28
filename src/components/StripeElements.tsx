'use client';

import { Elements } from '@stripe/react-stripe-js';
import { getStripe, stripeAppearance } from '@/lib/stripe';

interface StripeElementsProps {
  children: React.ReactNode;
}

export default function StripeElements({ children }: StripeElementsProps) {
  const stripe = getStripe();

  return (
    <Elements stripe={stripe} options={stripeAppearance}>
      {children}
    </Elements>
  );
}
