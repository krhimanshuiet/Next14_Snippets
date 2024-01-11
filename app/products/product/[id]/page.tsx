import React from 'react'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import EProductDetailPage from '@/components/EProductDetailPage'
type Props = {
    params:{id:string}
}

const ProductPage = ({params:{id}}: Props) => {
  return (
    <div className='min-h-screen p-2 max-w-[1366px] w-full mx-auto'>
      <Link href="/products" className="flex items-center text-blue-400">
        <ArrowLeftIcon height={30} width={30}/>
        <span>All products</span>
      </Link>
      <EProductDetailPage id={id}/>
    </div>
  );
}

export default ProductPage;