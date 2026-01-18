import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const InfoBubble: React.FC = () => {
  return (
    <div className='bg-white text-black mx-4 lg:mx-24 mt-24 lg:mt-0 rounded-2xl shadow-ttymi font-montserrat'>
      <div className='flex flex-col lg:flex-row-reverse justify-between items-start py-10 px-16 lg:px-4 lg:items-center gap-12 lg:gap-0'>
        {/* Content */}
        <div className='w-full'>
          <h1 className='text-3xl font-semibold mb-4'>MIKÄ ON TTYMI?</h1>
          <p className='text-xl leading-relaxed mb-4'>
            TTYMI ry on Hervannasta lähtöisin oleva opiskelijakerho. TTYMI on mukana tekemässä Tamperelaista
            opiskelijayhteisöä mm. järjestämällä erilaisia tapahtumia. Ydintoimintaamme onkin kaikille avoimien
            Teekkarivisan järjestäminen. TTYMI osallistuu ahkerasti myös ylioppilaskunnan ja teekkariyhdistyksen
            tapahtumiin, kuten erilaisiin rastikierroksiin ja tietenkin Wappuun! Jäsenemme voit tunnistaa vihreistä
            liiveistä ja manuaalisesta menosta.
          </p>
          <p className='text-xl leading-relaxed'>
            Voit seurata toimintaamme parhaiten{' '}
            <Link
              href='https://www.instagram.com/ttymi_ry/'
              target='_blank'
              className='text-ttymi-green font-bold underline hover:text-ttymi-dark transition-colors'
            >
              Instagramista!
            </Link>
          </p>
        </div>

        {/* Image */}
        <Image
          src='/logo.png'
          alt='logo-bg'
          width={350}
          height={350}
          className='m-4 flex-shrink-0 lg:m-0 md:w-80 md:h-auto md:-mt-16 md:mb-[-2rem] md:scale-100 mx-auto'
        />
      </div>
    </div>
  );
};
