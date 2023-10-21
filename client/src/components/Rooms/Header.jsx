import React from "react";
import Heading from "../Heading/Heading";

const Header = ({roomData}) => {
  return (
    <>
      <Heading
        title={roomData.title}
        subtitle={roomData.location}
        center={false}
      ></Heading>
      
       <div className="w-full md:h-[60vh] overflow-hidden rounded-lg">
        <img className="object-cover" src={roomData.image} alt="header image" />
      </div>
    </>
  );
};

export default Header;
