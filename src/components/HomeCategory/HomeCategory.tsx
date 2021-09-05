import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import { useRecoilValue } from "recoil";
import { categoryAtom } from "../../atoms/store";
import Loader from "react-loader-spinner";
const HomeCategory = () => {
  const category = useRecoilValue(categoryAtom);

  return (
    <div className="flex flex-col items-center justify-center font-IBM-Plex">
      <div className="pt-10 pb-10">
        <h1 className="font-bold text-center text-black text-2 xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
          BROWSE BY CATEGORY
        </h1>
      </div>
      <div className="container flex flex-wrap justify-center mx-auto">
        {category.length === 0 ? (
          <div className="flex items-center justify-center pt-10 pb-10 ">
            <Loader
              type="ThreeDots"
              color="#1CC4CA"
              height={100}
              width={100}
              timeout={60000} //3 secs
            />
          </div>
        ) : (
          category.map((e, i) => <CategoryItem name={e} key={i} />)
        )}
      </div>
    </div>
  );
};

export default HomeCategory;
