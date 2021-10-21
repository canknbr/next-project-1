import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data.js';
import EventSummary from '../../components/event-detail/event-summary.js';
import EventLogistics from '../../components/event-detail/event-logistics.js';
import EventContent from '../../components/event-detail/event-content.js';
const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  console.log(eventId);
  const event = getEventById(eventId);

  if (!event) {
    return <h1>event not found</h1>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title}></EventSummary>
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />

      <EventContent>
        <h1>{event.description}</h1>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailPage;
