import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { categoryEntity } from "../../atoms/store";
import { useHistory } from "react-router-dom";

interface Props {
  name: string;
}

const CategoryItem = ({ name }: Props) => {
  let history = useHistory();
  const [, setCategoryEntityName] = useRecoilState(categoryEntity);

  useEffect(() => {
    setCategoryEntityName("");
  });

  return (
    <div
      onClick={() => {
        setCategoryEntityName(name);
        history.push(`/item`);
      }}
      className="flex items-center justify-center h-16 max-w-full m-4 transition duration-500 transform shadow-xl cursor-pointer bg-aniston-light w-72 hover:scale-105"
    >
      <h3 className="text-lg text-black ">{name}</h3>
    </div>
  );
};

export default CategoryItem;
