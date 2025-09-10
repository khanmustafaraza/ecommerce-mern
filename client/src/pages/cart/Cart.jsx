import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Cart = () => {
  // dummy cart data
  const cartItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2999,
      qty: 1,
      image: "https://via.placeholder.com/120x100.png?text=Headphones",
    },
    {
      id: 2,
      name: "Smartwatch",
      price: 4999,
      qty: 2,
      image: "https://via.placeholder.com/120x100.png?text=Smartwatch",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="py-5s">
        <div className="container">
          <h2 className="fw-bold mb-4">Shopping Cart</h2>
          <div className="row">
            {/* Cart Items */}
            <div className="col-lg-8">
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="d-flex align-items-center border-bottom pb-3 mb-3"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid"
                        style={{
                          width: "100px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="ms-3 flex-grow-1">
                        <h5 className="mb-1">{item.name}</h5>
                        <p className="text-muted mb-2">₹{item.price}</p>
                        <div className="d-flex align-items-center gap-2">
                          <label className="fw-semibold">Qty:</label>
                          <select
                            className="form-select form-select-sm"
                            style={{ width: "70px" }}
                            value={item.qty}
                            readOnly
                          >
                            {[1, 2, 3, 4, 5].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                          <button className="btn btn-outline-danger btn-sm">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="btn btn-outline-secondary">
                Continue Shopping
              </button>
            </div>

            {/* Order Summary */}
            <div className="col-lg-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="fw-bold mb-3">Order Summary</h5>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal</span>
                    <span>₹12,997</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Tax (10%)</span>
                    <span>₹1,299</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mb-3 fw-bold">
                    <span>Total</span>
                    <span>₹14,296</span>
                  </div>
                  <button className="btn btn-success w-100">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
