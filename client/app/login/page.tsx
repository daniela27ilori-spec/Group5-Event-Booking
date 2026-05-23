"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import api from "../../services/api";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", response.access_token);
      localStorage.setItem("userId", response.user.id);
      localStorage.setItem("userRole", "user");
      router.push("/dashboard");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to sign in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f7f7] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl rounded-[32px] bg-white p-10 shadow-xl border border-gray-200">
        <h1 className="text-4xl font-bold text-[#670626]">Sign in</h1>
        <p className="mt-3 text-gray-600">
          Access your account to book events, manage tickets, and view your dashboard.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="mt-2 w-full rounded-2xl border border-gray-300 bg-[#fafafa] px-4 py-3 text-gray-900 outline-none transition focus:border-[#670626] focus:ring-2 focus:ring-[#fde3ea]"
                placeholder="you@example.com"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="mt-2 w-full rounded-2xl border border-gray-300 bg-[#fafafa] px-4 py-3 text-gray-900 outline-none transition focus:border-[#670626] focus:ring-2 focus:ring-[#fde3ea]"
                placeholder="Enter your password"
              />
            </label>
          </div>

          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#670626] px-6 py-3 text-white transition hover:bg-[#8a0a35] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?
          <Link href="/register" className="ml-2 font-semibold text-[#670626] hover:text-[#8a0a35]">
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login;