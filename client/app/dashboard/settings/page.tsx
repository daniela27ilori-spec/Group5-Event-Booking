'use client';

import Link from 'next/link';
import ProtectedRoute from '../../../components/ProtectedRoute';
import { useAuth } from '../../../context/AuthContext';

export default function DashboardSettings() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[#f7f7f7] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-gray-200 bg-white p-10 shadow-sm">
          <h1 className="text-4xl font-bold text-[#670626]">Settings</h1>
          <p className="mt-4 text-gray-600">Customize your account and privacy settings, or update your profile details.</p>

          <div className="mt-8 space-y-6 text-gray-700">
            <div className="rounded-3xl border border-gray-200 bg-[#fafafa] p-6">
              <p className="text-sm font-semibold text-gray-700">Notification emails</p>
              <p className="mt-2 text-gray-600">Enabled</p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-[#fafafa] p-6">
              <p className="text-sm font-semibold text-gray-700">Account email</p>
              <p className="mt-2 text-gray-600">{user?.email ?? '–'}</p>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/dashboard/profile" className="inline-flex items-center rounded-full bg-[#670626] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8a0a35]">
              Edit profile details
            </Link>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
