import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { categoryEntity } from "../../atoms/store";
import EntriesItem from "../../components/EntriesItem/EntriesItem";
import Navigation from "../../components/Navigation/Navigation";
import Loader from "react-loader-spinner";
import { Redirect } from "react-router";
import axios from "axios";

const CategoryScreen = () => {
  const entity = useRecoilValue(categoryEntity);
  const [state, setState] = useState("");
  function fet() {
    axios
      .get("https://api.publicapis.org/entries?category=" + state)
      .then((res) => {
        console.log(res.data);
      });
  }

  useEffect(() => {
    setState(entity);
    fet();
  }, [state]);

  return (
    <>
      {entity.length === 0 ? (
        <div className="flex items-center justify-center h-screen">
          <Loader
            type="ThreeDots"
            color="#1CC4CA"
            height={100}
            width={100}
            timeout={60000} //3 secs
          />
        </div>
      ) : entity === "noValue" ? (
        <Redirect to="/category" />
      ) : (
        <>
          <Navigation />
          <div className="container mx-auto">
            <div className="pb-8 mt-5 mb-5">
              <h1 className="text-2xl text-gray-700">Categories /</h1>
              <h1 className="text-4xl font-bold">{entity} </h1>
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
        </>
      )}
    </>
  );
};

export default CategoryScreen;
