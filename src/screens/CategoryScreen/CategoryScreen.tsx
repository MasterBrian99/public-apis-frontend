import React from "react";
import EntriesItem from "../../components/EntriesItem/EntriesItem";
import Navigation from "../../components/Navigation/Navigation";

const CategoryScreen = () => {
  return (
    <div>
      <Navigation />
      <div className="container mx-auto">
        <div className="pb-8 mt-5 mb-5">
          <h1 className="text-2xl text-gray-700">Categories /</h1>
          <h1 className="text-4xl font-bold">Cryptocurrency </h1>
        </div>

        <div className="flex flex-wrap items-center justify-center ">
          <EntriesItem />
          <EntriesItem />
          <EntriesItem />
          <EntriesItem />
          <EntriesItem />
          <EntriesItem />
          <EntriesItem />
        </div>
      </div>
    </div>
  );
};

export default CategoryScreen;
