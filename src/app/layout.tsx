import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@components/Nav";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import FloatingNav from "@components/FloatingNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Dunn",
  description: "I'm John, a software engineer and product manager based in San Francisco.",
};

const navItems = [
  {
    name: 'Open Source',
    link: '#opensource',
  },
  {
    name: 'About',
    link: '#about',
  },
  {
    name: 'Contact',
    link: '#contact'
  }
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className}  bg-slate-900`}>
        <FloatingNav navItems={navItems}/>
        <Nav />
        {children}
        <Analytics/>
      </body>
    </html>
  );
} 
