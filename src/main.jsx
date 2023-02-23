import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AppProvider } from "./content";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Upload from "./components/Upload";
import NotFound from "./components/NotFound";
import Admin from "./admin";
import Dashboard from "./admin/Dashboard";
import ProjectAdmin from "./admin/Project/ProjectAdmin";
import User from "./admin/user/User";
import Edit from "./admin/user/Edit";
import ListCategories from "./admin/Categories/ListCategories";


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/up_anh" element={<Upload />} /> */}

          {/* <Route path="/admin/" element={<Admin />}>
            <Route path=":id/dashboard" element={<ProjectAdmin />} />
            <Route path="dashboard" element={<ProjectAdmin />} />
          
            <Route path="user/:id/useredit" element={<Edit />} />
            <Route path="user" element={<User />} />
            <Route path="categories" element={<ListCategories />} />
            <Route path="categories/add" element={<ListCategories />} />
            <Route path="categories/:id" element={<ListCategories />} />
          </Route> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <App /> */}
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
