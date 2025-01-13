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
import { OpenInNewWindowIcon, MinusIcon } from "@radix-ui/react-icons";


interface CardGridLayoutProps {
  data: Order
}

export function CardGridLayout({ data }: CardGridLayoutProps) {
  const cardContent = {
    role: "button",
    "aria-label": "Interactive card"
  }

  const formatDate = (date: string | null | undefined) => {
    if (!date) return <MinusIcon />;
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
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
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto">
      <div className="grid grid-rows-3 gap-4 md:grid-auto-rows-[1fr]">
        <Card
          variant={"default"}
          {...cardContent}
          className="row-span-2 flex flex-col p-6 shadow-2xl overflow-hidden bg-gradient-to-br from-background to-muted">
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight mb-4">Order Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-muted-foreground">Order ID</span>
                  <span className="font-small">{data.id}</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-muted-foreground">Approval Date</span>
                  <span className="font-medium">{formatDate(data.approvalDate)}</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-muted-foreground">Products</span>
                  <span className="font-medium">{data.productOrders.length}</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-muted-foreground">Total Value</span>
                  <span className="font-semibold text-lg text-primary">
                    ${calculateOrderValue(data.productOrders)}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-muted-foreground">Status</span>
                  <div>{renderStatusBadge(data.status.name)}</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Card
          {...cardContent}
          className="row-span-1 flex flex-col p-6 shadow-2xl overflow-hidden bg-gradient-to-br from-background to-muted"
        >
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight mb-2">Customer Information</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <span className="text-muted-foreground w-20">Username</span>
                <span className="font-medium">{data.username}</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-muted-foreground w-20">Email</span>
                <span className="font-medium">{data.email}</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-muted-foreground w-20">Phone</span>
                <span className="font-medium">{data.phone}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="col-span-1 md:col-span-2 h-full">
        <ProductDataTable columns={columns} data={data.productOrders} />
      </div>
    </div>
  );
  
}