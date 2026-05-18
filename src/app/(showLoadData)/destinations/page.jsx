import React from "react";

const AllDestinationPage = () => {
  return (
    <div className="py-12 px-2 ">
      <div>
        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl mb-3">
          Explore All Destinations
        </h1>
        <p className="text-sm text-gray-700 ">
          Find your perfect travel experience from our curated collection
        </p>
      </div>
      {/* sorting field  */}
      <div className="flex justify-around items-center mt-9 mb-3">
        {/* category sorting  */}
        <div className="dropdown dropdown-center w-full ">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 w-full rounded-none"
          >
            Category ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        {/* price sorting  */}
        <div className="dropdown dropdown-center w-full ">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 w-full rounded-none"
          >
            Price Range ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllDestinationPage;
