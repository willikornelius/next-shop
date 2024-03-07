function stripProduct(product: { id: number; title: string }) {
  return {
    id: product.id,
    title: product.title,
  };
}

const getProducts = async () => {
  const res = await fetch(`http://localhost:1337/products`, {
    cache: 'no-store',
  });
  const projects = await res.json();

  return projects.map(stripProduct);
};

export default getProducts;
