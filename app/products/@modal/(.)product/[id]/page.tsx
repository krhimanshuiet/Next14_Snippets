import EProductDetailPage from '@/components/EProductDetailPage'
import Modal from '@/components/Modal'
import React from 'react'

type Props = {
    params:any
}

const page = ({params}: Props) => {
  return (
    <Modal closeHref='/products'>
        <EProductDetailPage id={params?.id}/>
    </Modal>
  )
}

export default page