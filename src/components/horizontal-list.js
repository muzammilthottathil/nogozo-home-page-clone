import Title from "./title";

function HorizontalList({ title, children }) {
  return (
    <div className="w-full">
      <Title title={title} />
      <div className="flex items-start overflow-x-scroll horizontal_scroll">
        {children}
      </div>
    </div>
  );
}

export default HorizontalList;
