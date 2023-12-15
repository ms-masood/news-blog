import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage";
import Signup from "./components/signup";
import Login from "./components/login";
import Page404 from "./components/page404";
import Page401 from "./components/page401";
// import DashboardHome from "./components/dashboard/dashboardhome";
import SearchPage from "./components/searchpage";
import PersonalizedFeed from "./components/personalizedfeed";
import ProtectedRoutes from "./components/protectedroutes";
import Navbar from "./components/navbars";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<SearchPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="personalizedfeed" element={<PersonalizedFeed />} />
        </Route>
        <Route path="/unauthorized" element={<Page401 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
