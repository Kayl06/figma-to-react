import useNavigation from "../hooks/use-navigation";
import Input from "./Input";
import {
  IoSearch,
  IoPerson,
  IoSettingsSharp,
  IoNotifications,
} from "react-icons/io5";
import Link from "./Link";

function Breadcrumb() {
  const { currentPath } = useNavigation();

  return (
    <div className="__breadcrumb flex flex-col md:flex-row md:items-center justify-between mb-[29px]">
      <div className="flex flex-col">
        <div className="capitalize text-[12px] font-[400] flex gap-[5px] mb-[5px]">
          <span className="text-[#A0AEC0]">Pages</span>
          <span> / </span>
          <span>{currentPath.replace(/[^a-zA-Z0-9]/g, "")}</span>
        </div>
        <span className="font-[700] text-[14px] capitalize">
          {currentPath.replace(/[^a-zA-Z0-9]/g, "")}
        </span>
      </div>

      <div className="__menu_actions flex flex-row gap-[20px] items-center">
        <div className="__search relative flex items-center justify-start">
          <IoSearch className="ml-[13px] absolute h-[15px] w-[15px] text-[#2D3748]" />
          <Input
            className="border pl-10 focus:outline-none rounded-[15px] h-[40px] w-[200px]"
            placeholder="Type here..."
          ></Input>
        </div>

        <Link to="/" className="__sign_in flex text-[#718096] items-center">
          <IoPerson className="w-[12px] h-[12px] mr-[6px]" />
          <span className="text-[12px] font-[700]">Sign In</span>
        </Link>
        <Link to="/" className="__sign_in flex text-[#718096] items-center">
          <IoSettingsSharp className="w-[12px] h-[12px] mr-[6px]" />
        </Link>
        <Link to="/" className="__sign_in flex text-[#718096] items-center">
          <IoNotifications className="w-[12px] h-[12px] mr-[6px]" />
        </Link>
      </div>
    </div>
  );
}

export default Breadcrumb;
