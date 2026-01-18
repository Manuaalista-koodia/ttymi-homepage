import { Analytics } from '@vercel/analytics/react';
import type { Metadata, Viewport } from 'next';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/global.css';

export const metadata: Metadata = {
  title: 'TTYMI',
  description: 'TTYMI ry on Hervannasta lähtöisin oleva opiskelijakerho',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#043e18',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className='bg-ttymi-green text-white flex flex-col min-h-screen'>
        <Analytics />
        <Navbar />
        <main className='flex-1 mt-12'>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
