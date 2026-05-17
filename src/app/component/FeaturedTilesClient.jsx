
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TileCard from "./TileCard";

const FeaturedTilesClient = ({ tiles }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        // 1280: { slidesPerView: 4 },
      }}
      className="pb-12"
    >
      {tiles.map((tile) => (
        <SwiperSlide key={tile.id}>
          <TileCard tile={tile} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturedTilesClient;
