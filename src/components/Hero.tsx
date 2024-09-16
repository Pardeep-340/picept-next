import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import heroAnimation from "../../public/assets/json/hero-lottie.json";
import Icons from "./common/Icons";
import NavBar from "./common/NavBar";
import PopUpForm from "./common/PopUpForm";
import Cta from "./custom-ui/Cta";
import Paragraph from "./custom-ui/Paragraph";

const Hero = () => {
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);
  useEffect(() => {
    if (openPopUp) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [openPopUp]);
  return (
    <div className="bg-hero bg-center bg-cover bg-no-repeat bg-rich-black overflow-x-clip xl:min-h-[820px]">
      <NavBar />
      <div className="container max-w-[1140px] relative z-30">
        <div className="flex items-center pb-10 pt-20 md:pb-8 xl:py-[84px] max-xl:flex-wrap max-lg:justify-center justify-between w-full">
          <div className="flex flex-col lg:w-1/2">
            <h1 data-aos="fade-right" data-aos-delay="200" className="max-w-[600px] text-4xl md:text-5xl lg:text-6xl xl:text-custom-7xl text-off-white font-bold !leading-120 lg:max-w-[515px] xl:max-w-[530px] max-lg:text-center max-lg:mx-auto xl:pe-4 custom-xl:pe-0">
              Smart Routing, One Unified API
            </h1>
            <Paragraph data-aos="fade-right" data-aos-delay="300" bold className="max-w-[640px] lg:max-w-[480px] xl:max-w-[515px] max-lg:text-center max-lg:mx-auto mt-3 md:mt-4 mb-6 md:mb-8 lg:mb-12">
              Intelligently route every prompt to the best LLM, slashing API
              costs by up to 99% while ensuring unmatched quality and speed.
            </Paragraph>
            <div data-aos="fade-right" data-aos-delay="400" className="flex max-lg:mx-auto max-md:mb-[53px] max-lg:mb-10 gap-2.5">
              <div onClick={() => setOpenPopUp(true)}>
                <Cta className="!text-off-white">Book a Demo </Cta>
              </div>
              <div onClick={() => setOpenPopUp(true)}>
                <Cta className="!text-off-white" transparent>Try for Free </Cta>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Lottie
              animationData={heroAnimation}
              loop
              autoplay
              className="w-full object-contain xl:-translate-x-2 custom-xl:-translate-x-12 custom-xl:w-[680px] xl:w-[660px] lg:h-[390px] xl:h-[513px] max-xl:scale-110 md:scale-1 max-sm:scale-[1.2] md:px-0 sm:px-5"
            />
          </div>
        </div>
      </div>
      <span className="absolute bottom-[1%] lg:bottom-[10%] xl:bottom-[17%] z-10 sm:flex hidden pointer-events-none right-0">
        <Icons icon="header-star" />
      </span>
      <PopUpForm openPopUp={openPopUp} setOpenPopUp={setOpenPopUp} />
    </div>
  );
};

export default Hero;