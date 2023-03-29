import Link from "./Link";

function MenuItems({ item }) {
  return (
    <>
      <Link to={item.path} className="__menu_item">
        <i>{item.icon}</i>
        {item.name}
      </Link>
    </>
  );
}

export default MenuItems;
