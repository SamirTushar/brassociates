import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import FloatingButtons from "@/components/layout/FloatingButtons";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bhakti Rajput & Associates | Law Firm in Pune & Mumbai",
  description:
    "Trusted legal counsel in Pune and Mumbai. Expert lawyers for criminal defense, civil litigation, family law, corporate law and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
