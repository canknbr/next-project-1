import React from 'react';
import EventItem from './event-item.js';
import styles from './event-list.module.css';
const EventList = props => {
  const { items } = props;
  return (
    <div className={styles.list}>
      <ul>
        {items.map(item => {
          return <EventItem key={item.id} {...item} />;
        })}
      </ul>
    </div>
  );
};

export default EventList;
