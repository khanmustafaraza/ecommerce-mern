import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { FaTh, FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const AllProducts = () => {
  // Sample static products for design purposes
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2999,
      category: "Electronics",
      image: "https://via.placeholder.com/300x200.png?text=Headphones",
    },
    {
      id: 2,
      name: "Smartwatch",
      price: 4999,
      category: "Wearables",
      image: "https://via.placeholder.com/300x200.png?text=Smartwatch",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 2599,
      category: "Footwear",
      image: "https://via.placeholder.com/300x200.png?text=Shoes",
    },
    {
      id: 4,
      name: "Backpack",
      price: 1599,
      category: "Accessories",
      image: "https://via.placeholder.com/300x200.png?text=Backpack",
    },
    {
      id: 5,
      name: "Gaming Mouse",
      price: 1299,
      category: "Electronics",
      image: "https://via.placeholder.com/300x200.png?text=Mouse",
    },
    {
      id: 6,
      name: "Laptop Stand",
      price: 899,
      category: "Accessories",
      image: "https://via.placeholder.com/300x200.png?text=Laptop+Stand",
    },
    {
      id: 7,
      name: "Bluetooth Speaker",
      price: 1999,
      category: "Electronics",
      image: "https://via.placeholder.com/300x200.png?text=Speaker",
    },
    {
      id: 8,
      name: "Office Chair",
      price: 7499,
      category: "Furniture",
      image: "https://via.placeholder.com/300x200.png?text=Chair",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="p-1">
        <div className="container-fluid">
          <div className="row">
            {/* Left Sidebar Filters */}
            <div className="col-lg-2 col-md-4 mb-4">
              <div className="bg-light p-3 rounded shadow-sm">
                <h5 className="fw-bold mb-3">Filters</h5>
                <div className="mb-3">
                  <label className="form-label fw-bold">Category</label>
                  <select className="form-select">
                    <option>All Categories</option>
                    <option>Electronics</option>
                    <option>Wearables</option>
                    <option>Footwear</option>
                    <option>Accessories</option>
                    <option>Furniture</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Price Range</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="1000 - 5000"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Brand</label>
                  <select className="form-select">
                    <option>All Brands</option>
                    <option>Brand A</option>
                    <option>Brand B</option>
                    <option>Brand C</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Main Products Area */}
            <div className="col-lg-10 col-md-8">
              {/* Top Bar: View Toggle + Sort */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="btn-group">
                  <button className="btn btn-outline-secondary">
                    <FaTh /> Grid
                  </button>
                  <button className="btn btn-outline-secondary">
                    <FaBars /> List
                  </button>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <label className="mb-0 fw-bold">Sort by:</label>
                  <select className="form-select form-select-sm">
                    <option>Default</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest Arrivals</option>
                  </select>
                </div>
              </div>

              {/* Products Grid */}
              <div className="row g-4">
                {products.map((product) => (
                  <div key={product.id} className="col-md-4 col-sm-6">
                    <div className="card h-100 shadow-sm">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="card-img-top"
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="text-muted mb-1">{product.category}</p>
                        <p className="fw-bold">₹{product.price}</p>
                        <div className="d-flex justify-content-center gap-2">
                          <button className="btn btn-primary btn-sm">
                            Add to Cart
                          </button>
                          <button className="btn btn-outline-secondary btn-sm">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <nav aria-label="Page navigation" className="mt-4">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#!">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#!">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#!">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#!">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#!">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllProducts;
