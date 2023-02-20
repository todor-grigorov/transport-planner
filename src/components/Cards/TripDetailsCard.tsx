import React from 'react';
import styles from '@/styles/LocationList.module.scss';
import { constructTime } from '@/helpers/common';
import { Card } from '@mui/material';
import { Section } from '@/Types/LocationsTypes';

interface ParentProps {
  section: Section;
  index: number;
  lastIndex: number;
}

type Props = ParentProps;

const MyComponent: React.FC<Props> = ({
  section,
  index,
  lastIndex,
}: Props): JSX.Element => {
  return (
    <Card
      key={`${section.arrival.arrival}-${section.departure.departure}`}
      elevation={4}
      className={`${styles.locationCard} ${styles.smallMarginBottom} ${styles.lightGreyBackground}`}
    >
      <div className={styles.locationCard__topRow}>
        <p>{new Date().toDateString()}</p>
      </div>
      <div className={styles.locationCard__middleRow}>
        <div className={styles.locationCard__middleRow_departureInfo}>
          <p>{constructTime(section.departure.departure)}</p>
          <p style={{ fontWeight: index === 0 ? 700 : 500 }}>
            {section.departure.location.name}
          </p>
        </div>
        <div className={styles.locationCard__middleRow_journeyInfo}>
          {/*<p>{getTravelTime(connection.duration)}</p>*/}
          <div
            className={`${styles.durationLine} ${styles.details_durationLine}`}
          >
            <div></div>
            <div></div>
          </div>
          <p>Direct</p>
        </div>
        <div className={styles.locationCard__middleRow_destinationInfo}>
          <p>{constructTime(section.arrival.arrival)}</p>
          <p style={{ fontWeight: index === lastIndex ? 700 : 500 }}>
            {section.arrival.location.name}
          </p>
        </div>
      </div>
      <div className={styles.locationCard__bottomRow_trackInfo}>
        <div>
          <p>{`Track: ${section.departure.platform}`}</p>
          <p>{`Train: ${section.journey.number}`}</p>
        </div>
        <div>
          <p>{`Track: ${section.arrival.platform}`}</p>
        </div>
      </div>
    </Card>
  );
};

export default MyComponent;
