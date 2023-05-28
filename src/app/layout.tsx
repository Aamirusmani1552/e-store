"use client";
import { useEffect, useState } from "react";
import Footer from "../../components/custom/Footer";
import Header from "../../components/custom/Header";
import MenuModal from "../../components/custom/MenuModal";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OceanMart",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [open]);
  return (
    <html lang="en">
      <body className={`${inter.className} px-8 md:px-24 bg-mainBackground`}>
        {open && <MenuModal setOpen={setOpen} open={open} />}
        <Header setOpen={setOpen} open={open} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
