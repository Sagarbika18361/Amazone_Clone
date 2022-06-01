import React from "react";
import Layout from "../Layout";

const order = () => {
  return (
    <>
      <Layout>
        <div className="a_odr_main tbdr bg-white">
          <div className="container tbdr" style={{ height: "400px" }}>
            <nav className="a_ord_breadCrumb mt-2" aria-label="breadcrumb">
              <ol className="breadcrumb ">
                <li className="breadcrumb-item ">
                  <a href="/" className="text-decoration-none ">
                    Your Account
                  </a>
                </li>

                <li
                  className="breadcrumb-item active text-warning"
                  aria-current="page"
                >
                  Your Orders
                </li>
              </ol>
            </nav>
            <div className="row m-0">
              <div className="col p-0">
                <h4>Your Orders</h4>
              </div>
              <div className="col p-0">
                <form>
                  <div className="row g-3">
                    <div className="col-sm-7  ">
                      <input
                        type="text"
                        className="form-control form-control-sm border "
                        placeholder="Search all orders"
                      />
                    </div>
                    <div className="col-sm tbdr  ">
                      <input
                        type="submit"
                        className="btn btn-dark btn-sm w-100 "
                        placeholder="State"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  className="nav-link active border-0 border-bottom"
                  data-bs-toggle="tab"
                  href="#orders"
                >
                  Orders
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link border-0 border-bottom"
                  data-bs-toggle="tab"
                  href="#buyagain"
                >
                  Buy Again
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link border-0 border-bottom"
                  data-bs-toggle="tab"
                  href="#cancelledorder"
                >
                  Cancelled Order
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane container active" id="orders">
                <div className="card">
                  <div className="card-header">
                    <div className="row m-0">
                       <div className="col-1 p-0">A</div>
                       <div className="col-1 p-0 ">B</div>
                       <div className="col-1 p-0">C</div>
                       <div className="col-5 p-0">D</div>
                       <div className="col-4 p-0">E</div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="/" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-pane container fade" id="buyagain">
                buyagain
              </div>
              <div className="tab-pane container fade" id="cancelledorder">
                cancelledorder
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default order;
