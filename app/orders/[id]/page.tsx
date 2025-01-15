import Container from '@/components/ui/container'
import { notFound } from 'next/navigation'
import React from 'react'
// import { Order } from '../columns'
import { Order } from './type'
import { MagicCard } from '@/components/ui/magic-card'
import { MagicCardDemo } from './test-card'
import { DefaultCardDemo, InnerCardDemo, LiftedCardDemo, PlusCardDemo } from './test-card2'
import { CardGridLayout } from './test-card3'
import { ProductDataTable } from './data-table'
import { columns } from './columns'


async function getOrder(id: string): Promise<Order | null> {
  try {
    const res = await fetch(`http://localhost:3000/orders/${id}`, {
      // Prevent caching
      cache: 'no-store',
  });
    if (!res.ok) return null
    return res.json()
  } catch (error) {
    return null
  }
}

const Page = async ({ params }: { params: { id: string } }) => {
  const order = await getOrder(params.id)

  if (!order) {
    notFound()
  }

  return (
    <Container className='mt-6 mb-8'>
      <Container className='mt-6 mb-8 '>
        <CardGridLayout data={order}/>
      </Container>
    </Container>
  )
}

export default Page