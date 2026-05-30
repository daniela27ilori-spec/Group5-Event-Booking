'use client';

import { useState } from 'react';
import ProtectedRoute from '../../../components/ProtectedRoute';
import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/api';
import type { User } from '../../../types';

export default function DashboardProfile() {
  const { user, updateUser } = useAuth();
  const [firstName, setFirstName] = useState(user?.firstName ?? '');
  const [lastName, setLastName] = useState(user?.lastName ?? '');
  const [email, setEmail] = useState(user?.email ?? '');
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setStatus('');
    setSubmitting(true);

    try {
      const updated = await api.patch<User>('/users/me', {
        firstName,
        lastName,
        email,
      });
      updateUser(updated);
      setStatus('Profile updated successfully.');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to update profile.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[#f7f7f7] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-gray-200 bg-white p-10 shadow-sm">
          <h1 className="text-4xl font-bold text-[#670626]">Profile</h1>
          <p className="mt-4 text-gray-600">Manage your personal information, contact details, and account settings here.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {status ? <p className="rounded-2xl bg-emerald-100 px-4 py-3 text-sm text-emerald-900">{status}</p> : null}
            {error ? <p className="rounded-2xl bg-red-100 px-4 py-3 text-sm text-red-900">{error}</p> : null}

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-gray-700">First name</span>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-2 w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-[#670626] focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-gray-700">Last name</span>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-2 w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-[#670626] focus:outline-none"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Email address</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-[#670626] focus:outline-none"
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-600">Role: <span className="font-semibold text-gray-900">{user?.role ?? 'User'}</span></p>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-full bg-[#670626] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8a0a35] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? 'Saving…' : 'Save changes'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </ProtectedRoute>
  );
}
