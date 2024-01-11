import EProductComponent from '@/components/EProduct';
import EProductGrid from '@/components/EProductGrid';
import { EProduct } from '@/models/EProduct';
import { getEProducts } from '@/services/eProducts';
import React from 'react'
import Link from 'next/link';
export default async function Page(){
  const res = await getEProducts();
  return (
    <div className="min-h-screen p-4">
      <EProductGrid>
        {res?.products?.map((item: EProduct) => (
          <Link key={item.id} scroll={false} href={`/products/product/${item.id}`}>
            <EProductComponent {...item} />
          </Link>
        ))}
      </EProductGrid>
    </div>
  );
}
