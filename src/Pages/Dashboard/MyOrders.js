// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import Spinner from "../../Components/Spinner/Spinner";
import { AuthContext } from "../../contexts/AuthProvider";

const MyOrders = () => {
    const {user,loading}=useContext(AuthContext);


    const { data: bookings = [] ,isLoading} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://app-build-server.vercel.app/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    console.log(bookings);
if(loading || isLoading){
  return <Spinner></Spinner>
}


  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Order Name</th>
              <th>Price</th>
              <th>Location</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
          {
            bookings&&
            bookings?.map(booking=>
              <tr key={booking._id}>
              <th>1</th>
              <td>{booking.name}</td>
              <td>{booking.price}</td>
              <td>{booking.location}</td>
              <td>{booking.phone}</td>
            </tr>
            
            )
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
