import React from 'react';
import { getFeaturedEvents, DUMMY_EVENTS } from '../dummy-data.js';
import EventList from '../components/events/event-list.js';
const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents}></EventList>
    </div>
  );
};

export default HomePage;
