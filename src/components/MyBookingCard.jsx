import { Eye, TrashBin } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { DeleteBooking } from "./DeleteBooking";

const MyBookingCard = ({ data }) => {
  //   console.log(data);
  const {
    _id,
    userName,
    userImage,
    userId,
    price,
    imageUrl,
    duration,
    destinationName,
    destinationId,
    departureDate,
    country,
    category,
  } = data;
  return (
    <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        {/* Image Section */}
        <div className="w-full md:w-75  h-50  overflow-hidden rounded-xl ">
          <Image
            src={imageUrl}
            alt={destinationName}
            width={300}
            height={300}
            className="w-full h-full object-cover  "
          ></Image>
        </div>

        {/* Content Section */}
        <div className="flex-1">
          {/* Status Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
            ✓ Confirmed
          </span>

          {/* Title */}
          <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-gray-900 mt-3">
            {destinationName}
          </h2>

          {/* Booking Info */}
          <div className="mt-4 space-y-1 text-gray-500 text-sm">
            <p className="flex items-center gap-2">
              📅 Departure: {departureDate}
            </p>
            <p className="flex items-center gap-2">📍 Booking ID: b1</p>
          </div>

          {/* Price */}
          <h3 className="text-2xl lg:text-3xl font-bold text-cyan-500 mt-5">
            $ {price}
          </h3>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 self-end md:self-center">
          {/* Cancel Button */}
          <DeleteBooking bookingId = {_id}></DeleteBooking>

        </div>
      </div>
    </div>
  );
};

export default MyBookingCard;
