function stripProduct(product: { id: number; title: string }) {
  return {
    id: product.id,
    title: product.title,
  };
}

export const getProducts = async () => {
  const res = await fetch(`http://localhost:1337/products`, {
    cache: 'force-cache',
    next: { revalidate: 30 },
  });
  const projects = await res.json();

  return projects.map(stripProduct);
};

export const getProducts2 = async () => {
  const res = await fetch(`http://localhost:1337/products`);
  const projects = await res.json();

  return projects.map(stripProduct);
};

export const getProduct = async (id: number) => {
  const res = await fetch(`http://localhost:1337/products/${id}`);
  console.log('asdas', JSON.stringify(res));

  const product = await res.json();
  console.log('asdas', product);

  return stripProduct(product);
};

// export default getProducts;
