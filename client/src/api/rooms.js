// post all room 
export const addRoom = async roomData => {
    console.log("roomData",roomData)
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`,{
    method : 'POST',
    headers : {
        'content-type' : 'application/json',
        
    },
    body:JSON.stringify(roomData)
    
 })
 const data = await response.json();
 return data
}
// GET All Rooms 
export const getAllRooms = async()=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`)
    const data = response.json();
    return data;
}
// GET a Single Room 
export const getRoom = async id=>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/room/${id}`)
    const data = response.json();
    return data;
}

// Get Rooms 
export const getRooms = async email=>{

   const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/email`)
   const data = response.json();
   return data;
}
// delete a room 

export const deleteRoom = async id =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/id`)
    const data = response.json()
    return response;
}