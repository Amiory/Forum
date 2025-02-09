import type { Metadata } from "next";
import { Albert_Sans, Iceberg, Jacquard_24 } from "next/font/google";
import "./globals.css";

import HamburgerMenuIcon from "@/components/ui/icons/HamburgerMenuIcon";
import SideBar from "@/components/ui/global/SideBar";

const albert_sans = Albert_Sans({
  variable: "--font-albert_sans",
  subsets: ["latin"],
});

const iceberg = Iceberg({
  weight: "400",
  variable: "--font-iceberg",
});

const jacquard_24 = Jacquard_24({
  weight: "400",
  variable: "--font-jacquard_24",
});

export const metadata: Metadata = {
  title: "Forum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${albert_sans.variable} ${iceberg.variable} ${jacquard_24.variable} antialiased bg-darkBrown`}
      >
        <div className="w-full lg:flex">
          <div className="w-full lg:w-[350px] lg:min-w-[350px] ">
            <SideBar />
          </div>
          <main className="w-full max-w-[1570px] mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
