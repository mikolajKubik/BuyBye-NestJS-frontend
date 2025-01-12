
"use client"
import { Cart } from "@/components/logos/cart"
import { Button } from "@/components/ui/button"
import { SidePanel } from "@/components/ui/side-panel"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function SidePanelExample() {
    const [isOpen, setIsOpen] = useState(false)
  
    const handleIsOpen = () => {
      setIsOpen(!isOpen)
    }
  
    const renderOpenButton = (handleToggle: () => void) => (
     

       
        <Button
          className="rounded-r-[33px] py-8 ml-2 "
          onClick={handleIsOpen}
          variant="secondary"
        >
          <Cart className="mr-2 "/>
          {isOpen ? "close" : "open"}

        </Button>
     
    )
  
    return (
      <div className="w-full">
        <div className="min-h-[500px]  flex flex-col justify-center border border-dashed rounded-lg space-y-4">
          <SidePanel
            panelOpen={isOpen}
            handlePanelOpen={handleIsOpen}
            renderButton={renderOpenButton}
          >
            <div className="h-16 w-full">
              <div>Content Here</div>
            </div>
          </SidePanel>
        </div>
      </div>
    )
  }
