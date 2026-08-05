import ProtectedRoute from "@/components/auth/ProtectedRoute";
import LogoutButton from "@/components/auth/LogoutButton";

import DashboardHero from "@/components/dashboard/DashboardHero";
import DashboardStats from "@/components/dashboard/DashboardStats";
import ContinueLearning from "@/components/dashboard/ContinueLearning";
import WishlistPreview from "@/components/dashboard/WishlistPreview";
import RecentCertificates from "@/components/dashboard/RecentCertificates";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-black px-6 py-10 text-white">
        <div className="mx-auto max-w-7xl space-y-8">

          <div className="flex justify-end">
            <LogoutButton />
          </div>

          <DashboardHero />

          <DashboardStats />

          <ContinueLearning />

          <div className="grid gap-8 lg:grid-cols-2">
            <WishlistPreview />
            <RecentCertificates />
          </div>

        </div>
      </main>
    </ProtectedRoute>
  );
}