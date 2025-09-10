import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";

const ProductDetail = () => {
  // dummy product (static for UI only)
  const product = {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    brand: "SoundMax",
    price: 2999,
    description:
      "Experience crystal clear sound with Wireless Headphones. Equipped with noise cancellation, long battery life, and comfortable ear cushions.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    thumbnails: [
      "https://media.istockphoto.com/id/486993228/photo/smart-watch.jpg?s=612x612&w=0&k=20&c=dVKA7YSTjnhzYAoYcxDwGEuV18QV-K-YuZCABnjt8pE=",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4lh5ECAyL97mFTnh4-VnZ3G06-bxWLGAPbcnOF6ZgQaha3YT6y5iKAI&s",
      // "https://via.placeholder.com/100x100.png?text=View+3",
    ],
  };

  return (
    <>
      <Navbar />
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Left side: Product Images */}
            <div className="col-md-5">
              <div className="card shadow-sm mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                />
              </div>
              <div className="d-flex gap-2 justify-content-center">
                {product.thumbnails.map((thumb, i) => (
                  <img
                    key={i}
                    src={thumb}
                    alt={`thumb-${i}`}
                    className="img-thumbnail"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right side: Product Info */}
            <div className="col-md-7">
              <h2 className="fw-bold mb-2">{product.name}</h2>
              <p className="text-muted mb-1">
                Category:{" "}
                <span className="fw-semibold">{product.category}</span>
              </p>
              <p className="text-muted mb-3">
                Brand: <span className="fw-semibold">{product.brand}</span>
              </p>
              <h4 className="text-danger mb-3">₹{product.price}</h4>

              <p className="mb-4">{product.description}</p>

              <div className="d-flex gap-3">
                <button className="btn btn-warning btn-lg text-white">
                  <i className="bi bi-cart-plus"></i> Add to Cart
                </button>
                <button className="btn btn-success btn-lg">
                  <i className="bi bi-lightning-fill"></i> Buy Now
                </button>
              </div>

              {/* Delivery info mock */}
              <div className="mt-4">
                <p className="mb-1">
                  <i className="bi bi-truck"></i> Free Delivery within 3-5 days
                </p>
                <p className="mb-1">
                  <i className="bi bi-shield-check"></i> 1 Year Warranty
                </p>
                <p>
                  <i className="bi bi-arrow-repeat"></i> 7 Days Return Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetail;
