// import React from "react";
"use client";

import { Avatar, Button, Spinner } from "@heroui/react";
import Link from "next/link";
import { Person } from "@gravity-ui/icons";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const Nav = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // console.log(session);
  const handleLogOut = async () => {
    await authClient.signOut();
  };

  const links = (
    <>
      <Link href="/" className="p-2">
        Home
      </Link>
      <Link href="/destinations" className="p-2">
        Destinations
      </Link>
      <Link href="/myBookings" className="p-2">
        My Bookings
      </Link>
      <Link href="/add-destination" className="p-2">
        Add Destination
      </Link>
      <Link href="/profile" className="p-2 lg:hidden">
        Profile
      </Link>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown lg:hidden ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="hidden lg:block ">
            <ul
              tabIndex="-1"
              className="flex justify-start items-center text-sm gap-2 "
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/">
            <Image
              src={"/assets/wanderlast.png"}
              alt="wander last"
              width={100}
              height={14}
            ></Image>
          </Link>
        </div>

        <div className="navbar-end">
          {session == undefined ? (
            <Spinner></Spinner>
          ) : user ? (
            <>
              <Avatar>
                <Avatar.Image alt="John Doe" src={user?.image} />
                <Avatar.Fallback>JD</Avatar.Fallback>
              </Avatar>
              <Link href="/profile" className="hidden lg:block ">
                <Button variant="ghost">
                  <Person></Person> Profile
                </Button>
              </Link>
              <Button variant="outline" onClick={handleLogOut}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/signup">
                <Button variant="ghost">Sign up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
