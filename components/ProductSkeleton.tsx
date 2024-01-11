import React from 'react'


const ProductSkeleton = () => {
  return (
    <div className="bg-white p-2 flex items-center rounded-md  flex-col gap-y-4 h-full">
      <div className="w-full h-[10rem] rounded bg-slate-200 animate-pulse" />
      <div className="bg-slate-200 rounded h-10 animate-pulse w-full" />
      <p className="bg-slate-200 rounded h-5 animate-pulse w-full" />
    </div>
  );
}

export default ProductSkeleton