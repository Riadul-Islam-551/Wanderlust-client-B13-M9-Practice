import MyBookingCard from "@/components/MyBookingCard";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

const MyBooking = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id;
  // console.log(session.user.id);
  const res = await fetch(`http://localhost:5000/bookings/${userId}`);
  const bookingData = await res.json();
  // console.log(bookingData);

  return (
    <div className="container mx-auto pt-12 pb-9 px-3">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
        My Bookings
      </h1>
      <p className="text-gray-600 text-sm mt-3 mb-5">
        Manage and view your upcoming travel plans
      </p>
      {bookingData.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-3">
            {bookingData.map((data, ind) => {
              return <MyBookingCard key={ind} data={data}></MyBookingCard>;
            })}
          </div>
        </>
      ) : (
        <>
          <div className="card border border-gray-300 text-center py-12 px-3 space-y-1">
            <h1 className="font-bold md:text-xl">
              You didn&apos;t book any Destination
            </h1>
            <p className="text-gray-600">
              Please book your favorite Destination
            </p>
            <Link href={"/destinations"}>
              <Button
                variant="outline"
                className="border-cyan-500 text-cyan-500 rounded"
              >
                Choose Destination
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default MyBooking;
