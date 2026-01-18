import React, { ReactNode } from 'react';
import { CustomButton } from '@/components/ActionButton/CustomButton';

interface EventsSectionProps {
  children: ReactNode;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ children }) => {
  return (
    <div className='text-white font-montserrat mx-4 lg:mx-12 mt-12 pb-8'>
      <h1 className='text-4xl md:text-3xl sm:text-2xl font-semibold mb-4'>TAPAHTUMAT</h1>

      <div className='flex flex-col lg:flex-row items-center gap-3 min-h-[10rem]'>{children}</div>
      <div className='mt-4 lg:mt-0 lg:ml-8'>
        <CustomButton href='/events' label='LISÄÄ?' variant='medium' />
      </div>
    </div>
  );
};
