import classNames from "classnames";
import {
  IoWallet,
  IoGlobeOutline,
  IoDocumentText,
  IoCart,
} from "react-icons/io5";
import Panel from "../../components/Panel";

function AnalyticsCards() {
  const analyticsData = [
    {
      title: "Today's Money",
      number: "$53,000",
      percentage: "+55%",
      icon: <IoWallet className="text-white w-[22.5px] h-[22.5px]" />,
      isLoss: false,
    },
    {
      title: "Today's Users",
      number: "2,300",
      percentage: "+5%",
      icon: <IoGlobeOutline className="text-white w-[22.5px] h-[22.5px]" />,
      isLoss: false,
    },
    {
      title: "New Clients",
      number: "+3,052",
      percentage: "-14%",
      icon: <IoDocumentText className="text-white w-[22.5px] h-[22.5px]" />,
      isLoss: true,
    },
    {
      title: "Total Sales",
      number: "173,000",
      percentage: "+8%",
      icon: <IoCart className="text-white w-[22.5px] h-[22.5px]" />,
      isLoss: false,
    },
  ];

  const renderedCards = analyticsData.map((data, key) => {
    const percentageClasses = classNames("__percentage font-bold text-[14px]", {
      "text-[#48BB78]": !data.isLoss,
      "text-[#E53E3E]": data.isLoss,
    });
    return (
      <Panel
        key={key}
        className="__item bg-white p-[20px] rounded-[15px]"
        shadow={true}
      >
        <div className="flex justify-between">
          <div className="__left_content flex flex-col items-start">
            <span className="__title text-[12px] font-[700] text-[#A0AEC0]">
              {data.title}
            </span>
            <div className="">
              <span className="__number mr-[5px] text-[#2D3748] font-bold text-[18px]">
                {data.number}
              </span>
              <span className={percentageClasses}>{data.percentage}</span>
            </div>
          </div>

          <div className="__right_content flex justify-center items-center bg-[#4FD1C5] rounded-[12px] w-[45px] h-[45px]">
            {data.icon}
          </div>
        </div>
      </Panel>
    );
  });

  return (
    <div className="__analytics_cards grid xl:grid-cols-4 grid-cols-1 md:grid-cols-2 items-center gap-[24px] __items">
      {renderedCards}
    </div>
  );
}

export default AnalyticsCards;
