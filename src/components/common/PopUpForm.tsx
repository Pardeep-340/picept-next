import React from "react";
import Paragraph from "../custom-ui/Paragraph";
import Icons from "./Icons";
import ContactForm from "../ContactForm";

// Define the props type
interface PopupProps {
  openPopUp: boolean; // Add this line to include the disabled prop
  setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopUpForm: React.FC<PopupProps> = ({ openPopUp, setOpenPopUp }) => {
  return (
    <div>
      <div
        className={`fixed top-0 left-0  bg-black bg-opacity-50 z-[400] min-h-screen flex justify-center items-center duration-500 w-full h-full ${
          openPopUp === true
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={() => setOpenPopUp(false)}
          className="fixed top-0 left-0 block w-full h-full"
        ></div>
        <div className="flex justify-center items-center relative z-20">
          <div
            className={`bg-black max-w-[1000px] rounded-xl border border-white border-opacity-50 relative p-5 md:p-8 lg:p-10 duration-300 w-[90%] lg:w-full ${
              openPopUp === true ? "scale-100 " : "scale-0"
            }`}
          >
            <div className="absolute top-1.5 end-1.5 md:top-3 md:end-3">
              <div
                onClick={() => setOpenPopUp(false)}
                className="cursor-pointer"
              >
                <Icons className={"w-4 h-4 md:w-5 md:h-5"} icon="nav-cross" />
              </div>
            </div>
            <div className="overflow-y-auto max-h-[80vh] scrollbar-hide">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full pt-2 pe-2 lg:p-0 lg:w-5/12 flex justify-center items-center">
                  <Paragraph white smallM className="max-lg:text-center">
                    Thank you for your enthusiasm in trying Picept APIs!
                    We&apos;re onboarding new users daily and offering free
                    access to early adopters. Sign up for our waitlist, and
                    we&apos;ll get you started on your journey with Picept very
                    soon!
                  </Paragraph>
                </div>
                <div className="w-full lg:w-7/12 pb-2 flex justify-center">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpForm;
