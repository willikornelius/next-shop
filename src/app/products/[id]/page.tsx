import Title from '@/components/Title';
import { getProduct, getProducts } from '@/library/products';
import { Metadata } from 'next';
import Head from 'next/head';
import React from 'react';

export const metadata: Metadata = {
  title: 'Next shop',
};

export const dynamicParams = true;

export async function generateStaticParams() {
  // const products = getProducts
  return [{ id: '1' }, { id: '2' }];
}

const ProductPage = async ({ params: { id } }) => {
  console.log('param ', id);

  const product = await getProduct(id);

  return (
    <>
      <main className="px-6 py-8">
        <Title>{product.title}</Title>
      </main>
    </>
  );
};

export default ProductPage;
