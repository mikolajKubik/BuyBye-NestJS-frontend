"use client"

import React from 'react'
import Container from '@/components/ui/container'
import useCartStore from '@/store'
import { Card } from '@/components/ui/card'

export default function CartTest() {
  const items = useCartStore((state) => state.items)

  if (items.length === 0) {
    return (
      <Container className="mt-6 mb-8">
        <div className="text-center text-xl">Your cart is empty</div>
      </Container>
    )
  }

  return (
    <Container className="mt-6 mb-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{item.product.name}</h3>
                <p className="text-sm text-gray-500">{item.product.description}</p>
                <p className="text-sm">Quantity: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{item.product.price} EUR</p>
                <p className="text-sm text-gray-500">
                  Total: {(parseFloat(item.product.price) * item.quantity).toFixed(2)} EUR
                </p>
              </div>
            </div>
          </Card>
        ))}
        <Card className="p-4 mt-4">
          <div className="text-right">
            <p className="font-bold">
              Total: {items.reduce((total, item) => 
                total + (parseFloat(item.product.price) * item.quantity), 0).toFixed(2)} EUR
            </p>
          </div>
        </Card>
      </div>
    </Container>
  )
}
