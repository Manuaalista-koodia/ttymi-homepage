import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/global.scss';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1, marginTop: '3rem' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
