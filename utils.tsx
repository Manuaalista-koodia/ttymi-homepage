/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { EventType } from '@/types';

// Returns either placeholder image or image from pocketbase
export const getImgComponent = (event: EventType) => {
  if (!event.image) {
    return <Image src={require('./public/placeholder.png')} alt={`${event.title}-image`} />;
  }
  return <img src={`http://127.0.0.1:8090/api/files/events/${event.id}/${event.image}`} alt={`${event.title}-image`} />;
};
