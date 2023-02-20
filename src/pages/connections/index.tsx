import React from 'react';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { Connection, ConnectionsResponse } from '@/Types/LocationsTypes';
import styles from '@/styles/LocationList.module.scss';
import { Card } from '@mui/material';

type Props = {
  data: ConnectionsResponse;
  departure: string;
  destination: string;
};

const ConnectionsList: React.FC<Props> = ({
  data,
  departure,
  destination,
}: Props) => {
  console.log(data);
  const { connections } = data;
  return (
    // data.map(locations => )

    <div className={styles.connections__container}>
      <div className={styles.header__container}>
        <h3>{`Tickets from ${departure} to ${destination} on ${new Date().toDateString()}. `}</h3>
        <div>
          <span>Edit Search.</span>
        </div>
      </div>
      <div className={styles.locationCardsList}>
        {connections.map((connection) => (
          <Card elevation={2} className={styles.locationCard}>
            <div className={styles.locationCard__topRow}>
              <span>{new Date().toDateString()}</span>
            </div>
            <div className={styles.locationCard__middleRow}>
              <div className={styles.locationCard__middleRow_departureInfo}>
                <p>
                  {`${new Date(
                    connection.from.departureTimestamp
                  ).getHours()}:${new Date(
                    connection.from.departureTimestamp
                  ).getMinutes()}`}
                </p>
                <p>{connection.from.location.name}</p>
              </div>
              <div className={styles.locationCard__middleRow_journeyInfo}>
                <div className={styles.durationLine}>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className={styles.locationCard__middleRow_destinationInfo}>
                <p>
                  {`${new Date(
                    connection.to.arrivalTimestamp
                  ).getHours()}:${new Date(
                    connection.to.arrivalTimestamp
                  ).getMinutes()}`}
                </p>
                <p>{connection.from.location.name}</p>
              </div>
            </div>
            <div className={styles.locationCard__bottomRow}></div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ConnectionsList;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { departure, destination } = context.query;
  // const { data } = context.query;
  let response = null;

  try {
    response = await axios.get(
      `http://transport.opendata.ch/v1/connections?from=${departure?.toString()}&to=${destination?.toString()}`
    );
  } catch (e) {
    console.log('ERROR', e);
  }

  if (!response) return { props: { data: null } };

  const { data }: { data: Connection } = response;

  return {
    props: {
      data,
      departure,
      destination,
    },
  };
}
