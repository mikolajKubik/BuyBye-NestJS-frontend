import React from 'react'
import { Footer, FooterBottom } from "@/components/ui/footer";
import Link from 'next/link';


export default function DefaultFooter() {
  return (
    <>
      <footer className="w-full  px-4"> 
        <div className="mx-auto max-w-container">
          <Footer className="pt-0 bg-transparent">
            <FooterBottom className="mt-0 flex flex-col items-center gap-4 sm:flex-col md:flex-row">
              <div>© 2024 DIK group. All rights reserved</div>
              <div className="flex items-center gap-4">
                <a href="https://github.com/princeBugs33/princeBugs33-V_sem_aji_z4">GitHub</a>|
                <Link href="/about">About</Link>
              </div>
            </FooterBottom>
          </Footer>
        </div>
      </footer>
    </>
  )
}
