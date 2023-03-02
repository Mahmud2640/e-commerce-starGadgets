import React from "react";
import Meta from "../../components/seo/Meta";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const ShipingPolicy = () => {
  return (
    <>
      <Meta title={"Shiping Policy"} />
      <BreadCrumb title="Shiping Policy" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShipingPolicy;
