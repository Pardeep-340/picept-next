import React from 'react'
import Heading from './custom-ui/Heading'
import Paragraph from './custom-ui/Paragraph'
import Cta from './custom-ui/Cta'
import Image from "next/image";
import Icons from './common/Icons';

const LlmApplications = () => {
    return (
        <div id="llm-observability" className='py-8 md:py-10 relative xl:pt-0 max-xl:px-4'>
            <div className="container bg-rich-black bg-end-to-end rounded-xl md:rounded-2xl lg:rounded-32 max-w-[1140px] py-8 md:py-10 xl:py-16 px-3 md:px-6">
                <div className="flex items-center max-lg:flex-col justify-center lg:justify-between">
                    <div className="flex flex-col">
                        <Heading data-aos="fade-right" className='max-w-[700px] lg:max-w-[500px] me-4 max-lg:text-center max-lg:mx-auto mb-4 lg:!text-5xl xl:!text-6xl xl:!leading-120'>End-to-end visibility of your LLM applications</Heading>
                        <Paragraph data-aos="fade-right" data-aos-delay="100" bold className='max-w-[600px] lg:max-w-[438px] max-lg:text-center max-lg:mx-auto mb-8 md:mb-12'>We log over 20 different metrics form your LLM calls, review, debug, and optimize with ease.</Paragraph>
                        <Cta data-aos="fade-right" data-aos-delay="200" className="max-w-[190px] max-lg:mx-auto">Try Observability </Cta>
                    </div>
                    <Image priority={false} loading="lazy" data-aos="zoom-in"
                        className="w-full pointer-events-none h-full max-lg:mt-10 max-w-[500px] md:max-w-[548px] rounded-xl md:rounded-2xl lg:rounded-32 lg:w-[500px] xl:!min-w-[558px] lg:h-[400px] xl:min-h-[457px]"
                        src="/assets/images/webp/LLM-application.webp"
                        alt="Application Chart"
                        width={774}
                        height={503}
                    />
                </div>
            </div>
            <span className='absolute max-xl:hidden bottom-[30%] left-4'>
                <Icons icon='orange-star' />
            </span>
            <span className='absolute top-[-10%] right-0'>
                <Icons icon='performance-star' />
            </span>
            <Image loading="lazy"
                className='left-0 pointer-events-none max-xl:hidden absolute rotate-180 top-[-13%] '
                src="/assets/images/svg/switch-ellipse.svg"
                alt="Layer Ellipse"
                width={200}
                height={200}
            />
        </div>
    )
}

export default LlmApplications