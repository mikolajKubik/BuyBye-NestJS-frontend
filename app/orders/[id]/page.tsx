import Container from '@/components/ui/container'
import { notFound } from 'next/navigation'
import React from 'react'

// Making the component async
const Page = async ({ params }: { params: { id: string } }) => {
  // You can now use await here if needed
  // For example:
  const { id } = await params

  if (id === '123') {
    notFound()
  }

  return (
    <>
      <Container>
        <div>
          Product ID: {id}
        </div>
        <div>page</div>
      </Container>
    </>
  )
}

export default Page