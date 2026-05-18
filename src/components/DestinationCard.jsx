import Image from "next/image";
import React from "react";
import { PinFill } from "@gravity-ui/icons";
import { Calendar } from "@gravity-ui/icons";
import Link from "next/link";
import { Button } from "@heroui/react";
import { ArrowUpRight } from "@gravity-ui/icons";

const DestinationCard = ({ destination }) => {
  const {
    Price,
    ImageURL,
    Duration,
    DestinationName,
    Description,
    DepartureDate,
    Country,
    Category,
    destination: destinationPlace,
  } = destination;
  console.log(destination);
  return (
    <div>
      <div className="card bg-base-100 shadow-sm rounded-xl ">
        <div className="w-full  h-50  overflow-hidden rounded-xl ">
          <Image
            src={ImageURL}
            alt={DestinationName}
            width={300}
            height={300}
            className="w-full h-full object-cover  "
          ></Image>
        </div>

        <div className="card-body px-0 ">
          <h2 className="card-title font-light text-sm  ">
            <PinFill className="text-gray-600 "></PinFill>
            {Country}
          </h2>
          <div className="flex justify-between   items-center ">
            <h1 className="font-bold text-lg ">{DestinationName}</h1>
            <p className="text-end ">Price: $ {Price}/preson</p>
          </div>

          <p className="flex justify-start items-center gap-2 ">
            <Calendar className="text-gray-600 "></Calendar>
            {Duration}
          </p>
          {/* book now button  */}
          <div className="card-actions justify-end">
            <Link href="#">
              <Button variant="secondary" className="text-cyan-500">
                Book Now
                <ArrowUpRight></ArrowUpRight>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
