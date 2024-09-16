import { PERFORMANCE_METRICS_LIST } from "@/utils/helper";
import Ellipse from "./custom-ui/Ellipse";
import Icons from "./common/Icons";
import Paragraph from "./custom-ui/Paragraph";
import Heading from "./custom-ui/Heading";

const OverviewData = () => {
  return (
    <div id="explore" className="py-8 md:py-10 xl:pt-9 px-4 xl:px-0 relative">
      <div data-aos="zoom-in" className="bg-performance-metrics bg-cover bg-center border border-grey rounded-xl md:rounded-2xl lg:rounded-32 container max-w-[1140px] border-opacity-30 bg-dark-black relative overflow-hidden z-10">
        <div className="py-8 lg:py-10 lg:px-[75px] flex flex-wrap sm:gap-x-12 md:gap-x-16 xl:gap-x-0 gap-y-7 sm:gap-y-11 items-start justify-center">
          {PERFORMANCE_METRICS_LIST.map((item, index) => (
            <div
              key={index}
              className={`flex max-sm:w-1/2 flex-col gap-2 items-center justify-center border-gradient border-white ${index === 0
                  ? "xl:pr-[58px]"
                  : index === 3 || index === 6
                    ? "xl:pl-[58px] after:!hidden" +
                    (index === 6 ? "max-sm:col-span-2 after:!hidden" : "")
                    : "xl:px-[58px]"
                }
              `}
            >
              <Heading medium smallL className="flex items-center lg:!text-5xl xl:!text-custom-5xl gap-0.5">
                {item.value}
                <Icons
                  icon={
                    index === 0 || index === 2
                      ? "red-down-arrow"
                      : index === 1
                        ? "green-up-arrow"
                        : null
                  }
                />
              </Heading>
              <Paragraph bold center>{item.metric}</Paragraph>
            </div>
          ))}
        </div>
        <Ellipse className="-top-7 -left-24 z-20" />
        <Ellipse className="-bottom-20 -right-20 z-20" />
      </div>
      <span className="bg-top-white w-full h-[293px] absolute -top-8 z-0 left-0 max-sm:hidden"></span>
      <span className="bg-top-white w-full h-[293px] absolute -bottom-8 z-0 left-0 max-sm:hidden"></span>
      <span className="absolute left-1 top-[45%] max-xl:hidden">
        <Icons icon="orange-star" />
      </span>
    </div>
  );
};

export default OverviewData;
