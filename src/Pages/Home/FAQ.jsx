import React, { useState } from "react";

const faqData = [
  {
    question: "What is CityCare?",
    answer:
      "CityCare is a platform that connects users with reliable city services like cleaning, deliveries, and maintenance."
  },
  {
    question: "How can I book a service?",
    answer:
      "You can book a service by signing in, selecting the service you want, and confirming your booking through our app."
  },
  {
    question: "Can I track my service request?",
    answer:
      "Yes! Once your request is confirmed, you can track its status live in the 'My Activities' section of the app."
  },
  {
    question: "How do I pay for services?",
    answer:
      "Payments can be made online using cards, mobile banking apps, or cash on delivery, depending on the service type."
  },
  {
    question: "Is my personal information safe?",
    answer:
      "Absolutely. CityCare uses secure encryption and privacy policies to ensure your data is protected at all times."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4 rounded-lg bg-amber-50">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg shadow-sm p-4 transition-all duration-200"
        >
          <div
            className="flex justify-between items-center cursor-pointer font-medium"
            onClick={() => toggle(index)}
          >
            {item.question}
            <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
          </div>
          {openIndex === index && (
            <div className="mt-2 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
