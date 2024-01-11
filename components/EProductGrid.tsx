import React from 'react'

type Props = {
    children:React.ReactNode
}

const EProductGrid = ({children}: Props) => {
  return (
    <div className='grid md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 grid-cols-1 gap-4'>{children}</div>
  )
}

export default EProductGrid