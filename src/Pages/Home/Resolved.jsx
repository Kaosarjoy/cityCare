import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Icon import kora holo

const Resolved = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likedIssues, setLikedIssues] = useState({}); // Like track korar jonno state

  useEffect(() => {
    fetch("/resolved.json")
      .then(res => res.json())
      .then(data => {
        setIssues(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Like handle korar function
  const toggleLike = (id) => {
    setLikedIssues(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading resolved issues...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#003d3d]">
        Latest Resolved Issues
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {issues.slice(0, 6).map(issue => (
          <div
            key={issue.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
          >
            <img
              src={issue.image}
              alt={issue.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5 flex-grow">
              <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                {issue.status}
              </span>

              <h3 className="text-lg font-semibold mt-2 text-[#003d3d]">
                {issue.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                {issue.description.slice(0, 100)}...
              </p>

              <div className="mt-4 text-sm text-gray-500 flex justify-between items-center">
                <span>📍 {issue.location}</span>
                
                {/* Like Button */}
                <button 
                  onClick={() => toggleLike(issue.id)} 
                  className="flex items-center gap-1 text-sm transition"
                >
                  {likedIssues[issue.id] ? 
                    <FaHeart className="text-red-500 text-xl" /> : 
                    <FaRegHeart className="text-gray-400 text-xl hover:text-red-500" />
                  }
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resolved;