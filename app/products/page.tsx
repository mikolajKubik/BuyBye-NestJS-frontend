// "use client";
import dynamic from 'next/dynamic'
import { DataTable } from '@/app/products/data-table';
import { Product, columns } from './columns'; // Adjust the import path as needed
import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ConfettiButton } from '@/components/ui/confetti';
// const ComponentC = dynamic(() => import('../components/data-table'), { ssr: false })
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { revalidatePath } from 'next/cache'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react";
import { SheetDemo } from './add-product';
import { RefreshCcw } from "lucide-react"
import SidePanelExample from '../test/page';

// Fetch products from the specified API
async function getProducts(): Promise<Product[]> {
    const res = await fetch('http://localhost:3000/products', {
        cache: 'no-store'
    });
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await res.json();
    return data.filter((product: Product) => product.stock > 0);
}


// Add refresh action
export async function refreshData() {
    'use server'
    revalidatePath('/products')
}

// Page component to display the table
export default async function Page() {
    const data = await getProducts();
    console.log("creating page component...");
    return (
        <Container className='mt-6 mb-8'>
            <section className="">

                <div className="container mx-auto ">
                    <div className="flex justify-between items-center mb-2">
                        <h1 className="text-3xl font-bold mb-0  mt-[-1rem] ">All Products</h1>
                        <RefreshTable />
                    </div>
                    <DataTable columns={columns} data={data} />
                </div>
            </section>
        </Container>
    );
}


export function RefreshTable() {
    return (
        <div className=''>

            <form action={refreshData}>
                <Button
                    variant="outline"
                    size="icon"
                    type="submit"
                >
                    <RefreshCcw className="h-4 w-4 " />
                </Button>
            </form>
        </div>

    )
}
