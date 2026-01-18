import Image from 'next/image';
import { EventType } from '../../../types';
import { getImgComponent } from '../../../utils';
import { BackButton } from './BackButton';
import { Calendar1, Clock } from 'lucide-react';

const getEvent = async (eventId: string) => {
  try {
    const res = await fetch(`https://ttymi-homepage.pockethost.io/api/collections/events/records/${eventId}`, {
      next: { revalidate: 10 },
    });
    const data = await res.json();
    return data as EventType;
  } catch (e) {
    return null;
  }
};

const EventPage = async ({ params }: any) => {
  const { id } = await params;
  const event: EventType | null = await getEvent(id);
  if (!event) return null;

  const date = new Date(event.datetime);

  return (
    <div className='min-h-[calc(100vh-7rem)] bg-white text-black'>
      <div className='flex flex-row min-h-full max-[1300px]:mt-32 max-[1300px]:flex-col max-[768px]:mt-16'>
        <BackButton />
        <div className='m-40 my-20 max-[1300px]:m-[2rem_1rem_0_1rem] flex justify-center'>
          <div className='max-h-[35rem] w-[35rem] max-[1300px]:max-h-[25rem] max-[1300px]:w-[25rem] max-[768px]:max-h-[20rem] max-[768px]:w-[20rem]'>
            {getImgComponent(event)}
          </div>
        </div>
        <div className='m-[5rem_5rem_3rem_1rem] max-[1300px]:m-[2rem_1rem]'>
          <h1 className='text-[3.5rem] font-semibold p-0 m-0 max-[768px]:text-[2.5rem]'>{event?.title}</h1>
          <div className='flex flex-row items-center m-0 p-0 my-8'>
            <Calendar1 className='w-8 h-8 md:w-6 md:h-6 text-ttymi-green' />
            <p className='text-[1.75rem] font-semibold m-[0_1.5rem_0_0.5rem]'>{date.toLocaleDateString('fi-FI', {})}</p>
            <Clock className='w-8 h-8 md:w-6 md:h-6 text-ttymi-green' />
            <p className='text-[1.75rem] font-semibold m-[0_1.5rem_0_0.5rem]'>
              {date.toLocaleTimeString('fi-FI', {
                hour12: false,
                hour: 'numeric',
                minute: 'numeric',
                timeZone: 'UTC',
              })}
            </p>
          </div>
          <p className='text-2xl font-medium leading-[1.45] whitespace-pre-wrap max-[768px]:text-[1.25rem]'>
            {event?.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
