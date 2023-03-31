import Breadcrumb from "../../components/Breadcrumb";
import AnalyticsCards from "./AnalyticsCards";
import AnalyticsBigCards from "./AnalyticsBigCards";
import BigCards from "./BigCards";
import ContentCards from "./ContentCards";
import FooterMenu from "../../components/FooterMenu";
import Aside from "../../components/Aside";

function Dashboard() {
  return (
    <div className="__dashboard mx-auto flex text-[#2D3748]">
      <Aside />

      <div className="lg:pl-[350px] flex-1 p-[40px] text-[#2D3748]">
        <Breadcrumb />

        <AnalyticsCards />

        <div className="mb-[24.5px]"></div>

        <BigCards />

        <div className="mb-[24.5px]"></div>

        <AnalyticsBigCards />

        <div className="mb-[24.5px]"></div>

        <ContentCards />

        <FooterMenu maxWidth={false} />
      </div>
    </div>
  );
}

export default Dashboard;
