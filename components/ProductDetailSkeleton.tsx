import React from 'react'


const ProductDetailSkeleton = () => {
  return (
    <div className="flex flex-col bg-white p-2 gap-y-2  items-center">
      <div className="w-full h-[15rem] rounded bg-slate-200 animate-pulse"/>
      <div className='h-10 w-full bg-slate-200 rounded animate-pulse'/>
      <p className='bg-slate-200 h-20 animate-pulse rounded w-full'/>
      <div className='bg-slate-200 rounded h-5 animate-pulse w-full'/>
    </div>
  );
}

export default ProductDetailSkeleton