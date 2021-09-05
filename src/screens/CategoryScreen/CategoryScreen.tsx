import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { categoryEntity } from "../../atoms/store";
import EntriesItem from "../../components/EntriesItem/EntriesItem";
import Navigation from "../../components/Navigation/Navigation";
import Loader from "react-loader-spinner";
import { Redirect } from "react-router";
import axios from "axios";

interface Prop {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

const CategoryScreen: React.FC = () => {
  const entity = useRecoilValue(categoryEntity);

  const [entityItems, setEntityItems] = useState<Prop[]>([]!);

  useEffect(() => {
    if (entity.length === 0) {
    } else {
      axios
        .get("https://api.publicapis.org/entries?category=" + entity)
        .then((res) => {
          setEntityItems(res.data.entries);
        })
        .catch(() => {});
    }

    return () => {
      setEntityItems([]);
    };
  }, [entity]);

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
              {entityItems.map((e, i) => (
                <EntriesItem
                  api={e.API}
                  auth={e.Auth}
                  category={e.Category}
                  cors={e.Cors}
                  description={e.Description}
                  https={e.HTTPS}
                  key={i}
                  link={e.Link}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CategoryScreen;
