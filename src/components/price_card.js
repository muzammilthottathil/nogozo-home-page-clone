function PriceCard({ title, img, price, ogPrice, off }) {
  return (
    <div className="min-w-[170px] w-[170px] mx-3 flex flex-col items-center">
      <div className="min-w-[170px] min-h-[170px] max-h-[170px] bg-[#f4f4f4] rounded-2xl flex items-center justify-center">
        <img
          src={img}
          alt={title}
          className="h-[120px] w-full object-contain"
        />
      </div>

      {/* content */}
      <div className="flex flex-col items-start justify-start">
        <p className="mt-2 text-xs leading-5 text-[#333]">{title}</p>
        <div className="text-[#2F76A9] font-medium flex text-sm mt-1">
          <p>
            <span className="text-xs">₹</span>
            {price}
          </p>
          <p className="ml-1 text-[#8e8e8e] line-through">
            <span className="text-xs">₹</span>
            {ogPrice}
          </p>
        </div>
        <p className="text-red-500 font-medium text-xs mt-1">{`${off} % off`}</p>
      </div>
    </div>
  );
}

export default PriceCard;
