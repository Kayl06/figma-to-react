import { Fragment } from "react";
import Button from "./Button";
import Link from "./Link";
import {
  IoHome,
  IoStatsChart,
  IoCard,
  IoBuild,
  IoPerson,
  IoKey,
  IoRocketSharp,
  IoHelpCircle,
} from "react-icons/io5";
import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Sidebar() {
  const { currentPath } = useNavigation();

  const links = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: <IoHome className="h-[15px] w-[15px]" />,
    },
    {
      label: "Tables",
      path: "/tables",
      icon: <IoStatsChart className="h-[15px] w-[15px]" />,
    },
    {
      label: "Billing",
      path: "/billing",
      icon: <IoCard className="h-[15px] w-[15px]" />,
    },
    {
      label: "RTL",
      path: "/rtl",
      icon: <IoBuild className="h-[15px] w-[15px]" />,
    },

    {
      subLinkTitle: "Account Pages",
      links: [
        {
          label: "Profile",
          path: "/profile",
          icon: <IoPerson className="h-[15px] w-[15px]" />,
        },
        {
          label: "Sign In",
          path: "/",
          icon: <IoKey className="h-[15px] w-[15px]" />,
        },
        {
          label: "Sign Up",
          path: "/signup",
          icon: <IoRocketSharp className="h-[15px] w-[15px]" />,
        },
      ],
    },
  ];

  const renderedSideNavMenu = links.map((link, index) => {
    if (!link.hasOwnProperty("subLinkTitle")) {
      const iconClasses = classNames(
        "__icon p-[7.5px] rounded-[12px] mr-[15px] text-[#4FD1C5]",
        currentPath === link.path ? "text-white bg-[#4FD1C5]" : "bg-white"
      );

      return (
        <Link
          className="p-[12px] mb-[12px] text-[12px] flex font-[700]"
          activeClassName="text-[#2D3748] bg-white __active_link rounded-[15px]"
          key={index}
          to={link.path}
        >
          <div className={iconClasses}>{link.icon}</div>
          {link.label}
        </Link>
      );
    } else {
      const renderedSubLink = link.links.map((sLink, i) => {
        const iconClasses = classNames(
          "__icon p-[7.5px] rounded-[12px] mr-[15px] text-[#4FD1C5]",
          currentPath === sLink.path ? "text-white bg-[#4FD1C5]" : "bg-white"
        );

        return (
          <Fragment key={`subLink-${i}`}>
            {i === 0 && (
              <div className="px-[12px] py-[24px] font-[700] text-[#2D3748]">
                {link.subLinkTitle}
              </div>
            )}

            <Link
              className="p-[12px] mb-[12px] text-[12px] flex font-[700]"
              activeClassName="text-[#2D3748] __active_link rounded-[15px]"
              to={sLink.path}
            >
              <div className={iconClasses}>{sLink.icon}</div>
              {sLink.label}
            </Link>
          </Fragment>
        );
      });

      return renderedSubLink;
    }
  });

  return (
    <div className="__side_bar px-5 py-2 flex flex-col justify-center sticky top-0 w-full overflow-y-auto text-[#A0AEC0]">
      {renderedSideNavMenu}

      <div className="bg-[#4FD1C5] rounded-[15px] __need_help mt-[70px] w-[218px] h-[170px] p-[16px]">
        <div className="flex items-center justify-center w-[35px] h-[35px] bg-white rounded-[12px] mb-[22px]">
          <IoHelpCircle className="w-[24px] h-[24px] text-[#4FD1C5]" />
        </div>

        <div className="__description text-white flex flex-col mb-[8.5px]">
          <span className="text-[14px] font-[700]">Need help?</span>
          <span className="text-[12px] font-[400]">Please check our docs</span>
        </div>

        <Button
          className="p-[10px] rounded-[12px] text-[10px] uppercase w-full justify-center font-[700]"
          white
        >
          Documentation
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
