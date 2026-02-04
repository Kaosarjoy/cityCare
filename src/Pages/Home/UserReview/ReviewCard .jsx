import React from 'react';
import PropTypes from 'prop-types';

const ReviewCard = ({ review }) => {
  if (!review) return null;

  const { name, city, problem, solution, feedback } = review;

  return (
    <div className="max-w-md w-full rounded-2xl bg-white p-6 shadow-lg border border-gray-200 flex flex-col justify-between hover:scale-105 transition-transform duration-300">
      
      {/* Problem & Solution */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-1">{problem || 'No problem info'}</h3>
        <p className="text-gray-600 mb-2">{solution || 'No solution provided'}</p>
      </div>

      {/* Feedback */}
      <blockquote className="text-gray-700 italic mb-4">"{feedback || 'No feedback provided'}"</blockquote>

      {/* Reviewer info */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-cyan-300 flex items-center justify-center text-white font-bold text-lg">
          {name ? name.charAt(0) : 'U'}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name || 'Anonymous'}</h4>
          <p className="text-gray-500 text-sm">{city || 'Unknown City'}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    city: PropTypes.string,
    problem: PropTypes.string,
    solution: PropTypes.string,
    feedback: PropTypes.string,
  }),
};

export default ReviewCard;
