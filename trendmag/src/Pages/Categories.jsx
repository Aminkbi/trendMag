import React, { useContext, useEffect } from "react";
import { CategoryContext } from "../features/Categories/CategoryContext";
import { Link } from "react-router-dom";

const Categories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { loadingcat, errorcat, datacat } = useContext(CategoryContext);
  if (loadingcat) return <p>Loading...</p>;
  if (errorcat) return <p>{errorcat}</p>;
  const categoryList = datacat.data.map((category) => {
    const categoryColor = category.attributes.categoryColor;
    return (
      <Link
        key={category.id}
        to={`/Categories/${category.attributes.categoryName.toLowerCase()}`}
      >
        <div
          className={`rounded-lg p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 m-4 flex flex-col justify-center items-center transition-transform  hover:scale-110 hover:duration-500`}
          key={category.id}
          style={{ backgroundColor: categoryColor }}
        >
          <h2 className="text-lg xs:text-xl ss:text-2xl sm:text-3xl md:text-4xl  xl:text-5xl font-bold">
            {category.attributes.categoryName}
          </h2>
        </div>
      </Link>
    );
  });

  return (
    <div className="w-full flex items-center flex-col justify-between min-h-screen">
      <div className="flex flex-col max-w-[2000px] sm:items-center items-stretch w-full">
        <div className="grid grid-cols-1 xl:grid xl:grid-cols-4 md:grid md:grid-cols-3 sm:grid ss:grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-14 px-4 pt-8 xl:p-8 text-black text-center">
          {categoryList}
        </div>
      </div>
    </div>
  );
};

export default Categories;
