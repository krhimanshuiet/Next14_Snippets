import { getEProduct } from '@/services/getEProduct'
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
type Props = {
    id:string
}

const EProductDetailPage = async ({id}: Props) => {
    const res = await getEProduct(id);
  return (
    <div className="flex flex-row bg-white  w-full  p-2 space-y-2 rounded-lg items-center mt-2 ">
      <div className="h-[20rem] w-1/3 relative">
        <Image
          src={res?.images[0]}
          alt={res.title}
          fill
          className="object-contain aspect-square"
        />
      </div>
      <div className="h-full w-2/3 flex flex-col gap-y-4 items-center justify-evenly">
        <p className="text-2xl font-bold">{res?.brand}</p>
        <p className="text-xl font-semibold">{res?.price}</p>
        <p className="text-xl font-normal text-center">{res?.description}</p>
        <Button className="bg-blue-400 md:w-1/3 w-full text-xs font-bold hover:bg-blue-700" variant="secondary">
          Add to Bag
        </Button>
      </div>
    </div>
  );
}

export default EProductDetailPage