

import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/components/Navbar';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from '@/components/Footer';
import WhatsappButton from '@/components/WhatsappButton'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kitty House",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <WhatsappButton/>
        <ChakraProvider>
          
          <Navbar />{children}
          <Footer/>
          
        </ChakraProvider>
        
      </body>
    </html>
  );
}
