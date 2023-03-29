import Icon from "../assets/images/icons/icon.png";
import IconDark from "../assets/images/icons/icon-dark.png";
import Route from "./Route";
import Button from "./Button";
import { BiCube } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { IoKey, IoPersonCircle } from "react-icons/io5";
import MenuItems from "./MenuItems";
import classNames from "classnames";

function Menu({ className }) {
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
    "__menu mx-auto flex justify-between items-center uppercase font-[700]",
    className
  );

  return (
    <div className={classes}>
      <div className="flex gap-[12px] __logo">
        <Route path="/signup">
          <img src={Icon} />
        </Route>

        <Route path="/">
          <img src={IconDark} />
        </Route>

        <span className="text-[14px]">Vandelay Industries</span>
      </div>

      <div className="__menu_items text-[10px] flex gap-[31px]">
        {renderedMenuItems}
      </div>

      <div className="__action">
        <Route path="/signup">
          <Button
            rounded
            className="text-[10px] w-[150px] justify-center bg-white text-[#2D3748]"
          >
            Free Download
          </Button>
        </Route>

        <Route path="/">
          <Button
            rounded
            className="text-[10px] w-[150px] justify-center bg-[#2D3748] text-white"
          >
            Free Download
          </Button>
        </Route>
      </div>
    </div>
  );
}

export default Menu;
