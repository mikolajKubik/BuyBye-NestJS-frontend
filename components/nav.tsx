// "use client"
import React from 'react'
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { IconPhFactory } from "@/components/logos/IconPhFactory";
import Link from 'next/link';
import { CheckboxDemo } from './ui/dark-mode-toggle-checkbox';

export default function DefaultNavbar() {
  return (
    <>
      <header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
        <div className="fade-bottom absolute left-0 h-24 w-full bg-background/15 backdrop-blur-lg"></div>
        <div className="relative mx-auto max-w-container">
          <NavbarComponent>
            <NavbarLeft>
              <Link
                href="/"
                className="flex items-center gap-2 text-xl font-bold"
              >
                <IconPhFactory />
                Buy&Bye
              </Link>
            </NavbarLeft>
            <NavbarRight>
              <Navigation />
              <CheckboxDemo />
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link href={`/`} className="flex items-center gap-2 text-xl font-bold" passHref>
                        <span>Buy&Bye</span>
                    </Link>
                    <Link href={`/products`} className="text-muted-foreground hover:text-foreground" passHref>
                        Products
                    </Link>
                    <Link href={`/orders`} className="text-muted-foreground hover:text-foreground" passHref>
                        Orders
                    </Link>
                    <Link href={`/cart`} className="text-muted-foreground hover:text-foreground" passHref>
                        Cart
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </NavbarRight>
          </NavbarComponent>
        </div>
      </header>
    </>
  )
}
