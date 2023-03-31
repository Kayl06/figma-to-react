import LineCurveGraph from "../../assets/images/dashboard/LineCurveGraph.png";
import { IoWallet, IoRocketSharp, IoCart, IoBuild } from "react-icons/io5";
import Panel from "../../components/Panel";
import BarGraph from "../../assets/images/dashboard/BarGraph.png";
import classNames from "classnames";
import ApexCharts from "apexcharts";

function AnalyticsBigCards() {
  const analyticsData = [
    {
      title: "Users",
      number: "32,984",
      icon: <IoWallet className="text-white w-[12.5px] h-[12.5px]" />,
      progress: "w-[60%]",
    },

    {
      title: "Clicks",
      number: "2.42m",
      icon: <IoRocketSharp className="text-white w-[12.5px] h-[12.5px]" />,
      progress: "w-[80%]",
    },

    {
      title: "Sales",
      number: "2,400$",
      icon: <IoCart className="text-white w-[12.5px] h-[12.5px]" />,
      progress: "w-[30%]",
    },

    {
      title: "Items",
      number: "320",
      icon: <IoBuild className="text-white w-[12.5px] h-[12.5px]" />,
      progress: "w-[50%]",
    },
  ];

  const renderedCards = analyticsData.map((data, i) => {
    const progressBarClasses = classNames(
      "bg-[#4FD1C5] h-[3px] rounded-full progress",
      data.progress
    );
    return (
      <div className="__card_item flex" key={i}>
        <div className="__body">
          <div className="flex gap-[10px] items-center mb-[5.5px]">
            <div className="flex justify-center items-center bg-[#4FD1C5] rounded-[12px] w-[25px] h-[25px]">
              {data.icon}
            </div>
            <span className="font-bold text-[#A0AEC0] text-[12px]">
              {data.title}
            </span>
          </div>

          <div className="__number text-[#2D3748] font-bold text-[18px] mb-[10px]">
            {data.number}
          </div>

          <div className="w-[100px] bg-[#E2E8F0] rounded-full">
            <div className={progressBarClasses}></div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="__analytic_big_cards flex xl:flex-row flex-col gap-[24px]">
      <Panel className="__panel flex flex-col w-full xl:w-[652px] rounded-[15px] p-[20px] pb-[30.5px]">
        <div className="__body_content">
          <div className="__bar_graph flex justify-center mb-[24px]">
            <img src={BarGraph} alt="" className="w-full" />
          </div>

          <h1 className="font-bold text-[18px] mb-[6px]">Active Users</h1>
          <div className="font-[400] text-[14px] mb-[37px]">
            <span className="text-[#48BB78] font-bold">(+23)&nbsp;</span>
            <span className="text-[#A0AEC0] font-[400]">than last week</span>
          </div>

          <div className="__cards grid grid-cols-2 lg:grid-cols-4 gap-[56px]">
            {renderedCards}
          </div>
        </div>
      </Panel>
      <Panel className="flex flex-col flex-auto rounded-[15px] p-[21px] pt-[28px]">
        <div className="__body_content">
          <h1 className="font-bold text-[18px] mb-[6px]">Sales overview</h1>
          <div className="font-[400] text-[14px] mb-[24px]">
            <span className="text-[#48BB78] font-bold">(+5) more&nbsp;</span>
            <span className="text-[#A0AEC0] font-[400]">in 2021</span>
          </div>

          <div className="__line_curve_graph">
            <img src={LineCurveGraph} alt="" />
          </div>
        </div>
      </Panel>
    </div>
  );
}

export default AnalyticsBigCards;
