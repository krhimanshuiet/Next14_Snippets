import { Product } from '@/models/product';
import Image from 'next/image'


const ProductComponent = ({image,title,price,category}: Product) => {
  return (
    <div className="bg-white p-4 flex items-center rounded-md  flex-col gap-y-2 h-full">
      <div className="relative w-full h-40">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain aspect-square mix-blend-darken	"
        />
      </div>
      <div className="flex justify-between gap-2">
        <p className="text-xs font-semibold">{title}</p>
        <p className="text-xs font-semibold">&#8377;{Math.ceil(price*82)}</p>
      </div>
      <p className="text-slate-400 text-[10px]">{category}</p>
    </div>
  );
}

export default ProductComponent