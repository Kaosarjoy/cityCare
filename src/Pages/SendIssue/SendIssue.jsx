import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/UseAuth";
import useAxios from "../../hooks/Useaxios";

const SendIssue = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm();

  const { user } = useAuth();
  const axiosSecure = useAxios();
  const serviceCenter = useLoaderData();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    try {
      // --- ১. ইমেজ আপলোড ---
      const imageFile = data.image[0];
      const formData = new FormData();
      formData.append("image", imageFile);

      const apiKey = import.meta.env.VITE_image_API;
      const imgRes = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const imgData = await imgRes.json();

      if (!imgData.success) throw new Error("Image upload failed");
      const imageUrl = imgData.data.url;

      // --- ২. ইস্যু ডেটা তৈরি ---
      const issueData = {
        issueType: data.issueType,
        issueTitle: data.issueTitle,
        issueDescription: data.issueDescription,
        issueRegion: data.issueRegion,
        issueDistrict: data.issueDistrict,
        image: imageUrl,
        reporterName: user?.displayName,
        reporterEmail: user?.email,
        status: "pending",
        createdAt: new Date(),
        upvotes: []
      };

      // --- ৩. সার্ভারে পাঠানো ---
      const res = await axiosSecure.post("/issues", issueData);

      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Issue reported successfully!",
        });
        reset();
        navigate("/myIssues");
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to report issue. Please try again.",
      });
    } finally {
      setLoading(false);
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
            <label className="text-sm font-bold text-[#003d3d]">Issue Title</label>
            <input
              type="text"
              {...register("issueTitle", { required: "Issue title লাগবেই" })}
              placeholder="Problem Name"
              className="w-full p-2 border rounded-md"
            />
            {errors.issueTitle && (
              <p className="text-red-500 text-sm">{errors.issueTitle.message}</p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label className="text-sm font-bold text-[#003d3d]">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              {...register("image", { required: "Image is required" })}
              className="file-input file-input-bordered w-full"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          {/* Issue Description */}
          <div>
            <label className="text-sm font-bold text-[#003d3d]">Issue Description</label>
            <textarea
              {...register("issueDescription", { required: "Issue details লাগবেই" })}
              placeholder="সমস্যাটা বিস্তারিত লিখুন"
              className="w-full p-2 border rounded-md h-28 resize-none"
            />
            {errors.issueDescription && (
              <p className="text-red-500 text-sm">{errors.issueDescription.message}</p>
            )}
          </div>

          {/* Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold text-gray-600">Region</label>
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
                <p className="text-red-500 text-sm">{errors.issueRegion.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600">District</label>
              <select
                {...register("issueDistrict", { required: "District select করো" })}
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
                <p className="text-red-500 text-sm">{errors.issueDistrict.message}</p>
              )}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary hover:btn-secondary w-full"
          >
            {loading ? "Submitting..." : "Submit Issue"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendIssue;
