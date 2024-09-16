"use client"
import Cta from './custom-ui/Cta'
import Ellipse from './custom-ui/Ellipse'
import Heading from './custom-ui/Heading'
import Paragraph from './custom-ui/Paragraph'
import dynamic from 'next/dynamic'
const CodeWithTypewriter = dynamic(() => import('./common/TypewriterCode'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
}); 

const UniverseApi = () => {

  return (
    <section id="universal-api" className='relative overflow-x-clip'>
      <Ellipse className='absolute top-0 right-[-24%] sm:flex hidden lg:!min-w-[411px]' />
      <Ellipse className='absolute bottom-[20%] left-[-9%] md:flex hidden' />
      <div className="container max-w-[1140px] py-[38px] md:py-10 z-10 xl:pt-0 xl:pb-[71px]">
        <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-16 xl:gap-20 bg-white bg-opacity-[2%] rounded-xl md:rounded-2xl lg:rounded-32 py-8 md:py-12 lg:py-[66px] px-3 sm:px-[23px]">
          <div className="border border-grey w-full border-opacity-[30%] mx-auto lg:ms-0 max-w-[620px] max-h-[499px] rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-32 overflow-hidden shadow-custom">
            <div className="h-full w-full shadow-inner">
              <div className="bg-white bg-opacity-[15%]">
                <div className="flex items-center py-3 gap-3 sm:gap-10 ps-4">
                  <div className="flex gap-1 sm:gap-2">
                    <div className="size-2 sm:size-[18px] rounded-full bg-red"></div>
                    <div className="size-2 sm:size-[18px] rounded-full bg-yellow"></div>
                    <div className="size-2 sm:size-[18px] rounded-full bg-green"></div>
                  </div>
                  <Paragraph offWhite bold className="max-sm:!text-sm">Use your preferred provider</Paragraph>
                </div>
              </div>
              <div className="md:ps-6 ps-3 pe-1 py-3 md:py-6 md:pe-3 bg-wild-black">
                <div className="max-h-[352px] min-h-[351px] lg:max-h-[393px] lg:min-h-[392px] overflow-auto scrollbar-hide tracking-[1px] scroll-smooth smooth_scroll">
                  <CodeWithTypewriter />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:max-w-[392px]">
            <Heading data-aos="fade-left" className="pb-4 max-lg:mx-auto max-lg:!text-center">Universal API</Heading>
            <Paragraph data-aos="fade-left" data-aos-delay="100" className="pb-7 max-lg:mx-auto max-lg:!text-center sm:pb-8 lg:pb-12" bold>
              Effortlessly access 100+ LLMs from top providers like AWS Bedrock, Azure, Google, Vertex AI, OpenAI, and more.
            </Paragraph>
            <Cta data-aos="fade-left" data-aos-delay="200" aria-label="routes" className=' max-lg:!mx-auto max-lg:flex max-lg:items-center max-lg:justify-center common-transition'>
              Explore our universal API
            </Cta>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UniverseApi;