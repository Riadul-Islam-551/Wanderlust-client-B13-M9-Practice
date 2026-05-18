import DestinationCard from "@/components/DestinationCard";
import React from "react";

const AllDestinationPage = async () => {
  const res = await fetch("http://localhost:5000/destinations");
  const destinationsData = await res.json();

//   console.log(destinationsData);
  return (
    <div className="container mx-auto py-12 px-2 ">
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
      {/* show the destinations data  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 px-3 ">
        {destinationsData.map((data, ind) => (
          <DestinationCard key={ind} destination={data}></DestinationCard>
        ))}
      </div>
    </div>
  );
};

export default AllDestinationPage;
