// "use client"
import React from 'react'
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import {
  NavbarCenter,
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { IconPhFactory } from "@/components/logos/IconPhFactory";
import Link from 'next/link';
import { ConfettiButton } from './ui/confetti';
import { Cart } from './logos/cart';
import { ModeToggle } from './ui/mode-toggle';
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
                className="flex items-center gap-2 text-xl font-bold text-xl"
              >
                <IconPhFactory />
                Buy&Bye
              </Link>
            </NavbarLeft>
            {/* <NavbarCenter>
            </NavbarCenter> */}


            <NavbarRight>
              <Navigation />
              <CheckboxDemo />
              {/* <a href="/" className="hidden text-sm md:block">
                    Sign in
                  </a> */}

              {/* <Button variant="default" asChild>
                
              </Button> */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="grid gap-6 text-lg font-medium">
                    <a
                      href="/"
                      className="flex items-center gap-2 text-xl font-bold"
                    >
                      <span>Buy&Bye</span>
                    </a>
                    <a
                      href="/"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Getting Started
                    </a>
                    <a
                      href="/"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Components
                    </a>
                    <a
                      href="/"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Documentation
                    </a>
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
