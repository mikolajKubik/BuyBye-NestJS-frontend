"use client";

import React from 'react'
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react"
import { Product} from '../products/columns';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
import Link from 'next/link';


import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Star, 
  Bell, 
  Info 
} from 'lucide-react'

import confetti from 'canvas-confetti';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpIcon, ArrowDownIcon, ChevronsUpDownIcon } from "lucide-react"
import {
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
  } from "@/components/ui/dropdown-menu"
  import { FilterIcon } from "lucide-react"
import { useToast } from '@/hooks/use-toast';
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";


  

export type Order = {
    id: string;
    approvalDate: string;
    username: string;
    email: string;
    phone: string;
    productOrders: ProductOrder[];
    status: Status
};

export type ProductOrder = {
    id: string;
    quantity: number;
    product: Product;
};

export type Status = {
    id: string;
    name: string;
};

export const columns: ColumnDef<Order>[] = [
    {
        accessorKey: "username",
        header: "Username"
    },
    {
        accessorKey: "email",
        header: "Email"
    },
    {
        accessorKey: "phone",
        header: "Phone"
    },
    {
        accessorKey: "status.name",
        header: ({ column }) => {
          return (
            <div className="text-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 data-[state=open]:bg-accent">
                    <span>Status</span>
                    <FilterIcon className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-[200px]">
                  <DropdownMenuRadioGroup
                    value={(column.getFilterValue() as string) ?? "all"}
                    onValueChange={(value: string) => {
                      if (value === "all") {
                        column.setFilterValue(undefined)
                      } else {
                        column.setFilterValue(value)
                        if (value === "COMPLETED") {
                          confetti();
                        }
                      }
                    //   confetti();
                    }}
                  >
                    <DropdownMenuRadioItem value="all">All statuses</DropdownMenuRadioItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioItem value="UNCONFIRMED">Unconfirmed</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="CONFIRMED">Confirmed</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="COMPLETED">Completed</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="CANCELLED">Cancelled</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )
        },
        
        filterFn: (row, id, value) => {
          if (!value) return true
          return row.getValue(id) === value
        },
        
      
        cell: ({ row }) => {
          const status = row.original.status.name;
          return (
            <div className="text-center">
              {(() => {
                switch (status) {
                  case "UNCONFIRMED":
                    return <Badge variant="brand" dot>{status}</Badge>;
                  case "CONFIRMED":
                    return <Badge dot>{status}</Badge>;
                  case "COMPLETED":
                    return <Badge icon={<CheckCircle size={12} />}>{status}</Badge>;
                  case "CANCELLED":
                    return <Badge variant="destructive" icon={<XCircle size={12} />}>{status}</Badge>;
                  default:
                    return <Badge variant="default">{status}</Badge>;
                }
              })()}
            </div>
          );
        },
    },
    {
      accessorKey: "approvalDate",
      header: "Approval Date",
      cell: ({ row }) => {
        const approvalDate = row.original.approvalDate;
        if (!approvalDate) {
          return <div>-</div>;
        }
    
        const date = new Date(approvalDate);
        const formattedDate = new Intl.DateTimeFormat('pl-PL', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }).format(date);
    
        return <div>{formattedDate}</div>;
      }
    },
    {
        id: "change-status",
        header: "Change Status",
        cell: ({ row }) => {
          const currentStatus = row.original.status.name;
          const orderId = row.original.id;
      
          // Mapowanie statusów na dostępne opcje zmiany
          const statusOptions: Record<string, string[]> = {
            UNCONFIRMED: ["CANCELLED", "CONFIRMED"],
            CONFIRMED: ["CANCELLED", "COMPLETED"],
            COMPLETED: [],
            CANCELLED: [],
          };
          
          const router = useRouter();
          
      
          // Funkcja do obsługi zmiany statusu
          const handleChangeStatus = async (newStatus: string) => {
            try {
              const response = await fetch(`http://localhost:3000/orders/${orderId}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ statusName: newStatus }),
              });
      
              if (response.ok) {
                router.refresh();
                console.log(`Status zamówienia ${orderId} zmieniony na ${newStatus}`);
              } else {
                console.error("Nie udało się zmienić statusu");
              }
            } catch (error) {
              console.error("Błąd podczas zmiany statusu", error);
            }
          };
      
          const isDisabled = statusOptions[currentStatus]?.length === 0;

            return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" disabled={isDisabled}>
                    Change Status
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-[200px]">
                {statusOptions[currentStatus]?.length ? (
                    statusOptions[currentStatus].map((option) => (
                    <DropdownMenuItem
                        key={option}
                        onClick={() => handleChangeStatus(option)}
                        className="flex justify-center"
                    >
                        {option}
                    </DropdownMenuItem>
                    ))
                ) : (
                    <DropdownMenuItem disabled>No options available</DropdownMenuItem>
                )}
                </DropdownMenuContent>
            </DropdownMenu>
            );
        },
      },
      
    {
        id: "to-order",
        cell: ({ row }) => (
            <Link href={`/orders/${row.original.id}`} passHref>
            <Button variant="ghost" size="sm">
              {/* <SidebarOpenIcon /> */}
              <OpenInNewWindowIcon />
            </Button>
          </Link>
        )
    }
];

