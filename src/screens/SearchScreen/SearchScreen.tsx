import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { searchEntity } from "../../atoms/store";
import EntriesItem from "../../components/EntriesItem/EntriesItem";
import Navigation from "../../components/Navigation/Navigation";
import SearchBar from "../../components/Searchbar/SearchBar";
import LazyLoad from "react-lazyload";
import Loader from "react-loader-spinner";

interface Prop {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

const SearchScreen = () => {
  const searchValue = useRecoilValue(searchEntity);
  const [entityItems, setEntityItems] = useState<Prop[]>([]!);

  useEffect(() => {
    setEntityItems([]);
    axios
      .get(`https://api.publicapis.org/entries?title=${searchValue}`)
      .then((res) => {
        setEntityItems(res.data.entries);
      });

    return () => {};
  }, [searchValue]);

  return (
    <div>
      <Navigation />
      <SearchBar />

      <div className="container flex flex-wrap items-center justify-center mx-auto">
        {entityItems.length === 0 ? (
          <Loader
            type="ThreeDots"
            color="#1CC4CA"
            height={100}
            width={100}
            timeout={60000} //3 secs
          />
        ) : (
          <>
            {entityItems.map((e, i) => (
              <LazyLoad
                key={i}
                placeholder={
                  <div className="max-w-lg px-10 py-8 transition duration-500 bg-white shadow-lg w-96 rounded-2xl hover:shadow-2xl">
                    <div className="flex space-x-4 animate-pulse">
                      <div className="flex-1 py-1 space-y-4">
                        <div className="w-3/4 h-4 bg-gray-500 rounded"></div>
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-500 rounded"></div>
                          <div className="w-5/6 h-4 bg-gray-500 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              >
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
              </LazyLoad>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchScreen;
