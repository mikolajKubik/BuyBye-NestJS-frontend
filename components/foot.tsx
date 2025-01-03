import React from 'react'
import { Footer, FooterBottom } from "@/components/ui/footer";
import Link from 'next/link';


export default function DefaultFooter() {
  return (
    <>
      <footer className="w-full bg-background px-4">
        <div className="mx-auto max-w-container">
          <Footer className="pt-0">
            <FooterBottom className="mt-0 flex flex-col items-center gap-4 sm:flex-col md:flex-row">
              <div>© 2024 Mikołaj Kubik. All rights reserved</div>
              <div className="flex items-center gap-4">
                <a href="https://github.com/princeBugs33">GitHub</a>|
                <Link href="/about">About</Link>
                {/* <ModeToggle /> */}

              </div>
            </FooterBottom>
          </Footer>
        </div>
      </footer>
    </>
  )
}
