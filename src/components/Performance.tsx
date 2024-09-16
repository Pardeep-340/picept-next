"use client";
import { PERFORMANCE_DATA_LIST } from "@/utils/helper";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Icons from "./common/Icons";
import Cta from "./custom-ui/Cta";
import Heading from "./custom-ui/Heading";
import Paragraph from "./custom-ui/Paragraph";
import Link from "next/link";
import { Suspense } from 'react'


type TabType = (typeof PERFORMANCE_DATA_LIST)[number];

const Performance: React.FC = () => {
  const searchParams = useSearchParams();
  let tabs = searchParams.get("type");
  const [activeTab, setActiveTab] = useState<TabType>(PERFORMANCE_DATA_LIST[0]);

  useEffect(() => {
    const foundTab = PERFORMANCE_DATA_LIST.find((tab) => tab.text.toLowerCase() === tabs?.toLowerCase());
    if (foundTab) {
      setActiveTab(foundTab);
    }
  }, [tabs]);

  const clickHandler = (tab: TabType) => {
    setActiveTab(tab);
  };

  const labels = ["Quality", "Cost", "Speed", "Latency"];

  const PlotlyPlot = ({ src, width, height }: any) => (
    <iframe
      className="scrollbar-hide max-sm:w-full"
      src={src}
      width={width}
      height={height}
      frameBorder="0"
      style={{
        border: "none",
        objectFit: "contain",
      }}
      title="Plotly Plot"
    />
  );

  return (
    <Suspense>
      <div
        id="pricing"
        className="bg-performance relative bg-center bg-cover bg-off-black bg-no-repeat xl:min-h-[880px] py-8 md:py-10 max-xl:px-4 xl:pt-[72px] xl:pb-[69px]"
      >
        <div className="container max-w-[1140px] bg-off-black rounded-xl md:rounded-2xl lg:rounded-32 px-4 md:px-8 py-8 relative z-10 md:py-12">
          <div className="relative z-50">
            <Heading data-aos="fade-down" className="text-center mb-4">
              Unmatched Performance
            </Heading>
            <Paragraph
              data-aos="fade-down"
              data-aos-delay="150"
              bold
              className="max-w-[738px] lg:max-w-[570px] text-center mx-auto mb-6 md:mb-10"
            >
              Choose a router based on your preferences for Quality, Cost, Speed,
              and Latency.
            </Paragraph>
            <div className="flex justify-center space-x-2 sm:space-x-4 md:space-x-6 mb-11 md:mb-8">
              {PERFORMANCE_DATA_LIST.map((tab, i) => (
                <Link
                  key={i}
                  scroll={false}
                  href={`?type=${tab.text}`}
                  className={`p-2 sm:px-4 sm:py-2.5 w-[170px] text-off-white text-base md:text-xl font-normal leading-140 rounded-full text-center ${activeTab.text === tab.text
                    ? "bg-off-white border border-grey border-opacity-30 bg-opacity-[9%]"
                    : "bg-transparent border !text-primary-grey bg-wild-ligh-black border-opacity-30 border-grey"
                    }`}
                >
                  {tab.text}
                </Link>
              ))}
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-between gap-1 w-full">
              <div className="flex order-2 lg:order-1 pt-10 lg:pt-0 flex-col justify-center lg:justify-start lg:w-4/12">
                <Paragraph
                  data-aos="fade-right"
                  offWhite
                  className="!text-2xl md:!text-custom-2xl xl:!text-4xl mb-6 lg:mb-7 !font-normal"
                >
                  Router 1 vs GPT4
                </Paragraph>
                {activeTab.data.map((value, index) => (
                  <div
                    data-aos="fade-right"
                    data-aos-delay={index * 100}
                    key={index}
                    className="flex items-center gap-3 mb-4"
                  >
                    <Icons icon="tick-mark" />
                    <Paragraph className="!text-xl md:!text-custom-2xl !font-medium">
                      {labels[index]}:{" "}
                      <span className="!text-light-green">
                        {value >= 0 ? `+${value}` : value}%
                      </span>
                    </Paragraph>
                  </div>
                ))}
                <Cta
                  data-aos="fade-right"
                  data-aos-delay="300"
                  className="max-lg:mx-auto mt-4 md:mt-8 max-w-[216px]"
                >
                  See our Benchmarks
                </Cta>
              </div>
              <div className="flex order-1 lg:order-2 flex-col lg:ps-5 scrollbar-hide max-sm:w-full max-h-[420px] sm:overflow-hidden lg:w-[62%]">
                <Paragraph className="text-base md:!text-xl mb-2 md:mb-4 !font-bold relative z-10 sm:ps-3 lg:ps-0">
                  {activeTab.text} Rating
                </Paragraph>
                <div className="scrollbar-hide scale-[0.9] xl:scale-[0.97] xl:h-[510px] lg:-ml-20 -ml-10 -mt-24 md:-mt-[110px] xl:-mt-[100px]">
                  <PlotlyPlot src={activeTab.url} width={650} height={510} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="absolute top-14 left-8 xl:left-3">
          <Icons icon="performance-star" />
        </span>
        <span className="bg-unmatched-performance-gradient w-full h-[200px] absolute -bottom-8 z-0 left-0"></span>
      </div>
    </Suspense>
  );
};

export default Performance;