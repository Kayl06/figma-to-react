import Icon from "../assets/images/icon.png";
import Button from "./Button";
import { BiCube } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { IoKey, IoPersonCircle } from "react-icons/io5";
import MenuItems from "./MenuItems";

function Menu() {
  const menuItems = [
    {
      icon: <BiCube className="h-[15px] w-[15px]" />,
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <BsPersonFill className="h-[15px] w-[15px]" />,
      name: "Profile",
      path: "/profile",
    },
    {
      icon: <IoPersonCircle className="h-[15px] w-[15px]" />,
      name: "Sign Up",
      path: "/signup",
    },
    {
      icon: <IoKey className="h-[15px] w-[15px]" />,
      name: "Sign In",
      path: "/",
    },
  ];

  const renderedMenuItems = menuItems.map((item, _index) => {
    return <MenuItems key={_index} item={item} />;
  });

  return (
    <div
      className="__menu max-w-[1200px] mx-auto flex justify-between items-center text-white uppercase font-[700] p-[58.5px]
   __menu"
    >
      <div className="flex gap-[12px] __logo">
        <img src={Icon} />
        <span className="text-[14px]">Vandelay Industries</span>
      </div>

      <div className="__menu_items text-[10px] flex gap-[31px]">
        {renderedMenuItems}
      </div>

      <div className="__action">
        <Button
          rounded
          className="text-[10px] w-[150px] justify-center bg-white text-[#2D3748]"
        >
          Free Download
        </Button>
      </div>
    </div>
  );
}

export default Menu;
