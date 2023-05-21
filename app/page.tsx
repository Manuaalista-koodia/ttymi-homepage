import Link from 'next/link';
import Image from 'next/image';
import styles from './Home.module.scss';
import { EventType } from '@/types';
import { getImgComponent } from '@/utils';

// Gets 3 latest events from pocketbase. Also sorts them by date.
const getEvents = async () => {
  try {
    const res = await fetch('http://127.0.0.1:8090/api/collections/events/records?page=1&perPage=3&sort=-datetime', {
      cache: 'no-store',
    });
    const data = await res.json();
    return data?.items as EventType[];
  } catch (e) {
    return [];
  }
};

const EventCard = ({ event }: { event: EventType }) => {
  const date = new Date(event.datetime);
  return (
    <Link className={styles.event} href={`events/${event.id}`}>
      <div className={styles.event__image}>{getImgComponent(event)}</div>
      <div className={styles.event__content}>
        <div className={styles.event__title}>{event.title}</div>
        <div className={styles.event__date}>
          <Image className={styles.event__date__icon} src={require('../public/calendar.png')} alt='calendar' />
          <p className={styles.event__date__text}>{date.toLocaleDateString('fi-FI', {})}</p>
          <Image className={styles.event__date__icon} src={require('../public/clock.png')} alt='location' />
          <p className={styles.event__date__text}>
            {date.toLocaleTimeString('fi-FI', {
              hour12: false,
              hour: 'numeric',
              minute: 'numeric',
              timeZone: 'UTC',
            })}
          </p>
        </div>
        <div className={styles.event__text}>{event.content}</div>
      </div>
    </Link>
  );
};

const HomePage = async () => {
  const events = await getEvents();
  return (
    <div className={styles.home}>
      <div className={styles.landing}>
        <div className={styles.landingContent}>
          <div className={styles.landingContent__title}>
            <h1 className={styles.landingContent__title__ttymi}>TTYMI</h1>
            <h1 className={styles.landingContent__title__ry}>ry</h1>
          </div>
          <div className={styles.landingContent__subtitle}>
            <p>
              Tampereen Tonnikalan Ystävät Maistelemassa Imersiivisesti on Tampereella toimiva opiskelijakerho.
              Manuaalista menoa jo vuodesta 2015!
            </p>
          </div>

          <Link
            className={styles.landingContent__button}
            href='https://drive.google.com/file/d/1zLCdRl9WED5RuoAI4pxzqx-bT6y77trI/view'
            target='_blank'
          >
            <div className={styles.landingContent__button__triangle}></div>
            <p className={styles.landingContent__button__text}>JÄSENEKSI?</p>
          </Link>
        </div>

        <Image className={styles.landing__image} src={require('../public/kyssäri.png')} alt='question-mark' />
      </div>

      <div className={styles.infoBubble}>
        <div className={styles.infoBubble__container}>
          <Image className={styles.infoBubble__image} src={require('../public/logo-bg.png')} alt='logo-bg' />

          <div className={styles.infoBubble__content}>
            <h1 className={styles.infoBubble__title}>MIKÄ IHMEEN TTYMI?</h1>
            <p className={styles.infoBubble__text}>
              TTYMI ry on Hervannasta lähtöinen opiskelijakerho. TTYMI on mukana tekemässä Tamperelaista
              opiskelijayhteisöä mm. järjestämällä erilaisia tapahtumia. Ydintoimintaamme onkin kaikille avoimien
              Teekkarivisan järjestäminen. TTYMI osallistuu ahkerasti myös ylioppilaskunnan ja teekkariyhdistyksen
              tapahtumiin, kuten erilaisiin rastikierroksiin ja tietenkin Wappuun! Jäsenemme voit tunnistaa vihreistä
              liiveistä ja manuaalisesta menosta.
            </p>
            <p className={styles.infoBubble__text}>Voit seurata toimintaamme parhaiten Instagramista!</p>
          </div>
        </div>
      </div>

      <div className={styles.events}>
        <div className={styles.events__container}>
          <h1 className={styles.events__title}>TAPAHTUMAT</h1>
          <div className={styles.events__content}>
            {events.length > 0 ? (
              events?.map((event) => {
                return <EventCard key={`event-${event.id}`} event={event} />;
              })
            ) : (
              <p>404 Tapahtumien haku epäonnistui...</p>
            )}
          </div>

          <Link className={styles.events__button} href={'/events'}>
            <div className={styles.events__button__triangle}></div>
            <p className={styles.events__button__text}>LISÄÄ?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
