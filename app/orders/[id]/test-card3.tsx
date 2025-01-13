"use client"
import { Card } from "@/components/ui/card"
import { ColumnDef } from "@tanstack/react-table"
import { ProductDataTable } from "./data-table"
import { columns } from "./columns"
import { Order, ProductOrder } from "./type"
import { Badge } from "@/components/ui/badge";

import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Star, 
  Bell, 
  Info 
} from 'lucide-react'

interface CardGridLayoutProps {
  data: Order
}

export function CardGridLayout({ data }: CardGridLayoutProps) {
  const cardContent = {
    role: "button",
    "aria-label": "Interactive card"
  }

  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "UNCONFIRMED":
        return <Badge variant="brand" dot className="text-xs">{status}</Badge>
      case "CONFIRMED":
        return <Badge dot className="text-xs">{status}</Badge>
      case "COMPLETED":
        return <Badge icon={<CheckCircle size={10} />} className="text-xs">{status}</Badge>
      case "CANCELLED":
        return <Badge variant="destructive" icon={<XCircle size={10} />} className="text-xs">{status}</Badge>
      default:
        return <Badge variant="default" className="text-xs">{status}</Badge>
    }
  }

  const calculateOrderValue = (productOrders: ProductOrder[]) => {
    return productOrders.reduce((total, productOrder) => {
      return total + parseFloat(productOrder.product.price) * productOrder.quantity
    }, 0).toFixed(2)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px] md:h-[400px]">
      <div className="grid grid-rows-3 gap-4">
        <Card 
        variant={"default"}
          {...cardContent} 
          className="row-span-2 bg-background flex flex-col items-start justify-center shadow-2xl whitespace-nowrap text-sm cursor-pointer overflow-visible text-ellipsis p-4"
        >
          <div>
            <p className="mb-2"><strong>ID:</strong> {data.id}</p>
            <p className="mb-2"><strong>Approval Date:</strong> {data.approvalDate}</p>
            <p className="mb-2"><strong>Number of Products:</strong> {data.productOrders.length}</p>
            <p className="mb-2"><strong>Order Value:</strong> ${calculateOrderValue(data.productOrders)}</p>
            <div className="flex items-center">
              <p><strong>Status:</strong></p>
              <div className="ml-2">
                {renderStatusBadge(data.status.name)}
              </div>
            </div>
          </div>
        </Card>
        <Card 
          {...cardContent}
          className="row-span-1 bg-background flex flex-col items-start justify-center shadow-2xl whitespace-nowrap text-sm cursor-pointer overflow-visible text-ellipsis p-4"
        >
          <div>
            <p className="mb-2"><strong>Username:</strong> {data.username}</p>
            <p className="mb-2"><strong>Email:</strong> {data.email}</p>
            <p className="mb-2"><strong>Phone:</strong> {data.phone}</p>
          </div>
        </Card>
      </div>
      <div className="col-span-1 md:col-span-2 h-full">
        <ProductDataTable columns={columns} data={data.productOrders} />
      </div>
    </div>
  )
}