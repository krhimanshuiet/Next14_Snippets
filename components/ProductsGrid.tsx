import React from 'react'

type Props = {
    children:React.ReactNode
}

const ProductsGrid = ({children}: Props) => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
        {children}
    </div>
  )
}

export default ProductsGrid