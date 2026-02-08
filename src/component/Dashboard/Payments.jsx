import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaDollarSign, FaReceipt, FaCreditCard } from "react-icons/fa";
import useAxios from "../../hooks/Useaxios";

const Payments = () => {
  const axiosSecure = useAxios(); // protected axios instance

  // Fetch payments from server (v5 compliant)
  const { data: payments = [], isLoading, refetch } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });

  if (isLoading) return <div className="p-4">Loading...</div>;

  // Calculate total revenue
  const totalRevenue = payments.reduce((sum, p) => sum + (p.amount || 0), 0);

  return (
    <div className="p-4 md:p-6 bg-white rounded-2xl shadow-sm">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Payments Dashboard</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-blue-100 rounded-lg flex items-center gap-4">
          <FaDollarSign className="text-3xl text-blue-600" />
          <div>
            <p className="text-gray-700">Total Revenue</p>
            <p className="font-bold text-xl">৳ {totalRevenue}</p>
          </div>
        </div>
        <div className="p-4 bg-green-100 rounded-lg flex items-center gap-4">
          <FaReceipt className="text-3xl text-green-600" />
          <div>
            <p className="text-gray-700">Total Payments</p>
            <p className="font-bold text-xl">{payments.length}</p>
          </div>
        </div>
        <div className="p-4 bg-purple-100 rounded-lg flex items-center gap-4">
          <FaCreditCard className="text-3xl text-purple-600" />
          <div>
            <p className="text-gray-700">Latest Payment</p>
            <p className="font-bold text-xl">
              {payments.length > 0 ? `৳ ${payments[0].amount}` : "-"}
            </p>
          </div>
        </div>
      </div>

      {/* Payment Table */}
      <div className="overflow-x-auto border rounded-xl">
        <table className="table w-full">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, index) => (
              <tr key={p._id || index} className="hover:bg-gray-50">
                <td>{index + 1}</td>
                <td>{p.user || "-"}</td>
                <td className="capitalize">{p.type || "-"}</td>
                <td>৳ {p.amount || 0}</td>
                <td>{p.date ? new Date(p.date).toLocaleDateString() : "-"}</td>
                <td>
                  <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                    {p.status || "Paid"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Optional: Chart Placeholder */}
      <div className="mt-6 p-4 bg-gray-50 border rounded-lg text-center text-gray-400">
        📊 Chart placeholder
      </div>
    </div>
  );
};

export default Payments;
