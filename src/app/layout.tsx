"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const disableNavbar = ["/login", "/register"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        {!disableNavbar.includes(pathName) && <Navbar />}

        {/* <h1>Layout {state}</h1>
        <button onClick={() => setState(state + 1)}>Click</button> */}
        {children}
      </body>
    </html>
  );
}
