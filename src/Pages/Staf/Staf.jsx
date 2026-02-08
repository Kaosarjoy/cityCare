import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/UseAuth";
import useAxios from "../../hooks/Useaxios";

const Staf = () => {
  const { user } = useAuth(); // logged-in admin
  const axiosSecure = useAxios(); // Axios with interceptor
  const serviceCenter = useLoaderData(); // loaded regions/districts
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  // Unique regions
  const regions = [...new Set(serviceCenter.map((c) => c.region))];

  // Watch selected region
  const stafRegion = useWatch({ control, name: "stafRegion" });

  // Get districts by selected region
  const districtByStaf = (region) => {
    if (!region) return [];
    return serviceCenter
      .filter((c) => c.region === region)
      .map((c) => c.district);
  };

  // Submit handler
  const handleAddStaf = async (data) => {
    // Check if logged-in user is admin
    if (user?.role !== "admin") {
      return Swal.fire({
        icon: "error",
        title: "Unauthorized",
        text: "Only admin can add staff.",
      });
    }

    const stafData = {
      name: data.stafName,
      email: data.stafEmail,
      phone: data.stafPhone,
      dateOfBirth: data.stafDateOfBirth,
      nid: data.stafNID,
      region: data.stafRegion,
      district: data.stafDistrict,
      role: "staff",
      createdBy: user.email,
      createdAt: new Date(),
    };

    try {
      const res = await axiosSecure.post("/staffs", stafData);

      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Staff Added Successfully",
          text: "New staff member has been added.",
          confirmButtonColor: "#3085d6",
        });
        navigate("/dashboard/staffList");
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: error.response?.data?.message || error.message || "Try again later.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-bold text-[#003d3d] mb-6">Add New Staff</h1>

        <form onSubmit={handleSubmit(handleAddStaf)} className="space-y-5">
          {/* Staff Name */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Staff Name</label>
            <input
              type="text"
              {...register("stafName", { required: "Staff name is required" })}
              placeholder="Enter staff name"
              className="w-full p-2 border rounded-md"
            />
            {errors.stafName && <p className="text-red-500 text-sm">{errors.stafName.message}</p>}
          </div>

          {/* Staff Email */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Staff Email</label>
            <input
              type="email"
              {...register("stafEmail", { required: "Email is required" })}
              placeholder="Enter staff email"
              className="w-full p-2 border rounded-md"
            />
            {errors.stafEmail && <p className="text-red-500 text-sm">{errors.stafEmail.message}</p>}
          </div>

          {/* Staff Phone */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Phone Number</label>
            <input
              type="text"
              {...register("stafPhone", { required: "Phone number is required" })}
              placeholder="Enter phone number"
              className="w-full p-2 border rounded-md"
            />
            {errors.stafPhone && <p className="text-red-500 text-sm">{errors.stafPhone.message}</p>}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Date Of Birth</label>
            <input
              type="text"
              {...register("stafDateOfBirth", { required: "Date of Birth is required" })}
              placeholder="Enter Date of Birth"
              className="w-full p-2 border rounded-md"
            />
            {errors.stafDateOfBirth && (
              <p className="text-red-500 text-sm">{errors.stafDateOfBirth.message}</p>
            )}
          </div>

          {/* NID */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Staff NID Details</label>
            <input
              type="text"
              {...register("stafNID", { required: "NID is required" })}
              placeholder="Enter NID Card Number"
              className="w-full p-2 border rounded-md"
            />
            {errors.stafNID && <p className="text-red-500 text-sm">{errors.stafNID.message}</p>}
          </div>

          {/* Region */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Select Region</label>
            <select
              {...register("stafRegion", { required: "Region is required" })}
              className="w-full p-2 border rounded-md bg-white"
            >
              <option value="">Select region</option>
              {regions.map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>
            {errors.stafRegion && <p className="text-red-500 text-sm">{errors.stafRegion.message}</p>}
          </div>

          {/* District */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Select District</label>
            <select
              {...register("stafDistrict", { required: "District is required" })}
              className="w-full p-2 border rounded-md bg-white"
            >
              <option value="">Select district</option>
              {districtByStaf(stafRegion).map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </select>
            {errors.stafDistrict && <p className="text-red-500 text-sm">{errors.stafDistrict.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full btn btn-primary font-bold py-2 rounded-lg hover:btn-secondary"
          >
            Add Staff
          </button>
        </form>
      </div>
    </div>
  );
};

export default Staf;
