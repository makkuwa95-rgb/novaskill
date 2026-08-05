"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need any programming experience?",
    answer:
      "No. This course starts from the basics and gradually moves to advanced topics.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. You'll receive a NovaSkill Certificate of Completion after successfully finishing the course.",
  },
  {
    question: "How long do I have access?",
    answer:
      "You get lifetime access to all course content, including future updates.",
  },
  {
    question: "Can I access the course on mobile?",
    answer:
      "Yes. You can access NovaSkill courses on desktop, tablet, and mobile devices.",
  },
  {
    question: "Is there instructor support?",
    answer:
      "Yes. You can ask questions and receive guidance throughout your learning journey.",
  },
];

export default function FAQ() {
  return (
    <section className="border-b border-zinc-800 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-4xl font-bold text-white">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-center text-zinc-400">
          Find answers to the most common questions.
        </p>

        <Accordion className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-white hover:no-underline">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="pb-5 leading-8 text-zinc-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}