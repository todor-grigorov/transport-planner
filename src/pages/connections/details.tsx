import React from 'react';
import { GetServerSidePropsContext } from 'next';
import { Connection, ConnectionsResponse } from '@/Types/LocationsTypes';
import { Card } from '@mui/material';
import styles from '@/styles/LocationList.module.scss';
import { constructTime } from '@/helpers/common';
import axios from 'axios';

type Props = {
  data: Connection;
};
const ConnectionDetails = ({ data }: Props) => {
  console.log('Details: ', data);

  if (!data) return <div>No details</div>;

  return data?.sections.map((section) => (
    <Card
      key={`${section.arrival.arrival}-${section.departure.departure}`}
      elevation={2}
      className={styles.locationCard}
    >
      <div className={styles.locationCard__topRow}>
        <p>{new Date().toDateString()}</p>
      </div>
      <div className={styles.locationCard__middleRow}>
        <div className={styles.locationCard__middleRow_departureInfo}>
          <p>{constructTime(section.departure.departure)}</p>
          <p>{section.departure.location.name}</p>
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
          <p>{section.arrival.location.name}</p>
        </div>
      </div>
    </Card>
  ));
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
    },
  };
}
