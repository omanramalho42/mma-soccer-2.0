import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"

import { cn } from "@/lib/utils"
import SideBarMenu from "@/components/native/side-bar-menu";
import { Card } from "@/components/ui/card";
import SideNavbar from "@/components/native/side-nav-bar";
import { ThemeProvider } from "@/components/native/theme-provider"
import ThemeSwitch from "@/components/native/theme-switch";
import { Fragment, Suspense } from "react";
import LoadingScreen from "@/components/native/loading-screen";
 
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
          "flex flex-row bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense 
            fallback={<LoadingScreen />}
          >
            <Fragment>
              <SideNavbar />
              <Toaster />
              <Card className="w-full h-min-h-screen m-2 p-2 ">
                { children }
              </Card>
            </Fragment>
          </Suspense>

        </ThemeProvider>
        {/* <SideBarMenu /> */}
      </body>
    </html>
  )
}
