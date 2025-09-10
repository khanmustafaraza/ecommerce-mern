import React from "react";

import { FaGoogle, FaUserPlus } from "react-icons/fa"; // 👈 react icon
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Navbar />
      <section
        className="d-flex align-items-center justify-content-center py-5 "
        style={{ minHeight: "80vh" }}
      >
        <div
          className="card shadow p-4 text-center"
          style={{ maxWidth: "550px", width: "100%" }}
        >
          {/* Icon at top */}
          <div className="mb-3">
            <FaUserPlus size={50} color="#198754" />
          </div>

          <h3 className="fw-bold mb-4">Create Account</h3>

          <div className="row">
            {/* Full Name */}
            <div className="col-md-6 mb-3 text-start">
              <label htmlFor="name" className="form-label fw-semibold">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="col-md-6 mb-3 text-start">
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="row">
            {/* Password */}
            <div className="col-md-6 mb-3 text-start">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
              />
            </div>

            {/* Confirm Password */}
            <div className="col-md-6 mb-3 text-start">
              <label
                htmlFor="confirmPassword"
                className="form-label fw-semibold"
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Re-enter password"
              />
            </div>
          </div>

          {/* Register Button */}
          <button className="btn btn-success w-100 mb-3">Register</button>

          {/* OR Divider */}
          <div className="text-center text-muted mb-3">OR</div>

          {/* Social Sign Up */}
          <button className="btn btn-outline-danger w-100 mb-2 p-2">
            <FaGoogle /> Continue with Google
          </button>

          {/* Login Link */}
          <p className="text-center mt-4 mb-0">
            Already have an account?{" "}
            <NavLink to="/login" className="fw-semibold text-decoration-none">
              Login
            </NavLink>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
