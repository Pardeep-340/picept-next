"use client";
import { JOIN_COMMUNITY_DISCORD_LINK } from "@/utils/const";
import Cta from "./custom-ui/Cta";
import Ellipse from "./custom-ui/Ellipse";
import Heading from "./custom-ui/Heading";
import Paragraph from "./custom-ui/Paragraph";
import ContactForm from "./ContactForm";

const GetIntoTouch = () => {

    return (
        <div
            id="book-demo"
            className="mb-8 lg:mb-10 pt-8 xl:pt-0 xl:mb-[140px] bg-rich-black relative"
        >
            <div className="container grid grid-cols-1 lg:grid-cols-2 items-center max-w-[1140px] relative z-20 gap-10">
                <div className="flex flex-col gap-3 lg:gap-4 mx-auto max-w-[650px] lg:max-w-[438px]">
                    <Heading data-aos="fade-right" className="max-lg:text-center max-sm:max-w-[250px] max-sm:mx-auto">
                        Get in Touch with Us
                    </Heading>
                    <Paragraph data-aos="fade-right" data-aos-delay="100" bold className="max-lg:text-center">
                        Have questions or need more information? Our team is here to help. Reach out to us, and we&apos;ll respond promptly.
                    </Paragraph>
                    <Cta data-aos="fade-right" data-aos-delay="200" url={JOIN_COMMUNITY_DISCORD_LINK} className="mt-5 sm:mt-6 lg:mt-8 w-[181px] max-lg:mx-auto whitespace-nowrap">
                        Join community
                    </Cta>
                </div>
                <div className="flex justify-center lg:justify-end w-full">
                    <ContactForm />
                </div>
            </div>

            <span className="flex w-full h-[712px] bg-black blur-[100px] rounded-full absolute -bottom-[36%] lg:-bottom-[84%] left-0 z-0"></span>
            <Ellipse className="-left-40 top-[33%] !h-[200px] max-lg:hidden" />
        </div>
    );
};


export default GetIntoTouch
