import React, { useContext } from "react";
import toast from "react-hot-toast";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import { AuthContext } from "../../contexts/AuthProvider";

const Modal = ({book}) => {

    const{user} = useContext(AuthContext)

const handleModal =(e) =>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const item=form.item.value;
    const phone= form.phone.value;
    const price= form.price.value;
    const location =form.location.value;


 const booking ={
    name,
    email,
    item,
    price,
    phone,
    location
 }
console.log(booking);
fetch('https://thriftly-server.vercel.app/bookings',{

method:'POST',
headers:{
    'content-type':'application/json'
},
body: JSON.stringify(booking)


})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    toast.success('Booking confirmed')
})

}


  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Please fill up the form to order!
          </h3>
     <form onSubmit={handleModal}>
        <input name="name" type="text"  defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full max-w-full mb-2" />
        <input name="email" defaultValue={user?.email} disabled type="text" placeholder="Email Address" className="input input-bordered w-full max-w-full mb-2" />
        <input  name="item" type="text" placeholder="Item name" className="input input-bordered w-full max-w-full mb-2" />
        <input name="price" type="text" placeholder=" price" className="input input-bordered w-full max-w-full mb-2" />
        <input name="phone" type="text" placeholder="phone numbe" className="input input-bordered w-full max-w-full mb-2" />
          <input name="location" type="text" placeholder="Meeting location" className="input input-bordered w-full max-w-full mb-2" />
        <br/>
        <PrimaryButton classes={'px-8 py-3 font-semibold rounded w-full '}><input className="w-full input-bordered" type='submit'></input>
     </PrimaryButton></form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
