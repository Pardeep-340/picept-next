"use client";
import Cta from '../custom-ui/Cta';
import Icons from '../common/Icons';
import { NAV_LINK_LIST } from '../../utils/helper';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface NavLinkItem {
  title: string;
  links: string;
  dropdown?: {
    subtitle: string;
    url: string;
  }[];
}

const NavLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('max-md:overflow-hidden');
    } else {
      document.body.classList.remove('max-md:overflow-hidden');
    }
  }, [isOpen]);

  return (
    <div className='relative bg-rich-black z-40'>
      <nav className="container max-w-[1140px] flex items-center justify-between pb-4 pt-[18px] border-bottom-custom md:!px-6 lg:!px-4 xl:!px-0">
        <div className='flex items-center gap-10 xl:gap-[52px]'>
          <Link onClick={() => setIsOpen(false)} href="/">
            <Image priority
              className='w-28 h-9 md:h-[42px] md:w-32 xl:w-[177px] xl:h-[56px] relative z-50'
              src="/assets/images/webp/page-logo.webp"
              alt="logo"
              width={154}
              height={48}
            />
          </Link>
          <div className={`${isOpen ? "right-0" : "-right-full"} flex common-transition gap-5 md:gap-3 max-md:pt-[120px] md:items-center max-md:flex-col max-md:fixed  max-md:min-h-screen max-md:w-full z-40 max-md:top-0 max-md:bg-black px-6 md:px-0 sm:pr-9 xl:pr-0`}>
            {NAV_LINK_LIST.map((item: NavLinkItem, index: number) => (
              <div key={index} className='relative group'>
                <Link
                  aria-label={item.title}
                  onClick={() => {
                    if (index !== 0) {
                      setIsOpen(false);
                      setActiveTab(false)
                    } if (index === 0) {
                      setActiveTab(!activeTab);
                    };
                  }}
                  href={`${item.links}`}
                  className={`text-off-white p-2 common-transition font-bold text-xl sm:text-2xl md:text-lg lg:text-custom-xl relative max-md:flex max-md:w-full after:absolute after:w-0 md:hover:after:w-9 after:h-[3px] hover:after:opacity-100 after:common-transition after:bg-white after:rounded-full after:bottom-0 after:left-1/2 after:flex after:-translate-x-1/2`}
                >
                  {item.title}
                </Link>
                {item.dropdown && (
                  <div className="">
                    <div className='absolute left-0 z-20 top-full pt-1 md:pt-5 md:group-hover:block hidden'>
                      <div className='text-off-white z-20 py-3.5 px-3 rounded-md leading-130 w-[183px] border border-grey bg-dark-grey space-y-4'>
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={`${subItem.url}`}
                            className='block p-0 text-off-white text-lg font-bold rounded common-transition hover:text-orange'
                          >
                            {subItem.subtitle}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className={`${activeTab ? "max-h-[170px] pt-1" : "max-h-0"} duration-300 overflow-clip md:hidden left-0 z-20 top-full`}>
                      <div className='text-off-white z-20 py-3.5 px-3 rounded-md leading-130 w-[183px] border border-grey bg-dark-grey space-y-4'>
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            onClick={() => { setIsOpen(false); setActiveTab(false) }}
                            key={subIndex}
                            href={`${subItem.url}`}
                            className='block p-0 text-off-white text-lg font-bold rounded common-transition hover:text-orange'
                          >
                            {subItem.subtitle}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-5">
            <Cta onClick={() => setIsOpen(!isOpen)} transparent aria-label="Find more button" className='md:!hidden !max-w-[95px] flex common-transition'>
              Docs
            </Cta>
            <Cta onClick={() => setIsOpen(!isOpen)} aria-label="Find more button" className='md:!hidden !text-white flex !max-w-[95px] common-transition'>
              Log In
            </Cta>
            </div>
          </div>
        </div>
        <div className='flex gap-2.5 items-center'>
          <Cta aria-label="Find more button" transparent className='!hidden common-transition md:!flex'>
            Docs
          </Cta>
          <Cta aria-label="Find more button" className='!hidden md:!flex !text-white common-transition'>
            Log In
          </Cta>
          <div onClick={() => { setIsOpen(!isOpen), setActiveTab(false) }} className='relative z-50 cursor-pointer md:hidden'>
            <Icons className={"w-8 h-8"} icon={isOpen ? "nav-cross" : "nav-menu"} />
          </div>
        </div>
      </nav>
      <div className='bg-navbar-border w-full h-[0.5px] max-md:relative z-50'></div>
    </div>
  );
};

export default NavLayout;
