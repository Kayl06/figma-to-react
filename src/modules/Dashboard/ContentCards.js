import Panel from "../../components/Panel";
import {
  IoCheckmarkCircle,
  IoEllipsisVertical,
  IoNotifications,
  IoLogoCss3,
  IoCart,
  IoCard,
  IoLogoDropbox,
} from "react-icons/io5";
import Avatar1 from "../../assets/images/dashboard/member_photos/Avatar 1.png";
import Avatar2 from "../../assets/images/dashboard/member_photos/Avatar 2.png";
import Avatar3 from "../../assets/images/dashboard/member_photos/Avatar 3.png";
import Avatar4 from "../../assets/images/dashboard/member_photos/Avatar 4.png";
import Avatar5 from "../../assets/images/dashboard/member_photos/Avatar 5.png";
import XDLogo from "../../assets/images/dashboard/company_logos/logo-xd.png";
import Logo1 from "../../assets/images/dashboard/company_logos/logo-1.png";
import SlackLogo from "../../assets/images/dashboard/company_logos/slack-new-logo 1.png";
import Spotify from "../../assets/images/dashboard/company_logos/Spotify.png";
import Table from "../../components/Table";
import ProgressBar from "../../components/ProgressBar";

function ContentCards() {
  const projectsData = [
    {
      name: "Chakra Soft UI Version",
      logo: XDLogo,
      members: [
        {
          name: "John Doe",
          avatar: Avatar1,
        },
        {
          name: "John Doe",
          avatar: Avatar2,
        },
        {
          name: "John Doe",
          avatar: Avatar3,
        },
        {
          name: "John Doe",
          avatar: Avatar4,
        },
        {
          name: "John Doe",
          avatar: Avatar5,
        },
      ],
      budget: "$14,000",
      completion: 50,
      progress: "w-[50%]",
    },
    {
      name: "Add Progress Track",
      logo: Logo1,
      members: [
        {
          name: "John Doe",
          avatar: Avatar1,
        },
        {
          name: "John Doe",
          avatar: Avatar2,
        },
        {
          name: "John Doe",
          avatar: Avatar3,
        },
      ],
      budget: "$14,000",
      completion: 60,
      progress: "w-[60%]",
    },
    {
      name: "Fix Platform Errors",
      logo: SlackLogo,
      members: [
        {
          name: "John Doe",
          avatar: Avatar1,
        },
        {
          name: "John Doe",
          avatar: Avatar2,
        },
        {
          name: "John Doe",
          avatar: Avatar3,
        },
        {
          name: "John Doe",
          avatar: Avatar4,
        },
        {
          name: "John Doe",
          avatar: Avatar5,
        },
      ],
      budget: "$14,000",
      completion: 20,
      progress: "w-[20%]",
    },
    {
      name: "Redesign New Online Shop",
      logo: Logo1,
      members: [
        {
          name: "John Doe",
          avatar: Avatar1,
        },
        {
          name: "John Doe",
          avatar: Avatar2,
        },
      ],
      budget: "$14,000",
      completion: 20,
      progress: "w-[20%]",
    },
    {
      name: "Launch our Mobile App",
      logo: Spotify,
      members: [
        {
          name: "John Doe",
          avatar: Avatar1,
        },
        {
          name: "John Doe",
          avatar: Avatar2,
        },
        {
          name: "John Doe",
          avatar: Avatar3,
        },
        {
          name: "John Doe",
          avatar: Avatar4,
        },
        {
          name: "John Doe",
          avatar: Avatar5,
        },
      ],
      budget: "$14,000",
      completion: 20,
      progress: "w-[20%]",
    },
    {
      name: "Add the New Pricing Page",
      logo: SlackLogo,
      members: [
        {
          name: "John Doe",
          avatar: Avatar1,
        },
        {
          name: "John Doe",
        },
        {
          name: "John Doe",
          avatar: Avatar3,
        },
        {
          name: "John Doe",
          avatar: Avatar4,
        },
        {
          name: "John Doe",
          avatar: Avatar5,
        },
      ],
      budget: "$14,000",
      completion: 20,
      progress: "w-[20%]",
    },
  ];

  const config = [
    {
      label: "Companies",
      render: (company) => {
        return (
          <div className="flex items-center">
            <span className="__company_logo mr-[17px]">
              <img
                src={company.logo}
                alt="logo"
                className="w-[20px] h-[20px]"
              />
            </span>
            <span className="font-bold text-[#2D3748] text-[14px]">
              {company.name}
            </span>
          </div>
        );
      },
    },
    {
      label: "Members",
      render: (company) => {
        const renderedMembers = company.members.map((member, index) => {
          return (
            <img
              src={member.avatar}
              alt="logo"
              key={index}
              className=" cursor-pointer hover:ring-2 hover:ring-[#4FD1C5] inline-block w-[20px] h-[20px] rounded-full ring-2 ring-white "
            />
          );
        });
        return (
          <div className="flex -space-x-2 overflow-hidden">
            {renderedMembers}
          </div>
        );
      },
    },
    {
      label: "Budget",
      render: (company) => (
        <span className="font-bold text-[#2D3748] text-[14px]">
          {company.budget}
        </span>
      ),
    },
    {
      label: "Completion",
      render: (company) => {
        return (
          <div>
            <span className="font-bold text-[14px] text-[#4FD1C5]">
              {company.completion}%
            </span>
            <ProgressBar progress={company.progress} className="w-[125px]" />
          </div>
        );
      },
    },
  ];

  return (
    <div className="__content_cards grid xl:grid-cols-3 gap-[24px]">
      <div className="__first xl:col-span-2">
        <Panel className="__panel rounded-[15px] p-[20px]">
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
                  <span className="text-[#A0AEC0] font-[400]">this month</span>
                </div>
              </div>

              <div className="__header_toolbar_actions">
                <IoEllipsisVertical className="text-[#A0AEC0] w-[20px] h-[20px]" />
              </div>
            </div>

            <div className="__table">
              <Table data={projectsData} config={config} />
            </div>
          </div>
        </Panel>
      </div>
      <div className="__second">
        <Panel className="rounded-[15px] p-[20px]  h-full">
          <div className="__header"></div>

          <div className="__body_content">
            <div className="__header flex justify-between">
              <div className="__header_title">
                <h1 className="font-bold text-[18px] mb-[6px]">
                  Orders overview
                </h1>
                <div className="font-[400] text-[14px] mb-[37px] flex items-center">
                  <span className="text-[#68D391] font-bold">30%&nbsp;</span>
                  <span className="text-[#A0AEC0] font-[400]">this month</span>
                </div>
              </div>

              <div className="__header_toolbar_actions"></div>
            </div>

            <div className="__timeline_items">
              <div className="__item flex flex-row items-start gap-[10px] mb-[8px]">
                <div className="__item_progress flex justify-start">
                  <div className="__icon flex flex-col justify-center items-center">
                    <IoNotifications className="w-[16px] h-[16px] text-[#4FD1C5] mb-[7.5px]" />

                    <div className="__vertical_bar h-[37px] w-[2px] bg-[#E2E8F0] rounded-full"></div>
                  </div>
                </div>
                <div className="__item_details">
                  <div className="block">
                    <div className="text-[#2D3748] font-bold text-[14px]">
                      $2400, Design changes
                    </div>
                    <div className="text-[#A0AEC0] font-bold text-[12px]">
                      22 DEC 7:20 PM
                    </div>
                  </div>
                </div>
              </div>

              <div className="__item flex flex-row items-start gap-[10px] mb-[8px]">
                <div className="__item_progress flex justify-start">
                  <div className="__icon flex flex-col justify-center items-center">
                    <IoLogoCss3 className="w-[16px] h-[16px] text-[#E53E3E] mb-[7.5px]" />

                    <div className="__vertical_bar h-[37px] w-[2px] bg-[#E2E8F0] rounded-full"></div>
                  </div>
                </div>
                <div className="__item_details">
                  <div className="block">
                    <div className="text-[#2D3748] font-bold text-[14px]">
                      New order #4219423
                    </div>
                    <div className="text-[#A0AEC0] font-bold text-[12px]">
                      21 DEC 11:21 PM
                    </div>
                  </div>
                </div>
              </div>

              <div className="__item flex flex-row items-start gap-[10px] mb-[8px]">
                <div className="__item_progress flex justify-start">
                  <div className="__icon flex flex-col justify-center items-center">
                    <IoCart className="w-[16px] h-[16px] text-[#4299E1] mb-[7.5px]" />

                    <div className="__vertical_bar h-[37px] w-[2px] bg-[#E2E8F0] rounded-full"></div>
                  </div>
                </div>
                <div className="__item_details">
                  <div className="block">
                    <div className="text-[#2D3748] font-bold text-[14px]">
                      Server Payments for April
                    </div>
                    <div className="text-[#A0AEC0] font-bold text-[12px]">
                      20 DEC 3:52 PM
                    </div>
                  </div>
                </div>
              </div>

              <div className="__item flex flex-row items-start gap-[10px] mb-[8px]">
                <div className="__item_progress flex justify-start">
                  <div className="__icon flex flex-col justify-center items-center">
                    <IoCard className="w-[16px] h-[16px] text-[#F6AD55] mb-[7.5px]" />

                    <div className="__vertical_bar h-[37px] w-[2px] bg-[#E2E8F0] rounded-full"></div>
                  </div>
                </div>
                <div className="__item_details">
                  <div className="block">
                    <div className="text-[#2D3748] font-bold text-[14px]">
                      New card added for order #3210145
                    </div>
                    <div className="text-[#A0AEC0] font-bold text-[12px]">
                      20 DEC 3:52 PM
                    </div>
                  </div>
                </div>
              </div>

              <div className="__item flex flex-row items-start gap-[10px] mb-[8px]">
                <div className="__item_progress flex justify-start">
                  <div className="__icon flex flex-col justify-center items-center">
                    <IoLogoDropbox className="w-[16px] h-[16px] text-[#9F7AEA] mb-[7.5px]" />

                    <div className="__vertical_bar h-[37px] w-[2px] bg-[#E2E8F0] rounded-full"></div>
                  </div>
                </div>
                <div className="__item_details">
                  <div className="block">
                    <div className="text-[#2D3748] font-bold text-[14px]">
                      Unlock packages for Development
                    </div>
                    <div className="text-[#A0AEC0] font-bold text-[12px]">
                      19 DEC 11:35 PM
                    </div>
                  </div>
                </div>
              </div>

              <div className="__item flex flex-row items-start gap-[10px] mb-[8px]">
                <div className="__item_progress flex justify-start">
                  <div className="__icon flex flex-col justify-center items-center">
                    <img
                      src={XDLogo}
                      className="w-[20px] h-[20px] text-[#9F7AEA] mb-[7.5px]"
                    />

                    <div className="__vertical_bar h-[20px] w-[2px] bg-[#E2E8F0] rounded-full"></div>
                  </div>
                </div>
                <div className="__item_details">
                  <div className="block">
                    <div className="text-[#2D3748] font-bold text-[14px]">
                      New order #9851258
                    </div>
                    <div className="text-[#A0AEC0] font-bold text-[12px]">
                      18 DEC 4:41 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
}

export default ContentCards;
