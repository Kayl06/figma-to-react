import classNames from "classnames";

function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    "drop-shadow-[0_7px_23px_rgba(0,0,0,0.05)] rounded p-3 shadow bg-white",
    className
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
