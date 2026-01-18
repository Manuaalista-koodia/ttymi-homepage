'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Menu } from 'lucide-react';
import { Links } from './Links';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className='bg-ttymi-green w-screen fixed flex justify-between items-center z-50 px-4 py-2'>
        <Link href='/'>
          <div className='relative w-11 h-11'>
            <Image src='/logo-white.png' alt='logo' width={250} height={250} />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className='hidden md:block'>
          <Links isMobile={false} />
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden flex items-center pr-4'>
          <button onClick={toggleMenu} className='text-white focus:outline-none' aria-label='Toggle menu'>
            {menuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </nav>

      {/* Mobile Links Overlay */}
      <div className='md:hidden'>
        <Links isMobile={true} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </>
  );
};

export default Navbar;
