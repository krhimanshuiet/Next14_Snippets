'server-only'

export async function getEProducts() {
  const res = await fetch('https://dummyjson.com/products',{cache:'no-store'});
  return res.json()
}