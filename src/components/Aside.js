import { RiCloseFill, RiMenu5Line } from "react-icons/ri";
import DarkLogo from "../assets/images/icons/icon-dark-1.png";
import useToggle from "../hooks/use-toggle";
import Sidebar from "./Sidebar";
import Button from "./Button";

function Aside() {
  const [isMenuOpen, handleHamburgerMenuClick] = useToggle(false);

  return (
    <>
      <div className="flex items-center justify-end mx-[10px] lg:hidden absolute right-0 mt-2">
        <Button onClick={handleHamburgerMenuClick}>
          <RiMenu5Line className="w-[35px] h-[35px]" />
        </Button>
      </div>

      <aside className="hidden bg-[#F8F9FA] h-full lg:block overflow-y-auto fixed w-full max-w-[300px] pl-[31px] pr-15px">
        <header className="__header flex items-center flex-col justify-center mb-[22.5px]">
          <div className="__logo_section flex items-center gap-[12px] pt-[44px] pb-[30px] w-[233.25px]">
            <img src={DarkLogo} alt="" />

            <span className="__company_name uppercase font-[700] text-[14px]">
              vandelay industries
            </span>
          </div>

          <div className="__divider"></div>
        </header>

        <Sidebar />
      </aside>

      {isMenuOpen && (
        <div className="__burger_menu_items flex fixed z-50 inset-0 lg:hidden">
          <div className="text-[10px] flex gap-[31px] fixed inset-0 backdrop-blur-sm">
            <div className="text-[#2D3748] fixed w-full h-full justify-center bg-[#F8F9FA] rounded-lg shadow-lg p-6 text-base font-semibold dark:highlight-white/5">
              <Button
                onClick={handleHamburgerMenuClick}
                className="absolute top-5 right-5 flex items-center justify-center z-[1]"
              >
                <RiCloseFill className="w-[25px] h-[25px]" />
              </Button>
              <div className="">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Aside;
