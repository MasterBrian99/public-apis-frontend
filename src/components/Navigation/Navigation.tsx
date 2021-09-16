import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
const Navigation = () => {
  const [fullWidth, setFullWidth] = useState(false);

  const listenResizeEvent = () => {
    window.innerWidth > 709 ? setFullWidth(true) : setFullWidth(false);
  };
  useEffect(() => {
    listenResizeEvent();
    window.addEventListener("resize", listenResizeEvent);
    return () => {
      window.removeEventListener("resize", listenResizeEvent);
    };
  }, []);

  return <>{fullWidth ? <NavigationLg /> : <NavigationSm />}</>;
};

export default Navigation;

const NavigationLg = () => {
  const history = useHistory();

  return (
    <div className="shadow ">
      <div className="container flex justify-between pt-8 pb-8 mx-auto color-lighting-thief">
        <img
          src={Logo}
          alt="logo"
          className="cursor-pointer w-36"
          onClick={() => history.push("/")}
        />
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
        <a
          href="https://github.com/MasterBrian99"
          className="px-4 py-2 text-white rounded-md shadow-xl bg-secondary "
        >
          Github
        </a>
      </div>
    </div>
  );
};

const NavigationSm = () => {
  return (
    <div className="flex items-center justify-end p-2">
      <button className="p-3">
        <GiHamburgerMenu size={30} />
      </button>
    </div>
  );
};
