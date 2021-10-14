import CategoryItem from "./category_item";

function Categories() {
  return (
    <div className="flex flex-col">
      <div className="w-full grid grid-cols-5 gap-3 sm:gap-5 my-2">
        {/* classes */}
        <CategoryItem image="/images/categories/class_9.svg" text="Class IX" />
        <CategoryItem image="/images/categories/class_10.svg" text="Class X" />
        <CategoryItem image="/images/categories/class_11.svg" text="Class XI" />
        <CategoryItem
          image="/images/categories/class_12.svg"
          text="Class XII"
        />
        <CategoryItem
          image="/images/categories/class_1_8.svg"
          text="Class 1-8"
        />
      </div>
      <div className="w-full grid grid-cols-5 gap-3 sm:gap-5 my-2">
        {/* exams */}
        <CategoryItem image="/images/categories/iit.svg" text="IIT JEE" />
        <CategoryItem image="/images/categories/neet.svg" text="NEET" />
        <CategoryItem image="/images/categories/icse.svg" text="ICSE" />
        <CategoryItem image="/images/categories/govt_exam.svg" text="GOVT" />
        <CategoryItem image="/images/categories/engg.svg" text="ENGG" />
      </div>
    </div>
  );
}

export default Categories;
