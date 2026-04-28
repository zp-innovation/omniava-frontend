import type { Metadata } from 'next';
import './globals.css';
import ClientI18nProvider from '@/components/ClientI18nProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export const metadata: Metadata = {
  title: 'OmniAva - E-Commerce Platform',
  description: 'Discover quality products and enjoy great deals',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ClientI18nProvider>
          <Header />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClientI18nProvider>
      </body>
    </html>
  );
}
