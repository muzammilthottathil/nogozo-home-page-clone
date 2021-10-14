import Link from "next/link";

function CategoryItem({ image, href = "/", text }) {
  return (
    <Link href={href}>
      <a>
        <div
          style={{ aspectRatio: "1" }}
          className="bg-[#DFF1FD] rounded-2xl p-3.5 flex items-center justify-center"
        >
          <img
            src={image}
            alt="category-item"
            className="w-full max-w-[40px] sm:max-w-[50px]"
          />
        </div>
        <p className="mt-2 text-xs sm:text-sm text-[#777] text-center">
          {text}
        </p>
      </a>
    </Link>
  );
}

export default CategoryItem;
