import React, { useEffect, useState } from "react";

const Resolved = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading resolved issues...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Latest Resolved Issues
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {issues.slice(0, 6).map(issue => (
          <div
            key={issue.id}
            className="bg-white  shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={issue.image}
              alt={issue.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <span className="text-xs font-semibold text-green-600">
                {issue.status}
              </span>

              <h3 className="text-lg font-semibold mt-2">
                {issue.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {issue.description.slice(0, 120)}...
              </p>

              <div className="mt-4 text-sm text-gray-500">
                📍 {issue.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resolved;
