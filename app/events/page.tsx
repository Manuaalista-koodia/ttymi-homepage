import Link from 'next/link';

const getEvents = async () => {
  const res = await fetch('http://127.0.0.1:8090/api/collections/events/records', { cache: 'no-store' });
  const data = await res.json();
  return data?.items as any[];
};

const Event = ({ event }: any) => {
  const { id, title, content, image, datetime } = event || {};
  return (
    <Link href={`/events/${id}`}>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </Link>
  );
};

const EventsPage = async () => {
  const events = await getEvents();

  return (
    <div>
      <h1>Events</h1>

      <div>
        {events?.map((event) => {
          return <Event key={event._id} event={event} />;
        })}
      </div>
    </div>
  );
};

export default EventsPage;
