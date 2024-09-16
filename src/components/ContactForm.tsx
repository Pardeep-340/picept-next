"use client";
import { useEffect, useState } from "react";
import Cta from "./custom-ui/Cta";
import Paragraph from "./custom-ui/Paragraph";
import InputWithLabel from "./custom-ui/InputWithLabel";


const ContactForm = () => {
  const initialFormData = {
    api_key: `29e72f6b-0ed6-432b-af5d-5992ea41a1e5`,
    email_address: "",
    fields: {
      FirstName: "",
      LastName: "",
      Message: "",
    },
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState(""); // 'success' or 'error'

  // Auto-hide the popup after 3 seconds
  useEffect(() => {
    if (isPopupOpen) {
      const timer = setTimeout(() => setIsPopupOpen(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isPopupOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      if (name === "email") {
        return {
          ...prevFormData,
          email_address: value,
        };
      } else {
        return {
          ...prevFormData,
          fields: {
            ...prevFormData.fields,
            [name]: value,
          },
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Email already exists. Please use a different email.");
      }

      const data = await response.json();
      setLoading(false);

      // Show the popup upon successful form submission
      setPopupMessage("Your inquiry has been successfully received.");
      setPopupType("success");
      setIsPopupOpen(true);

      // Reset the form inputs to initial state
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);

      // Show error message in the popup
      setPopupMessage(error instanceof Error ? error.message : "An unknown error occurred.");
      setPopupType("error");
      setIsPopupOpen(true);
    }
  };

  return (
    <div className="drop-shadow-contact-form max-w-[513px] md:max-w-[600px] lg:max-w-[513px] bg-[#131213] border-grey w-full border border-opacity-30 rounded-xl lg:rounded-20 md:rounded-32 px-5 py-8 md:p-8 lg:py-8 xl:px-12">
      <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
        <InputWithLabel
          labelText="First Name"
          placeholder="Enter your first name"
          name="FirstName"
          value={formData.fields.FirstName}
          onChange={handleInputChange}
          
        />
        <InputWithLabel
          labelText="Last Name"
          placeholder="Enter your last name"
          name="LastName"
          value={formData.fields.LastName}
          onChange={handleInputChange}
          
        />
        <InputWithLabel
          labelText="Email"
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email_address}
          onChange={handleInputChange}
          
        />
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <label
            htmlFor="message"
            className="font-medium text-base md:text-xl text-off-white !leading-150"
          >
            Message
          </label>
          <textarea
            name="Message"
            id="message"
            value={formData.fields.Message}
            placeholder="Enter your message"
            className={`font-normal resize-none text-off-white opacity-70 text-sm placeholder:text-off-white md:text-lg !leading-150 py-3 sm:py-[15.2px] px-3.5 rounded-lg md:rounded-xl bg-transparent outline-none border border-white border-opacity-10`}
            onChange={handleInputChange}
          />
        </div>
        <Cta  type="submit" className="!mt-7 max-lg:mx-auto flex">
          {loading ? "Loading..." : "Submit Now"}
        </Cta>

      </form>
      {isPopupOpen && (
        <div className="fixed right-4 flex items-center justify-between bg-black text-white p-3 rounded-lg shadow-lg z-50 duration-300 common-transition bottom-4 max-w-sm border border-white">
          <div className="flex flex-col">
            <Paragraph smallM medium>
              {popupType === "success"
                ? "Thank You for Reaching Out!"
                : "An Error Occurred"}
            </Paragraph>
            <Paragraph small className="my-1">
              {popupMessage}
            </Paragraph>
          </div>
        </div>
      )}
    </div>

  );
};

export default ContactForm;
