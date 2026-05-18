import Link from "next/link";
import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  PinFill,
} from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { Pencil } from "@gravity-ui/icons";
import { TrashBin } from "@gravity-ui/icons";
import Image from "next/image";

const DestinationDetails = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const res = await fetch(`http://localhost:5000/destinations/${id}`);
  const detailsData = await res.json();
  console.log(detailsData);

  const {
    _id,
    Price,
    ImageURL,
    Duration,
    DestinationName,
    Description,
    DepartureDate,
    Country,
    Category,
    destination,
  } = detailsData;

  return (
    <div className="container mx-auto py-9 px-2 ">
      {/* nav button  */}
      <div className="flex justify-between items-center mb-5 ">
        <div>
          <Link href={"/destinations"} className="flex items-center gap-2">
            <ArrowLeft></ArrowLeft> Back to Destination
          </Link>
        </div>
        <div className="space-x-2">
          <Link href={"/destinations"}>
            <Button variant="outline" className={"rounded "}>
              <Pencil></Pencil> Edit
            </Button>
          </Link>
          <Link href={"/destinations"}>
            <Button variant="danger-soft" className={"rounded"}>
              <TrashBin className="text-red-500"></TrashBin> Cancel
            </Button>
          </Link>
        </div>
      </div>
      {/* details section  */}
      <div>
        <div className="w-full  h-75 md:h-100 lg:h-125 overflow-hidden rounded-xl ">
          <Image
            src={ImageURL}
            alt={DestinationName}
            width={1300}
            height={1300}
            className="w-full h-full object-cover  "
          ></Image>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-7  py-3 ">
          <div>
            <h2 className="card-title font-light">
              <PinFill className="text-gray-600 "></PinFill>
              {Country}
            </h2>

            <h1 className="font-bold text-lg md:text-2xl lg:text-4xl mt-2">
              {DestinationName}
            </h1>

            <p className="flex justify-start items-center gap-2 ">
              <Calendar className="text-gray-600 "></Calendar>
              {Duration}
            </p>
            <h3 className="font-bold md:text-xl mt-5 ">Overview</h3>
            <p className="text-gray-700 text-sm text-justify">{Description}</p>
          </div>
          <div className="card w-full lg:min-w-75 text-gray-700">
            <p className="">
              Starting from <br />{" "}
              <span className="font-bold text-xl md:text-2xl text-cyan-500">
                $ {Price}{" "}
              </span>{" "}
              <br />
              per person
            </p>
            <div className="bg-base-300 p-2 mt-8 mb-4">{DepartureDate}</div>
            <Link href={"#"}>
              <Button className={"bg-cyan-500 text-white rounded-none w-full "}>
                Book Now <ArrowRight></ArrowRight>
              </Button>
            </Link>
            <div>
              <p className="flex items-center gap-1">
                <Check className="text-cyan-500"></Check> Free cancellation up
                to 7 days
              </p>
              <p className="flex items-center gap-1">
                <Check className="text-cyan-500"></Check> Travel insurance included
              </p>
              <p className="flex items-center gap-1">
                <Check className="text-cyan-500"></Check> 24/7 customer support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
