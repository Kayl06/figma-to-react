import FooterMenuItems from "./FooterMenuItems";

function FooterMenu() {
  const footerMenuItems = [
    {
      icon: "",
      name: "About",
      path: "/about",
    },
    {
      icon: "",
      name: "Privacy",
      path: "/privacy",
    },
    {
      icon: "",
      name: "Blog",
      path: "/blog",
    },
    {
      icon: "",
      name: "License",
      path: "/license",
    },
  ];

  const renderedMenuItems = footerMenuItems.map((item) => {
    return <FooterMenuItems key={item.name} item={item} />;
  });

  return (
    <div className="flex flex-col pt-[65.5px] pb-[50px] __footer_menu max-w-[1200px] mx-auto justify-between items-center text-[#A0AEC0]">
      <div className="__container flex lg:flex-row flex-col justify-between w-full">
        <div className="__credits text-[12px] lg:order-1 order-2 lg:mx-0 lg:mt-0 mt-[20px] mx-auto">
          <span>
            &copy; 2022, Made with ❤️ by{" "}
            <b className="font-[700] text-[#4fd1c5]">Tektorch </b> for a better
            web
          </span>
        </div>
        <div className="__footer_menu_items flex gap-[52px] text-[12px] lg:order-2 order-1 lg:mx-0 mx-auto">
          {renderedMenuItems}
        </div>
      </div>
    </div>
  );
}

export default FooterMenu;
