import React from "react";
import { useLoaderData } from "react-router";
import TeamCard from "./TeamCard";

const AboutUs = () => {
  const team = useLoaderData();

  // লোডিং বা ডাটা না থাকলে হ্যান্ডেল করা
  if (!team || team.length === 0) {
    return (
      <div className="flex justify-center items-center h-96">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-4 tracking-tight">Meet Our Team</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
         Get to know the skilled members of our team who are working to make your dreams come true.
        </p>
      </div>
    
      {/* Team Leader */}
      <div className="flex justify-center mb-12">
        <div className="transform hover:scale-105 transition-transform duration-300">
          <TeamCard member={team[0]} />
        </div>
      </div>

      {/* Key Member */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        {team.slice(1, 3).map((member) => (
          <div key={member.id} className="flex justify-center">
             <TeamCard member={member} />
          </div>
        ))}
      </div>

      {/* All Other in the grid  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {team.slice(3, 9).map((member) => (
          <div key={member.id} className="flex justify-center">
            <TeamCard member={member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;