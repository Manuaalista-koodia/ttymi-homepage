import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata, Viewport } from 'next';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/global.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'TTYMI',
  description: 'TTYMI ry on Hervannasta lähtöisin oleva opiskelijakerho',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'TTYMI',
    description: 'TTYMI ry on Hervannasta lähtöisin oleva opiskelijakerho',
    url: 'https://ttymi.fi',
    siteName: 'TTYMI',
    locale: 'fi_FI',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#043e18',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='fi' className={montserrat.variable}>
      <body className='bg-ttymi-green text-white flex flex-col min-h-screen font-sans'>
        <Analytics />
        <Navbar />
        <main className='flex-1 mt-12'>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
