import React from 'react';
import { Card } from '@mui/material';
import { Connection } from '../../Types/LocationsTypes';
import { constructTime } from '../../helpers/common';
import styles from '@/styles/LocationList.module.scss';

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
          <p>{connection.duration}</p>
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
        <div>
          <span>View journey details</span>
        </div>
      </div>
    </Card>
  );
};

export default TripCard;
