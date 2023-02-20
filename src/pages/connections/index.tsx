import React from 'react';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import TripCard from '../../components/Cards/TripCard';
import { Connection, ConnectionsResponse } from '../../Types/LocationsTypes';
import styles from '@/styles/LocationList.module.scss';
import Link from 'next/link';

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
    <div className={styles.connections__container}>
      <div className={styles.header__container}>
        <h3>{`Tickets from ${departure} to ${destination} on ${new Date().toDateString()}. `}</h3>
        <div>
          <Link href={'/'}>Edit Search.</Link>
        </div>
      </div>
      <div className={styles.locationCardsList}>
        {connections.map((connection) => (
          <TripCard
            key={`${connection.from.departure}-${connection.to.arrival}`}
            connection={connection}
          />
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
