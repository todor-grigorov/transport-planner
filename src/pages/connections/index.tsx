import React, { SyntheticEvent, useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import TripCard from '../../components/Cards/TripCard';
import { Connection, ConnectionsResponse } from '../../Types/LocationsTypes';
import styles from '@/styles/LocationList.module.scss';
import Link from 'next/link';
import Button from '../../components/Cards/Button';
import { PaginationButtonText } from '@/Types/PaginationButtonText';

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
  const { connections } = data;

  const [page, setPage] = useState(0);

  const pageButtonsHandler = (
    e: SyntheticEvent<HTMLButtonElement, MouseEvent>,
    text: string
  ) => {
    console.log(e);
    if (text === PaginationButtonText.NEXT) {
      console.log('Next');
    } else {
      console.log('Previous');
    }
  };

  return (
    <div className={styles.connections__container}>
      <div className={styles.header__container}>
        <h3>{`Tickets from ${departure} to ${destination} on ${new Date().toDateString()}. `}</h3>
        <div>
          <Link href={'/'} passHref>
            Edit Search.
          </Link>
        </div>
      </div>
      <div className={styles.locationCardsList}>
        {connections.map((connection) => (
          <TripCard
            key={`${connection.from.departure}-${connection.to.arrival}`}
            connection={connection}
          />
        ))}
        <div className={styles.buttons__container}>
          <Button text={'Previous'} handler={pageButtonsHandler} />
          <Button text={'Next'} handler={pageButtonsHandler} />
        </div>
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
