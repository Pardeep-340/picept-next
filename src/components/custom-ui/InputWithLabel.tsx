interface InputWithLabelProps {
  labelText: string;
  name: string;
  type?: string;
  disabled?: boolean;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  labelText,
  name,
  type = "text",
  placeholder,
  disabled,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1.5 sm:gap-2">
      <label
        htmlFor={name}
        className="font-medium text-base md:text-xl text-off-white !leading-150"
      >
        {labelText}
      </label>
      <input required disabled={disabled}
        className={`font-normal text-off-white opacity-70 text-sm placeholder:text-off-white md:text-lg !leading-150 py-3 sm:py-[15.2px] px-3.5 rounded-lg md:rounded-xl bg-transparent outline-none border border-white border-opacity-10 ${disabled && "cursor-not-allowed"}`}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputWithLabel;
