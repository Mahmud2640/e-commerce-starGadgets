import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Shared/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import OurStore from "../pages/Store/OurStore";
import Blog from "../pages/Blog/Blog";
import CompareProduct from "../pages/CompareProduct/CompareProduct";
import WishList from "../pages/WishList/WishList";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import ResetPassword from "../pages/Auth/ResetPassword";
import SingleBlog from "../pages/Blog/SingleBlog";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import RefundPolicy from "../pages/RefundPolicy/RefundPolicy";
import ShipingPolicy from "../pages/ShipingPolicy/ShipingPolicy";
import TermsAndCondition from "../pages/TermsAndCondition/TermsAndCondition";
import SingleProduct from "../pages/Store/SingleProduct";

const Routess = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<SingleBlog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="store" element={<OurStore />} />
          <Route path="compare-product" element={<CompareProduct />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="cart" element={<Cart />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="shiping-policy" element={<ShipingPolicy />} />
          <Route path="terms-and-condition" element={<TermsAndCondition />} />
          <Route path="product/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routess;
