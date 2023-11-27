import type { Metadata } from "next";

import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/modetoggle";
import Navibar from "@/components/navbar";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Scrollup } from "@/components/scrollup";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Jonathan Dumlao | Portfolio",
  description:
    "Hey there! I'm Jonathan, an aspiring full stack developer. Join me as I bring ideas to life and explore the endless possibilities of web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navibar />

          <main className="mx-4 md:mx-20 ">
            {children}
            <div className="fixed right-4 bottom-4 ">
              <div className="flex flex-col gap-2">
                <Scrollup />
                <ModeToggle />
              </div>
            </div>
          </main>

          <Toaster></Toaster>
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
