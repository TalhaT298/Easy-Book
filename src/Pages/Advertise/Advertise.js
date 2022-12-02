import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Confirmation from "../../Components/Shared/Confirmation";
import Spinner from "../../Components/Spinner/Spinner";

import AdvertiseCard from "./AdvertiseCard";

const Advertise = () => {
  const [product, setProduct] = useState(null);

  const {
    data: advertised = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://app-build-server.vercel.app/advertised");
      const data = await res.json();
      return data;
    },
  });
  console.log(advertised)

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>


      {advertised.length > 0 ? (
        <div>
          <h2 className="my-10 font-bold text-4xl">Advertised Products</h2>
          <div className="">
            {advertised.map((product) => (
              <AdvertiseCard
                key={product._id}
                product={product}
                setProduct={setProduct}>
              </AdvertiseCard>
            ))}
             {product && (
           <Confirmation
            product={product}
            setProduct={setProduct}
           refetch={refetch}
        ></Confirmation>
            )} 
          </div> 
        </div>
      ) : null} 
    </div>
  );
};

export default Advertise;
