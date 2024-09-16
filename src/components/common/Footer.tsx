import { FOOTER_LINKS_LIST, SOCIAL_MEDIA_LIST } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import Paragraph from '../custom-ui/Paragraph'
import Icons from './Icons'

const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-black">
            <div className='footer text-white container max-w-[1140px] xl:px-0 pt-10 md:pt-16 lg:pt-[90px] relative z-20'>
                <div className="flex flex-col md:flex-row gap-6 justify-between">
                    <div className='mb-0'>
                        <Link href="/"><Image src={"/assets/images/svg/footer-logo.svg"} className='md:w-40 md:h-[52px] xl:h-[84px] xl:w-[263px] w-36' alt='footer-logo' height={84} width={263} /></Link>
                        <div className='pt-4 flex gap-3'>
                            {SOCIAL_MEDIA_LIST.map((obj, i) => {
                                return (
                                    <Link key={i} href={obj.link} target='_blank' aria-label='open-links' className="w-10 lg:w-12 lg:h-12 duration-300 border-[0.5px] border-light-black hover:border-orange h-10 bg-light-black hover:bg-black flex justify-center items-center rounded-full"> <Icons icon={`${obj.icon}`} /></Link>
                                )
                            })}

                        </div>
                    </div>
                    <div className="flex justify-between pt-6 md:pt-0 flex-wrap gap-x-3 gap-y-6 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-[113px]">
                        {FOOTER_LINKS_LIST.map((obj, i) => {
                            return (
                                <div key={i} className="flex flex-col max-sm:w-[45%]">
                                    <Paragraph smallL offWhite className="pb-2">{obj.title}</Paragraph>
                                    {obj.linkList.map((data, index) => {
                                        const linkText = data.subtitle;
                                        const linkId = data.links || "";

                                        return (
                                            <Link
                                                className="mt-2 text-sm md:text-base text-grey font-normal !leading-150 duration-300 hover:text-orange"
                                                key={index}
                                                href={`${linkId}`}
                                            >
                                                {linkText}
                                            </Link>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="lg:pt-[66px] pb-[25px] pt-10 md:pt-14">
                    <Paragraph small center> Copyright opendoc.ai {year} | All Rights Reserved</Paragraph>
                </div>
            </div>
        </footer>
    )
}

export default Footer
