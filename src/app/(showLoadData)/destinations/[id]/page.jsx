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
import { EditDestination } from "@/components/EditDestination";
import { DeleteDestination } from "@/components/DeleteDestination";
import BookingCard from "@/components/BookingCard";

const DestinationDetails = async ({ params }) => {
  const { id } = await params;
  //   console.log(id);
  const res = await fetch(`http://localhost:5000/destinations/${id}`);
  const detailsData = await res.json();
  //   console.log(detailsData);

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
          <EditDestination detailsData={detailsData}></EditDestination>
          <DeleteDestination detailsData={detailsData}></DeleteDestination>
        </div>
      </div>
      {/* details section  */}
      <div>
        <div className="w-full  h-75 md:h-100 lg:h-150  overflow-hidden rounded-xl ">
          <Image
            src={ImageURL}
            alt={DestinationName}
            width={1080}
            height={1080}
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
          {/* booking card  */}
          <BookingCard detailsData={detailsData}></BookingCard>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
