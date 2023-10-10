import React from "react";
import Heading from "../Heading/Heading";

const Header = () => {
  return (
    <>
      <Heading
        title="Valuvana Bali - Owl Bamboo House"
        subtitle="Sideman Indonesia"
        center={false}
      ></Heading>
      
       <div className="w-full md:h-[60vh] overflow-hidden rounded-lg">
        <img className="object-cover" src="https://i.ibb.co/252RwBK/IMG-20220921-131154-0.png" alt="header image" />
      </div>
    </>
  );
};

export default Header;
