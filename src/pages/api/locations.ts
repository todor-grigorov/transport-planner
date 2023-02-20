import type { NextApiRequest, NextApiResponse } from 'next';

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
    let data = null;

    try {
      const response = await fetch(
        `http://transport.opendata.ch/v1/connections?from=${departure?.toString()}&to=${destination?.toString()}`
      );

      data = await response.json();
    } catch (e) {
      console.log('ERROR', e);
    }

    res.status(200).json(data);
  }
}
