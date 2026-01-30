import React from "react";
import CityImg from "../../assets/city.jpg";

const Blog = () => {
  
  const blogContent = {
    date: "July 28, 2026",
    author: "CityCare Strategy Team",
    title: "The Ripple Effect: Why Urban Cleanliness is the Bedrock of Progress",
    sections: [
      {
        heading: "Beyond Aesthetics: A Health & Safety Mandate",
        text: "Urban cleanliness is far more than a visual preference; it is a critical pillar of public health and safety. Accumulating waste in metropolitan areas acts as a breeding ground for pathogens, increases environmental toxicity, and creates avoidable safety hazards. A clean city isn't just beautiful—it's resilient."
      },
      {
        heading: "How CityCare Bridges the Gap",
        text: "CityCare serves as a sophisticated civic-tech bridge between residents and local authorities. By leveraging real-time reporting for infrastructure failures—ranging from drainage blockages to malfunctioning streetlights—we empower citizens to act as the 'eyes of the city,' ensuring rapid intervention and accountability."
      }
    ],
    responsibilities: [
      "Adhering to zero-littering protocols in public spaces.",
      "Proactive reporting of infrastructural anomalies via the CityCare portal.",
      "Maintaining the integrity of pedestrian walkways.",
      "Cultivating a culture of communal environmental stewardship."
    ]
  };

  return (
    <article className="bg-base-200 min-h-screen pb-20">
      
      {/* Hero Section: Impactful & Immersive */}
      <header className="relative h-75 md:h-80 overflow-hidden">
        <img
          src={CityImg}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          alt="Modern Clean Cityscape"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold text-center px-6 leading-tight max-w-4xl">
            {blogContent.title}
          </h1>
        </div>
      </header>

      {/* Main Content Card */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12 bg-white shadow-2xl -mt-24 relative z-10 rounded-xl border border-gray-100">
        
        {/* Metadata */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-8 uppercase tracking-widest">
          <span>{blogContent.date}</span>
          <span className="text-primary">•</span>
          <span>By {blogContent.author}</span>
        </div>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 leading-snug">
            {blogContent.sections[0].heading}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {blogContent.sections[0].text}
          </p>
        </section>

        {/* Featured Image */}
        <figure className="my-10">
          <img
            src={CityImg}
            alt="Operational City Infrastructure"
            className="w-full h-auto rounded-xl shadow-lg"
          />
          <figcaption className="text-center text-gray-400 text-sm mt-3 italic">
            Visualizing a sustainable urban future through active maintenance.
          </figcaption>
        </figure>

        {/* Section 2: CityCare Utility */}
        <section className="mb-10 p-6 bg-slate-50 rounded-lg border-l-4 border-primary">
          <h3 className="text-xl font-bold mb-3 text-slate-800 uppercase tracking-tight">
            {blogContent.sections[1].heading}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {blogContent.sections[1].text}
          </p>
        </section>

        {/* Civic Responsibilities */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-slate-800">
            The Citizen's Charter: Your Role
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogContent.responsibilities.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Call to Action (CTA) */}
        <footer className="pt-8 border-t border-gray-100 flex flex-col items-center">
          <p className="text-gray-500 mb-6 font-medium">Ready to make a difference in your neighborhood?</p>
          <button className="btn btn-primary btn-wide shadow-lg hover:shadow-primary/40 transition-all duration-300">
            Report an Issue Now
          </button>
        </footer>

      </main>
    </article>
  );
};

export default Blog;