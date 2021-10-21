import React from 'react';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data.js';
import EventList from '../../components/events/event-list.js';
import EventSearch from '../../components/events/events-search.js';
const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findsEventsHandler = (year, month) => {
    const path = `events/${year}/${month}`;
    router.push(path);
  };
  return (
    <>
      <EventSearch onSearch={findsEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export default AllEventsPage;
