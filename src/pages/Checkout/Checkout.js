import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/seo/Meta";
import "./Checkout.css";

const Checkout = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
    </>
  );
};

export default Checkout;
