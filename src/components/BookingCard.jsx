"use client";

import { authClient } from "@/lib/auth-client";
import { ArrowRight, Check } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
// import { json } from "better-auth";
// import Link from "next/link";
// import { redirect } from "next/navigation";
import React from "react";

const BookingCard = ({ detailsData }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // console.log(user);
  const {
    _id,
    Price,
    ImageURL,
    Duration,
    DestinationName,
    DepartureDate,
    Country,
    Category,
  } = detailsData;

  const handleBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userName: user?.name,
      userImage: user?.image,
      destinationId: _id,
      price: Price,
      imageUrl: ImageURL,
      destinationName: DestinationName,
      departureDate: DepartureDate,
      country: Country,
      category: Category,
      duration: Duration,
    };

    // console.log(bookingData);
    const { data: tokenData } = await authClient.token();
    console.log(tokenData);

    const res = await fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();
    if (data.insertedId) {
      alert("You Booked your destination successfully");
    }

    console.log(data.insertedId);
  };

  return (
    <div>
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

        <Button
          onClick={handleBooking}
          className={"bg-cyan-500 text-white rounded-none w-full "}
        >
          Book Now <ArrowRight></ArrowRight>
        </Button>
        <div>
          <p className="flex items-center gap-1">
            <Check className="text-cyan-500"></Check> Free cancellation up to 7
            days
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
  );
};

export default BookingCard;
