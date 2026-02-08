import React, { useState } from 'react';
import useAuth from '../../hooks/UseAuth';
import useAxios from '../../hooks/Useaxios';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';
import { NavLink } from 'react-router';

const MyIssue = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();
    
    // State for filtering (Optional: add UI controls for these)
    const [statusFilter, setStatusFilter] = useState('');

    // TanStack Query to fetch user issues
    const { data: issues = [], refetch, isLoading } = useQuery({
        enabled: !!user?.email,
        queryKey: ["my-issues", user?.email, statusFilter],
        queryFn: async () => {
            // Updated endpoint to filter by email and optionally status
            const res = await axiosSecure.get(`/issues?email=${user.email}&status=${statusFilter}`);
            return res.data.result; // Assuming API returns {result: [], totalIssues: 0}
        },
    });

    // Issue Delete Button
    const handleDeleteIssue = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/issues/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your issue has been deleted.",
                            icon: "success",
                        });
                    }
                });
            }
        });
    };

    if (isLoading) return <div className="text-center mt-10"><span className="loading loading-spinner loading-lg"></span></div>;

    return (
        <div className="p-4 md:p-6 bg-white rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">My Reported Issues</h2>
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>Dashboard</li>
                        <li className='font-bold'>My Issues</li>
                    </ul>
                </div>
            </div>

            {/* Optional: Add filter dropdown here */}

            <div className="overflow-x-auto">
                <table className="table w-full border rounded-2xl border-gray-200">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="text-center">#</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Priority</th>
                            <th>Tracking ID</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issues.length === 0 && (
                            <tr>
                                <td colSpan="7" className="text-center py-10 text-gray-500">
                                    No issues reported yet.
                                </td>
                            </tr>
                        )}
                        {issues.map((issue, index) => (
                            <tr key={issue._id} className="hover:bg-gray-50 transition-all border-b">
                                <td className="text-center font-medium">{index + 1}</td>
                                <td className="font-semibold text-gray-800">
                                    {issue.title}
                                </td>
                                <td>{issue.category}</td>
                                <td>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold
                                        ${issue.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 
                                          issue.status === 'In-Progress' ? 'bg-blue-100 text-blue-700' :
                                          issue.status === 'Resolved' ? 'bg-green-100 text-green-700' :
                                          'bg-red-100 text-red-700'}`}>
                                        {issue.status}
                                    </span>
                                </td>
                                <td>
                                    <span className={`px-2 py-0.5 rounded text-xs font-bold
                                        ${issue.priority === 'High' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                                        {issue.priority}
                                    </span>
                                </td>
                                <td className="text-gray-500 font-mono text-sm">{issue.trackingId}</td>
                                <td className="text-center">
                                    <div className="flex justify-center gap-2">
                                        {/* Edit button: only for pending issues */}
                                        <button 
                                            disabled={issue.status !== 'Pending'}
                                            className="btn btn-ghost btn-xs btn-square text-blue-600 hover:bg-blue-50"
                                            title="Edit"
                                        >
                                            <FaEdit />
                                        </button>
                                        
                                        <NavLink to={`/dashboard/issue-details/${issue._id}`}>
                                            <button className="btn btn-ghost btn-xs btn-square text-gray-600 hover:bg-gray-200" title="View Details">
                                                <FaEye />
                                            </button>
                                        </NavLink>
                                        
                                        {/* Delete button: only for pending issues */}
                                        <button
                                            onClick={() => handleDeleteIssue(issue._id)}
                                            disabled={issue.status !== 'Pending'}
                                            className="btn btn-ghost btn-xs btn-square text-red-600 hover:bg-red-50"
                                            title="Delete"
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {/*  */}
        </div>
    );
};

export default MyIssue;