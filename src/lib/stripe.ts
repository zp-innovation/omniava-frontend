import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || '');
  }
  return stripePromise;
};

export const stripeAppearance = {
  appearance: {
    theme: 'stripe' as const,
    variables: {
      colorPrimary: '#4F46E5',
      colorBackground: '#ffffff',
      colorText: '#1F2937',
      colorDanger: '#ef4444',
      fontFamily: 'system-ui, sans-serif',
      borderRadius: '8px',
    },
  },
};
