import Modal from '@/components/Modal';
import ProductComponent from '@/components/Product';
import ProductDetail from '@/components/ProductDetail';
import ProductDetailSkeleton from '@/components/ProductDetailSkeleton';
import ProductsGrid from '@/components/ProductsGrid';
import { HomePage } from '@/models/HomePage';
import { Product } from '@/models/product';
import { getProducts } from '@/services/products'
import Link from 'next/link';
import { Suspense } from 'react';

export default async function Home({params,searchParams:{product:id}}:HomePage) {
  const products = await getProducts();
  return (
    <main className="min-h-screen p-4">
      <ProductsGrid>
        {products.map((product: Product) => (
          <Link key={product.id} href={`?product=${product.id}`} scroll={false}>
            <ProductComponent {...product} />
          </Link>
        ))}
      </ProductsGrid>
      {!!id && (
        <Modal closeHref="/">
          <Suspense fallback={<ProductDetailSkeleton/>}>
            <ProductDetail id={id} />
          </Suspense>
        </Modal>
      )}
    </main>
  );
}
