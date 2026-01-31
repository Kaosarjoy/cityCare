import React from "react";
import { useLoaderData } from "react-router";
import TeamCard from "./TeamCard";

 const AboutUs = () => {
  const team = useLoaderData();

  // Check if team data exists
  if (!team || team.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 dark:text-gray-300">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Meet Our Team</h1>
    
      {/* 1 card row */}
      <div className="flex justify-center mb-8">
        <TeamCard member={team[0]} />
      </div>

      {/* 2 card row */}
      <div className="flex justify-center gap-6 mb-8 flex-wrap">
        {team.slice(1, 3).map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>

      {/* 5 card row */}
      <div className="flex justify-center gap-6 flex-wrap">
        {team.slice(3, 8).map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};



export default AboutUs;
