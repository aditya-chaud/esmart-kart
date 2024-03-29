import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./component/Layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Footer from "./component/Layout/Footer";
import About from "./component/About/About";
import UserRules from "./component/User Rules/UserRules";
import ContactUs from "./component/Contact/ContactUs";
import Products from "./component/Product/Products";
import ProductDetails from "./component/Product/ProductDetails";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import Profile from "./component/User/Profile";
// import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import Payment from "./component/Cart/Payment";

function App() {
  React.useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Navbar />
      {/* {isAuthenticated} */}

      <Routes>
        <Route
          path="/About"
          element={
            <>
              <About />
            </>
          }
        ></Route>
        <Route
          path="/User Rules"
          element={
            <>
              <UserRules />
            </>
          }
        ></Route>
        <Route
          path="/ContactUs"
          element={
            <>
              <ContactUs />
            </>
          }
        ></Route>
        <Route
          path="/Products"
          element={
            <>
              <Products />
            </>
          }
        ></Route>
        <Route
          path="/Products/:keyword"
          element={
            <>
              <Products />
            </>
          }
        ></Route>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/product/:id"
          element={
            <>
              <ProductDetails />
            </>
          }
        ></Route>

        <Route
          path="/Search"
          element={
            <>
              <Search />
            </>
          }
        ></Route>
        <Route
          path="/Products/product:id"
          element={
            <>
              <ProductDetails />
            </>
          }
        ></Route>
        <Route
          path="/account"
          element={
            <>
              <Profile />
            </>
          }
        ></Route>
        <Route
          path="/me/update"
          element={
            <>
              <UpdateProfile />
            </>
          }
        ></Route>
        <Route
          path="/password/update"
          element={
            <>
              <UpdatePassword />
            </>
          }
        ></Route>
        <Route
          path="/password/forgot"
          element={
            <>
              <ForgotPassword />
            </>
          }
        ></Route>

        <Route
          path="/Login"
          element={
            <>
              <LoginSignUp />
            </>
          }
        ></Route>
        <Route
          path="/Cart"
          element={
            <>
              <Cart />
            </>
          }
        ></Route>
        <Route
          path="/Shipping"
          element={
            <>
              <Shipping />
            </>
          }
        ></Route>
        <Route
          path="/order/confirm"
          element={
            <>
              <ConfirmOrder />
            </>
          }
        ></Route>
        <Route
          path="/process/payment"
          element={
            <>
              <Payment />
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
