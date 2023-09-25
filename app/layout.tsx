import { Analytics } from '@vercel/analytics/react';
import { usePathname, useSearchParams } from 'next/navigation';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/global.css';
import favicon from '../public/favicon.ico';

const generateMetaData = (path: string) => {
  if (path.includes('event')) return 'TTYMI - Tapahtumat';
  if (path.includes('visa')) return 'TTYMI - Teekkarivisa';
  if (path.includes('about')) return 'TTYMI - Tietoa';
  if (path.includes('contacts')) return 'TTYMI - Yhteystiedot';
  else return 'TTYMI';
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  return (
    <html>
      <link rel='shortcut icon' href={favicon.src} type='image/x-icon' />
      <head>
        <title>{generateMetaData(path)}</title>
      </head>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Analytics />
        <Navbar />
        <main style={{ flex: 1, marginTop: '3rem' }}>{children}</main>
        <Footer />
      </body>
      <meta name='theme-color' content='#043e18' />
    </html>
  );
};

export default RootLayout;
