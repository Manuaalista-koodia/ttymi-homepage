'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { EventType } from '../../../types';
import { getImgComponent } from '../../../utils';
import styles from './Event.module.scss';

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
  const router = useRouter();
  const event: EventType | null = await getEvent(params.id);
  if (!event) return null;

  const date = new Date(event.datetime);

  return (
    <div className={styles.event}>
      <div className={styles.event__container}>
        {/*<div className={styles.event__back} onClick={() => router.back()}>
          <Image className={styles.event__back__icon} src={require('../../../public/arrow-left.png')} alt='calendar' />
        </div>*/}
        <div className={styles.event__image}>{getImgComponent(event)}</div>
        <div className={styles.event__content}>
          <h1 className={styles.event__title}>{event?.title}</h1>
          <div className={styles.event__date}>
            <Image src={require('../../../public/calendar.png')} alt='calendar' />
            <p className={styles.event__date__text}>{date.toLocaleDateString('fi-FI', {})}</p>
            <Image src={require('../../../public/clock.png')} alt='location' />
            <p className={styles.event__date__text}>
              {date.toLocaleTimeString('fi-FI', {
                hour12: false,
                hour: 'numeric',
                minute: 'numeric',
                timeZone: 'UTC',
              })}
            </p>
          </div>
          <p className={styles.event__text}>{event?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
