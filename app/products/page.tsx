// "use client";
import dynamic from 'next/dynamic'
import { DataTable } from '@/components/data-table';
import { Product, columns } from './columns'; // Adjust the import path as needed
import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ConfettiButton } from '@/components/ui/confetti';
// const ComponentC = dynamic(() => import('../components/data-table'), { ssr: false })
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

// Fetch products from the specified API
async function getProducts(): Promise<Product[]> {
    const res = await fetch('http://localhost:3000/products', {
        // Prevent caching
        cache: 'no-store',
        // next: { revalidate: 0 }
    });
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await res.json();
    return data;
}

// Page component to display the table
export default async function Page() {
    const data = await getProducts();
    console.log("creating page component...");
    return (
        <Container className='mt-6 mb-8'>
            <section className="">

                <div className="container mx-auto ">
                    {/* <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold">All Products</h1>
                        <Button>Add Product</Button>
                        <SheetDemo />
                    </div> */}
                    <h1 className="text-3xl font-bold mb-6">All Products</h1>

                    <DataTable columns={columns} data={data} />
                </div>
            </section>
        </Container>

    );
}
