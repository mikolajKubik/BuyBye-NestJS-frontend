"use client";

import React from 'react'
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpIcon, ArrowDownIcon, ChevronsUpDownIcon } from "lucide-react"
import {
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
  } from "@/components/ui/dropdown-menu"
  import { FilterIcon } from "lucide-react"
import { useToast } from '@/hooks/use-toast';
import { SheetUpdate } from './update-product';
  

export type Product = {
    id: string;
    name: string;
    description: string;
    stock: number;
    price: string;
    weight: string;
    category: Category; // Simplified to just a string
};

export type Category = {
    id: string;
    name: string;
};

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "stock",
        header: () => (
            <div className="text-center">
                Stock
            </div>
        ),
        cell: ({ row }) => (
            <div className="text-center">
                {row.original.stock}
            </div>
        ),
    },
    {
        accessorKey: "price",
        header: () => (
            <div className="text-right">
                Price
            </div>
        ),
        cell: ({ row }) => (
            <div className="text-right">
                {row.original.price} EUR
            </div>
        ),
    },
    {
        accessorKey: "weight",
        header: () => (
            <div className="text-right">
                Weight
            </div>
        ),
        cell: ({ row }) => (
            <div className="text-right">
                {row.original.weight} kg
            </div>
        ),
    },
    {
        accessorKey: "category.name", // Access only the name field of the category
        // header: "Category",
        header: ({ column }) => {
            return (
                //   <Button
                //     variant="ghost"
                //     onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                //   >
                //     Category
                //     <ArrowUpDown className="ml-2 h-4 w-4" />
                //   </Button>
                <div className="text-center flex items-center justify-center space-x-2 ">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                // size="sm"
                                className="h-8 data-[state=open]:bg-accent" // -ml-3 
                            >
                                <span>Category</span>
                                <FilterIcon className="ml-2 h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="w-[200px]">
                            <DropdownMenuRadioGroup
                                value={(column.getFilterValue() as string) ?? "all"}
                                onValueChange={(value: string) => {
                                    if (value === "all") {
                                        column.setFilterValue("")
                                    } else {
                                        column.setFilterValue(value)
                                    }
                                }}
                            >
                                <DropdownMenuRadioItem value="all">All Categories</DropdownMenuRadioItem>
                                  <DropdownMenuSeparator />

                                <DropdownMenuRadioItem value="books">Books</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="clothing">Clothing</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="electronics">Electronics</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="toys">Toys</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
            
        },
        cell: ({ row }) => (
            <div className="text-center">
                {row.original.category.name}
            </div>
        ),
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const product = row.original
            const { toast } = useToast()

            return (
                <SheetUpdate product={product} />
            )
        },
    },
];


// {
//     id: "actions",
//     cell: ({ row }) => {
//         const product = row.original
//         const { toast } = useToast()

//         return (
//             <DropdownMenu >
//                 <DropdownMenuTrigger asChild>
//                     <Button variant="ghost" className="h-8 w-8 p-0">
//                         <span className="sr-only">Open menu</span>
//                         <MoreHorizontal className="h-4 w-4" />
//                     </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent align="center">
//                     <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                     <DropdownMenuItem
//                         onClick={() => {
//                             navigator.clipboard.writeText(product.id)
//                             toast({
//                                 title: "Copied successfully",
//                                 description: `Product ID: ${product.id}`,
//                             })
//                         }}
//                     >
//                         Copy ID
//                     </DropdownMenuItem>
//                     <DropdownMenuItem>Edit</DropdownMenuItem>
//                     <SheetUpdate />
//                     <DropdownMenuSeparator />
//                     <DropdownMenuItem onClick={() => {
//                             toast({
//                                 // title: "To be implemented🫣",
//                                 description: `To be implemented 🫣`,
//                             })
//                         }} className='text-red-600'>Delete</DropdownMenuItem>
//                 </DropdownMenuContent>
//             </DropdownMenu>
//         )
//     },
// },
