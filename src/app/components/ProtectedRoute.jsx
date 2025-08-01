"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

export default function ProtectedRoute({ children, role }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Show loading spinner while session is loading
  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  // Redirect to unauthorized page if role doesn't match
  if (role && session?.user?.role !== role) {
    router.push("/unauthorized");
    return null;
  }

  // Render children if authorized
  return children;
}
