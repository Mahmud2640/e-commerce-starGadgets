import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Container from "../../components/Container/Container";
import CoustomeInput from "../../components/CoustomeInput/CoustomeInput";
import Meta from "../../components/seo/Meta";
import "./Auth.css";

const Login = () => {
  return (
    <>
      <Meta title={"Log In"} />
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CoustomeInput type="email" name="email" placeholder="Email" />
                <CoustomeInput
                  className="mt-1"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div>
                  <Link to="/forget-password">Forgot Password?</Link>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Login</button>
                    <Link to="/signup" className="button signup">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
