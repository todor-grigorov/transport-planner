import React from 'react';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { Locations } from '@/Types/LocationsTypes';

type Props = {
  data: Locations;
};

const ConnectionsList: React.FC<Props> = ({ data }: Props) => {
  console.log(data);
  return (
    // data.map(locations => )
    <div></div>
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

  const { data }: { data: Locations } = response;

  return {
    props: {
      data,
    },
  };
}
