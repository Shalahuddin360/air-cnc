import { formatDistance } from "date-fns";
import React, { useContext, useState } from "react";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { addBooking, updateStatus } from "../../api/bookings";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "../Button/Button";
import BookingModal from "../Modal/BookingModal";
import DatePicker from "./DatePicker";
const RoomReservation = ({roomData}) => {
  const navigate = useNavigate();
  const { user , role } = useContext(AuthContext);
  console.log(roomData)
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
    to:value.endDate,
    from:value.startDate,
    title:roomData.title,
    roomId : roomData._id,
    image:roomData.image
    
  })

//handleSelect
const handleSelect = range=>{
  setValue({...value})
}
//closeModal
const closeModal=()=>{
  setIsOpen(false)
}
//modalHandler 
const modalHandler=()=>{
  addBooking(bookingInfo)
  .then(data=>{
    updateStatus(roomData._id,true)
    .then(data=>{
      toast.success('booking successfully')
      navigate('/dashboard/my-bookings')
      closeModal()
    })
    .catch(err=>{
      console.log(err.message)
    })
  })
  .catch(err=>{
    console.log(err)
    closeModal()
  })
 
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
        <Button onClick={()=>setIsOpen(true)} disabled={roomData.host.email=== user.email || roomData.booked} label="Reserve" />
      </div>
      <hr />
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
      <BookingModal bookingInfo={bookingInfo} modalHandler={modalHandler} isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default RoomReservation;
