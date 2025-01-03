import Container from '@/components/ui/container'
import React from 'react'

// Making the component async
const Page = async ({ params }: { params: { id: string } }) => {
  // You can now use await here if needed
  // For example:
  const { id } = await params

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