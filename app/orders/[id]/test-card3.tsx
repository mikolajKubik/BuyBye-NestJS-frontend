"use client"
import { Card } from "@/components/ui/card"
import { ColumnDef } from "@tanstack/react-table"
import { ProductDataTable } from "./data-table"
import { columns } from "./columns"

interface CardGridLayoutProps {
  data: any[] // Replace 'any' with your actual data type
}

export function CardGridLayout({ data }: CardGridLayoutProps) {
  const cardContent = {
    role: "button",
    "aria-label": "Interactive card"
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px] md:h-[400px] ">
      <div className="grid grid-rows-3 gap-4">
        <Card 
        //   variant="lifted" 
          {...cardContent} 
          className="row-span-1 bg-background flex items-center justify-center shadow-2xl whitespace-nowrap text-4xl cursor-pointer"
        >
          First
        </Card>
        <Card 
        //   variant="gradient" 
          {...cardContent}
          className="row-span-2 bg-background flex items-center justify-center shadow-2xl whitespace-nowrap text-4xl cursor-pointer"
        >
          Second
        </Card>
      </div>
      {/* <Card 
        // variant="gradient" 
        {...cardContent}
        className="col-span-1 md:col-span-2 bg-background flex items-center justify-center shadow-2xl whitespace-nowrap text-4xl cursor-pointer"
      >
      <ProductDataTable columns={columns} data={data} />
        
      </Card> */}
      <ProductDataTable columns={columns} data={data} />

      {/* <div
        className="col-span-1 md:col-span-2 bg-background flex items-center justify-center shadow-2xl whitespace-nowrap text-4xl cursor-pointer"
      >
      <ProductDataTable columns={columns} data={data} />

      </div> */}
    </div>
  )
}