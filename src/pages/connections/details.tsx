import React from 'react';
import { GetServerSidePropsContext } from 'next';
import {
  Connection,
  ConnectionsResponse,
  Section,
} from '@/Types/LocationsTypes';
import styles from '@/styles/LocationList.module.scss';
import axios from 'axios';
import TripDetailsCard from '@/components/Cards/TripDetailsCard';
import Link from 'next/link';

type Props = {
  data: Connection;
  departure: string;
  destination: string;
  total: any;
};
const ConnectionDetails = ({ data, departure, destination, total }: Props) => {
  console.log('Details: ', total);

  if (!data || !Object.keys(data).length) return <div>No details</div>;

  const lastIndex = data?.sections.length - 1;

  return (
    <div className={styles.connections__container}>
      <div className={styles.header__container}>
        <h3>{`Details for trip from ${departure} to ${destination} on ${new Date().toDateString()}. `}</h3>
        <div>
          <Link
            href={`/connections?departure=${departure}&destination=${destination}`}
            passHref
          >
            BACK
          </Link>
        </div>
      </div>
      <div className={styles.locationCardsList}>
        {data?.sections.map((section: Section, index: number) => (
          <>
            <TripDetailsCard
              section={section}
              index={index}
              lastIndex={lastIndex}
            />
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
  const { from, to, date, time, duration } = context.query;
  console.log(
    `http://transport.opendata.ch/v1/connections?from=${from}&to=${to}&date=${date}&time=${time}`
  );

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

  const connection = data.connections.find((c) => c.duration === duration);

  return {
    props: {
      data: connection || {},
      departure: from,
      destination: to,
      total: data.connections,
    },
  };
}
