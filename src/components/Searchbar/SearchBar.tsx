import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { searchEntity } from "../../atoms/store";
import { ToastContainer, toast } from "react-toastify";
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const notify = () =>
    toast.warn("Value Empty", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  function setValues() {
    notify();
  }

  const [searchState, setSearchState] = useRecoilState(searchEntity);

  return (
    <>
      <div className="container flex flex-col items-center justify-center pt-8 mx-auto">
        <input
          onChange={(event) => setSearchValue(event.target.value)}
          className="w-full h-12 px-8 mx-6 mb-4 text-xl rounded shadow-lg focus:outline-none focus:shadow-outline "
          type="search"
          placeholder="Search..."
        />
      </div>
      <div className="container flex justify-end w-full mx-auto">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <button
          className="px-5 py-2 text-white rounded shadow-lg bg-secondary"
          onClick={() =>
            searchValue.length === 0 ? setValues() : setSearchState(searchValue)
          }
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
