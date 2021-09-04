import React from "react";
import { HiArrowNarrowRight, HiOutlineSearch } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-40 pb-40 bg-secondary font-IBM-Plex">
      <h1 className="text-6xl font-bold text-white ">
        Frontend for Public APIs
      </h1>
      <p className="text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
        reprehenderit!
      </p>
      <div className="flex pt-2 pb-2">
        <a
          href="/"
          className="flex items-center justify-center p-3 ml-2 text-sm text-white rounded-lg shadow-xl bg-aquo bg-gradient-to-r from-aquo to-aquo-dark hover:from-aquo-dark hover:to-aquo"
        >
          BROWSE CATEGORIES{" "}
          <span className="pl-2">
            <HiArrowNarrowRight size={"1.4rem"} />
          </span>
        </a>
        <a
          href="/"
          className="flex items-center justify-center p-3 ml-2 text-sm text-white rounded-lg shadow-xl bg-aquo bg-gradient-to-r from-aquo to-aquo-dark hover:from-aquo-dark hover:to-aquo"
        >
          SEARCH APIs{" "}
          <span className="pl-2">
            <HiOutlineSearch size={"1.4rem"} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
