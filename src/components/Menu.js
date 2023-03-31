import Icon from "../assets/images/icons/icon.png";
import IconDark from "../assets/images/icons/icon-dark.png";
import Button from "./Button";
import { BiCube } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { IoKey, IoPersonCircle } from "react-icons/io5";
import MenuItems from "./MenuItems";
import classNames from "classnames";
import { RiMenu5Line, RiCloseFill } from "react-icons/ri";
import useToggle from "../hooks/use-toggle";

function Menu({ className, contentColor = "light" }) {
  const [isMenuOpen, handleHamburgerMenuClick] = useToggle(false);

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

  const classes = classNames(
    "__menu mx-auto flex justify-between items-center uppercase font-[700] hidden lg:flex",
    className
  );

  const btnClasses = classNames(
    "text-[10px] lg:w-[150px] justify-center w-full",
    {
      "bg-white text-[#2D3748]": contentColor == "light",
      "bg-[#2D3748] text-white": contentColor == "dark",
    }
  );

  return (
    <div>
      <div className="flex items-center justify-end mx-[10px] text-white lg:hidden absolute right-0 mt-2">
        <Button onClick={handleHamburgerMenuClick}>
          <RiMenu5Line className="w-[35px] h-[35px]" />
        </Button>
      </div>

      {isMenuOpen && (
        <div className="__burger_menu_items flex fixed z-50 inset-0 lg:hidden">
          <div className="text-[10px] flex gap-[31px] fixed inset-0 backdrop-blur-sm">
            <div className="text-[#2D3748] fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold dark:highlight-white/5">
              <Button
                onClick={handleHamburgerMenuClick}
                className="absolute top-5 right-5 flex items-center justify-center"
              >
                <RiCloseFill className="w-[25px] h-[25px]" />
              </Button>
              <div className="space-y-6">{renderedMenuItems}</div>

              <div className="__action mt-5">
                <Button rounded className={btnClasses}>
                  Free Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={classes}>
        <div className="flex gap-[12px] __logo">
          {contentColor === "light" ? (
            <img src={Icon} />
          ) : (
            <img src={IconDark} />
          )}

          <span className="text-[14px]">Vandelay Industries</span>
        </div>

        <div className="__menu_items text-[10px] flex gap-[31px]">
          {renderedMenuItems}
        </div>

        <div className="__action">
          <Button rounded className={btnClasses}>
            Free Download
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
