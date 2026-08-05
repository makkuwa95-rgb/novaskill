import { Award } from "lucide-react";

const certificates = [
  "Artificial Intelligence",
  "React Development",
  "Cyber Security",
];

export default function RecentCertificates() {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="mb-6 flex items-center gap-3">
        <Award className="text-yellow-400" />
        <h2 className="text-2xl font-bold text-white">
          Certificates
        </h2>
      </div>

      <div className="space-y-4">
        {certificates.map((certificate) => (
          <div
            key={certificate}
            className="rounded-xl border border-zinc-800 bg-black p-4"
          >
            <h3 className="font-semibold text-white">
              {certificate}
            </h3>

            <p className="mt-1 text-sm text-zinc-400">
              Certificate Earned
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}