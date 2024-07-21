import type { Metadata } from "next";
import Head from 'next/head';
import Link from 'next/link';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com"/>
        <Link rel="preconnect" href="https://fonts.gstatic.com"/>
        <Link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"/>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
