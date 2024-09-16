interface type {
  className: string;
}

const Ellipse = ({ className }: type) => {
  return (
    <div
      className={`size-[126px] rounded-full !bg-orange bg-opacity-5 blur-[92px] absolute z-0 ${className}`}
    ></div>
  );
};

export default Ellipse;
