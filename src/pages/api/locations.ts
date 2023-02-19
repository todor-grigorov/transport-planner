import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  from: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    console.log(res);
    const { departure, destination } = req.query;

    const response = await axios.get(
      `http://transport.opendata.ch/v1/connections?from=${departure?.toString()}&to=${destination?.toString()}`
    );

    console.log(response.data.connections);
  }
}
