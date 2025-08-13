

import { useState } from "react";

const faqData = [
  {
    question: "What is car wrapping?",
    answer: "Car wrapping involves applying a vinyl film to your vehicle’s surface to change its appearance without affecting the original paint."
  },
  {
    question: "How long does a vinyl wrap last?",
    answer: "With proper care, a quality vinyl wrap can last 5 to 7 years."
  },
  {
    question: "Can a wrap be removed later?",
    answer: "Yes, vinyl wraps are fully removable without damaging the underlying paint — as long as the paint is in good condition."
  },
  {
    question: "Will a wrap damage my car’s paint?",
    answer: "If applied correctly and removed properly, a wrap should not damage the paint underneath."
  },
  {
    question: "How do I care for my wrapped vehicle?",
    answer: "Regular washing with non-abrasive cleaners and avoiding automatic car washes will help maintain your wrap."
  },
  {
    question: "How long does it take to install a wrap?",
    answer: "Wrap installation can take between 1-3 days."
  },
  {
    question: "What colors and finishes are available?",
    answer: "Vinyl wraps come in a wide range of colors, finishes (like matte, gloss, or satin), and even custom designs."
  },
  {
    question: "How much does a car wrap cost?",
    answer: "The cost can vary widely based on the size of the vehicle, the complexity of the design, and the quality of the vinyl used. Generally, it ranges from $2,000 to $5,000."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto pt-32 px-4 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>

      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-200 py-4 px-4">
          <button
            onClick={() => toggle(index)}
            className="flex justify-between w-full text-left text-base font-semibold"
          >
            <span>{item.question}</span>
            <span>{openIndex === index ? "^" : ""}</span>
          </button>
          {openIndex === index && (
            <p className="mt-2 text-gray-600">{item.answer}</p>
          )}
        </div>
      ))}
    </section>
  );
}
