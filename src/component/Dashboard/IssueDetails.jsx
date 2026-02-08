import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/Useaxios";

const IssueDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxios();

  const { data: issue, isLoading } = useQuery({
    queryKey: ["issue", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/issues/${id}`);
      return res.data; // server থেকে single issue return করবে
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (!issue) return <div>Issue not found</div>;

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-2">{issue.issueTitle}</h2>
      <img src={issue.image} alt={issue.issueTitle} className="w-full h-96 object-cover mb-4"/>
      <p><strong>Category:</strong> {issue.category}</p>
      <p><strong>Status:</strong> {issue.status}</p>
      <p><strong>Priority:</strong> {issue.priority}</p>
      <p><strong>Location:</strong> {issue.location?.district}</p>
      <p className="mt-2">{issue.description}</p>
    </div>
  );
};

export default IssueDetails;
