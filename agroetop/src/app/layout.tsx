import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer'; 
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Agro é top :: e aqui é Agro",
  description: "e aqui é Agro Alpha Byte Innovations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter?.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );  
}
