'server-only'

export async function getEProduct(id:string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json()
}