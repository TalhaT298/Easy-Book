import React, { useEffect, useState } from "react";

import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch("https://app-build-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, []);

  return (
    <div className="mt-16">
      <div>
        <h2 className="text-2xl text-rose-800 text-center  text-bold">
          Catagories
        </h2>
        <p className="text-xl mt-3 text-center">
          Find Your favourite book here
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4 ">
        {categoryData.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
