import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NextSessionProvide from "@/provider/NextSessionProvide";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eatoo | Home",
   icons: {
    icon: "fav icon",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
        <Head>
        <link rel="icon" href="/icon_eatto.png" />
      </Head>
      <NextSessionProvide>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header>
            <nav className="max-w-7xl mx-auto">
              <NavBar />
            </nav>
          </header>

          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </NextSessionProvide>
    </html>
  );
}
