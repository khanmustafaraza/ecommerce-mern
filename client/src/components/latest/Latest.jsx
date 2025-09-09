import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Example dataset (can be imported from a separate file)
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    category: "Electronics",
    rating: 4.5,
    isFeatured: true,
    isLatest: true,
    image: "https://via.placeholder.com/300x200.png?text=Headphones",
  },
  {
    id: 2,
    name: "Smartwatch",
    price: 4999,
    category: "Wearables",
    rating: 4.2,
    isFeatured: true,
    isLatest: true,
    image: "https://via.placeholder.com/300x200.png?text=Smartwatch",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 2599,
    category: "Footwear",
    rating: 4.7,
    isFeatured: true,
    isLatest: true,
    image: "https://via.placeholder.com/300x200.png?text=Shoes",
  },
  {
    id: 4,
    name: "Backpack",
    price: 1599,
    category: "Accessories",
    rating: 4.3,
    isFeatured: true,
    isLatest: true,
    image: "https://via.placeholder.com/300x200.png?text=Backpack",
  },
  // Add more products as needed
];

const Latest = () => {
  const latest = products.filter((product) => product.isLatest);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Latest Products</h2>
        <div className="row g-4">
          {latest.map((product) => (
            <div key={product.id} className="col-md-3 col-sm-6">
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
                  <button className="btn btn-primary btn-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Latest;
