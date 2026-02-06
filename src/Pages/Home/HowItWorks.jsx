import React from "react";
import { FaMapMarkedAlt, FaClipboardCheck, FaUsers, FaBell } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaMapMarkedAlt className="text-4xl text-primary" />,
      title: "Find Your Area",
      description:
        "Check if CityCare services are available in your district using the interactive coverage map.",
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-primary" />,
      title: "Report an Issue",
      description:
        "Submit issues like road damage, waste accumulation, or streetlight problems easily via the app.",
    },
    {
      icon: <FaUsers className="text-4xl text-primary" />,
      title: "Assign & Resolve",
      description:
        "Local authorities review your report, assign the task to the relevant team, and start resolution.",
    },
    {
      icon: <FaBell className="text-4xl text-primary" />,
      title: "Get Updates",
      description:
        "Receive real-time notifications about the status of your reported issue until it's resolved.",
    },
  ];

  return (
    <section className="bg-base-200 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          How CityCare Works
        </h2>
        <p className="text-gray-700 mb-12">
          Follow these simple steps to report and resolve urban issues in your city.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
