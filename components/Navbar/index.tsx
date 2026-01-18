'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Menu } from 'lucide-react';
import { Links } from './Links';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='bg-ttymi-green w-screen fixed flex justify-between items-center z-50 px-4 py-2'>
      <Link href='/'>
        <div className='relative w-11 h-11'>
          <Image src='/logo-white.png' alt='logo' width={250} height={250} />
        </div>
      </Link>
      <>
        {!isMobile ? (
          <Links isMobile={false} />
        ) : (
          <div>
            {menuOpen ? (
              <X className='mr-7 w-6 h-6 cursor-pointer text-white' onClick={openMenu} />
            ) : (
              <Menu className='mr-7 w-6 h-6 cursor-pointer text-white' onClick={openMenu} />
            )}
            <Links isMobile={true} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
        )}
      </>
    </nav>
  );
};

export default Navbar;
