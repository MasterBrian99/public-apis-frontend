import React from "react";
import MadeIcon from "../MadeIcon/MadeIcon";

const MadeInfo = () => {
  return (
    <div className="container pt-4 pb-4 mx-auto mt-8 mb-8">
      <h1 className="pb-4 text-3xl font-bold text-gray-500">Made With -</h1>
      <div className="flex ">
        <MadeIcon />
        <MadeIcon />
        <MadeIcon />
      </div>
    </div>
  );
};

export default MadeInfo;
