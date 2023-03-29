function FooterMenuItems({ item }) {
    return (
      <>
        <a
          href="#"
          className="__menu_item font-[400]  hover:text-[#2D3748] flex items-center gap-[4px]"
        >
          {item.name}
        </a>
      </>
    );
  }
  
  export default FooterMenuItems;
  