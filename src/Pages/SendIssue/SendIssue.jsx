import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import useAuth from "../../hooks/UseAuth";
import useAxios from "../../hooks/Useaxios";


const SendIssue = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { user } = useAuth();
  const axiosSecure = useAxios();
  const serviceCenter = useLoaderData();
  const navigate = useNavigate();

  // region list
  const regions = [...new Set(serviceCenter.map((c) => c.region))];

  const issueRegion = useWatch({ control, name: "issueRegion" });

  // district by region
  const districtByRegion = (region) => {
    if (!region) return [];
    return serviceCenter
      .filter((c) => c.region === region)
      .map((c) => c.district);
  };

  const handleSendIssue = async (data) => {
    const issueData = {
      ...data,
      reporterName: user?.displayName,
      reporterEmail: user?.email,
      status: "pending",
      createdAt: new Date(),
    };

    try {
      const res = await axiosSecure.post("/issues", issueData);
      if (res.data.insertedId) {
        navigate("/myIssues");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-[#003d3d] mb-6">
          Send an Issue
        </h1>

        <form onSubmit={handleSubmit(handleSendIssue)} className="space-y-6">
          {/* Issue Type */}
          <div className="flex gap-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="urgent"
                {...register("issueType", { required: true })}
                className="accent-red-600"
              />
              <span className="font-medium text-[#003d3d]">Urgent</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="regular"
                {...register("issueType", { required: true })}
                className="accent-green-600"
              />
              <span className="font-medium text-[#003d3d]">Regular</span>
            </label>
          </div>
          {errors.issueType && (
            <p className="text-red-500 text-sm">Select the issue type</p>
          )}

          {/* Issue Title */}
          <div>
            <label className="text-sm font-bold text-[#003d3d]">
              Issue Title
            </label>
            <input
              type="text"
              {...register("issueTitle", {
                required: "Issue title লাগবেই",
              })}
              placeholder="Problem Name"
              className="w-full p-2 border rounded-md"
            />
            {errors.issueTitle && (
              <p className="text-red-500 text-sm">
                {errors.issueTitle.message}
              </p>
            )}
          </div>

          {/* Issue Description */}
          <div>
            <label className="text-sm font-bold text-[#003d3d]">
              Issue Description
            </label>
            <textarea
              {...register("issueDescription", {
                required: "Issue details লাগবেই",
              })}
              placeholder="সমস্যাটা বিস্তারিত লিখুন"
              className="w-full p-2 border rounded-md h-28 resize-none"
            />
            {errors.issueDescription && (
              <p className="text-red-500 text-sm">
                {errors.issueDescription.message}
              </p>
            )}
          </div>

          {/* Reporter Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                readOnly
                className="w-full p-2 border rounded-md bg-gray-100"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600">
                Your Email
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                readOnly
                className="w-full p-2 border rounded-md bg-gray-100"
              />
            </div>
          </div>

          {/* Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold text-gray-600">
                Region
              </label>
              <select
                {...register("issueRegion", { required: "Region লাগবেই" })}
                className="w-full p-2 border rounded-md bg-white"
              >
                <option value="">Select Region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              {errors.issueRegion && (
                <p className="text-red-500 text-sm">
                  {errors.issueRegion.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600">
                District
              </label>
              <select
                {...register("issueDistrict", {
                  required: "District select করো",
                })}
                className="w-full p-2 border rounded-md bg-white"
              >
                <option value="">Select District</option>
                {districtByRegion(issueRegion).map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              {errors.issueDistrict && (
                <p className="text-red-500 text-sm">
                  {errors.issueDistrict.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary hover:btn-secondary"
          >
            Submit Issue
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendIssue;
