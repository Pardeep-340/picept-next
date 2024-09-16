import { TRUSTER_DATA_LISTS } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'
import Heading from './custom-ui/Heading'

const TrustedDeveloper = () => {
  return (
    <div className="overflow-hidden max-w-[1920px] mx-auto py-8 md:pb-10 pt-14 xl:pt-0 xl:pb-[120px]">
       <Heading data-aos="fade-up" medium small center className="lg:pt-[30px] pb-10 lg:pb-12 px-12 sm:px-5">Trusted By Developer at</Heading>
      <div className="flex slide_container">
        {TRUSTER_DATA_LISTS.map((image, i) => (
          <div key={i} className="mx-3.5 md:mx-[27px] flex items-center">
            <Image
              loading="lazy"
              width={341}
              height={100}
              src={image}
              alt="companies-logo"
              className={`${i === 0 || i === 7 || i === 14 || i === 21
                ? 'max-w-[70px] md:max-w-[110px]'
                : i === 1 || i === 8 || i === 15 || i === 22
                  ? 'max-w-[250px] md:max-w-[341px]'
                  : i === 2 || i === 9 || i === 16 || i === 23
                    ? 'max-w-[60px] md:max-w-[73px]'
                    : i === 3 || i === 10 || i === 17 || i === 24
                      ? 'max-w-[100px] md:max-w-[134px]'
                      : i === 4 || i === 11 || i === 18 || i === 25
                        ? 'max-w-[60px] md:max-w-[73px]'
                        : i === 5 || i === 12 || i === 19 || i === 26
                          ? 'max-w-[110px] md:max-w-[145px]'
                          : i === 6 || i === 13 || i === 20 || i === 27
                            ? 'max-w-[180px] md:max-w-[211px]'
                            : 'max-w-[60px] md:max-w-[73px]'
                } cursor-pointer object-contain lg:object-cover`}
            /> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustedDeveloper
