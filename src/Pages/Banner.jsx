import React from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import banner5 from "../assets/banner5.jpg";
import banner6 from "../assets/banner6.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS

const Banner = () => {
  const banners = [banner1, banner2, banner3, banner4, banner5, banner6];

  return (
    <div className="w-full mx-auto ">
      <Carousel
        infiniteLoop
        autoPlay
        interval={3000}  // Slide change every 3 seconds
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        stopOnHover={true} // Auto-slide pause on hover
        swipeable={true}   // Mobile swipe support
        emulateTouch={true}
      >
        {banners.map((banner, i) => (
          <div key={i} className="relative">
            <img
              src={banner}
              alt={`Banner ${i + 1}`}
              className="w-full h-75 sm:h-80 lg:h-85 object-cover"
            />
            {/* Optional overlay text */}
            <div className="absolute inset-0 bg-black/25 flex items-center flex-col justify-center">
              <h2 className="text-white text-xl md:text-3xl font-bold">
                CityCare Banner {i + 1}
              </h2>
              <p className="text-white text-ml md:text-l font-bold ">
                Urban cleanliness is far more than a visual preference;  it is a critical pillar of public health and safety. 
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
