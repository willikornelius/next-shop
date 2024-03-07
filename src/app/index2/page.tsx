import Title from '@/components/Title';
import getProducts from '@/library/products';
import { log } from 'console';
import { InferGetStaticPropsType } from 'next';
import { Metadata } from 'next';
import React from 'react';

const products = [
  { id: 1, title: 'asdas' },
  { id: 2, title: 'gg' },
];

// export async function getStaticProps(context) {
//   console.log('[getStaticProps] render : ');
//   return { props: { products } };
// }

// export const getStaticProps = async (context) => {
//   console.log('[getStaticProps] render : ');
//   return { props: { products } };
// };

// async function getProjects() {
//   const res = await fetch(`http://localhost:1337/products`, {
//     cache: 'no-store',
//   });
//   const projects = await res.json();

//   return projects;
// }

export const metadata: Metadata = {
  title: 'My Page Title 2',
};

const HomePage = async () => {
  const projects = await getProducts();
  // console.log('[HomePage] render : ', now);
  console.log('[HomePage] render : ');
  return (
    <>
      <main className="px-6 py-4">
        <Title> Next Shop</Title>
        <ul>
          {projects.map((product: { id: number; title: string }) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default HomePage;
