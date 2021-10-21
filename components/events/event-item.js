import React from 'react';
import DateIcon from '../icons/date-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import AddressIcon from '../icons/address-icon.js';
import Button from '../ui/button.js';
import styles from './event-item.module.css';
const EventItem = props => {
  const { title, image, date, location, id } = props;
  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAdress = location.replace(' ', '\n');
  const exploreLink = `events/${id}`;

  return (
    <li className={styles.item}>
      <img src={`/${image}`} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon></DateIcon>
            <time>{readableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon></AddressIcon>
            <address>{formattedAdress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore</span>
            <span className={styles.icon}>
              <ArrowRightIcon></ArrowRightIcon>
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
