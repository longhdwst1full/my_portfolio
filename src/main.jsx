
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


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/up_anh" element={<Upload />} />

          <Route path="/admin/" element={<Admin />}>
            <Route path=":id/dashboard" element={<ProjectAdmin />} />
            <Route path="dashboard" element={<ProjectAdmin />} />
          
            <Route path="user" element={<User />} />
            <Route path="useredit/:id" element={<User />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <App /> */}
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
