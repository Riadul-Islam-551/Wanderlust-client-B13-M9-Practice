import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      {/* <Nav></Nav> */}
      <Hero></Hero>
      {children}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default layout;
