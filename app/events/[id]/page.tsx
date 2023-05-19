import { EventType } from '../../../types';

const getEvent = async (eventId: string) => {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/events/records/${eventId}`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data as EventType;
};

const EventPage = async ({ params }: any) => {
  const event: EventType = await getEvent(params.id);

  return (
    <div>
      <h1>{event?.title}</h1>
      <p>{event?.content}</p>
    </div>
  );
};

export default EventPage;
