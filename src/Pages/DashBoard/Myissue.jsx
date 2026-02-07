import React from 'react';
import useAuth from '../../hooks/UseAuth';
import useAxios from '../../hooks/Useaxios';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const Myissue = () => {
      const { user } = useAuth();
  const axiosSecure = useAxios();

  //tanstack query use
  const { data: parcels = [], refetch } = useQuery({
    enabled: !!user?.email,
    queryKey: ["my-parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });
  //Parcel Delete Button
  const handleParcelDetele = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure Delete This?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            //refresh the data automatic
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Parcel has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
    return (
         <div className="overflow-x-auto mt-6">
      <table className="table w-full border  rounded-2xl border-accent ">
        {/* head */}
        <thead className="bg-primary text-gray-700">
          <tr>
            <th className="text-center">#</th>
            <th>Name</th>
            <th>Cost</th>
            <th>Payment</th>
            <th>TrackingId</th>
            <th> Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {parcels.map((parcel, index) => (
            <tr key={parcel._id} className="hover:bg-gray-50 transition-all">
              <td className="text-center font-medium">{index + 1}</td>

              <td className="font-semibold text-gray-800">
                {parcel.parcelName}
              </td>

              <td className="text-gray-700">৳ {parcel.cost}</td>

              <td className="gap-2">
                {parcel.paymentStatus === "paid" ? (
                  <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                    Paid
                  </span>
                ) : (
                  <NavLink to={`/dashboard/payment/${parcel._id}`}>
                    <button className="btn btn-primary btn-small rounded-xl border-white text-black">
                      Pay
                    </button>
                  </NavLink>
                )}
              </td>
                <td className="text-gray-700">{parcel.trackingId}</td>
              <td className="text-gray-700">{parcel.deliveryStatus}</td>

              <td className="text-center">
                <button className="btn btn-square bg-white border-accent hover:bg-primary rounded-xl">
                  <FaEdit></FaEdit>
                </button>

                <button className="btn btn-square bg-white border-accent mx-2 hover:bg-primary rounded-xl">
                  <FaSearch />
                </button>

                <button
                  onClick={() => handleParcelDetele(parcel._id)}
                  className="btn btn-square bg-white border-accent hover:bg-primary rounded-xl"
                >
                  <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default Myissue;