"use client";
import Heading from "./custom-ui/Heading";
import { PICEPT_RATED_LIST } from "@/utils/helper";
import Icons from "./common/Icons";
import Paragraph from "./custom-ui/Paragraph";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import Ellipse from "./custom-ui/Ellipse";

const PiceptRated = () => {
  return (
    <div
      id="about-us"
      className="relative py-[38px] md:py-10 xl:pt-[42px] xl:pb-[126px] overflow-x-clip"
    >
      <div className="px-5 sm:px-0 lg:container max-w-[1140px]">
        <Heading data-aos="zoom-in" center className="max-w-[498px]">
          Picept rated High Performer
        </Heading>
        <div className="pt-8 md:pt-12">
          <Swiper
            loop={true}
            spaceBetween={24}
            autoplay={true}
            speed={1000}
            centeredSlides={true}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              600: { slidesPerView: 2, centeredSlides: true },
              1024: { slidesPerView: 3, centeredSlides: true },
            }}
            slidesPerView={1}
          >
            {PICEPT_RATED_LIST.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="bg-off-black swiper-slide border border-grey group shadow-inner-none hover:shadow-inner common-transition hover:bg-black-grey rounded-2xl sm:rounded-20 border-opacity-30 p-4 sm:p-5 !flex flex-col gap-3 sm:!gap-5">
                  <div className="flex items-center gap-2">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span
                        key={index}
                      >
                        <Icons icon="rating-star" />
                      </span>
                    ))}
                  </div>
                  <Paragraph
                    smallM
                    bold
                    className="group-hover:text-off-white common-transition max-h-24 min-h-24 sm:max-h-[120px] sm:min-h-[120px] md:max-h-[150px] md:min-h-[150px] xl:min-h-[120px] xl:max-h-[120px] scroll-bar-none overflow-y-scroll"
                  >
                    {item.description}
                  </Paragraph>
                  <div className="flex items-center gap-3.5 ">
                    <Image priority={false} loading="lazy"
                      className="rounded-full object-contain size-12 sm:size-16"
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                    />
                    <div className="flex flex-col gap-1">
                      <Paragraph offWhite leadingFull>
                        {item.name}
                      </Paragraph>
                      <Paragraph smallM leadingFull className="opacity-70">
                        {item.profession}
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination py-8 md:py-12 flex items-center justify-center gap-2">
            <span className="swiper-pagination-bullet cursor-pointer"></span>
          </div>
        </div>
      </div>
      <Ellipse className="-left-40 top-1/2 !h-[200px]  max-lg:hidden" />
      <Ellipse className="-right-32 top-[35%] !h-[200px]  max-lg:hidden" />
      <span className="absolute right-3 top-[27%] max-xl:hidden">
        <Icons icon="orange-star" />
      </span>
      <span className="absolute top-[56%] pointer-events-none left-5 max-h-[69px]  max-xl:hidden">
        <Icons icon="performance-star" />
      </span>
    </div>
  );
};

export default PiceptRated;
