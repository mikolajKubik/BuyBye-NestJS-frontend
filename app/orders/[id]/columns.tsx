"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ProductOrder } from "./type"

export const columns: ColumnDef<ProductOrder>[] = [
  {
    accessorKey: "product.name",
    header: "Product Name",
  },
  {
    accessorKey: "product.price",
    header: "Price",
    cell: ({ row }) => {
      const price = row.original.product.price
      return `$${price}`
    }
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    id: "total",
    header: "Total",
    cell: ({ row }) => {
      const price = parseFloat(row.original.product.price)
      const quantity = row.original.quantity
      const total = price * quantity
      return `$${total.toFixed(2)}`
    }
  }
]