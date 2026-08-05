import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact NovaSkill",
  description:
    "Get in touch with NovaSkill. Contact our team for admissions, partnerships, technical support, or general inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">

      {/* Hero */}

      <section className="border-b border-zinc-800">

        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <p className="text-cyan-400 uppercase tracking-[0.3em]">
            Contact Us
          </p>

          <h1 className="mt-6 text-5xl font-bold md:text-6xl">
            We'd Love To Hear From You
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Whether you're interested in our courses, partnerships, or have
            technical questions, our team is here to help.
          </p>

        </div>

      </section>

      {/* Contact Section */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Form */}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="text-3xl font-bold">
              Send us a Message
            </h2>

            <form className="mt-8 space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none focus:border-cyan-400"
              />

              <textarea
                rows={6}
                placeholder="Your Message..."
                className="w-full rounded-xl border border-zinc-700 bg-black p-4 outline-none focus:border-cyan-400"
              />

              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
              >
                Send Message

                <ArrowRight size={18} />

              </button>

            </form>

          </div>

          {/* Contact Info */}

          <div>

            <h2 className="text-3xl font-bold">
              Contact Information
            </h2>

            <div className="mt-8 space-y-6">

              <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                <Mail className="text-cyan-400" />

                <div>

                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="mt-2 text-gray-400">
                    support@novaskill.org
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                <Phone className="text-cyan-400" />

                <div>

                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="mt-2 text-gray-400">
                    +1 (555) 123-4567
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                <MapPin className="text-cyan-400" />

                <div>

                  <h3 className="font-semibold">
                    Office
                  </h3>

                  <p className="mt-2 text-gray-400">
                    123 Learning Avenue
                    <br />
                    New York, NY, USA
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                <Clock className="text-cyan-400" />

                <div>

                  <h3 className="font-semibold">
                    Office Hours
                  </h3>

                  <p className="mt-2 text-gray-400">
                    Monday - Friday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Map Placeholder */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="flex h-[420px] items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-900">

          <p className="text-xl text-gray-400">
            Google Maps Integration
          </p>

        </div>

      </section>

      {/* FAQ */}

      <section className="border-y border-zinc-800 bg-zinc-950">

        <div className="mx-auto max-w-5xl px-6 py-24">

          <h2 className="text-center text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-6">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="font-semibold">
                How quickly do you respond?
              </h3>

              <p className="mt-3 text-gray-400">
                We usually respond within one business day.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="font-semibold">
                Do you offer enterprise training?
              </h3>

              <p className="mt-3 text-gray-400">
                Yes. We provide customized corporate learning solutions.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="font-semibold">
                Can I become an instructor?
              </h3>

              <p className="mt-3 text-gray-400">
                Absolutely. Contact us with your teaching experience and portfolio.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            Start Learning Today
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Explore our expert-led courses and build the skills you need for tomorrow's careers.
          </p>

          <a
            href="/courses"
            className="mt-10 inline-flex rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
          >
            Browse Courses
          </a>

        </div>

      </section>

    </main>
  );
}