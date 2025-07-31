// components/UserInfo.jsx
"use client";

import { useSession, signIn, signOut } from "next-auth/react";

const UserInfo = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  return session ? (
    <div className="flex items-center space-x-4">
      <p className="text-sm text-gray-700">Hi, {session.user.name}</p>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
      >
        Logout
      </button>
    </div>
  ) : (
    <button
      onClick={() => signIn("google")}
      className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      style={{ backgroundColor: "#E63946" }}
      data-aos="fade-left"
      data-aos-delay="300"
    >
      Login
    </button>
  );
};

export default UserInfo;
