import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import { AuthContext } from "../../contexts/AuthProvider";

const AddaProduct = () => {
   const{user}=useContext(AuthContext);
   const email =user?.email;
   const navigate = useNavigate();
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const productPhoto = form.productPhoto.value;
    const name = form.name.value;
    const description = form.description.value;
    const originalPrice = form.originalPrice.value;
    const resalePrice = form.resalePrice.value;
    const condition = form.condition.value;
    const yearOfUse = form.yearOfUse.value;
    const location = form.location.value;
    const sellerName = form.sellerName.value;
    const sellerPhoneNumber = form.sellerPhoneNumber.value;
    const status = form.status.value;
    const categoryName = form.categoryName.value;

    console.log(name);


    const service = {
      productPhoto,
      name,
      description,
      originalPrice,
      resalePrice,
      condition,
      yearOfUse,
      location,
      sellerName,
      sellerEmail:email,
      sellerPhoneNumber,
      status,
      categoryName,
      productAddedDate:new Date().toLocaleString(),
      isAdvertised:false,
      isReported:false,
      isSellerVerified:true
    
    };
    console.log(service);

    fetch('https://app-build-server.vercel.app/categories',{
        method:'POST',
        headers:{
            'content-type':'application/json'

        },
        body:JSON.stringify(service)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.acknowledged){

             toast.success('Your service added successfully!');
             navigate('/');
        }
       
        console.log(data)})
    .catch(err=>{
        toast.warning('Something went wrong!')
        console.log(err)})

    
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-pink-600 text-center">
        Please Add a New Product
      </h2>
      <div>
        <form
          onSubmit={handleAddService}
          className="grid grid-cols-1  gap-4 mb-60 mt-20"
        >
          <input
            type="url"
            name="productPhoto"
            placeholder="Service image(Please provide a valid image url)"
            className="input input-bordered w-full"
            
          ></input>
          <div>
            <label className="text-sm p-4">Select a Category </label>
            <select
              name="categoryName"
              className="select border rounded-md border-gray-300 focus:outline-pink-500 text-gray-900' select-bordered w-full max-w-xs"
          
            >
              <option default>kidsbook</option>
              <option>literature</option>
              <option>entertainment</option>
            </select>
          </div>

          <input
            type="text"
            name="name"
            placeholder="Name of Book"
            className="input input-bordered w-full"
          
          ></input>

          <input
            type="text"
            name="description"
            placeholder="Description of service"
            className="input input-bordered w-full"
            min="0"
            max="300"
            step="10"
        
          ></input>

          <input
            type="text"
            name="originalPrice"
            placeholder="Original Price of the Book"
            className="input input-bordered w-full"
   
          ></input>

          <input
            type="text"
            name="resalePrice"
            placeholder="Resale Price of the Book"
            className="input input-bordered w-full"

          ></input>

          <input
            type="text"
            name="condition"
            placeholder="Condition of the Book"
            className="input input-bordered w-full"

          ></input>

          <input
            type="text"
            name="yearOfUse"
            placeholder="year of use"
            className="input input-bordered w-full"
  
          ></input>

          <input
            type="text"
            name="location"
            placeholder="Location"
            className="input input-bordered w-full"
 
          ></input>

          <input
            type="text"
            name="sellerName"
            placeholder="Seller Name"
            className="input input-bordered w-full"
  
          ></input>

          <input
            type="text"
            name="sellerPhoneNumber"
            placeholder="Phone number"
            className="input input-bordered w-full"

          ></input>
           <input
            type="email"
            defaultValue={user?.email}
            name="condition"
            readOnly
            className="input input-bordered w-full"

          ></input>

       <div>
            <label className="text-sm p-4">Select a Category </label>
            <select
              name="status"
              className="select border rounded-md border-gray-300 focus:outline-pink-500 text-gray-900' select-bordered w-full max-w-xs"
    
            >
             
              <option>Available</option>
              <option>Not Available</option>

            </select>
          </div>

          <div className="flex justify-center">
            <PrimaryButton classes="px-8 py-3 font-semibold rounded">
              Submit
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddaProduct;
