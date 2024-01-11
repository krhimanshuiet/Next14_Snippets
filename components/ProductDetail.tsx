import { Product } from '@/models/product';
import { getProduct } from '@/services/getProduct'
import Image from 'next/image';
type Props = {
    id:string
}

const ProductDetail = async ({id}:Props) => {
    const res:Product = await getProduct(id);
    const {image,title,description,rating,price} = res;
  return (
    <div className="flex flex-col p-2 gap-y-2  items-center">
      <div className="relative w-full h-[15rem]">
        <Image
          src={image}
          alt={title}
          className="object-contain aspect-auto"
          fill
        />
      </div>
      <div className="flex justify-between w-full">
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-xl font-semibold">
          <span>&#8377;</span>
          {price}
        </p>
      </div>
      <p className="block text-xs font-light">{description}</p>
      <div className="flex  w-full justify-between">
        <p className="text-2xl font-light text-slate-400">{rating.rate}</p>
        <p className="text-2xl font-bold text-slate-400">{rating.count}</p>
      </div>
    </div>
  );
}

export default ProductDetail