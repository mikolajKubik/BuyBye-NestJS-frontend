import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/app/orders/[id]/type'

export type CartItem = {
    id: string
    product: Product
    quantity: number
}

interface CartState {
    items: CartItem[];
    addProduct: (product: Product) => void
    removeProduct: (id: string) => void
    resetCart: () => void
    increaseQuantity: (id: string) => void
    decreaseQuantity: (id: string) => void
    // Optional: Add more actions like remove, clear, etc.
}

const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            items: [],
            addProduct: (product) => 
                set((state) => {
                    const existingItem = state.items.find(
                        (item) => item.product.id === product.id
                    )
                    
                    if (existingItem) {
                        return {
                            items: state.items.map((item) =>
                                item.product.id === product.id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            ),
                        }
                    } 
                    return {
                        items: [...state.items, { id: crypto.randomUUID(), product, quantity: 1 }],
                    }
                }),
            removeProduct: (productId) =>
                set((state) => ({
                    items: state.items.filter((item) => item.product.id !== productId),
                })),
            resetCart: () => set({ items: [] }),
            increaseQuantity: (productId) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.product.id === productId
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                })),
            decreaseQuantity: (productId) =>
                set((state) => ({
                    items: state.items.map((item) =>
                        item.product.id === productId && item.quantity > 1
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                })),
        }),
        {
            name: 'cart-store',
        }
    )
)

export default useCartStore