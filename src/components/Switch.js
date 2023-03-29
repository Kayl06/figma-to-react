import className from 'classnames';

function Switch({
  children,
  name,
  ...rest
}) {
  const classes = className(
    rest.className,
    "flex items-center gap-[10px]"
  );
  return (
    <div className={classes}>
      <label className="__togle_switch">
        <input
          type="checkbox"
          className="__toggle_switch_checkbox"
          name={name}
          id={name}
        />

        <span className="__togle_switch_slider"></span>
      </label>
      {children}
    </div>
  );
}

export default Switch;
