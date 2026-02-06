import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ReviewCard from "../../../Pages/Home/UserReview/ReviewCard ";
const Reviews = ({ reviewPromise }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewPromise.then((data) => setReviews(data));
  }, [reviewPromise]);

  if (!reviews.length) return <p>Loading...</p>;

  return (
    <div className="py-10">
      <div className="items-center mb-4 text-center space-y-2">
        <img alt="" className="mx-auto" />
        <h2 className="font-bold text-3xl mb-2">What our Users are sayings</h2>
        <p className="font-semibold mb-2 ">
          See how we’ve helped citizens solve their city problems quickly and 
          efficiently. <br /> From broken street lights to potholes, we make your city
          safer and cleaner.
        </p>
      </div>
      <Swiper
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        effect={"coverflow"}
        loop={true}
        spaceBetween={true}
        grabCursor={30}
        centeredSlides={true}
        slidesPerView={3} // 3 Card Show there
        coverflowEffect={{
          rotate: 50, // Card Routed Korbe na
          stretch: 0, //  gap
          depth: 100, // Card depth
          modifier: 1,
          slideShadows: true, // True/False kora jai
        }}
         breakpoints={{
    0: {
      slidesPerView: 1, // mobile
    },
    640: {
      slidesPerView: 1, // small tablet
    },
    768: {
      slidesPerView: 2, // tablet
    },
    1024: {
      slidesPerView: 3, // desktop
    },
  }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        
          {reviews.map((review) => (
          <SwiperSlide
            key={review.id}
            className="flex justify-center transition-transform duration-500"
          >
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
};
export default Reviews;
