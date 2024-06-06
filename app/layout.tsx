import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rishan's portfolio",
  description: "Created by @g.spxrk on Discord",
  icons:{
    icon:[
      "/rudiPfp.png",
    ],
    apple:[
      "/rudiPfp.png",
    ],
    shortcut:[
      "/rudiPfp.png",
    ],
  },

};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider></body>
    </html>
  );
}
