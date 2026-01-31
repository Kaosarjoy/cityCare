import React from 'react';

const TeamCard = ({ member }) => (
  <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 w-64 text-center transition-transform transform hover:scale-105  hover:shadow-blue-500/50 hover:-translate-y-2 duration-300">
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

export default TeamCard;