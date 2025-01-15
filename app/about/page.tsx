"use client";
import { Button } from '@/components/ui/button'
import Container from '@/components/ui/container'
import { useRouter } from 'next/navigation'
import Figma from "@/components/logos/figma";
import React from "@/components/logos/react";
import ShadcnUi from "@/components/logos/shadcn-ui";
import Tailwind from "@/components/logos/tailwind";
import TypeScript from "@/components/logos/typescript";
import Logo from "@/components/ui/logo";
import { Section } from "@/components/ui/section";
import { useToast } from '@/hooks/use-toast';

export default function About() {
    const router = useRouter()
    return (
        <>
            <Section>
                <div className="mx-auto flex max-w-container flex-col items-center gap-8 text-center">
                    <h2 className="text-md font-semibold">Built with the best tools</h2>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                       
                        <Logo image={React} name="React"/>
                        <Logo image={TypeScript} name="TypeScript"/>
                        <Logo image={ShadcnUi} name="Shadcn/ui"/>
                        <Logo image={Tailwind} name="Tailwind" />
                    </div>
                </div>
            </Section>
        </>
    )
}



export function ToastWithTitle() {
  const { toast } = useToast()

  return (
    <Button
      variant="destructive"
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}

