import { Analytics } from '@vercel/analytics/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.scss';
import favicon from '../public/favicon.ico';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <link rel='shortcut icon' href={favicon.src} type='image/x-icon' />
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Analytics />
        <Navbar />
        <main style={{ flex: 1, marginTop: '3rem' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
