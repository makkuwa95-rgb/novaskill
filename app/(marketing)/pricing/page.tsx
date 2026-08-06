import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | NovaSkill",
};

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-4xl font-bold">
        Pricing
      </h1>
    </main>
  );
}