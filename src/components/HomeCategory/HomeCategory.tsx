import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";

const HomeCategory = () => {
  return (
    <div className="flex flex-col items-center justify-center font-IBM-Plex">
      <div className="pt-10 pb-10">
        <h1 className="text-4xl font-bold text-black">BROWSE BY CATEGORY</h1>
      </div>
      <div className="container flex flex-wrap justify-center mx-auto">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  );
};

export default HomeCategory;
