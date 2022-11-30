import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../Components/Button/PrimaryButton";

const CategoryCard = ({category}) => {
const {name,image,
categoryName
}=category
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
       
          <div className="card-actions">
     <PrimaryButton classes={'px-8 py-3 font-semibold rounded'}>  <Link to={`/categories/${categoryName}`}><button >See All Books</button></Link></PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
