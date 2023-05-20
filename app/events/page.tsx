import Link from 'next/link';
import Image from 'next/image';
import styles from './Events.module.scss';
import { getImgComponent } from '@/utils';
import { EventType } from '@/types';

const getEvents = async () => {
  const res = await fetch('http://127.0.0.1:8090/api/collections/events/records?sort=-datetime', { cache: 'no-store' });
  const data = await res.json();
  return data?.items as EventType[];
};

const Event = ({ event }: { event: EventType }) => {
  const date = new Date(event.datetime);
  return (
    <Link className={styles.event} href={`/events/${event.id}`}>
      <div className={styles.event__image}>{getImgComponent(event)}</div>
      <div className={styles.event__content}>
        <h2 className={styles.event__title}>{event.title}</h2>
        <div className={styles.event__date}>
          <Image className={styles.event__date__icon} src={require('../../public/calendar.png')} alt='calendar' />
          <p className={styles.event__date__text}>{date.toLocaleDateString('fi-FI', {})}</p>
          <Image className={styles.event__date__icon} src={require('../../public/clock.png')} alt='location' />
          <p className={styles.event__date__text}>
            {date.toLocaleTimeString('fi-FI', {
              hour12: false,
              hour: 'numeric',
              minute: 'numeric',
              timeZone: 'UTC',
            })}
          </p>
        </div>
        <p className={styles.event__text}>{event.content}</p>
      </div>
    </Link>
  );
};

const EventsPage = async () => {
  const events = await getEvents();

  return (
    <div className={styles.events}>
      <div className={styles.events__container}>
        <h1 className={styles.events__title}>TAPAHTUMAT</h1>
        {events?.map((event) => {
          return <Event key={event.id} event={event} />;
        })}
      </div>
    </div>
  );
};

export default EventsPage;
