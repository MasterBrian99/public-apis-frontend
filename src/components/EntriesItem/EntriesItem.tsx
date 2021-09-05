import React from "react";

interface Prop {
  api: string;
  description: string;
  auth: string;
  https: boolean;
  cors: string;
  link: string;
  category: string;
}

const EntriesItem = ({
  api,
  description,
  auth,
  https,
  cors,
  link,
  category,
}: Prop) => {
  return (
    <div className="px-10 m-4 cursor-pointer">
      <div className="max-w-lg px-10 py-8 transition duration-500 bg-white shadow-lg w-96 rounded-2xl hover:shadow-2xl">
        <div className="mt-4">
          <h1 className="text-lg font-semibold text-gray-700">{api}</h1>
          <p className="mt-4 text-gray-600 text-md">{description}</p>
          <div className="flex items-center justify-between mt-2 mb-4">
            <div className="flex flex-col items-center justify-center">
              <h1>Cors</h1>
              <p className="text-sm text-lighting-thief">{cors}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1>Auth</h1>
              <p className="text-sm text-lighting-thief">
                {auth.length === 0 ? "No Api Key" : auth}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1>HTTPS</h1>
              <p className="text-sm text-lighting-thief">
                {https ? "true" : "false"}
              </p>
            </div>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-white rounded-md shadow-xl bg-secondary hover:underline"
          >
            Api Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default EntriesItem;
