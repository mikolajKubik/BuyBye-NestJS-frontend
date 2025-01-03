'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { ConfettiButton } from './ui/confetti'

export function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    return (
        <>


            <div className="flex flex-col items-center gap-4">
                <h2 className="text-2xl font-bold">Count: {count}</h2>
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    onClick={increment}
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                >
                    <span>Increment</span>
                </HoverBorderGradient>
                {/* <Button onClick={increment}>
                    Increment
                </Button> */}
                <div className="relative">
                    <ConfettiButton>Confetti 🎉</ConfettiButton>
                </div>
            </div>
        </>

    )
}