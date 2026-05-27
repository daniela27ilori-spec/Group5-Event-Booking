'use client';

import ProtectedRoute from "../../../components/ProtectedRoute";
import { useAuth } from "../../../context/AuthContext";

export default function DashboardSettings() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-[#f7f7f7] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-gray-200 bg-white p-10 shadow-sm">
          <h1 className="text-4xl font-bold text-[#670626]">Settings</h1>
          <p className="mt-4 text-gray-600">Update your notification preferences, privacy settings, and account options.</p>
          <div className="mt-8 space-y-4 text-gray-700">
            <p><span className="font-semibold">Notification emails:</span> Enabled</p>
            <p><span className="font-semibold">Account email:</span> {user?.email ?? '–'}</p>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
