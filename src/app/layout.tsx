import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Hexa AI | Next Generation of Intelligence",
  description: "Experience the power of advanced AI with Hexa's unified platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow flex flex-col relative w-full overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
