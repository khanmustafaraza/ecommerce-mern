import React from "react";

const Hero = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text Section */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold">
              Shop the Latest <span className="text-primary">Trends</span>
            </h1>
            <p className="lead text-muted my-3">
              Discover our exclusive collection of fashion, electronics, and
              more. Enjoy fast delivery and the best deals online!
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="#shop" className="btn btn-primary btn-lg">
                Shop Now
              </a>
              <a href="#deals" className="btn btn-outline-secondary btn-lg">
                View Deals
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-md-6 mt-4 mt-md-0 text-center">
            <img
              src="hero.jpg"
              alt="Ecommerce Hero"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
