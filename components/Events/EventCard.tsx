import { EventType } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar1, Clock } from 'lucide-react';
import { getImgComponent } from '@/utils';

export const EventCard = ({ event }: { event: EventType }) => {
  const date = new Date(event.datetime);
  return (
    <Link
      className='flex flex-row lg:flex-col bg-white text-black rounded-2xl w-full lg:w-[28rem] h-36 md:h-64 lg:h-[35rem] overflow-hidden shadow-ttymi transition-transform duration-150 ease-in-out hover:scale-[1.025] m-3 lg:m-8'
      href={`events/${event.id}`}
    >
      <div className='w-36 h-48 md:w-48 md:h-64 lg:w-full lg:h-64 flex-shrink-0'>{getImgComponent(event)}</div>
      <div className='relative flex-1 px-4 md:px-6 bg-white lg:-mt-12 lg:rounded-t-3xl min-w-0 flex flex-col justify-center lg:justify-start gap-1 md:gap-2'>
        <h2 className='text-xl md:text-3xl font-semibold leading-tight line-clamp-1'>{event.title}</h2>
        <div className='flex flex-wrap items-center gap-x-4 gap-y-1 text-sm md:text-xl font-bold'>
          <div className='flex items-center gap-1'>
            <Calendar1 className='w-4 h-4 md:w-6 md:h-6' />
            <span>{date.toLocaleDateString('fi-FI')}</span>
          </div>
          <div className='flex items-center gap-1'>
            <Clock className='w-4 h-4 md:w-6 md:h-6' />
            <span>{date.toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' })}</span>
          </div>
        </div>
        <p className='text-xs sm:text-sm md:text-lg font-medium leading-relaxed line-clamp-3 md:line-clamp-4 opacity-80 mt-1 md:mt-2'>
          {event.content}
        </p>
      </div>
    </Link>
  );
};
