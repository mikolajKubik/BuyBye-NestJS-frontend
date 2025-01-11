import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import DefaultNavbar from "@/components/nav";
import DefaultFooter from "@/components/foot";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
// import { ThemeProvider, useTheme } from "next-themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <div className="fixed inset-0 z-0">
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
            "opacity-20" // Added for subtle effect
          )}
        />
      </div>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DefaultNavbar />
          <main className="flex-grow">{children}</main>
          <Toaster />
          <DefaultFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}

