"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import { InstagramEmbedComponent } from "./InstagramEmbed";
import { TikTokEmbedComponent } from "./TiktokEmbed";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const InfluencerSocialMedia = ({
  socialMediaLinks,
}: {
  socialMediaLinks: string[];
}) => {
  const size = useWindowSize();
  let slidesPerView;

  if (size.width === null) {
    slidesPerView = 1;
  } else if (size.width < 800) {
    // Mobile
    slidesPerView = 1;
  } else if (size.width && size.width >= 800 && size.width <= 900) {
    // Tablet
    slidesPerView = 2;
  } else {
    // Desktop
    slidesPerView = 3;
  }
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        centeredSlides
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        initialSlide={1}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        id="mySwiper"
        className="flex py-5"
      >
        <SwiperSlide>
          <InstagramEmbedComponent url={socialMediaLinks[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <TikTokEmbedComponent url={socialMediaLinks[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <InstagramEmbedComponent url={socialMediaLinks[1]} />
        </SwiperSlide>
      </Swiper>
      <div className="flex items-center lg:justify-around overflow-x-auto lg:overflow-hidden "></div>
    </div>
  );
};
