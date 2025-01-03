import React from 'react'
import { ColumnDef } from "@tanstack/react-table";


export type Product = {
    id: string;
    name: string;
    description: string;
    stock: number;
    price: string;
    weight: string;
    category: string; // Simplified to just a string
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
        header: "Stock",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorKey: "weight",
        header: "Weight",
    },
    {
        accessorKey: "category.name", // Access only the name field of the category
        header: "Category",
    },
];
