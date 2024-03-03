import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"

import { cn } from "@/lib/utils"
import SideBarMenu from "@/components/native/side-bar-menu";
import { Card } from "@/components/ui/card";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "flex flex-row bg-background font-sans antialiased bg-black",
          fontSans.variable
        )}
      >
        <SideBarMenu />
        <Toaster />
        <Card className="bg-gray-900 w-full h-min-h-screen m-2 p-2 ">
          { children }
        </Card>
      </body>
    </html>
  )
}
