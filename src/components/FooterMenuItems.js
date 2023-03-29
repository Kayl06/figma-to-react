import Link from "./Link";

function FooterMenuItems({ item }) {
  return (
    <>
      <Link
        to={item.path}
        className="__menu_item font-[400]  hover:text-[#2D3748] flex items-center gap-[4px]"
      >
        {item.name}
      </Link>
    </>
  );
}

export default FooterMenuItems;
