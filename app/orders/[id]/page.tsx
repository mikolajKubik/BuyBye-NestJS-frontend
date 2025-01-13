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
      // next: { revalidate: 0 }
  });
    if (!res.ok) return null
    //console.log(res.json())
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
      
      {/* <ProductDataTable data={order.productOrders} columns={columns} /> */}
      <Container className='mt-6 mb-8 '>
      {/* px-0 md:px-4 */}
        {/* <MagicCardDemo /> */}
        <CardGridLayout data={order}/>
      </Container>
      {/* <InnerCardDemo />

      <div> .</div>
      <DefaultCardDemo />

      <div className="grid grid-rows-2 gap-4 h-[500px] md:h-[400px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DefaultCardDemo />
        <DefaultCardDemo />
        <DefaultCardDemo />
        </div>
      </div> */}


    </Container>
  )
}

export default Page



// <div className="space-y-4">
//         <h1 className="text-3xl font-bold">Order #{order.id}</h1>
//         <div className="grid gap-4">
//           <div>
//             <h2 className="font-semibold">Customer Details</h2>
//             <p>Name: {order.username}</p>
//             <p>Email: {order.email}</p>
//             <p>Phone: {order.phone}</p>
//           </div>
//           <div>
//             <h2 className="font-semibold">Order Status</h2>
//             <p>{order.status.name}</p>
//           </div>
//           <div>
//             <h2 className="font-semibold">Products</h2>
//             {order.productOrders.map((item) => (
//               <div key={item.id} className="flex items-center gap-4 py-2">
//                 <div>
//                   <p>{item.product.name}</p>
//                   <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>