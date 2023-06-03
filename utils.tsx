/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { EventType } from '@/types';
import names from './ttymi-name.json';

// Returns either placeholder image or image from pocketbase
export const getImgComponent = (event: EventType) => {
  if (!event.image) {
    return <Image src={require('./public/placeholder.png')} alt={`${event.title}-image`} />;
  }
  return <img src={`http://127.0.0.1:8090/api/files/events/${event.id}/${event.image}`} alt={`${event.title}-image`} />;
};

export const getTTYMIName = (): string => {
  const words: string[] = [];
  Object.values(names).forEach((key: any) => {
    const word = key[Math.floor(Math.random() * key.length)];
    words.push(word);
  });
  return words.join(' ');
};
