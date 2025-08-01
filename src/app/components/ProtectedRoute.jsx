"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "./Loader";

export default function ProtectedRoute({ children, role }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return <Loader />;
    if (status === "unauthenticated") {
      router.push("/login");
    }
    if (role && session?.user?.role !== role) {
      router.push("/unauthorized");
    }
  }, [status, session, router, role]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  return children;
}
