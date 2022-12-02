import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import PrimaryButton from "../Components/Button/PrimaryButton";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../Hooks/useAdmin";


const DashboardLayout = () => {
const{user}= useContext(AuthContext)
const [isAdmin] =useAdmin(user?.email);

const [loggedInUser, setLoggedInUser] = useState([]);
  useEffect(() => {
fetch(`https://app-build-server.vercel.app/users/${user?.email}`)
.then(res=>res.json())
.then(data=>setLoggedInUser(data))

  }, [user?.email]);
console.log(loggedInUser);
  return (
    <div>
  <label htmlFor="dashboard-sidebar" tabIndex={2} className="btn btn-ghost lg:hidden mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
     <div className="drawer drawer-mobile mt-12">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">

    <Outlet></Outlet>


  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-sidebar" className="drawer-overlay "></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

  
{
loggedInUser[0]?.role === 'Seller' && (
  <>
   <li><Link to="/dashboard/addproduct">Add Product</Link></li>
    <li><Link to="/dashboard/myproducts">My Products</Link></li>
  </>
  
)

}

{
loggedInUser[0]?.role === 'Buyer' && (
  <>
   <li><Link to="/dashboard/myorders">Orders</Link></li>
  </>
  
)

}
{

loggedInUser[0]?.role === 'Admin' && (
  <>
   {/* <li><Link to="/dashboard/allusers">All User</Link></li> */}
   <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
   <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>

   
  </>
  
  
  )


}

 
    <Link to='/'> <PrimaryButton classes={'px-8 py-3 font-semibold rounded bottom-0 '}>Go to Home</PrimaryButton></Link>

      
    </ul>
  
  </div>
</div>
    </div>
  );
};

export default DashboardLayout;
