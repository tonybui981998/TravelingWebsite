import React, { createContext, useEffect, useState } from "react";
import { allImage } from "../image/Destination-image";
import { getSaveDestination } from "../service/Service";
import { getDisplayDestination } from "../service/Service";

const ShopContext = createContext();

const DbContextValie = (props) => {
  const [storeLocation, setStoreLocation] = useState();

  const Bbvalue = {
    storeLocation,
    setStoreLocation,
  };

  return (
    <ShopContext.Provider value={Bbvalue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export { DbContextValie, ShopContext };
