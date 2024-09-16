import { ReactNode, HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
  center?: boolean;
  right?: boolean;
  medium?: boolean;
  normal?: boolean;
  small?: boolean;
  smallL?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  className = "",
  center,
  right,
  medium,
  normal,
  small,
  smallL,
  ...props
}) => {
  return (
    <h2
      {...props}
      className={`${className} ${
        center ? "mx-auto text-center" : right ? "text-right" : "text-left"
      } ${medium ? "font-medium" : normal ? "font-normal" : "font-bold"} ${
        small
          ? "text-3xl md:text-4xl lg:text-5xl":
        smallL
          ? "text-3xl md:text-4xl lg:text-custom-5xl"
          : "text-4xl md:text-5xl xl:text-6xl"
      } text-off-white !leading-[120%] font-bold`}
    >
      {children}
    </h2>
  );
};

export default Heading;
