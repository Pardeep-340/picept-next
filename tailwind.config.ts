import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "off-white": "#ECECEC",
        grey: "#BBBBBB",
        orange: "#EF5B24",
        "rich-black": "#0D0D0D",
        "dark-black": "#0E0E0E",
        "black-grey": "#252525",
        "dark-grey": "#201f20",
        "rich-grey": "#7B767D",
        "off-grey": "#2F2F2F",
        "light-grey": "#838181",
        "secondary-grey": "#666666",
        "primary-grey": "#898888",
        "off-black": "#121212",
        "wild-black": "#161616",
        "primary-black": "#171412",
        "wild-ligh-black": "#181616",
        green: "#52FF4B",
        "light-green": "#46EF24",
        red: "#FF2422",
        yellow: "#FFD10D",
        "light-black": "#0c0c0c",
        "wild-grey": "#868483",
      },
      fontSize: {
        "custom-xl": "22px",
        "custom-2xl": "28px",
        "custom-5xl": "54px",
        "custom-7xl": "70px",
      },
      lineHeight: {
        120: "120%",
        127: "127%",
        130: "130%",
        140: "140%",
        150: "150%",
      },
      screens: {
        "custom-xl": "1400px",
      },
      container: {
        padding: {
          DEFAULT: "20px",
          md: "24px",
          xl: "0px",
        },
        center: true,
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
        Consolas: ["Consolas", "sans-serif"],
      },
      backgroundImage: {
        "performance-metrics":
          "url(/assets/images/webp/performance-metrics.webp)",
        performance: "url(/assets/images/webp/performance-bg.webp)",
        hero: "url(/assets/images/webp/hero-bg.webp)",
        switch: "url(/assets/images/webp/switch-bg.webp)",
        deliver: "url(/assets/images/webp/picept-deliver-bg.webp)",
        "navbar-border":
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50.78%, rgba(255, 255, 255, 0) 100%)",
        "orange-line":
          "linear-gradient(-90deg, #B7B4B2 -0.13%, #EF5B24 15.34%);",
        "orange-white-line":
          "linear-gradient(-90deg, rgba(255, 255, 255, 0.7) -0.13%, #EF5B24 15.34%);",
        "end-to-end":
          "linear-gradient(182.56deg, #0D0D0D 18.67%, #EF5B24 282.9%)",
        "top-white":
          "linear-gradient(180deg, rgba(13, 13, 13, 0) 12.41%, rgba(13, 13, 13, 0.35) 49.32%, rgba(13, 13, 13, 0.48) 76.56%, rgba(13, 13, 13, 0.5) 100%)",
        "white-light":
          "linear-gradient(90deg, rgba(255, 255, 255, 0.45) 0%, #FFFFFF 54.8%, rgba(255, 255, 255, 0.01) 100%)",
        "performance-border":
          "linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50.78%, rgba(255, 255, 255, 0) 100%)",
        "switch-case": "linear-gradient(-180deg, rgba(13, 13, 13, 0) 12.41%, rgba(13, 13, 13, 0.7) 49.32%, rgba(13, 13, 13, 0.96) 76.56%, #0D0D0D 100%)",
        "picept-delivers": "linear-gradient(180deg, rgba(13, 13, 13, 0) 12.41%, rgba(13, 13, 13, 0.7) 49.32%, rgba(13, 13, 13, 0.96) 76.56%, #0D0D0D 100%)",
        "unmatched-performance-gradient": "linear-gradient(180deg, rgba(13, 13, 13, 0) 12.41%, rgba(13, 13, 13, 0.7) 49.32%, rgba(13, 13, 13, 0.96) 76.56%, #0D0D0D 100%)",
        "price-rated": "linear-gradient(180deg, #0D0D0D 0%, #030403 100%)"
      },
      borderRadius: {
        20: "20px",
        32: "32px",
      },
      boxShadow: {
        inner: "0px 4px 4px 0px #FFFFFF40 inset",
        "inner-none": "0 0 0 rgba(0, 0, 0, 0) inset;",
        custom: "0px 11px 30px 0px #0000003D",
        "shadow-scroll":
          "4px 0px 4px 0px #FFFFFF40 inset, -4px 0px 4px 0px #FFFFFF40 inset",
      },
      dropShadow: {
        "contact-form": " 0px 11px 30px 0px #0000003D",

      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".common-transition": {
          transition: "all 300ms linear",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]); // Add variants if needed
    },
  ],
};

export default config;
