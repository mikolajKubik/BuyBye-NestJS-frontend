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

export default function page() {
    const router = useRouter()
    return (
        <>
            <Section>
                <div className="mx-auto flex max-w-container flex-col items-center gap-8 text-center">
                    <h2 className="text-md font-semibold">Built with the best tools</h2>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        <Logo image={Figma} name="Figma" />
                        <Logo image={React} name="React" version="18.3.1" />
                        <Logo image={TypeScript} name="TypeScript" version="5.6.2" />
                        <Logo image={ShadcnUi} name="Shadcn/ui" version="2.0.7" />
                        <Logo image={Tailwind} name="Tailwind" version="3.4.11" />
                    </div>
                </div>
            </Section>

            <Container className='mt-4'>
                <h1>About Page</h1>
                <div>page</div>
                <Button
                    onClick={() => router.push('/')}
                    className='m-4'
                >Home</Button>
            </Container>
        </>
    )
}
