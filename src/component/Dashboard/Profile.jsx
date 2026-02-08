import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/UseAuth";
import useAxios from "../../hooks/Useaxios";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const axiosSecure = useAxios();

  const [profileData, setProfileData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    photoURL: user?.photoURL || "",
    isPremium: false,
    isBlocked: false,
  });
  const [photoFile, setPhotoFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch extra data from backend (premium, blocked status)
  // Profile.jsx
useEffect(() => {
  axiosSecure.get(`/users/profile?email=${user.email}`)
    .then(res => setProfile(res.data))
    .catch(err => console.error(err));
}, [user, axiosSecure]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    let photoURL = profileData.photoURL;

    try {
      // If photo updated, upload it first
      if (photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        const res = await fetch(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_API}`,
          { method: "POST", body: formData }
        );
        const data = await res.json();
        photoURL = data.data.display_url;
      }

      // Update Firebase profile
      await updateUserProfile({ displayName: profileData.name, photoURL });

      // Update backend
      await axiosSecure.patch(`/users/${user.email}`, {
        displayName: profileData.name,
        photoURL,
      });

      setProfileData(prev => ({ ...prev, photoURL }));
      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-6">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      {/* Premium / Blocked status */}
      <div className="flex items-center gap-4 mb-4">
        {profileData.isPremium && (
          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold">
            Premium
          </span>
        )}
        {profileData.isBlocked && (
          <span className="bg-red-500 text-white px-3 py-1 rounded-full font-semibold">
            Blocked! Contact authorities
          </span>
        )}
      </div>

      <form onSubmit={handleProfileUpdate} className="space-y-4">
        {/* Profile Photo */}
        <div className="flex items-center gap-4">
          <img
            src={profileData.photoURL || "/default-user.png"}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhotoFile(e.target.files[0])}
            className="file-input file-input-primary"
          />
        </div>

        {/* Name */}
        <div className="flex flex-col">
          <label className="font-medium">Name</label>
          <input
            type="text"
            value={profileData.name}
            onChange={(e) =>
              setProfileData({ ...profileData, name: e.target.value })
            }
            className="input input-bordered w-full"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="font-medium">Email</label>
          <input
            type="email"
            value={profileData.email}
            readOnly
            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full bg-primary hover:bg-secondary text-white font-semibold py-3 rounded-xl transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>

        {/* Subscribe Button for non-premium */}
        {!profileData.isPremium && !profileData.isBlocked && (
          <button
            type="button"
            onClick={() => Swal.fire("Subscribe for 1000TK to become premium!")}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-xl transition"
          >
            Subscribe
          </button>
        )}
      </form>
    </div>
  );
};

export default Profile;
