import { EProduct } from '@/models/EProduct'
import React from 'react'
import Image from 'next/image'


const EProductComponent = ({images,title,price,brand,category}:EProduct) => {
  return (
    <div className="flex flex-col bg-white items-center rounded-lg gap-2 p-2">
      <div className="relative w-full  h-[20rem]">
        <Image
          src={images[0]}
          alt={title}
          fill
          className="object-contain mix-blend-darken aspect-square rounded-xl"
        />
      </div>
      <div className="flex justify-between w-full">
        <p className="text-xl font-bold">{brand}</p>
        <p className="text-xl font-bold">&#8377;{price}</p>
      </div>
      <p className="text-2xl font-semibold text-slate-400">{category}</p>
    </div>
  );
}

export default EProductComponent;