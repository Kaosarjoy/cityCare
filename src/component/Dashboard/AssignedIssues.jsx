import React from "react";

const AssignedIssues = () => {
  // Demo data (পরে Axios দিয়ে API call করতে হবে)
  const assignedIssues = [
    {
      _id: "1",
      issueTitle: "Broken Street Light",
      category: "Electricity",
      status: "Pending",
      priority: "Normal",
      location: "Dhaka, Gulshan",
      reporter: "joy52@gmail.com",
      createdAt: "2026-02-08",
    },
    {
      _id: "2",
      issueTitle: "Water Leakage",
      category: "Water",
      status: "In-Progress",
      priority: "High",
      location: "Dhaka, Dhanmondi",
      reporter: "kaosarjoy@gmail.com",
      createdAt: "2026-02-07",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-[#003d3d]">Assigned Issues</h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Priority</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Reporter</th>
              <th className="px-4 py-2 text-left">Created At</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {assignedIssues.map((issue) => (
              <tr key={issue._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{issue.issueTitle}</td>
                <td className="px-4 py-2">{issue.category}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-sm ${
                      issue.status === "Pending"
                        ? "bg-yellow-500"
                        : issue.status === "In-Progress"
                        ? "bg-blue-500"
                        : issue.status === "Resolved"
                        ? "bg-green-500"
                        : "bg-gray-500"
                    }`}
                  >
                    {issue.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-sm ${
                      issue.priority === "High" ? "bg-red-500" : "bg-gray-500"
                    }`}
                  >
                    {issue.priority}
                  </span>
                </td>
                <td className="px-4 py-2">{issue.location}</td>
                <td className="px-4 py-2">{issue.reporter}</td>
                <td className="px-4 py-2">{issue.createdAt}</td>
                <td className="px-4 py-2">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">
                    Change Status
                  </button>
                  <button className="ml-2 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 text-sm">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignedIssues;
