import FooterMenuItems from "./FooterMenuItems";

function FooterMenu() {
  const footerMenuItems = [
    {
      icon: "",
      name: "About",
    },
    {
      icon: "",
      name: "Privacy",
    },
    {
      icon: "",
      name: "Blog",
    },
    {
      icon: "",
      name: "License",
    },
  ];

  const renderedMenuItems = footerMenuItems.map((item) => {
    return <FooterMenuItems item={item} />;
  });

  return (
    <div className="flex flex-column pt-[65.5px] pb-[50px] __footer_menu max-w-[1200px] mx-auto justify-between items-center text-[#A0AEC0]">
      <div className="__container flex flex-column justify-between w-full">
        <div className="__credits text-[12px] order-1">
          <span>
            &copy; 2022, Made with ❤️ by <b className="font-[700] text-[#4fd1c5]">Tektorch </b> for a better
            web
          </span>
        </div>
        <div className="__footer_menu_items flex gap-[52px] text-[12px] order-2">
          {renderedMenuItems}
        </div>
      </div>
    </div>
  );
}

export default FooterMenu;
