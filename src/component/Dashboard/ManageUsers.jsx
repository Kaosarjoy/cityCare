import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/Useaxios";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxios();

  // Fetch all users
  const { data: users = [], refetch, isLoading } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // Block/Unblock user
  const handleBlockToggle = (user) => {
    const newStatus = user.status === "active" ? "blocked" : "active";

    Swal.fire({
      title: "Are you sure?",
      text: `This user will be ${newStatus}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/${user._id}/status`, { status: newStatus })
          .then(() => {
            refetch();
            Swal.fire("Success", `User ${newStatus}`, "success");
          });
      }
    });
  };

  // Make user admin or revoke admin
  const handleRoleChange = (user) => {
    const newRole = user.role === "admin" ? "user" : "admin";

    Swal.fire({
      title: "Change Role?",
      text: `This user will become ${newRole}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, change",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/${user._id}/role`, { role: newRole })
          .then(() => {
            refetch();
            Swal.fire("Success", `User is now ${newRole}`, "success");
          });
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Manage Users</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subscription</th>
              <th>Status</th>
              <th>Role</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td className="font-medium">{user.displayName || "N/A"}</td>
                <td>{user.email}</td>
                <td>
                  <span
                    className={`badge ${
                      user.subscription === "premium"
                        ? "badge-success"
                        : "badge-ghost"
                    }`}
                  >
                    {user.subscription === "premium" ? "Premium" : "Free"}
                  </span>
                </td>
                <td>
                  <span
                    className={`badge ${
                      user.status === "blocked"
                        ? "badge-error"
                        : "badge-info"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="capitalize font-medium">{user.role}</td>
                <td className="flex justify-center gap-2">
                  <button
                    onClick={() => handleBlockToggle(user)}
                    className={`btn btn-xs ${
                      user.status === "blocked" ? "btn-success" : "btn-error"
                    }`}
                  >
                    {user.status === "blocked" ? "Unblock" : "Block"}
                  </button>

                  {/* Only show role change button for normal users */}
                  {user.role !== "admin" ? (
                    <button
                      onClick={() => handleRoleChange(user)}
                      className="btn btn-xs btn-primary"
                    >
                      Make Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleRoleChange(user)}
                      className="btn btn-xs btn-warning"
                    >
                      Revoke Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No users found</p>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
