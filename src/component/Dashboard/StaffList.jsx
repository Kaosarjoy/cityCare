import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../hooks/Useaxios';
import Swal from 'sweetalert2';

const StaffList = () => {
    const axiosSecure = useAxios();

    // Backend থেকে staff data fetch
    const { data: staffList = [], isLoading, refetch } = useQuery({
        queryKey: ['staffList'],
        queryFn: async () => {
            const res = await axiosSecure.get('/staffs'); // URL ঠিক করা
            return res.data;
        }
    });

    // Delete staff function
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axiosSecure.delete(`/staffs/${id}`); // URL ঠিক করা
                    refetch();
                    Swal.fire('Deleted!', 'Staff has been deleted.', 'success');
                } catch (err) {
                    console.error(err);
                    Swal.fire('Error!', 'Failed to delete staff.', 'error');
                }
            }
        });
    };

    if (isLoading) return <div className='text-center'>Loading Staff...</div>;

    return (
        <div>
            <h2 className="text-2xl font-bold text-[#003d3d] mb-6">Staff List</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='bg-gray-100'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Region</th>
                            <th>District</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staffList.map((staff, index) => (
                            <tr key={staff._id}>
                                <th>{index + 1}</th>
                                <td>{staff.stafName}</td>
                                <td>{staff.stafEmail}</td>
                                <td>{staff.stafRegion}</td>
                                <td>{staff.stafDistrict}</td>
                                <td>
                                    <button 
                                        onClick={() => handleDelete(staff._id)} 
                                        className="btn btn-ghost btn-xs text-red-500"
                                    >
                                        Delete
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

export default StaffList;
