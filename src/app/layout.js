import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NextSessionProvide from "@/provider/NextSessionProvide";
import AppLayout from "./components/AppLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <NextSessionProvide>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <AppLayout>{children}</AppLayout>
        </body>
      </NextSessionProvide>
    </html>
  );
}
