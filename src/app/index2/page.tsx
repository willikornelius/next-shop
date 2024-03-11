'use client';

import Title from '@/components/Title';
import { getProducts2 } from '@/library/products';
import { Metadata } from 'next';
import { useEffect, useState } from 'react';

// const products = [
//   { id: 1, title: 'asdas' },
//   { id: 2, title: 'gg' },
// ];

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

// export const metadata: Metadata = {
//   title: 'My Page Title 2',
// };

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // getProducts2().then(setProducts);

    (async () => {
      const response = await fetch('http://localhost:3000/api');
      const products = await response.json();
      setProducts(products);
    })();
  }, []);
  //   const projects = await getProducts();
  // console.log('[HomePage] render : ', now);
  console.log('[HomePage] render : ', products);
  return (
    <>
      <main className="px-6 py-4">
        <Title> Next Shop</Title>
        <ul>
          {products.map((product: { id: number; title: string }) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default HomePage;
