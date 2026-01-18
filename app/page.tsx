import React, { Suspense } from 'react';
import { EventType } from '@/types';
import { EventCard } from '@/components/Events/EventCard';
import { LandingSection } from '@/components/Home/LandingSection';
import { InfoBubble } from '@/components/Home/InfoBubble';
import { EventsSection } from '@/components/Home/EventsSection';

// Gets 3 latest events from pocketbase. Also sorts them by date.
const getEvents = async () => {
  try {
    const res = await fetch(
      'https://ttymi-homepage.pockethost.io/api/collections/events/records?page=1&perPage=3&sort=-datetime',
      {
        cache: 'no-store',
      },
    );
    const data = await res.json();
    return data?.items as EventType[];
  } catch (e) {
    return [];
  }
};

const LoadingEvents = () => {
  return (
    <div className='flex flex-col items-center lg:flex-row lg:justify-center gap-8'>
      {[1, 2, 3].map((_, i) => (
        <div key={i} className='bg-gray-300 rounded-2xl w-full h-48 md:h-64 lg:w-[28rem] lg:h-[35rem] animate-pulse' />
      ))}
    </div>
  );
};

const HomePage = async () => {
  const events: EventType[] = await getEvents();

  return (
    <div className='bg-ttymi-gradient bg-cover font-montserrat min-h-screen'>
      {/* Landing Section */}
      <LandingSection />

      {/* Info Bubble Section */}
      <InfoBubble />

      {/* Events Section */}
      <EventsSection>
        <Suspense fallback={<LoadingEvents />}>
          {events.length > 0 ? (
            events?.map((event) => {
              return <EventCard key={`event-${event.id}`} event={event} />;
            })
          ) : (
            <p>404 Tapahtumien haku epäonnistui...</p>
          )}
        </Suspense>
      </EventsSection>
    </div>
  );
};

export default HomePage;
