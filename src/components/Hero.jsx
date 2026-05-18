import { Button } from "@heroui/react";
import React from "react";
import { ArrowRight } from "@gravity-ui/icons";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="hero min-h-[70vh] "
      style={{
        backgroundImage: "url('/assets/Banner.png')",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Discover Your <br /> Next Adventure
          </h1>
          <p className="mb-5 text-gray-400">
            Explore breathtaking destinations and create unforgettable memories
            with our curated travel experiences.
          </p>
          <Link href={"#"}>
            {" "}
            <Button>
              Explore Now <ArrowRight></ArrowRight>
            </Button>
          </Link>
          <Link href={"/destinations"}>
            {" "}
            <Button className="bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 transition-all duration-300">
              View Destination
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
