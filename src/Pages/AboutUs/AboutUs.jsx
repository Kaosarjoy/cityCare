import React from "react";
import { useLoaderData } from "react-router";

const AboutUs = () => {
  const team = useLoaderData();

  // Check if team data exists
  if (!team || team.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 dark:text-gray-300">
        Loading team data...
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

const TeamCard = ({ member }) => (
  <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 w-64 text-center transition-transform transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 duration-300">
    <div className="relative w-28 h-28 mx-auto mb-4">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover rounded-full border-4 border-primary dark:border-accent"
      />
    </div>
    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">
      {member.name}
    </h2>
    <p className="text-gray-500 dark:text-gray-400 mb-3">{member.role}</p>
    {member.bio && (
      <p className="text-sm text-gray-600 dark:text-gray-300">{member.bio}</p>
    )}
  </div>
);

export default AboutUs;
