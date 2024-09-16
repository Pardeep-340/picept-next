"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Heading from "./custom-ui/Heading";
import Paragraph from "./custom-ui/Paragraph";
import Image from "next/image";
import Icons from "./common/Icons";
import { PICEPT_DELIVER_DATA_LIST } from "@/utils/helper";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/autoplay";
import { Autoplay, Virtual } from "swiper/modules";

const PiceptDeliver = () => {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef1 = useRef<SwiperCore | null>(null);
  const swiperRef2 = useRef<SwiperCore | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const getProgressWidth = () => {
    const progressSteps = [10, 30, 60, 80, 100];
    return `${progressSteps[activeTab]}%`;
  };

  const tabWidth = [
    "xl:!w-[218px]",
    "xl:!w-[175px]",
    "xl:!w-[322px]",
    "xl:!w-[180px]",
    "xl:!w-[230px]",
  ];

  const isFullWidth = getProgressWidth() === "100%";

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveTab(swiper.activeIndex);
    if (swiper === swiperRef1.current) {
      swiperRef2.current?.slideTo(swiper.activeIndex);
    } else if (swiper === swiperRef2.current) {
      swiperRef1.current?.slideTo(swiper.activeIndex);
    }
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    swiperRef1.current?.slideTo(index);
    swiperRef2.current?.slideTo(index);
  };

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (swiperRef1.current && swiperRef2.current) {
        if (entry.isIntersecting) {
          swiperRef1.current.autoplay?.start();
          swiperRef2.current.autoplay?.start();
        } else {
          swiperRef1.current.autoplay?.stop();
          swiperRef2.current.autoplay?.stop();
        }
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Observes the viewport
      threshold: 0.1, // Trigger when 10% of the section is visible
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [handleIntersection]);

  return (
    <div
      id="blogs"
      ref={sectionRef}
      className="bg-deliver relative bg-center bg-no-repeat bg-cover bg-rich-black"
    >
      <div className="container max-w-[1140px] relative z-20 py-[38px] md:py-10 xl:py-[73px]">
        <Heading data-aos="zoom-out" className="text-center mb-8 md:mb-12">
          Picept Delivers the Best
        </Heading>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex justify-between max-xs:space-x-9 overflow-x-scroll scrollbar-hide">
            <Swiper
              slidesPerView={1.2}
              spaceBetween={10}
              autoplay={false} // Autoplay is controlled manually
              speed={2000}
              centeredSlides={false}
              modules={[Autoplay, Virtual]}
              breakpoints={{
                556: { slidesPerView: 3 },
                1280: { slidesPerView: 5 },
              }}
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => (swiperRef1.current = swiper)}
              className="xl:!overflow-x-auto scrollbar-hide swiper-tab"
            >
              {PICEPT_DELIVER_DATA_LIST.map((tab, i) => (
                <SwiperSlide key={i} className={`${tabWidth[i]}`}>
                  <div
                    className={`py-2 pe-3 md:px-4 xl:px-0 text-start flex items-center text-grey cursor-pointer`}
                    onClick={() => handleTabClick(i)}
                  >
                    <div className="mr-2">
                      <Icons
                        icon={
                          activeTab === i
                            ? "active-tab-icon"
                            : "inactive-tab-icon"
                        }
                      />
                    </div>
                    <Paragraph
                      bold
                      smallM
                      className={`w-fit md:!text-sm lg:!text-xl max-w-[250px] md:max-w-[600px] ${activeTab === i ? "!text-grey !text-opacity-100" : "!text-grey !text-opacity-70"
                        }`}
                    >
                      {tab.title}
                    </Paragraph>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="w-full bg-[#B7B4B2] rounded-full h-2 mt-3.5">
          <div
            className={`h-2 rounded-full flex common-transition ${isFullWidth ? "bg-orange" : "bg-orange-line"
              }`}
            style={{ width: getProgressWidth() }}
          ></div>
        </div>
        <div className="mt-12 max-w-[1140px] mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            autoplay={false} // Autoplay is controlled manually
            speed={2000}
            modules={[Autoplay, Virtual]}
            onSwiper={(swiper) => (swiperRef2.current = swiper)}
            onSlideChange={handleSlideChange}
          >
            {PICEPT_DELIVER_DATA_LIST.map((tab, i) => (
              <SwiperSlide key={i} className="!h-auto">
                <div className="bg-white h-full flex max-lg:flex-col gap-5 justify-center p-5 md:py-6 md:px-9 lg:justify-between bg-opacity-10 border border-grey border-opacity-30 rounded-32">
                  <div className="flex flex-col max-lg:justify-center max-lg:items-center lg:justify-center">
                    <Heading 
                      medium
                      small
                      className="max-lg:text-center xl:!max-w-[450px] !leading-140"
                    >
                      {tab.heading}
                    </Heading>
                    <Paragraph
                      bold
                      smallM
                      className="mt-2 sm:mt-4 max-lg:text-center max-w-[600px] xl:max-w-[449px]"
                    >
                      {tab.description}
                    </Paragraph>
                  </div>
                  <Image
                    priority={false}
                    className="max-lg:object-cover max-h-[500px] border border-grey border-opacity-30 max-lg:mx-auto max-w-[500px] rounded-20 lg:w-[500px] xl:!min-w-[554px] lg:h-[210px] xl:min-h-[240px] w-full h-full"
                    src={tab.image}
                    alt="content"
                    width={774}
                    height={503}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <span className="bg-switch-case w-full h-[293px] absolute -rotate-180 -top-2 z-0 left-0"></span>
      <span className="bg-picept-delivers w-full h-[200px] absolute -bottom-8 z-0 left-0"></span>
    </div>
  );
};

export default PiceptDeliver;
