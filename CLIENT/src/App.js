import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataBoba } from "./API/DummyAPI";

import LandingPage from "./pages/Landingpages";

import AddProduct from "./pages/addProduct/AddProduct";
import AddTopping from "./pages/addProduct/AddTopping";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import Income from "./components/Income";
import AdminRoute from "./utils/AdminRoute";
import { UserContext } from "./utils/CreateContext";
import Cart from "./pages/Cart";
import UserRoute from "./utils/UserRoute";

function App() {
  const [state] = useContext(UserContext);
  let isLogin = state.isLogin;
  let isAdmin = state.isAdmin;

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isAdmin ? <Income /> : isLogin ? <LandingPage /> : <LandingPage />
            }
          />
          <Route path="/" element={<AdminRoute />}>
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/AddTopping" element={<AddTopping />} />
          </Route>
          <Route path="/" element={<UserRoute />}>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Detail/:id" element={<Detail data={DataBoba} />} />
            <Route path="/Cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
