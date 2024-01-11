import ProductSkeleton from '@/components/ProductSkeleton';
import ProductsGrid from '@/components/ProductsGrid';
import React from 'react'

type Props = {}

function loading(props: Props){
  return (
    <div className="min-h-screen p-4">
      <ProductsGrid>
        {Array.from({ length: 12 })
          .fill(1)
          .map((_,index) => <ProductSkeleton key={index}/>
          )}
      </ProductsGrid>
    </div>
  );
}

export default loading