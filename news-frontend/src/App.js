import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./utlis/protectedroutes";
import Navbar from "./components/ui/navbar";
import {
  HomePage,
  Login,
  Signup,
  Page401,
  Page404,
  PersonalizedFeed,
  SearchPage,
} from "./components/pages/pages.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
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
      </main>
    </div>
  );
}

export default App;
