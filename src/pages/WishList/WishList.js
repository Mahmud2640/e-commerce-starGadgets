import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Meta from "../../components/seo/Meta";
import "./WishList.css";
import cross from "../../images/cross.svg";
import watch from "../../images/watch.jpg";

const WishList = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src={watch} alt="watch" className="img-fluid w-100" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honoir T1 7.0 1 Gb Ram & inch with wifi Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src={watch} alt="watch" className="img-fluid w-100" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honoir T1 7.0 1 Gb Ram & inch with wifi Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src={watch} alt="watch" className="img-fluid w-100" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honoir T1 7.0 1 Gb Ram & inch with wifi Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src={watch} alt="watch" className="img-fluid w-100" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honoir T1 7.0 1 Gb Ram & inch with wifi Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
