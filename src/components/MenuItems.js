function MenuItems({ item }) {
  return (
    <>
      <a href="#" className="__menu_item flex items-center gap-[4px]">
        <i className="h-[11px] w-[11px]">{item.icon}</i>
        {item.name}
      </a>
    </>
  );
}

export default MenuItems;
