"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { Toaster, toast } from "sonner";
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";
export const FeatureCards = () => {
  return (
    <article className="w-[90%] h-full md:flex md:pt-24 lg:pt-16  ">
      <Toaster />
      <Swiper
        effect={"cards"}
        modules={[EffectCards]}
        grabCursor={true}
        className="w-[80%] lg:w-[70%] h-[80%]"
      >
        <SwiperSlide className="flex rounded-2xl items-center justify-center ">
          <CardContent path="2" />
        </SwiperSlide>
        <SwiperSlide className="flex rounded-2xl items-center justify-center ">
          <CardContent path="1" />
        </SwiperSlide>
        <SwiperSlide className="flex rounded-2xl items-center justify-center ">
          <CardContent path="3" />
        </SwiperSlide>
        <SwiperSlide className="flex rounded-2xl items-center justify-center ">
          <CardContent path="4" />
        </SwiperSlide>
      </Swiper>
    </article>
  );
};

const CardContent = ({ path }: { path: string }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center  text-3xl">
      <Image
        className=""
        src={`/images/main/${path}.png`}
        fill
        alt={`${path}`}
      />
    </div>
  );
};
