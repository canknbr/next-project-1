import React from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data.js';
import Button from '../../components/ui/button.js';
import EventList from '../../components/events/event-list.js';
import ResultTitle from '../../components/results-title/results-title.js';
const FilteredEventPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading</p>;
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1][0];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <p>no events found</p>;
        <div className="center">
          <Button link="/events">Show Events</Button>
        </div>
      </>
    );
  }
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <p>no events found</p>;
        <div className="center">
          <Button link="/events">Show Events</Button>
        </div>
      </>
    );
  }
  const date = new Date(numYear, numMonth - 1);
  return (
    <>
      <ResultTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventPage;
