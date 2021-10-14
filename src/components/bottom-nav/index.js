import NavItem from "./nav_item";
import { BsHeart, BsShopWindow } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { MdSell } from "react-icons/md";

function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white py-1">
      <div className="container max-w-3xl mx-auto flex items-center justify-between px-8 sm:px-10 py-2">
        <NavItem icon={<BsShopWindow />} href="/" />
        <NavItem icon={<BsHeart />} href="/favourites" />
        <NavItem icon={<MdSell />} href="/receipts" />
        <NavItem icon={<AiOutlineUser />} href="/users" />
      </div>
    </div>
  );
}

export default BottomNav;
