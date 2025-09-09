import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Verified Buyer",
    rating: 5,
    feedback:
      "Amazing products and super fast delivery! Highly recommend this store.",
    avatar:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Happy Customer",
    rating: 4,
    feedback:
      "Good quality products at reasonable prices. Customer support is excellent.",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Regular Shopper",
    rating: 5,
    feedback:
      "I love their variety and easy return policy. Shopping has never been easier!",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefdAYZ6uy2rn4ODl9zSL1KwCAhiEPo9Xm-g&s",
  },
  {
    id: 4,
    name: "Mohammed Ali",
    role: "Satisfied Customer",
    rating: 4,
    feedback:
      "Fast shipping and products arrived in perfect condition. Very happy!",
    avatar:
      "https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">What Our Customers Say</h2>
        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm p-3 text-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="rounded-circle mb-3"
                  width="80"
                  height="80"
                />
                <h5 className="fw-bold">{testimonial.name}</h5>
                <p className="text-muted mb-1">{testimonial.role}</p>
                <div className="mb-2">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <FaStar key={index} className="text-warning" />
                  ))}
                </div>
                <p className="text-muted">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
