import Link from "next/link";
import { ReactNode, MouseEventHandler } from "react";

interface CtaProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  transparent?: boolean;
  disabled?: boolean;
  header?: string;
  url?: string;
  type?: any;
  [key: string]: any;
}

const Cta: React.FC<CtaProps> = ({
  children,
  onClick,
  className = "",
  transparent,
  header,
  url,
  disabled,
  type,
  ...props
}) => {
  const buttonType = {
    transparent: "bg-transparent border-white hover:bg-white/20",
    default: "bg-orange border-orange hover:bg-orange/70",
    common:
      "text-off-white py-3 md:py-3.5 px-6 md:px-7 rounded-full border text-base font-medium leading-127 text-nowrap common-transition",
  };
  return (
    <>
      {url ? (
        <Link target="_blank"
          href={url}
          {...props}
          className={`${className} ${transparent ? buttonType.transparent : buttonType.default
            } ${buttonType.common}`}
        >
          {children}
        </Link>
      ) : (
        <button disabled={disabled}
          onClick={onClick}
          type={type ? type : "button"}
          {...props}
          className={`${className} ${transparent ? buttonType.transparent : buttonType.default
            } ${buttonType.common} ${disabled && "cursor-not-allowed hover:bg-orange"}`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Cta;
