import { Header } from "@/components/globals/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from 'next-view-transitions'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TaylerSwift",
  description: "tell us how swiftie you are",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
  <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}</body>
    </html>
    </ViewTransitions>
  
  );
}
