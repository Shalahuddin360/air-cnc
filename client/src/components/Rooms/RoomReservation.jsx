import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "../Button/Button";
// import BookingModal from "../Modal/BookingModal";
import { formatDistance } from "date-fns";
import DatePicker from "./DatePicker";
const RoomReservation = ({roomData}) => {
  const { user , role } = useContext(AuthContext);

  //price calculation 
  const totalPrice = parseFloat(formatDistance(
    new Date(roomData.to),
    new Date(roomData.from)).split(' ')[0]) * roomData.price

 const [value,setValue] = useState({  
  startDate: new Date(roomData.from),
  endDate: new Date(roomData.to),
  key: 'selection',
 })
  
  //booking state 
  const [isOpen,setIsOpen] = useState(false);
  const [bookingInfo,setBookingInfo] = useState({
    guest : {name:user.displayName,email:user.email,photo:user.photoURL},
    host : roomData.host.email,
    location :roomData.location,
    price : totalPrice,
    to:value.startDate,
    from:value.endDate
    
  })

//handleSelect
const handleSelect = range=>{
  setValue({...value})
}

  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="font-semibold text-2xl">${roomData.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <div className="flex justify-center">
      <DatePicker handleSelect={handleSelect} value={value} />
      </div>
      <hr />
       <div className="p-4 ">
        <Button onClick={()=>setIsOpen(true)} disabled={roomData.host.email=== user.email} label="Reserve" />
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
      {/* <BookingModal isOpen={isOpen}/> */}
    </div>
  );
};

export default RoomReservation;
