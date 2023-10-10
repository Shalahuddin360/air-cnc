import React, { useContext, useState } from 'react';
import { addRoom } from '../../api/rooms';
import { imageUpload } from '../../api/utils';
import AddRoomForm from '../../components/Forms/AddRoomForm';
import { AuthContext } from '../../providers/AuthProvider';

const AddRoom = () => {
    const [loading,setLoading] = useState(false);
    const [uploadButtonText,setUploadButtonText] = useState('Upload Image');
    const [dates,setDates] = useState( {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    })
    const {user} = useContext(AuthContext)

    // handle from submit 
    const handleSubmit =event=>{
        setLoading(true)
        event.preventDefault()
     const location = event.target.location.value;
     const title = event.target.title.value;
     const from = dates.startDate;
     const to = dates.endDate;
     const price = event.target.price.value;
     const total_guest = event.target.total_guest.value;
     const bedrooms = event.target.bedrooms.value;
     const bathrooms = event.target.bathrooms.value;
     const description = event.target.description.value;
     const category = event.target.category.value
     const image = event.target.image.files[0];
    //  image upload 
      imageUpload(image)
      .then(data=>{
        const roomData = {
        
            location,
            title,
            from,
            to,
            price : parseFloat(price),
            total_guest,
            bedrooms,
            bathrooms,
            description,
            category,  
            image : data.data.display_url,

            host : {
                name :  user?.displayName,
                photo : user?.photoURL,
                email:  user?.email
            },
            
        }
        console.log(roomData)
      //  post roomData to server
        addRoom(roomData)
        .then(data=>console.log('Data',data))
        .catch(error=>error.message)
        // console.log(roomData)
        setLoading(false)
        })

      .catch(error=>{
       console.log(error.message);
       setLoading(false)
      })
    }
    const handleImageChange = image=>{
        console.log(image)
        setUploadButtonText(image.name)
    }
    const handleDates = ranges=>{
      console.log(ranges.selection)
      setDates(ranges.selection)
    }
     return <AddRoomForm 
     handleSubmit={handleSubmit} 
     loading={loading}
     handleImageChange={handleImageChange}
     uploadButtonText={uploadButtonText}
     dates={dates}
     handleDates={handleDates}
     />
};

export default AddRoom;