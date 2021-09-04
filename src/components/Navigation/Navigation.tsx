import React from "react";

const Navigation = () => {
  return (
    <div className="shadow ">
      <div className="container flex justify-between pt-8 pb-8 mx-auto color-lighting-thief">
        <h1>Logo</h1>
        <ul className="flex">
          <a href="/" className="ml-2 mr-2">
            <li>Home</li>
          </a>
          <a href="/category" className="ml-2 mr-2">
            <li>Categories</li>
          </a>
          <a href="/about" className="ml-2 mr-2">
            <li>About</li>
          </a>
        </ul>
        <a href="/">button</a>
      </div>
    </div>
  );
};

export default Navigation;
