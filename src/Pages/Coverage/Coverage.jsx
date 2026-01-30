import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLoaderData } from "react-router";

import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const Coverage = () => {
  const position = [23.8103, 90.4125];
  const servicesLoader = useLoaderData();
  const mapRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = servicesLoader.find((center) =>
      center.district.toLowerCase().includes(location.toLowerCase()),
    );
    if (district) {
      alert(
        `Service is available in ${district.district} at ${district.covered_area}`,
      );
      // Animation duration in seconds
      mapRef.current.flyTo(
        [parseFloat(district.latitude), parseFloat(district.longitude)],
        12,
      );
      mapRef.current.setView(
        [parseFloat(district.latitude), parseFloat(district.longitude)],
        12,
        {
          animate: true,
          duration: 1,
        },
      );
    }
  };
  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 text-center">
        <h2 className="text-4xl font-bold">We are available in 64 districts of Bangladesh</h2>
      </div>
      <div className="gap-2 ">
        <form onSubmit={handleSubmit}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="grow"
              placeholder="Search"
              name="location"
            />
          </label>
          <button className="btn btn-primary p-4 mb-4 mt-4 ms-3 ">Search</button>
        </form>
      </div>
      {/* map container */}
      <div
        className="border-4 border-gray-200 rounded-lg overflow-hidden"
        style={{ height: "600px", width: "100%" }}
      >
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {servicesLoader &&
            servicesLoader.map((center, idx) => (
              <Marker
                key={idx}
                position={[
                  parseFloat(center.latitude),
                  parseFloat(center.longitude),
                ]}
              >
                <Popup>
                  <div className="text-center">
                    <strong className="text-lg">{center.district}</strong>{" "}
                    <br />
                    <div className="flex gap-3 items-center">
                      <span className="text-blue-600 font-semibold">
                        Service Center:
                      </span>
                      <span className="text-gray-700">
                        {center.covered_area}
                      </span>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
