"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { ConfettiButton } from "@/components/ui/confetti";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CartItem } from "@/store";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { createOrderSchema, CreateOrderInput } from "./dto";
import { useToast } from "@/hooks/use-toast";
import useCartStore from '@/store';

export function SheetDemo() {
    const { toast } = useToast();
    const { items, resetCart } = useCartStore();
  
    // Log items after retrieving them from the store
    console.log('Cart items:', items);
  
    // Mapowanie produktów na { id, quantity }
    const productPayload = items.map((item) => ({
      id: item.product.id,
      quantity: item.quantity,
    }));
  
    const form = useForm<CreateOrderInput>({
      resolver: zodResolver(createOrderSchema),
      mode: "onChange",
      defaultValues: {
        username: '',
        email: '',
        phone: '',
        products: productPayload,
      },
    });
  
    // Update default values when items change
    useEffect(() => {
      form.reset({
        ...form.getValues(),
        products: productPayload,
      });
    }, [items]);
  
    const router = useRouter();
  
    const onSubmit = async (data: CreateOrderInput) => {
      console.log(JSON.stringify(data));
      try {
        const response = await fetch("http://localhost:3000/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        if (!response.ok) {
          const errorBody = await response.json();
          console.log("Error creating order:", errorBody.detail);
          throw new Error(errorBody.detail);
        }
  
        resetCart();
  
        router.refresh();
  
        toast({
          title: "Success",
          description: "Order created successfully",
          variant: "default",
        });
  
        // Reset form or close sheet here
        form.reset();
      } catch (error) {
        console.error("Error creating order:", error),
        toast({
          title: "Error",
          description: (error as Error).message,
          variant: "destructive",
        });
      }
    };

  return (
    <Sheet>
      <SheetTrigger asChild className="bg-background">
        <Button variant="glow">Make Order</Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto" side="left">
        <SheetHeader>
          <SheetTitle>Make Order</SheetTitle>
          <SheetDescription>Enter the user details below.</SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="username">Username</Label>
                  <FormControl>
                    <Input
                      placeholder="User123"
                      className="border-transparent bg-muted shadow-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="email">Email</Label>
                  <FormControl>
                    <Input
                      placeholder="example@email.com"
                      className="border-transparent bg-muted shadow-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="phone">Phone</Label>
                  <FormControl>
                    <Input
                      placeholder="111222333"
                      className="border-transparent bg-muted shadow-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Hidden Products Field */}
            <input
              type="hidden"
              {...form.register("products")} // Rejestrujemy ukryte pole dla produktów
            />

            {/* Submit Button */}
            <SheetFooter>
              {form.formState.isValid ? (
                <SheetClose asChild>
                  <div className="relative mt-4">
                    <ConfettiButton
                      triggerConfetti={form.formState.isValid}
                      variant="glow"
                      type="submit"
                      options={{
                        get angle() {
                          const screenWidth = window.innerWidth;
                          const screenHeight = window.innerHeight;
                          const angleRad = Math.atan(screenHeight / screenWidth);
                          const angleDeg = angleRad * (180 / Math.PI);
                          const finalAngle = 180 - 1.6 * angleDeg;
                          return finalAngle;
                        },
                      }}
                    >
                      Make Order
                    </ConfettiButton>
                  </div>
                </SheetClose>
              ) : (
                <ConfettiButton
                  triggerConfetti={form.formState.isValid}
                  variant="glow"
                  type="submit"
                  className="mt-4"
                >
                  Make Order
                </ConfettiButton>
              )}
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
