import { Be_Vietnam_Pro } from "next/font/google";
import { getServerSession } from "next-auth";

import type { Metadata } from "next";

import Footer from "@/components/footer/Footer";
import Navigation from "@/components/Navigation";
import "./globals.css";

const be_vietnam_pro = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Skillbridge",
  description: "Online courses platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const activeSession = await getServerSession();
  const isActiveSession = !!activeSession;

  return (
    <html lang="en">
      <body className={`bg-white-97 lg:pt-5 ${be_vietnam_pro.className}`}>
        <>
          <Navigation isActiveSession={isActiveSession} />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
