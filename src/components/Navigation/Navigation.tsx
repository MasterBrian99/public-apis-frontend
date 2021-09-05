import React from "react";
import { useHistory } from "react-router";

const Navigation = () => {
  const history = useHistory();
  return (
    <div className="shadow ">
      <div className="container flex justify-between pt-8 pb-8 mx-auto color-lighting-thief">
        <h1>Logo</h1>
        <ul className="flex">
          <button
            onClick={() => {
              history.push("/");
            }}
            className="ml-2 mr-2"
          >
            <li>Home</li>
          </button>
          <button
            onClick={() => {
              history.push("/category");
            }}
            className="ml-2 mr-2"
          >
            <li>Categories</li>
          </button>
          <button
            onClick={() => {
              history.push("/search");
            }}
            className="ml-2 mr-2"
          >
            <li>Search</li>
          </button>
        </ul>
        <a href="/search">button</a>
      </div>
    </div>
  );
};

export default Navigation;
