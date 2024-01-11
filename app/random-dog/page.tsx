import React from 'react'
import Image from 'next/image';
type Props = {}


// export const revalidate = 3;  caching , updates in every 3 sec
// export const dynamic = "force-dynamic"  always gives updated data on update

export default async function RandomDogPage(){
    const catImgPromise1 = await fetch('https://api.thecatapi.com/v1/images/search',{next:{revalidate:3}})
    const catImgPromise2 = await fetch('https://api.thecatapi.com/v1/images/search',{next:{revalidate:6}})
    const cat1 = await catImgPromise1.json();
    const cat2 = await catImgPromise2.json();

  return (
    <div className='flex justify-center flex-col items-center gap-4'>
        <span>{Math.floor(Date.now()/1000)}</span>
        <div className='flex gap-4'>
        <Image src={cat1[0].url} alt='dog-image' width={cat1[0].width} height={cat1[0].height}/>
        <Image src={cat2[0].url} alt='dog-image' width={cat2[0].width} height={cat2[0].height}/>
        </div>
    </div>
  )
}

