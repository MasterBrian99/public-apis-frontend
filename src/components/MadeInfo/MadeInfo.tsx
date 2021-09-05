import React from "react";
import { SiTailwindcss, SiReact, SiTypescript } from "react-icons/si";

const MadeInfo = () => {
  return (
    <div className="container pt-4 pb-4 mx-auto mt-8 mb-8">
      <h1 className="pb-4 text-3xl font-bold text-gray-500">Made With -</h1>
      <div className="flex flex-col sm:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
        <div className="flex items-center justify-center m-2">
          <SiTailwindcss size={30} />
          <h4 className="text-2xl">Tailwind</h4>
        </div>
        <div className="flex items-center justify-center m-2">
          <SiReact size={30} />
          <h4 className="text-2xl">React</h4>
        </div>
        <div className="flex items-center justify-center m-2">
          <SiTypescript size={30} />
          <h4 className="ml-1 text-2xl">Typescript</h4>
        </div>
      </div>
    </div>
  );
};

export default MadeInfo;
