import Container from '@/components/ui/container'
import { DataTable } from '@/app/orders/data-table';
import React from 'react'
import { Button } from '@/components/ui/button';
import { RefreshCcw } from "lucide-react"
import { revalidatePath } from 'next/cache'
import { Order, columns } from './columns';

async function getOrders(): Promise<Order[]> {
  const res = await fetch('http://localhost:3000/orders', {
      // Prevent caching
      cache: 'no-store',
  });
  if (!res.ok) {
      throw new Error('Failed to fetch orders');
  }
  const data = await res.json();
  return data;
}

export async function refreshData() {
  'use server'
  revalidatePath('/orders');
}

export function RefreshTable() {
  return (
      <div className='mb-2'>

          <form action={refreshData}>
              <Button
                  variant="outline"
                  size="icon"
                  type="submit"
              >
                  <RefreshCcw className="h-4 w-4 "/>
              </Button>
          </form>
      </div>

  )
}

export default async function Page() {
  const data = await getOrders();
  console.log("creating page component...");
    return (
        <Container className='mt-6 mb-8'>
          <section className="">

              <div className="container mx-auto ">
                      <h1 className="text-3xl font-bold mb-2">All Orders</h1> 
                      <RefreshTable />

                  <DataTable columns={columns} data={data} />
              </div>
          </section>
      </Container>
  )
    
}
