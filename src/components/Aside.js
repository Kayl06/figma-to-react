import DarkLogo from "../assets/images/icons/icon-dark-1.png";
import Sidebar from "./Sidebar";

function Aside() {
  return (
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
  );
}

export default Aside;
