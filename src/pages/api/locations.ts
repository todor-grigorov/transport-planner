import type { NextApiRequest, NextApiResponse } from 'next';
import { config } from '@/configs/config';

type Data = {
  from: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const { departure, destination, page } = req.query;
    console.log(departure, destination, page);
    let data = null;

    try {
      const response = await fetch(
        `${
          config.connectionsURL
        }?from=${departure?.toString()}&to=${destination?.toString()}&page=${page}`
      );

      data = await response.json();
    } catch (e) {
      console.log('ERROR', e);
    }

    res.status(200).json(data);
  }
}
