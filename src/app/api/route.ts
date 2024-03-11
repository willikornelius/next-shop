import { getProducts } from '@/library/products';
import { NextApiRequest, NextApiResponse } from 'next';

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   //   const products = await getProducts();
//   res.status(200).json({ name: 'asd' });
// };

type Data = {
  name: string;
  age: number;
};

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'asd', age: 13 });
// }

// export default handler;

// export async function GET(request: Request) {

//   return Response.json({ nama: 'sadsa' });
// }

import React from 'react';

export const GET = async (request: Request) => {
  return Response.json([{ id: 1, title: 'sadsa' }]);
};
