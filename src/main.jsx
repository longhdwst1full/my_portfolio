import React, { createContext, useContext, useState, useEffect } from "react";
import {createRoot} from "react-dom/client";
import { intance } from "./api";
import App from "./App";
import { AppProvider } from "./content";
import "./index.css";

const Data_Json = createContext(null);

function RootComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    intance.get("/profile").then((response) => {
      setData(response);
    });
  }, []);

  return (
    <Data_Json.Provider value={ data }>
      <AppProvider>
        <App />
      </AppProvider>
    </Data_Json.Provider>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);
