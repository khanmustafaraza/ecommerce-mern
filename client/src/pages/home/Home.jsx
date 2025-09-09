import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../hero/Hero";
import Services from "../../components/services/Services";
import Featured from "../../components/featured/Featured";
import Latest from "../../components/latest/Latest";
import Testimonial from "../../components/testimonial/Testimonial";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Featured />
      <Latest />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
