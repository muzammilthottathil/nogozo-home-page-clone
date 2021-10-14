import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { BiSearchAlt2 } from "react-icons/bi";

function Header() {
  return (
    <header className="bg-white w-full fixed top-0 left-0 z-40">
      <div className="container max-w-3xl mx-auto p-4 flex flex-col">
        <div className="w-full flex items-center justify-between">
          <button className="text-2xl text-[#222] p-1">
            <IoMenuSharp />
          </button>

          <Link href="/">
            <a className="">
              <img className="max-w-[100px]" src="/logo.png" alt="logo" />
            </a>
          </Link>

          <Link href="/">
            <a className="bg-[#F4F4F4] rounded-full w-12 h-12 p-1 flex items-center justify-center text-xl text-[#888]">
              <FiShoppingCart />
            </a>
          </Link>
        </div>
        <div className="w-full mt-3 mb-1">
          <div className="flex items-center justify-start bg-[#f4f4f4] rounded-2xl py-1.5 px-4">
            <label
              className="text-[#888] text-xl"
              htmlFor="header-search-input"
            >
              <BiSearchAlt2 />
            </label>
            <input
              type="text"
              placeholder="Search product"
              id="header-search-input"
              className="w-full bg-transparent outline-none border-none text-sm text-[#222] p-2 placeholder-[#666]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
