import React from "react";
import { HiArrowNarrowRight, HiOutlineSearch } from "react-icons/hi";
import { useHistory } from "react-router";

const Hero = () => {
  const history = useHistory();
  return (
    <div className="flex flex-col items-center justify-center pt-40 pb-40 bg-secondary font-IBM-Plex">
      <h1 className="text-3xl font-bold text-center text-white 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-3xl">
        Frontend for Public APIs
      </h1>
      <p className="text-center text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
        reprehenderit!
      </p>
      <div className="flex flex-col pt-2 pb-2 sm:flex-row">
        <button
          onClick={() => history.push("/category")}
          className="flex items-center justify-center p-3 mb-2 ml-2 text-sm text-white rounded-lg shadow-xl bg-aquo bg-gradient-to-r from-aquo to-aquo-dark hover:from-aquo-dark hover:to-aquo sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0"
        >
          BROWSE CATEGORIES
          <span className="pl-2">
            <HiArrowNarrowRight size={"1.4rem"} />
          </span>
        </button>
        <button
          onClick={() => history.push("/search")}
          className="flex items-center justify-center p-3 mt-2 ml-2 text-sm text-white rounded-lg shadow-xl bg-aquo bg-gradient-to-r from-aquo to-aquo-dark hover:from-aquo-dark hover:to-aquo sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0"
        >
          SEARCH APIs{" "}
          <span className="pl-2">
            <HiOutlineSearch size={"1.4rem"} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
