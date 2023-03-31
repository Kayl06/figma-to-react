import classNames from "classnames";

function ProgressBar({ progress, className }) {
  const progressBarClasses = classNames(
    "bg-[#4FD1C5] h-[3px] rounded-full progress",
    progress
  );

  const parentClasses = classNames("bg-[#E2E8F0] rounded-full", classNames);
  return (
    <div className={parentClasses}>
      <div className={progressBarClasses}></div>
    </div>
  );
}

export default ProgressBar;
