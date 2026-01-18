import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TTYMI - Yhteystiedot',
};

const ContactsPage = () => {
  return (
    <div className='bg-white text-black text-[2rem] font-medium max-[768px]:text-[1.25rem] min-h-[78vh] flex flex-col justify-center'>
      <div className='m-16 flex flex-col items-center justify-center'>
        <h1 className='m-0 text-[3rem] font-semibold tracking-[0.25rem] uppercase'>TTYMI</h1>
        <Image className='w-80 h-80' src='/logo.png' alt='TTYMI' width={250} height={250} />
        <p className='m-[1.5rem_1rem]'>ttymi@lists.tuni.fi</p>
        <Link
          className='flex flex-row items-center justify-center hover:opacity-80 transition-opacity'
          href='https://www.instagram.com/ttymi_ry/'
          target='_blank'
        >
          <Image src='/insta.svg' alt='instagram' width={50} height={50} />
          <p className='m-[1.5rem_1rem]'>Instagram</p>
        </Link>
        <Link
          className='flex flex-row items-center justify-center hover:opacity-80 transition-opacity'
          href='https://www.facebook.com/Teekkarivisa3/'
          target='_blank'
        >
          <Image src='/face.svg' alt='facebook' width={50} height={50} />
          <p className='m-[1.5rem_1rem]'>Facebook</p>
        </Link>
      </div>
    </div>
  );
};

export default ContactsPage;
