"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function AppLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/Dashboard");

  return (
    <>
      {!isDashboard && (
        <header className="sticky top-0 z-50">
          <nav className="bg-white shadow">
            <NavBar />
          </nav>
        </header>
      )}
      <main className={!isDashboard ? "" : ""}>{children}</main>
      {!isDashboard && <Footer />}
    </>
  );
}
