import Heading from "./custom-ui/Heading";
import Image from 'next/image';
import Cta from "./custom-ui/Cta";
import Paragraph from "./custom-ui/Paragraph";
import Ellipse from "./custom-ui/Ellipse";
import Link from "next/link";
import Icons from "./common/Icons";

const SwitchRisk = () => {
    return (
        <div className="relative">
            <div className='bg-switch bg-cover bg-opacity-10 bg-rich-black relative py-[38px] md:py-10 xl:py-[115px]'>
                <div className="container relative z-10 max-w-[1140px]">
                    <div className="flex flex-col lg:flex-row lg:gap-8 items-center max-lg:justify-center justify-between">
                        <div data-aos="zoom-in">
                            <Image priority={false} loading="lazy"
                                className='w-full h-full max-lg:order-2 max-w-[470px] xl:max-w-[620px] max-h-[500px] xl:max-h-[553px] '
                                src="/assets/images/webp/switch-timeline.webp"
                                alt="Switch Time Line"
                                width={774}
                                height={503}
                            />
                        </div>
                        <div className='flex flex-col max-lg:order-1 pt-8 md:pt-10 lg:pt-0'>
                            <Heading data-aos="fade-left" className="max-lg:text-center max-lg:mx-auto xl:pe-4 custom-xl:pe-0">Switch Risk Free</Heading>
                            <Paragraph data-aos="fade-left" data-aos-delay="100" bold className="max-w-[640px] lg:max-w-[480px] xl:max-w-[457px] max-lg:text-center max-lg:mx-auto mt-4 mb-8 lg:mb-12">Keep using your existing model from your desired provider, we monitor your usage and let you know how much you can save by switching to our routers.</Paragraph>
                            <Link data-aos="fade-left" data-aos-delay="200" className="max-lg:mx-auto max-w-[184px]" href="#book-demo">
                                <Cta aria-label="Find more button" className="max-lg:mx-auto max-w-[184px]" >
                                    Get started now
                                </Cta>
                            </Link>
                        </div>
                    </div>
                </div>
                <Ellipse className="-left-44 top-[-15%] z-30 !h-[200px] max-lg:hidden" />
                <Ellipse className="-right-40 top-[25%] z-20 !h-[200px] max-lg:hidden" />
                
            </div>
            <span className="bg-switch-case w-full h-[293px] absolute -rotate-180 -top-2 z-0 left-0 max-sm:hidden"></span>
            <span className="bg-top-white w-full h-[293px] absolute -bottom-8 z-0 left-0 max-sm:hidden"></span>
            <span className="bg-top-white absolute -top-2.5 z-0 left-0 h-[93px] w-full bg-opacity-50 rotate-180"></span>
            <span className="bg-top-white absolute -top-[6rem] z-0 h-[93px] w-full left-0 bg-opacity-50"></span>
        </div>
    )
}

export default SwitchRisk;
