import React from "react";

const EntriesItem = () => {
  return (
    <div className="px-10 m-4 cursor-pointer">
      <div className="max-w-lg px-10 py-8 transition duration-500 bg-white shadow-lg rounded-2xl hover:shadow-2xl">
        <div className="mt-4">
          <h1 className="text-lg font-semibold text-gray-700">Api Name</h1>
          <p className="mt-4 text-gray-600 text-md">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happines.
          </p>
          <div className="flex items-center justify-between mb-2">
            <h1>Hello</h1>
            <h1>Hello</h1>
            <h1>Hello</h1>
          </div>
          <button className="px-4 py-2 text-white rounded-md shadow-xl bg-secondary hover:underline">
            Api Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntriesItem;
