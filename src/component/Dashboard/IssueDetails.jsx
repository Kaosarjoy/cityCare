import React from "react";
import { useParams } from "react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../../hooks/Useaxios";
import useAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";

const IssueDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxios();
  const { user } = useAuth();
  const queryClient = useQueryClient();

  // Fetch issue data
  const { data: issue, isLoading } = useQuery({
    queryKey: ["issue", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/issues/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (!issue) return <div>Issue not found</div>;

  // Status change handler for staff/admin
  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    try {
      await axiosSecure.patch(`/issues/${id}`, { status: newStatus });
      Swal.fire({
        icon: "success",
        title: "Status Updated",
        text: `Issue status changed to ${newStatus}`,
        timer: 1500,
        showConfirmButton: false,
      });
      queryClient.invalidateQueries(["issue", id]); // refresh issue data
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error.response?.data?.message || "Something went wrong",
      });
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">{issue.issueTitle}</h2>
      {issue.image && (
        <img
          src={issue.image}
          alt={issue.issueTitle}
          className="w-full h-96 object-cover mb-4 rounded"
        />
      )}
      <p><strong>Category:</strong> {issue.category}</p>
      <p>
        <strong>Status:</strong>{" "}
        {(user?.role === "staff" || user?.role === "admin") ? (
          <select
            value={issue.status}
            onChange={handleStatusChange}
            className="border p-1 rounded"
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In-Progress</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
          </select>
        ) : (
          issue.status
        )}
      </p>
      <p><strong>Priority:</strong> {issue.priority}</p>
      <p><strong>Location:</strong> {issue.location?.district}</p>
      <p className="mt-2">{issue.description}</p>

      {/* Citizen only: edit/delete buttons */}
      {user?.role === "user" && user?.email === issue.createdBy && issue.status === "pending" && (
        <div className="mt-4 flex gap-2">
          <button className="btn btn-warning">Edit Issue</button>
          <button className="btn btn-error">Delete Issue</button>
        </div>
      )}
    </div>
  );
};

export default IssueDetails;
