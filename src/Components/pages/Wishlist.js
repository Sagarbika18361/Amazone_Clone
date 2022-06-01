import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Layout from "../Layout";
import grth from "../../assets/thgrid.svg";

const Wishlist = () => {
  return (
    <>
      <Layout>
        <div className="a_wishlist_main tbdr p-3 pt-2 bg-white">
          <div class="card">
            <div class="card-header">Featured</div>
            <div class="card-body" style={{ minHeight: "400px" }}>
              <div className="row m-0">
                <div className="col-2 tbdr p-0 ">A</div>
                <div className="col-10 tbdr p-0 ">
                  <div className="wishl_t1 border-bottom"></div>
                  <div className="wishl_t2 border-bottom p-3 ">
                    <div className=" float-start ">
                      <button className="grth btn btn-sm float-start ms-2 ">
                        <a href="/" className="d-block w-100 h-100 imgGrth">
                          <img
                            src={grth}
                            className="img-fluid"
                            alt="...imgBars"
                          />
                        </a>
                      </button>
                      <button className="right-end btn btn-sm ms-2  float-start">
                        <FontAwesomeIcon icon={faBars} />
                      </button>
                      <button className="btn btn-sm btn-link text-decoration-none ">
                        +Add Idea to List
                      </button>
                    </div>
                    <ul className=" nav float-end">
                      <li>
                        <form>
                          <input
                            type="text"
                            className="wishlist_input form-control form-control-sm "
                            placeholder="Search this list"
                          />
                        </form>
                      </li>
                      <li>
                        <select
                          className="form-select wishlist_slct2 form-select-sm border-0"
                          aria-label="Default select example"
                        >
                          <option selected> Filter & Sort</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="row m-0 wislPro wishProBorder">
                      <div className="col-3 p-0 d-flex align-items-center ">
                          <a href="/" className="btn a_wishDragImg " style={{height:"42px",width:"33px"}}>   </a>
                          <a href="/" className="btn w-75 h-100 " >
                            <img className="p-0 img-fluid" src="https://m.media-amazon.com/images/I/51hpsGSvHRL._SS135_.jpg"  alt="img..." />
                          </a>
                      </div>
                      <div className="col-4">
                      <a href="/" className="text-decoration-none">Lenovo IdeaPad Gaming 3 Intel Core i7 10th Gen 15.6" FHD IPS 250Nits Gaming Laptop (8GB/512GB SSD/Win10/NVIDIA GTX 1650 4GB GDDR6 Graphics/120Hz/Onyx Black/2.2Kg), 81Y4019EIN</a>
                      <div className="wish_rate ">
                          <div className="rate sprtSht2 d-inline-block me-2"></div>
                          <div className="sprtSht2_chev d-inline-block"></div>
                          <div className=" wishProgressBar position-absolute border bg-danger ">
                              <div className="arrow-up2 border-5 position-absolute"></div>
                          </div>
                      </div>
                      </div>
                      <div className="col-5">C</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Wishlist;
