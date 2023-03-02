import React from "react";
import Meta from "../../components/seo/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import "./SingleProduct.css";

const SingleProduct = () => {
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
    </>
  );
};

export default SingleProduct;
