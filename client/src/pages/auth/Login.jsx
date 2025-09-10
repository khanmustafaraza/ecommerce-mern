import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FaGoogle, FaLock } from "react-icons/fa"; // 👈 import react icon
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar />
      <section
        className="d-flex align-items-center justify-content-center py-5 "
        style={{ minHeight: "80vh" }}
      >
        {/* Icon at top */}

        <div
          className="card shadow p-4"
          style={{ maxWidth: "500px", width: "100%" }}
        >
          <div className="mb-3 d-flex justify-content-center align-items-center">
            <FaLock size={50} color="#0d6efd" />
          </div>
          <h3 className="text-center fw-bold mb-4">Login</h3>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember me + Forgot Password */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember"
              />
              <label className="form-check-label" htmlFor="remember">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-decoration-none">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button className="btn btn-primary w-100 mb-3">Login</button>

          {/* OR Divider */}
          <div className="text-center text-muted mb-3">OR</div>

          {/* Social Login */}
          <button className="btn btn-outline-danger w-100 mb-2">
            <FaGoogle /> Continue with Google
          </button>

          {/* Signup Link */}
          <p className="text-center mt-4 mb-0">
            Don't have an account?{" "}
            <NavLink
              to="/register"
              className="fw-semibold text-decoration-none"
            >
              Sign Up
            </NavLink>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
