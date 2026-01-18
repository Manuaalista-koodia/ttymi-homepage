import React from 'react';
import Image from 'next/image';
import { getTTYMIName } from '@/utils';
import { CustomButton } from '@/components/ActionButton/CustomButton';

export const LandingSection: React.FC = () => {
  return (
    <div className='relative flex flex-col lg:flex-row items-start justify-between px-8 md:px-16 lg:px-72 xl:px-96 py-20 lg:py-36'>
      <div className='relative w-sm z-10 lg:w-full flex flex-col gap-6 mt-36 lg:mt-24'>
        <div className='flex flex-row items-baseline text-white gap-4 lg:gap-2'>
          <h1 className='p-0 m-0 text-7xl lg:text-9xl font-semibold'>TTYMI</h1>
          <h1 className='p-0 m-0 text-4xl font-medium'>ry</h1>
        </div>

        <div className='text-white max-w-lg md:max-w-3xl text-xl lg:text-2xl'>
          <p>{`${getTTYMIName()} on Tampereella toimiva opiskelijakerho. Manuaalista menoa jo vuodesta 2015!`}</p>
        </div>

        <div className='ml-0'>
          <CustomButton href='/jaseneksi' label='JÄSENEKSI?' variant='medium' />
        </div>
      </div>

      <Image
        src='/kyssari.png'
        alt='question-mark'
        width={275}
        height={275}
        className='z-[1] absolute left-0 right-0 w-full max-w-72 mx-auto lg:relative opacity-35 lg:opacity-100 scale-100 lg:scale-85'
        priority
      />
    </div>
  );
};
