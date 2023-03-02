import React from "react";
import "./css/Footer.css";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newslatter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="">
                <address className="text-white fs-6">
                  Home : 277 Nayer Village, Cox Bazar <br /> Dhaka, Bangladesdh
                  <br /> Post code : 2165
                </address>
                <a
                  href="tel:+880 1792492640"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +8801792492640
                </a>
                <a
                  href="mailto:info@statgadgetsbd.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  info@stargadgetsbd.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="/">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="/">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="/">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="/">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/refund-policy">
                  Refund Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/shiping-policy">
                  Shipping Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/terms-and-condition">
                  Terms & Conditions
                </Link>
                <Link className="text-white py-2 mb-1" to="/blog">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/about">
                  About Us
                </Link>
                <Link className="text-white py-2 mb-1" to="/about">
                  Faq
                </Link>
                <Link className="text-white py-2 mb-1" to="/about">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/about">
                  Laptops
                </Link>
                <Link className="text-white py-2 mb-1" to="/about">
                  Headphones
                </Link>
                <Link className="text-white py-2 mb-1" to="/about">
                  Tablets
                </Link>
                <Link className="text-white py-2 mb-1" to="/about">
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by StarGadgetsBD
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
