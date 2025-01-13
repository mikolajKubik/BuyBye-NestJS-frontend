"use client"
import { Cart } from "@/components/logos/cart"
import { Button } from "@/components/ui/button"
import { SidePanel } from "@/components/ui/side-panel"
import { useState } from "react"
import CartTest from "../cart/page"
import Container from "@/components/ui/container"

export default function SidePanelExample() {
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const renderOpenButton = (handleToggle: () => void) => (
    

      <Button
        className="rounded-lg"
        onClick={handleIsOpen}
        variant="glow"
      >
        <Cart className="mr-2" />
        {isOpen ? "Close" : "Open"}
      </Button>
      )

      return (
      
        
        
          // <div className="min-h-[500px] z-[2] flex flex-col justify-center border border-dashed rounded-lg space-y-4">
            <SidePanel
              panelOpen={isOpen}
              handlePanelOpen={handleIsOpen}
              renderButton={renderOpenButton}
            >

              <CartTest />
            </SidePanel>
          // </div>
        

      

      )
  }
