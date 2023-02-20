import React, { createContext, useEffect, useState } from "react";
import { intance } from "./api";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch("https://63ecac6331ef61473b26c1ad.mockapi.io/project")
    // fetch("https://k35qgv.sse.codesandbox.io/profile")
    // .then((response) => response.json())
    intance
      .get("/navDetail")
      .then((data) => setData(data))
      // .catch((err) => console.log(err));
  },[]);

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
