import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router";
import useAxios from "../../hooks/Useaxios";
import useAuth from "../../hooks/UseAuth";

const AllIssues = () => {
  const axiosSecure = useAxios();
  const { user } = useAuth();
  const navigate = useNavigate();

  const { data = [] } = useQuery({
    queryKey: ["allIssues"],
    queryFn: async () => {
      const res = await axiosSecure.get("/issues");
      return res.data.result;
    }
  });

  const handleUpvote = async (id, ownerEmail) => {
    if (!user) return navigate("/auth/login");
    if (user.email === ownerEmail) return alert("নিজের ইস্যুতে ভোট দেওয়া যাবে না");

    await axiosSecure.patch(`/issues/${id}/upvote`);
  };

  return (
    <div className="grid md:grid-cols-2 gap-5">
      {data.map(issue => (
        <div key={issue._id} className="card bg-base-100 shadow">
          <figure>
            <img src={issue.image} className="h-48 w-full object-cover"/>
          </figure>

          <div className="card-body">
            <h2 className="font-bold">{issue.issueTitle}</h2>

            <div className="flex gap-2">
              <span className="badge badge-info">{issue.category}</span>
              <span className={`badge ${issue.status === "pending" ? "badge-warning" : "badge-success"}`}>
                {issue.status}
              </span>
              {issue.priority === "high" && (
                <span className="badge badge-error">Boosted</span>
              )}
            </div>

            <p> {issue.location?.district}</p>

            <div className="flex justify-between items-center mt-3">
              <button
                onClick={() => handleUpvote(issue._id, issue.reporterEmail)}
                className="btn btn-sm"
              >
                 {issue.upvotes}
              </button>

              <Link
                to={`/issue/${issue._id}`}
                className="btn btn-sm btn-primary"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllIssues;
//https://docs.google.com/document/d/1IBsw4txo6JSav_MJNBsv5_spB0emiYVK/edit