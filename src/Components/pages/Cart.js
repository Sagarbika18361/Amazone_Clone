import React from "react";
import Layout from "../Layout";

const Cart = () => {
  return (
    <>
      <Layout>
        <div className="cartContainer">
          <div className="row  m-0  cartHeader">
            <div className="col-9 tbdr p-4  ">
              {/* guest user */}
              <div className=" emptyCartGuestUser  bg-white ">
                <div className="row m-0 h-100 p-5 ">
                  <div className="col-4  h-100  ">
                    <a href="/">
                      <img
                      alt="img..."
                        src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
                        className="img-fluid "
                      />
                    </a>
                  </div>
                  <div className="col-8  h-100 ">
                    <h4 className="m-0">Your Amazon Basket is empty</h4>
                    <a
                      href="/"
                      className="d-block mb-3 text-decoration-none "
                      style={{ fontSize: "14px" }}
                    >
                      Shop today's deals
                    </a>

                    <button className="btn btn-warning  btnGuest ">
                      Sign in to your account
                    </button>
                    <button className=" ms-3 btn  btn-light btn-sm  btnGuest ">
                      Sign up now
                    </button>
                  </div>
                </div>
              </div>
              <div className="row mt-3 ">
                <div className="">
                  <div
                    className="col-12 bg-white "
                    style={{ height: "77px" }}
                  ></div>
                </div>
                <p className="mt-4" style={{ fontSize: "12px" }}>
                  The price and availability of items at Amazon.in are subject
                  to change. The shopping cart is a temporary place to store a
                  list of your items and reflects each item's most recent price.
                  Do you have a promotional code? We'll ask you to enter your
                  claim code when it's time to pay.
                </p>
              </div>

              {/* sign in user */}
              <div className="d-block">
                <div className=" cartContainerCol9  p-3 bg-white ">
                  <h2 className="mb-0 ">Shopping Cart </h2>
                  <a href="/" className=" text-decoration-none ">
                    Deselect all items
                  </a>
                  <div className="row m-0 border-bottom border-top cartItem  ">
                    <div className="col-3 p-2  d-flex align-items-center ">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="qty1"
                          id="flexCheckChecked"
                          checked
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckChecked"
                        ></label>
                      </div>
                      <img
                      alt="img..."
                        className="img-fluid"
                        src="https://m.media-amazon.com/images/I/71umuN8XVeL._AC_AA180_.jpg"
                      />
                    </div>
                    <div className="col-7  p-1">
                      <h5 className="mb-0">
                        <a href="/" className="  text-decoration-none">
                          New Apple iPhone 12 Pro Max (128GB) - Silver
                        </a>
                      </h5>
                      <span className="d-inline-block text-success">
                        In Stock
                      </span>
                      <span className="d-inline-block text-Danger d-none">
                        only 2 left in stock.
                      </span>
                      <span className="d-block">
                        Pattern name: iPhone 12 Pro Max
                      </span>
                      <ul className="nav">
                        <li className="nav-item">
                          <select className=" rounded-1 d-block border cartQty bg-light ">
                            <option value="qty1" selected>
                              Qty1
                            </option>
                            <option value="qty2">Qty2</option>
                            <option value="qty3">Qty3</option>
                            <option value="qty4">Qty4</option>
                          </select>
                        </li>
                        <li className="nav-item border-end">
                          <a
                            className="nav-link btn-sm pt-0 ps-2 pe-2"
                            href="/"
                          >
                            Delete
                          </a>
                        </li>
                        <li className="nav-item border-end">
                          <a
                            className="nav-link btn-sm pt-0 ps-2 pe-2 "
                            href="/"
                          >
                            Save for later
                          </a>
                        </li>
                        <li className="nav-item ">
                          <a
                            className="nav-link btn-sm pt-0 ps-2 pe-2"
                            href="/"
                          >
                            See more link like this
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-2 p-1">
                      <span className="text-end fw-bolder d-block">
                        ₹1,19,900.00
                      </span>
                    </div>
                  </div>
                  <div className="cartTotal text-end d-none ">
                    <p className="d-inline-block "> Subtotal (1 items) </p>
                    <span className="d-inline-block fw-bolder">₹36,800.00</span>
                  </div>
                  <div className="row m-0 border-bottom border-top cartItem  ">
                    <div className="col-3  d-flex align-items-center ">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="qty1"
                          id="flexCheckChecked"
                          checked
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckChecked"
                        ></label>
                      </div>
                      <img
                        className="img-fluid"
                        alt="img..."
                        src="https://m.media-amazon.com/images/I/81ueQTqlrFL._AC_AA180_.jpg"
                      />
                    </div>
                    <div className="col-7  p-1">
                      <h5 className="mb-0">
                        <a href="/" className="  text-decoration-none">
                          SanDisk Ultra UHS I 1TB MicroSD Card 120MB/s R, for
                          Smartphones…
                        </a>
                      </h5>
                      <span className="d-inline-block text-success">
                        In Stock
                      </span>
                      <span className="d-inline-block text-Danger d-none">
                        only 2 left in stock.
                      </span>
                      <span className="d-block">Pattern name: Hero9</span>
                      <ul className="nav">
                        <li className="nav-item">
                          <select className=" rounded-1 d-block border cartQty bg-light ">
                            <option value="qty1" selected>
                              Qty1
                            </option>
                            <option value="qty2">Qty2</option>
                            <option value="qty3">Qty3</option>
                            <option value="qty4">Qty4</option>
                          </select>
                        </li>
                        <li className="nav-item border-end">
                          <a
                            className="nav-link btn-sm pt-0 ps-2 pe-2"
                            href="/"
                          >
                            Delete
                          </a>
                        </li>
                        <li className="nav-item border-end">
                          <a
                            className="nav-link btn-sm pt-0 ps-2 pe-2 "
                            href="/"
                          >
                            Save for later
                          </a>
                        </li>
                        <li className="nav-item ">
                          <a
                            className="nav-link btn-sm pt-0 ps-2 pe-2"
                            href="/"
                          >
                            See more link like this
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-2 p-1">
                      <span className="text-end fw-bolder d-block">
                        ₹13,019.00
                      </span>
                    </div>
                  </div>
                  <div className="cartTotal text-end">
                    <p className="d-inline-block "> Subtotal (2 items) </p>
                    <span className="d-inline-block fw-bolder">
                      ₹1,32,919.00
                    </span>
                  </div>
                </div>

                <div className="bg-white mt-4 cartTabpane ">
                  <h4 className="ps-4">Your Items</h4>
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a
                        className="nav-link border-0 text-dark"
                        data-bs-toggle="tab"
                        href="/home"
                      >
                        No items saved for later
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active border-0 border-bottom-0 text-dark "
                        data-bs-toggle="tab"
                        href="/menu1"
                      >
                        Buy it again
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content border-bottom border-top p-2 ">
                    <div className="tab-pane p-0 container fade " id="home">
                      .A.
                    </div>
                    <div className="tab-pane p-0 container active " id="menu1">
                      <div className="row m-0  cartItem  ">
                        <div className="col-3  d-flex align-items-center ">
                          <img
                          alt="img..."
                            className="img-fluid"
                            src="https://m.media-amazon.com/images/I/71umuN8XVeL._AC_AA180_.jpg"
                          />
                        </div>
                        <div className="col-7  p-1">
                          <h5 className="mb-0">
                            <a href="/" className="  text-decoration-none">
                              New Apple iPhone 12 Pro Max (128GB) - Silver
                            </a>
                          </h5>
                          <span className="d-inline-block text-success">
                            In Stock
                          </span>
                          <span className="d-inline-block text-Danger d-none">
                            only 2 left in stock.
                          </span>
                          <span className="d-block">
                            Pattern name: iPhone 12 Pro Max
                          </span>
                          <a href="/" className="btn btn-light btn-sm">
                            Add to cart
                          </a>
                        </div>
                        <div className="col-2 p-1">
                          <span className="text-start fw-bolder d-block text-danger ">
                            ₹1,19,900.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white cartTabpane">
                  <div className="tab-content border-bottom border-top">
                    <div className="tab-pane p-0 container fade " id="home">
                      .A.
                    </div>
                    <div className="tab-pane p-0 container active " id="menu1">
                      <div className="row m-0  cartItem  ">
                        <div className="col-3  d-flex align-items-center ">
                          <img
                          alt="img..."
                            className="img-fluid"
                            src="https://m.media-amazon.com/images/I/81ueQTqlrFL._AC_AA180_.jpg"
                          />
                        </div>
                        <div className="col-7  p-1">
                          <h5 className="mb-0">
                            <a href="/" className="  text-decoration-none">
                              SanDisk Ultra UHS I 1TB MicroSD Card 120MB/s R,
                              for Smartphones…
                            </a>
                          </h5>
                          <span className="d-inline-block text-success">
                            In Stock
                          </span>
                          <span className="d-inline-block text-Danger d-none">
                            only 2 left in stock.
                          </span>
                          <span className="d-block">Pattern name: Hero9</span>
                          <a href="/" className="btn btn-light btn-sm">
                            Add to cart
                          </a>
                        </div>
                        <div className="col-2 p-1">
                          <span className="text-start fw-bolder d-block text-danger ">
                            ₹13,019.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="bg-success h-100">
                                    <h5>Sifjj</h5>
                                </div> */}
              </div>
            </div>

            <div className="col-3 p-2">
              <div className="d-block bg-white mt-3">
                <img
                alt="img..."
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
                  className="img-fluid"
                />
              </div>
              <div className="amazonLoginUser bg-white mt-3 p-3 ">
                <div className="row ">
                  <div className="col-2 pe-0">
                    <a
                      href="/"
                      className="float-start d-inline-block sprtSht tickMark  "
                    >.</a>
                  </div>
                  <div className="col-10 ps-0 ">
                    <p
                      className="d-inline-block float-end"
                      style={{ fontSize: "12px" }}
                    >
                      Your order is eligible for FREE Delivery. Select this
                      option at checkout. Details
                    </p>
                  </div>
                  <span className="ps-2 pe-2">
                    <span className=" fw-lighter ">Subtotal(2 items):</span>
                    ₹1,32,919.00
                  </span>

                  <div class="form-check ms-3 mt-1 rounded-0">
                    <input
                      class="form-check-input rounded-0"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      checked
                    />
                    <label
                      class="form-check-label rounded-0"
                      for="flexCheckChecked"
                    >
                      This order contains a gift
                    </label>
                  </div>
                  <button className=" btn-warning proceedTobuyGuestlogged">
                    Proceed to Buy
                  </button>
                </div>
              </div>

              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Accordion Item #1
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the first item's accordion body.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid  bg-danger cartFooter"></div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
