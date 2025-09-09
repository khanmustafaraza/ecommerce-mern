import React from "react";
import { FaShippingFast, FaHeadset, FaUndo, FaLock } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaShippingFast size={40} className="text-primary mb-3" />,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders above ₹999.",
    },
    {
      id: 2,
      icon: <FaHeadset size={40} className="text-success mb-3" />,
      title: "24/7 Support",
      description: "Our support team is available anytime, anywhere.",
    },
    {
      id: 3,
      icon: <FaUndo size={40} className="text-danger mb-3" />,
      title: "Easy Returns",
      description: "Hassle-free returns within 7 days of purchase.",
    },
    {
      id: 4,
      icon: <FaLock size={40} className="text-warning mb-3" />,
      title: "Secure Payment",
      description: "100% secure payments with trusted gateways.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Our Services</h2>
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-md-3 col-sm-6 text-center">
              <div className="card border-0 shadow-sm h-100 p-3">
                {service.icon}
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
