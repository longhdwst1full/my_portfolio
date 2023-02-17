import React, { createContext, useContext, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { intance } from "./api";
import App from "./App";
import { AppProvider } from "./content";
import "./index.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Upload from "./components/Upload";
import NotFound from "./components/NotFound";
// const Data_Json = createContext(null);

// function RootComponent() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     intance.get("/profile").then((response) => {
//       setData(response);
//     });
//   }, []);

//   return (
//     <Data_Json.Provider value={ data }>
//       <AppProvider>
//         <App />
//       </AppProvider>
//     </Data_Json.Provider>
//   );
// }

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/up_anh" element={<Upload />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <App /> */}
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
