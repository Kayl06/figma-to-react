import classNames from "classnames";

function Panel({
  children,
  className,
  dropShadow = false,
  shadow = true,
  ...rest
}) {
  const finalClassNames = classNames(
    "rounded p-3 bg-white",
    {
      "drop-shadow-[0_7px_23px_rgba(0,0,0,0.05)]": dropShadow,
      "shadow-[0_3.5px_5.5px_rgba(0,0,0,0.02)]": shadow,
    },
    className
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
