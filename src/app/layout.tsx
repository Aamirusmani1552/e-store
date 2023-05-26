import Header from "../../components/custom/Header";
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
  return (
    <html lang="en">
      <body className={`${inter.className} px-8 md:px-24 bg-mainBackground`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
