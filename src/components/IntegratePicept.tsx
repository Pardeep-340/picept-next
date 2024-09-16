"use client";
import { CODE_DISPLAY_LIST, INTEGRATED_DATA_LISTS } from "@/utils/helper";
import Link from "next/link";
import { useState } from "react";
import CodeDisplay from "./CodeDisplay";
import Icons from "./common/Icons";
import Cta from "./custom-ui/Cta";
import Ellipse from "./custom-ui/Ellipse";
import Heading from "./custom-ui/Heading";
import Paragraph from "./custom-ui/Paragraph";

const IntegratePicept = () => {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="smart-routing" className="relative">
      <Ellipse className="absolute top-[8%] left-[-10%]" />
      <span className="absolute hidden xl:block top-[30%] right-4">
        <Icons icon="performance-star" />
      </span>
      <div className="container max-w-[1140px] py-8 md:py-10 xl:pt-16 xl:pb-[140px]">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-8 xl:gap-14 bg-white bg-opacity-[2%] rounded-xl md:rounded-2xl lg:rounded-32 py-8 sm:py-10 md:py-12 lg:py-[66px] px-3 sm:px-[23px]">
          <div className="lg:max-w-[400px] xl:max-w-[480px]">
            <Heading data-aos="fade-right"  className="pb-4 max-lg:text-center lg:!text-5xl xl:!text-6xl xl:!leading-120">Integrate Picept in a few lines</Heading>
            <Paragraph data-aos="fade-right" data-aos-delay="100" className="max-lg:text-center pb-8 lg:pb-12" bold>
              Effortlessly route your prompt to the best LLMs—optimized for
              cost, quality, speed, and latency.
            </Paragraph>
            <Link href="#pricing" data-aos="fade-right" data-aos-delay="200">
              <Cta aria-label="routes" className=' common-transition max-lg:mx-auto max-lg:flex max-lg:items-center max-lg:justify-center'>
                Explore our routers
              </Cta>
            </Link>
          </div>
          <div className="border border-grey w-full border-opacity-[30%] mx-auto max-w-[558px] max-h-[499px] rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-32 overflow-hidden shadow-custom">
            <div className="h-full w-full shadow-inner">
              <div className="bg-white bg-opacity-[15%]">
                <div className="flex items-center py-3 gap-3 sm:gap-10 ps-4">
                  <div className="flex gap-1 sm:gap-2">
                    <div className="size-2 sm:size-[18px] rounded-full bg-red"></div>
                    <div className="size-2 sm:size-[18px] rounded-full bg-yellow"></div>
                    <div className="size-2 sm:size-[18px] rounded-full bg-green"></div>
                  </div>
                  <Paragraph offWhite bold className="text-sm md:text-base lg:text-xl xl:text-2xl">Choose your preferred framework</Paragraph>
                </div>
                <div className="flex">
                  {INTEGRATED_DATA_LISTS.map((tab, index) => (
                    <div
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`cursor-pointer w-[30%] ${index === 2 && "w-[40%]"} ${activeTab === index && "bg-grey bg-opacity-[14%]"
                        }`}
                    >
                      <Paragraph
                        className={`px-1.5 sm:px-3 py-2 max-sm:text-[12px] text-nowrap border-r sm:border-r-off-white ${activeTab === index && "!text-off-white"} ${index === 2
                          && "border-r-0"
                          }`}
                        smallM
                        center
                      >
                        {tab.label} SDK
                      </Paragraph>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:ps-6 ps-3 pe-1 py-3 md:py-6 md:pe-3 bg-wild-black">
                <div className="md:max-h-[350px] md:min-h-[349px] max-h-[300px] min-h-[299px] overflow-auto scrollbar-hide tracking-[1px]">
                  {CODE_DISPLAY_LIST.map((code, i) =>
                    (activeTab === i) && (
                      <div key={i}>
                        <CodeDisplay code={code} />
                      </div>
                    )
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratePicept;
