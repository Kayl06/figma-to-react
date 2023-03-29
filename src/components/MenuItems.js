function MenuItems({ item }) {
  return (
    <>
      <a href="#" className="__menu_item hover:text-[#2D3748] flex items-center gap-[4px]">
        <i>{item.icon}</i>
        {item.name}
      </a>
    </>
  );
}

export default MenuItems;
