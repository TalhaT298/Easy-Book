import React from 'react';
import PrimaryButton from '../../Components/Button/PrimaryButton';

const SingleCategoryCard = ({book}) => {
    

 const {productPhoto,name,originalPrice,resalePrice,yearOfUse,conditionOfProduct,description,locationOfSeller,sellerName,sellerPhoneNumber,status,isAdvertised,isSellerVerified}=book;

console.log(book)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={productPhoto} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Book Name: {name}</h2>
    <p>{description}</p>
    <div>
 <p >Original price : {originalPrice}</p>
 <p>Resell price: {resalePrice}</p>


    </div>
  
    <div className='flex'>
        <p>Book Condition: {conditionOfProduct}</p>
        <p>Year of use : {yearOfUse}</p>
    </div>
    <div className='flex'>
        <p>Location : {locationOfSeller}</p>
        <p>Seller Name: {sellerName}</p>
        <p>phone : {sellerPhoneNumber}</p>
    </div>
      <p>Status : <span className='text-rose-900'>{status}</span></p>
    <div className="card-actions justify-center">

  
      <PrimaryButton classes='px-8 py-3 font-semibold rounded '><label htmlFor="booking-modal" >Book Now</label></PrimaryButton>
      
    </div>


  </div>
</div>
    );
};

export default SingleCategoryCard;
