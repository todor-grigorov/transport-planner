import React from 'react';
import { GetServerSidePropsContext } from 'next';
import {
  Connection,
  ConnectionsResponse,
  Section,
} from '@/Types/LocationsTypes';
import { Card } from '@mui/material';
import styles from '@/styles/LocationList.module.scss';
import { constructTime } from '@/helpers/common';
import axios from 'axios';
import Link from 'next/link';

type Props = {
  data: Connection;
  departure: string;
  destination: string;
};
const ConnectionDetails = ({ data, departure, destination }: Props) => {
  console.log('Details: ', data);

  if (!data) return <div>No details</div>;

  const lastIndex = data?.sections.length - 1;

  return (
    <div className={styles.connections__container}>
      <div className={styles.header__container}>
        <h3>{`Details for trip from ${departure} to ${destination} on ${new Date().toDateString()}. `}</h3>
      </div>
      <div className={styles.locationCardsList}>
        {data?.sections.map((section: Section, index: number) => (
          <>
            <Card
              key={`${section.arrival.arrival}-${section.departure.departure}`}
              elevation={2}
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
                  <div>
                    <p>{`Track: ${section.departure.platform}, `}</p>
                    <p>{`Train: ${section.journey.number}`}</p>
                  </div>
                </div>
                <div className={styles.locationCard__middleRow_journeyInfo}>
                  {/*<p>{getTravelTime(connection.duration)}</p>*/}
                  <div className={styles.durationLine}>
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
                  <div>
                    <p>{`Track: ${section.arrival.platform}`}</p>
                  </div>
                </div>
              </div>
            </Card>
            {index < lastIndex ? (
              <>
                <div className={styles.verticalLine}></div>
                <div className={styles.verticalLine}></div>
                <div className={styles.verticalLine}></div>
                <div className={styles.verticalLine}></div>
                <div className={styles.verticalLine}></div>
              </>
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
};

export default ConnectionDetails;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { from, to, date, time } = context.query;

  let response = null;

  try {
    response = await axios.get(
      `http://transport.opendata.ch/v1/connections?from=${from}&to=${to}&date=${date}&time=${time}`
    );
  } catch (e) {
    console.log('ERROR', e);
  }

  if (!response || !response.data || !response.data.connections.length)
    return { props: { data: null } };

  const { data }: { data: ConnectionsResponse } = response;

  return {
    props: {
      data: data.connections[0],
      departure: from,
      destination: to,
    },
  };
}
