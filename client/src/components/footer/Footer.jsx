import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">
          {/* About */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">About Us</h5>
            <p>
              We are your go-to e-commerce store for electronics, fashion, and
              lifestyle products. Fast delivery & best prices guaranteed!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#shop" className="text-light text-decoration-none">
                  Shop
                </a>
              </li>
              <li>
                <a href="#services" className="text-light text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Customer Service</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#faq" className="text-light text-decoration-none">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#returns" className="text-light text-decoration-none">
                  Returns
                </a>
              </li>
              <li>
                <a href="#shipping" className="text-light text-decoration-none">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#support" className="text-light text-decoration-none">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Newsletter</h5>
            <p>Subscribe to get latest updates and offers:</p>
            <form className="d-flex mb-3">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter email"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
            <div className="d-flex gap-3">
              <a href="#facebook" className="text-light">
                <FaFacebookF />
              </a>
              <a href="#twitter" className="text-light">
                <FaTwitter />
              </a>
              <a href="#instagram" className="text-light">
                <FaInstagram />
              </a>
              <a href="#linkedin" className="text-light">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <hr className="bg-light" />
        <div className="text-center pb-3">
          &copy; {new Date().getFullYear()} Your E-Commerce Store. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
