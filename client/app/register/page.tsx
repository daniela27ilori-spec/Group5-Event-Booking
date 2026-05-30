"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Please complete all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      await register({ firstName, lastName, email, password });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to create account. Please try again.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f3e7f7] to-[#fde3ea]">
      <div className="mx-auto max-w-xl rounded-[32px] bg-white p-10 shadow-xl border border-gray-200">
        <h1 className="text-4xl font-bold text-[#670626]">Create account</h1>
        <p className="mt-3 text-gray-600">
          Register to book events, manage tickets, and unlock your dashboard.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">First name</span>
              <input
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
                className="mt-2 w-full rounded-2xl border border-gray-300 bg-[#fafafa] px-4 py-3 text-gray-900 outline-none transition focus:border-[#670626] focus:ring-2 focus:ring-[#fde3ea]"
                placeholder="First name"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Last name</span>
              <input
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
                className="mt-2 w-full rounded-2xl border border-gray-300 bg-[#fafafa] px-4 py-3 text-gray-900 outline-none transition focus:border-[#670626] focus:ring-2 focus:ring-[#fde3ea]"
                placeholder="Last name"
              />
            </label>
          </div>

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
              minLength={6}
              className="mt-2 w-full rounded-2xl border border-gray-300 bg-[#fafafa] px-4 py-3 text-gray-900 outline-none transition focus:border-[#670626] focus:ring-2 focus:ring-[#fde3ea]"
              placeholder="Create a password"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-gray-700">Confirm password</span>
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
              minLength={6}
              className="mt-2 w-full rounded-2xl border border-gray-300 bg-[#fafafa] px-4 py-3 text-gray-900 outline-none transition focus:border-[#670626] focus:ring-2 focus:ring-[#fde3ea]"
              placeholder="Confirm your password"
            />
          </label>

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
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?
          <Link href="/login" className="ml-2 font-semibold text-[#670626] hover:text-[#8a0a35]">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
