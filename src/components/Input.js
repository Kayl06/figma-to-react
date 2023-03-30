import classNames from "classnames";

function Input({ value, placeholder, ...rest }) {
  const classes = classNames(
    "mt-1 px-[20px] py-[15.25px] rounded-[15px] bg-white border-[1px] border-[#E2E8F0] text-[14px] placeholder-[#A0AEC0] placeholder:font-[400] focus:outline-none block w-full h-[50px] focus:ring-1",
    rest.className
  );
  return <input {...rest} className={classes} value={value} placeholder={placeholder} />;
}

export default Input;
