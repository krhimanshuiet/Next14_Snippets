'server-only'

export async function getProduct(id:string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}` ,{cache:'no-store'});
  return res.json()
}