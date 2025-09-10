import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { FaTh, FaBars } from "react-icons/fa";
import { useProduct } from "../../../context/ProductContext";
// import { products } from "../../../data/productArray";

const AllProducts = () => {
  const [allCategories,setAllCategories] = useState([]);
  const [allBrands,setAllBrands] = useState([]);
  const {state,handleCategoryChange,handleViewChange,handlePriceFilter} = useProduct();
  console.log(state.isGrid)

  const getAllCategories =() =>{
    const filterCat = state.products
    const filterCategory = filterCat.filter((curEle)=>{
      return curEle.category
    })

    setAllCategories(filterCategory)
  }
  const getAllBrands =() =>{}

  useEffect(()=>{
    getAllCategories()
    getAllBrands()
  },[])

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
                  <select className="form-select" onChange={handleCategoryChange}>
                    <option >All Categories</option>
                    {
                      allCategories.map((curEle)=>{
                        return   <option value={curEle.category}>{curEle.category}</option>
                      })
                    }
                   
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Price Range</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="1000 - 5000"
                    value = {state.filterPrice}
                    onChange={handlePriceFilter}
                  />
                </div>
                {/* <div className="mb-3">
                  <label className="form-label fw-bold">Brand</label>
                  <select className="form-select">
                     <option>All Brands</option>
                    {
                      state.products.map((curEle)=>{
                        
                      }).filter((curEle)=>{
                        return  <option>{curEle.brand}</option>
                      })
                    }
                   
                   
                  </select>
                </div> */}
              </div>
            </div>

            {/* Main Products Area */}
            <div className="col-lg-10 col-md-8">
              {/* Top Bar: View Toggle + Sort */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="btn-group">
                  <button className="btn btn-outline-secondary" onClick={()=>handleViewChange("grid")}>
                    <FaTh />
                  </button>
                  <button className="btn btn-outline-secondary" onClick={()=>handleViewChange("list")}>
                    <FaBars /> 
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
              <div className={state.isGrid?"row g-4":"g-4"}>
                {state?.products?.map((product) => (
                  <div key={product.id} className={state.isGrid?"col-md-4 col-sm-6":"col-12"}>
                    <div className="card h-100 shadow-sm">
                      <img
                        src={product.image}
                        alt={product.name}
                      style={{width:"100%",height:"150px"}}
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
