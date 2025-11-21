"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {!user ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Welcome to Shopping List</h1>
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md"
          >
            Sign in with GitHub
          </button>
        </>
      ) : (
        <>
          <p className="text-xl mb-4">
            Welcome, <span className="font-bold">{user.displayName}</span> (
            {user.email})
          </p>
          <div className="flex gap-4">
            <Link
              href="/week-9/shopping-list"
              className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-md font-medium"
            >
              Go to Shopping List
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 px-5 py-2 rounded-md font-medium"
            >
              Sign Out
            </button>
          </div>
        </>
      )}
    </main>
  );
}
