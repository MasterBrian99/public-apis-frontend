import React from "react";

interface Props {
  name: string;
}

const CategoryItem = ({ name }: Props) => {
  return (
    <div
      onClick={() => {
        console.log("Hello");
      }}
      className="flex items-center justify-center h-16 max-w-full m-4 transition duration-500 transform shadow-xl cursor-pointer bg-aniston-light w-72 hover:scale-105"
    >
      <h3 className="text-lg text-black ">{name}</h3>
    </div>
  );
};

export default CategoryItem;
