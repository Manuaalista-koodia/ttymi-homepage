import Image from 'next/image';
import { EventType } from '../../../types';
import { getImgComponent } from '../../../utils';
import styles from './Event.module.scss';

const getEvent = async (eventId: string) => {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/events/records/${eventId}`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data as EventType;
};

const EventPage = async ({ params }: any) => {
  const event: EventType = await getEvent(params.id);
  const date = new Date(event.datetime);

  return (
    <div className={styles.event}>
      <div className={styles.event__container}>
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
