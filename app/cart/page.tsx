"use client"

import React, { useState, useEffect } from 'react'
import Container from '@/components/ui/container'
import useCartStore from '@/store'
import { Card } from '@/components/ui/card'
import { Button } from "@/components/ui/button"
import { SheetDemo } from "@/app/cart/make-order"
import { FaChevronUp, FaChevronDown, FaTrash } from 'react-icons/fa';
import { useRouter } from "next/navigation";

export default function CartTest() {
  const { items, increaseQuantity, decreaseQuantity, removeProduct } = useCartStore();
  const router = useRouter();
  const totalOrderValue = items.reduce((total, item) => total + parseFloat(item.product.price) * item.quantity, 0).toFixed(2);


  useEffect(() => {
    console.log('Cart items updated:', items);
  }, [items]);

  const handleIncreaseQuantity = (productId: string) => {
    const item = items.find(item => item.product.id === productId);
    if (item && item.quantity < item.product.stock) {
      increaseQuantity(productId);
    }
  };

  const handleDecreaseQuantity = (productId: string) => {
    const item = items.find(item => item.product.id === productId);
    if (item && item.quantity > 1) {
      decreaseQuantity(productId);
    }
  };

  if (items.length === 0) {
    return (
      <Container className="mt-6 mb-8">
        <div className="text-center text-xl">Your cart is empty</div>
      </Container>
    );
  }

  return (
    <Container className="mt-6 mb-8">
      <div className="mx-auto max-w-3xl">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {items.map((item) => (
        <Card key={item.id} className="p-4">
          <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{item.product.name}</h3>
            <p className="text-sm text-gray-500">{item.product.description}</p>
            <p className="text-sm">Stock: {item.product.stock}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
            <p className="text-sm text-gray-500">{item.product.price} EUR</p>
            <p className="font-semibold">
              Total: {(parseFloat(item.product.price) * item.quantity).toFixed(2)} EUR
            </p>
            </div>
            <div className="flex flex-col items-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
              handleIncreaseQuantity(item.product.id)
              }}
            >
              <FaChevronUp />
            </Button>
            <p className="text-sm mx-2">{item.quantity}</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
              handleDecreaseQuantity(item.product.id)
              }}
            >
              <FaChevronDown />
            </Button>
            </div>
            <Button
            variant="outline"
            size="sm"
            onClick={() => {
              removeProduct(item.product.id)
            }}
            >
            <FaTrash />
            </Button>
          </div>
          </div>
        </Card>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4 mx-auto">
        <SheetDemo />
        <div className="text-right">
        <p className="text-lg font-semibold">Order Value: {totalOrderValue} EUR</p>
        </div>
      </div>
      </div>
    </Container>
  )
}
