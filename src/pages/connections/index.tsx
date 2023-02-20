import React, { SyntheticEvent, useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import TripCard from '../../components/Cards/TripCard';
import { Connection, ConnectionsResponse } from '../../Types/LocationsTypes';
import styles from '@/styles/LocationList.module.scss';
import Link from 'next/link';
import Button from '../../components/Cards/Button';
import { PaginationButtonText } from '@/Types/PaginationButtonText';
import { LinearProgress } from '@mui/material';

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
  const [allData, setAllData] = useState(data);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const { connections } = allData;

  const pageButtonsHandler = async (
    e: SyntheticEvent<HTMLButtonElement, MouseEvent>,
    text: string
  ) => {
    setLoading(true);
    let tempData = null;

    let tempPage = text === PaginationButtonText.NEXT ? page + 1 : page - 1;
    if (page > 3) tempPage = 3;
    if (page < 0) tempPage = 0;

    try {
      const res = await fetch(
        `/api/locations?departure=${departure}&destination=${destination}&page=${tempPage}`
      );
      tempData = await res.json();
      setPage(tempPage);
      setAllData(tempData);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log('ERROR', e);
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
        {connections?.map((connection) => (
          <TripCard
            key={`${connection.from.departure}-${connection.to.arrival}`}
            connection={connection}
          />
        ))}
        <div className={styles.buttons__container}>
          <Button
            text={'Previous'}
            handler={pageButtonsHandler}
            loading={loading}
            visibility={page > 0}
          />
          <p>{`Page ${page + 1}`}</p>
          <Button
            text={'Next'}
            handler={pageButtonsHandler}
            loading={loading}
            visibility={page <= 2}
          />
        </div>
      </div>
      {loading ? (
        <div className={styles.loader}>
          <LinearProgress />
        </div>
      ) : null}
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
