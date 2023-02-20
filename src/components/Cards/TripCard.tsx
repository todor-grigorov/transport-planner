import React from 'react';
import { Card } from '@mui/material';
import { Connection } from '../../Types/LocationsTypes';
import { constructTime, getDate, getTravelTime } from '../../helpers/common';
import styles from '@/styles/LocationList.module.scss';
import Link from 'next/link';

interface ParentProps {
  connection: Connection;
}

type Props = ParentProps;

const TripCard: React.FC<Props> = ({ connection }): JSX.Element => {
  return (
    <Card elevation={2} className={styles.locationCard}>
      <div className={styles.locationCard__topRow}>
        <p>{new Date().toDateString()}</p>
      </div>
      <div className={styles.locationCard__middleRow}>
        <div className={styles.locationCard__middleRow_departureInfo}>
          <p>{constructTime(connection.from.departure)}</p>
          <p>{connection.from.location.name}</p>
        </div>
        <div className={styles.locationCard__middleRow_journeyInfo}>
          <p>{getTravelTime(connection.duration)}</p>
          <div className={styles.durationLine}>
            <div></div>
            <div></div>
          </div>
          <p>
            {connection.transfers > 0
              ? `${connection.transfers} Change`
              : 'Direct'}
          </p>
        </div>
        <div className={styles.locationCard__middleRow_destinationInfo}>
          <p>{constructTime(connection.to.arrival)}</p>
          <p>{connection.to.location.name}</p>
        </div>
      </div>
      <div className={styles.locationCard__bottomRow}>
        <Link
          href={{
            pathname: 'connections/details',
            query: {
              from: connection.from.location.name,
              to: connection.to.location.name,
              date: getDate(connection.from.departure),
              time: constructTime(connection.from.departure),
            },
          }}
        >
          <span>View journey details</span>
        </Link>
      </div>
    </Card>
  );
};

export default TripCard;
