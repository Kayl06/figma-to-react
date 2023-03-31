import Aside from "../../components/Aside";
import { IoCheckmarkCircle, IoEllipsisVertical } from "react-icons/io5";
import Breadcrumb from "../../components/Breadcrumb";
import FooterMenu from "../../components/FooterMenu";
import Panel from "../../components/Panel";
import Table from "../../components/Table";
import AuthorPhoto1 from "../../assets/images/author-images/Author-Profile-1.png";
import AuthorPhoto2 from "../../assets/images/author-images/Author-Profile-2.png";
import ProgressBar from "../../components/ProgressBar";
import XDLogo from "../../assets/images/dashboard/company_logos/logo-xd.png";
import Logo1 from "../../assets/images/dashboard/company_logos/logo-1.png";
import Spotify from "../../assets/images/dashboard/company_logos/Spotify.png";
import SlackLogo from "../../assets/images/dashboard/company_logos/slack-new-logo 1.png";

function Tables() {
  const authorsData = [
    {
      name: "Elaine Benes",
      email: "elaine@vandelay.com",
      avatar: AuthorPhoto1,
      function: {
        title: "Manager",
        subTitle: "Organization",
      },
      status: "Online",
      employed: "14/06/21",
    },
    {
      name: "Sidra Holland",
      email: "sidra@vandelay.com",
      avatar: AuthorPhoto2,
      function: {
        title: "Programmer",
        subTitle: "Developer",
      },
      status: "Offline",
      employed: "14/06/21",
    },
    {
      name: "Cosmo Kramer",
      email: "kramer@vandelay.com",
      avatar: AuthorPhoto1,
      function: {
        title: "Executive",
        subTitle: "Projects",
      },
      status: "Online",
      employed: "14/06/21",
    },
    {
      name: "Newman",
      email: "newman@usps.com",
      avatar: AuthorPhoto2,
      function: {
        title: "Manager",
        subTitle: "Organization",
      },
      status: "Online",
      employed: "14/06/21",
    },
    {
      name: "Frank Costanza",
      email: "frank@vandelay.com",
      avatar: AuthorPhoto1,
      function: {
        title: "Programmer",
        subTitle: "Developer",
      },
      status: "Offline",
      employed: "14/06/21",
    },
    {
      name: "Art VanDelay",
      email: "art.ie@vandelay.com",
      avatar: AuthorPhoto2,
      function: {
        title: "Designer",
        subTitle: "UI/UX Design",
      },
      status: "Offline",
      employed: "14/06/21",
    },
  ];

  const config_1 = [
    {
      label: "author",
      render: (author) => {
        return (
          <div className="flex items-center">
            <span className="__avatar mr-[17px]">
              <img
                src={author.avatar}
                alt="avatar"
                className="rounded-[12px] w-[40px] h-[40px]"
              />
            </span>
            <div className="inline-block">
              <div className="font-bold text-[#2D3748] text-[14px]">
                {author.name}
              </div>
              <span className="font-[400] text-[#718096] text-[14px]">
                {author.email}
              </span>
            </div>
          </div>
        );
      },
    },
    {
      label: "function",
      render: (author) => {
        return (
          <div className="flex items-center">
            <div className="inline-block">
              <div className="font-bold text-[#2D3748] text-[14px]">
                {author.function.title}
              </div>
              <span className="font-[400] text-[#718096] text-[14px]">
                {author.function.subTitle}
              </span>
            </div>
          </div>
        );
      },
    },
    {
      label: "status",
      render: (author) => {
        let badgeColor =
          author.status === "Online" ? "bg-[#48BB78]" : "bg-[#CBD5E0]";

        let badge = (
          <div
            className={`text-white text-[14px] w-[65px] h-[25px] font-bold p-[5px] rounded-[8px] text-center flex items-center justify-center ${badgeColor}`}
          >
            {author.status}
          </div>
        );

        return <div className="flex items-center">{badge}</div>;
      },
    },
    {
      label: "employed",
      render: (author) => {
        return (
          <span className="text-[14px] font-bold text-[#2D3748]">
            {author.employed}
          </span>
        );
      },
    },
    {
      label: "",
      render: (author) => {
        return (
          <span className="text-[14px] font-bold text-[#718096] hover:text-[#4FD1C5] cursor-pointer">
            Edit
          </span>
        );
      },
    },
  ];

  const projectsData = [
    {
      name: "Chakra Soft UI Version",
      logo: XDLogo,
      budget: "$14,000",
      completion: 50,
      progress: "w-[50%]",
      status: "Working",
    },
    {
      name: "Add Progress Track",
      logo: Logo1,
      budget: "$14,000",
      completion: 60,
      progress: "w-[60%]",
      status: "Canceled",
    },
    {
      name: "Fix Platform Errors",
      logo: SlackLogo,
      budget: "$14,000",
      completion: 20,
      progress: "w-[20%]",
      status: "Done",
    },
    {
      name: "Redesign New Online Shop",
      logo: Logo1,
      budget: "$14,000",
      completion: 20,
      progress: "w-[20%]",
      status: "Done",
    },
    {
      name: "Launch our Mobile App",
      logo: Spotify,
      budget: "$14,000",
      completion: 20,
      progress: "w-[20%]",
      status: "Working",
    },
  ];

  const config_2 = [
    {
      label: "Companies",
      render: (project) => {
        return (
          <div className="flex items-center">
            <span className="__project_logo mr-[17px]">
              <img
                src={project.logo}
                alt="logo"
                className="w-[20px] h-[20px]"
              />
            </span>
            <span className="font-bold text-[#2D3748] text-[14px]">
              {project.name}
            </span>
          </div>
        );
      },
    },
    {
      label: "Budget",
      render: (project) => (
        <span className="font-bold text-[#2D3748] text-[14px]">
          {project.budget}
        </span>
      ),
    },
    {
      label: "Status",
      render: (project) => (
        <span className="font-bold text-[#2D3748] text-[14px] text-center">
          {project.status}
        </span>
      ),
    },
    {
      label: "Completion",
      render: (project) => {
        return (
          <div>
            <span className="font-bold text-[14px] text-[#4FD1C5]">
              {project.completion}%
            </span>
            <ProgressBar progress={project.progress} className="w-[125px]" />
          </div>
        );
      },
    },
    {
      label: "",
      render: (project) => {
        return (
          <div className="flex justify-center cursor-pointer">
            <IoEllipsisVertical className="text-[#A0AEC0] hover:text-[#4FD1C5] w-[20px] h-[20px]" />
          </div>
        );
      },
    },
  ];

  return (
    <div className="__tables mx-auto flex">
      <Aside />

      <div className="lg:pl-[350px] flex-1 p-[40px] text-[#2D3748]">
        <Breadcrumb />

        <div className="flex flex-col">
          <Panel className="__table1 __panel rounded-[15px] p-[20px] mb-[24px]">
            <div className="__header"></div>

            <div className="__body_content">
              <div className="__header flex justify-between">
                <div className="__header_title">
                  <h1 className="font-bold text-[18px] mb-[6px]">Projects</h1>
                  <div className="font-[400] text-[14px] mb-[37px] flex items-center">
                    <span className="text-[#A0AEC0] font-bold">
                      30 done&nbsp;
                    </span>
                    <span className="text-[#A0AEC0] font-[400]">
                      this month
                    </span>
                  </div>
                </div>

                <div className="__header_toolbar_actions"></div>
              </div>

              <div className="__table">
                <Table data={authorsData} config={config_1} />
              </div>
            </div>
          </Panel>

          <Panel className="__table2 __panel rounded-[15px] p-[20px] mb-[24px]">
            <div className="__header"></div>

            <div className="__body_content">
              <div className="__header flex justify-between">
                <div className="__header_title">
                  <h1 className="font-bold text-[18px] mb-[6px]">Projects</h1>
                  <div className="font-[400] text-[14px] mb-[37px] flex items-center">
                    <span className="mr-[5px]">
                      <IoCheckmarkCircle className="w-[15px] h-[15px] text-[#68D391]" />
                    </span>
                    <span className="text-[#A0AEC0] font-bold">
                      30 done&nbsp;
                    </span>
                    <span className="text-[#A0AEC0] font-[400]">
                      this month
                    </span>
                  </div>
                </div>

                <div className="__header_toolbar_actions"></div>
              </div>

              <div className="__table">
                <Table data={projectsData} config={config_2} />
              </div>
            </div>
          </Panel>
        </div>

        <FooterMenu maxWidth={false} />
      </div>
    </div>
  );
}

export default Tables;
