import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-gray-400 ">
      <div className="container mx-auto pt-12 pb-2 ">
        <footer className="footer  border-gray-700  border-b px-10 py-4">
          <aside className="grid-flow-row  items-center">
            <Image
              src={"/assets/Wanderlast-1.png"}
              alt="Wander last"
              width={100}
              height={20}
              className="w-50"
            ></Image>
            <p>
              Your gateway to extraordinary travel experiences around the world.
            </p>
          </aside>
        </footer>
        <footer className="footer grid-cols-1 lg:grid-cols-5 sm:footer-horizonta p-10">
          <nav className=" lg:col-span-2">
            <h6>NEWSLETTER</h6>
            <p>Subscribe for exclusive travel deals and inspiration.</p>
            <label className="input validator bg-gray-500 text-base-200">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="Enter email" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </nav>
          <nav className="col-span-1">
            <h6 className="font-bold text-lg">Quick Links</h6>
            <a href="#" className="text-xs">
              Home
            </a>
            <a href="#" className="text-xs">
              Destinations
            </a>
            <a href="#" className="text-xs">
              My Bookings
            </a>
            <a href="#" className="text-xs">
              My Profile
            </a>
          </nav>
          <nav className="col-span-1">
            <h6 className="font-bold text-lg">Support</h6>
            <a href="#" className="text-xs">
              Help Center
            </a>
            <a href="#" className="text-xs">
              Terms of Service
            </a>
            <a href="#" className="text-xs">
              Privacy Policy
            </a>
          </nav>
          <nav className="col-span-1">
            <h6 className="font-bold text-lg">Contact Us</h6>
            <a href="#" className="text-xs">
              786 901 1622
            </a>
            <a href="#" className="text-xs">
              info@wandarland.com
            </a>
          </nav>
        </footer>
        <p className="text-center text-[10px] ">
          &copy; 2026 Wanderlust. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
