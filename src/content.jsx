import React, { createContext, useEffect, useState } from "react";
import { intance } from "./api";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(()=>{

      intance.get("/profile").then((data) => setData(data));
  },[])

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
