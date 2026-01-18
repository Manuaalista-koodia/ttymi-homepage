import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getImgComponent } from '@/utils';
import { EventType } from '@/types';
import { Calendar1, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TTYMI - Tapahtumat',
};

const getEvents = async () => {
  try {
    const res = await fetch('https://ttymi-homepage.pockethost.io/api/collections/events/records?sort=-datetime', {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return data?.items as EventType[];
  } catch (e) {
    return [];
  }
};

const Event = ({ event }: { event: EventType }) => {
  const date = new Date(event.datetime);
  return (
    <Link
      className='flex flex-row bg-white text-black h-[35rem] mb-16 shadow-lg transition-all duration-150 hover:scale-[1.0075] max-[1300px]:h-[25rem] max-[1024px]:h-[20rem] max-[867px]:h-[15rem] max-[768px]:h-[9rem] max-[768px]:mb-6 overflow-hidden'
      href={`/events/${event.id}`}
    >
      <div className='h-full aspect-square'>{getImgComponent(event)}</div>
      <div className='p-4 overflow-hidden max-[540px]:p-3 flex flex-col justify-center gap-0'>
        <h2 className='text-[2rem] font-semibold p-0 m-0 max-[867px]:text-[1.5rem] max-[540px]:text-[1rem]'>
          {event.title}
        </h2>
        <div className='flex flex-row items-center m-0 p-0 my-4 max-[867px]:my-1'>
          <Calendar1 className='max-[867px]:scale-75' />
          <p className='text-[1.45rem] font-semibold m-[0_1.5rem_0_0.5rem] max-[867px]:text-[1rem] max-[867px]:mx-1 max-[540px]:text-[0.75rem] max-[540px]:ml-0'>
            {date.toLocaleDateString('fi-FI', {})}
          </p>
          <Clock className='max-[867px]:scale-75' />
          <p className='text-[1.45rem] font-semibold m-[0_1.5rem_0_0.5rem] max-[867px]:text-[1rem] max-[867px]:mx-1 max-[540px]:text-[0.75rem] max-[540px]:ml-0'>
            {date.toLocaleTimeString('fi-FI', {
              hour12: false,
              hour: 'numeric',
              minute: 'numeric',
              timeZone: 'UTC',
            })}
          </p>
        </div>
        <p className='text-[1.25rem] font-medium leading-[1] whitespace-pre-wrap overflow-hidden text-ellipsis line-clamp-[14] max-[1300px]:line-clamp-8 max-[1024px]:line-clamp-4 max-[867px]:text-base max-[867px]:mt-0 max-[540px]:line-clamp-3 max-[540px]:text-[0.75rem]'>
          {event.content}
        </p>
      </div>
    </Link>
  );
};

const EventsPage = async () => {
  const events = await getEvents();

  return (
    <div className='bg-ttymi-gradient min-h-[78vh]'>
      <div className='m-0 p-[2rem_6rem] max-[768px]:p-[1.2rem_1.2rem]'>
        <h1 className='text-[2.5rem] font-semibold m-[0_0_4rem_0] text-white uppercase'>TAPAHTUMAT</h1>
        {events.length > 0 ? (
          events?.map((event) => {
            return <Event key={event.id} event={event} />;
          })
        ) : (
          <p className='text-white'>404 Tapahtumien haku epäonnistui...</p>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
