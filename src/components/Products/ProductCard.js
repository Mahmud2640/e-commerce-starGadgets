import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import "./ProductCard.css";
import wish from "../../images/wish.svg";
import watch from "../../images/watch.jpg";
import watch1 from "../../images/watch-1.avif";
import prodcompare from "../../images/prodcompare.svg";
import view from "../../images/view.svg";
import cart from "../../images/add-cart.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="">
              <img src={wish} alt="wish" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="productImage" />
            <img src={watch1} className="img-fluid" alt="productImage" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="products-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              //   value={3}
              //   edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link to="">
                <img src={prodcompare} alt="compare" />
              </Link>
              <Link to="">
                <img src={view} alt="view" />
              </Link>
              <Link to="">
                <img src={cart} alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to="" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link to="">
              <img src={wish} alt="wish" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="productImage" />
            <img src={watch1} className="img-fluid" alt="productImage" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="products-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              //   value={3}
              //   edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link to="">
                <img src={prodcompare} alt="compare" />
              </Link>
              <Link to="">
                <img src={view} alt="view" />
              </Link>
              <Link to="">
                <img src={cart} alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
