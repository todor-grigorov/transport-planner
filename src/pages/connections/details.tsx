import React from 'react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import axios from 'axios';
import {
  Connection,
  ConnectionsResponse,
  Section,
} from '@/Types/LocationsTypes';
import styles from '@/styles/LocationList.module.scss';
import TripDetailsCard from '../../components/Cards/TripDetailsCard';
import { config } from '../../configs/config';

type Props = {
  data: Connection;
  departure: string;
  destination: string;
};
const ConnectionDetails = ({ data, departure, destination }: Props) => {
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
  // console.log(
  //   `http://transport.opendata.ch/v1/connections?from=${from}&to=${to}&date=${date}&time=${time}`
  // );

  let response = null;

  try {
    /**
     * Gets Connections from API
     */
    response = await axios.get(
      `${config.connectionsURL}?from=${from}&to=${to}&date=${date}&time=${time}`
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
    },
  };
}
