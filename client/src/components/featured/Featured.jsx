import React from "react";
import {products} from  "../../data/productArray"

// Example product dataset (you can move this to a separate file if needed)

const Featured = () => {
  const featured = products.filter((product) => product.isFeatured);
  console.log(featured)

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Featured Products</h2>
        <div className="row g-4">
          {featured.map((product) => (
            <div key={product.id} className="col-md-3 col-sm-6">
              <div className="card  shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{width:"100%",height:"100px"}}
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

export default Featured;
