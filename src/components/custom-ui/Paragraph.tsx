import { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
  className?: string;
  center?: boolean;
  medium?: boolean;
  bold?: boolean;
  small?: boolean;
  white?: boolean;
  right?: boolean;
  big?: boolean;
  smallM?: boolean;
  smallL?: boolean;
  extraBig?: boolean;
  offWhite?: boolean;
  leadingFull?: boolean;
  [key: string]: any;
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className = "",
  center,
  medium,
  small,
  big,
  white,
  bold,
  right,
  smallM,
  smallL,
  extraBig,
  offWhite,
  leadingFull,
  ...props
}) => {
  return (
    <p
      {...props}
      className={`${className} ${
        center ? "mx-auto text-center" : right ? "text-right" : "text-left"
      } ${medium ? "font-medium" : bold ? "font-bold" : "font-normal"}
      ${
        small
          ? "text-sm md:text-base"
          : big
          ? "text-xl md:text-custom-2xl"
          : extraBig
          ? "text-2xl md:text-3xl lg:text-4xl"
          : smallM
          ? "text-base md:text-xl"
          : smallL
          ? "text-base md:text-lg"
          : "text-lg md:text-2xl"
      } ${leadingFull ? "!leading-150" : "!leading-140"} ${
        white ? "text-white" : offWhite ? "text-off-white" : "text-grey"
      }`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
