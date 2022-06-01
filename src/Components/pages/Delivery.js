import React from 'react'

const Delivery = () => {
    return (
        <>
            <div className="container p-0  delivery">
                <div className=" headerProgress">
                    <div className="row m-0">
                        <div className="col-6 mt-4 p-0">
                            <a href="/">
                                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/payselect/progressbar-payments._CB485947677_.gif" alt="img..." />
                            </a>
                        </div>
                    </div>
                </div>
                <div className=" mainProgress">
                    <div className="row m-0">
                        <div className="col-6">
                            <div class="mb-3">
                                <label for="fullname" class="form-label">Full name</label>
                                <input type="text" class="form-control form-control-sm" id="fullname" />
                            </div>
                            <div class="mb-3">
                                <label for="mobno" class="form-label phoneNumber ">Mobile number</label>
                                <input type="number" class="form-control form-control-sm" id="mobno" required />
                            </div>
                            <div class="mb-3">
                                <label for="pincode" class="form-label">Pincode</label>
                                <input type="text" class="form-control form-control-sm" id="pincode" placeholder="6 digits (0-9)PIN code " />
                            </div>
                            <div class="mb-3">
                                <label for="flathouse" class="form-label">Flat House no. Building,Company, Adjustment</label>
                                <input type="text" class="form-control form-control-sm" id="flathouse" />
                            </div>
                            <div class="mb-3">
                                <label for="areastreet" class="form-label">Area,Street,Sector,Village</label>
                                <input type="text" class="form-control form-control-sm" id="areastreet" />
                            </div>
                            <div class="mb-3">
                                <label for="landmark" class="form-label">Landmark</label>
                                <input type="text" class="form-control form-control-sm" id="landmark" placeholder="e.g near apollo hospital" />
                            </div>
                            <div className="row m-0 ps-0 ">
                                <div className="col p-0">
                                    <div class="mb-3">
                                        <label for="landmark" class="form-label">Town/City</label>
                                        <input type="text" class="form-control form-control-sm" id="landmark" placeholder="e.g near apollo hospital" />
                                    </div>
                                </div>
                                <div className="col p-0 ms-4 pe-0">
                                    <div className="mb-3">
                                        <label for="landmark" class="form-label "> State</label>
                                        <select class="form-select form-select-sm  btn-light border " aria-label="Default select example">
                                            <option selected>Choose a state</option>
                                            <option value="1">Delhi</option>
                                            <option value="2">U.P</option>
                                            <option value="3">M.p</option>
                                            <option value="4">Rajasthan</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-check mt-4">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                <label style={{fontSize:"13px"}} class="  form-check-label fw-bold" for="flexCheckChecked">
                                    Make this my default address
                                </label>
                            </div>
                            <h4 className="mb-3 mt-3 fw-bold" style={{fontSize:"17px"}} > Add delivery Instructions </h4>
                            <p className="mb-3" style={{fontSize:"13px"}} >Preferences are used to plan your delivery. However, shipments can sometimes arrive early or later than planned.</p>
                            <div className="mb-3 ">
                                <label for="landmark" class="form-label fw-bold mb-0 " style={{fontSize:"13px"}} >Address Type</label>
                                <select class="form-select form-select-sm mt-1 btn-light border " aria-label="Default select example">
                                    <option selected className="  ">Select an Address Type</option>
                                    <option value="1"> Home (7 am – 9 pm delivery) </option>
                                    <option value="2"> Office/Commercial (10 AM - 6 PM delivery) </option>
                                </select>
                            </div>
                            <button className="btn mt-2  btn-sm useThisAddress" style={{width:"120px"}} > Use this address</button>
                        </div>
                    </div>
                </div>
                <div className=" footerProgress ">
                    <div>
                        <p style={{fontSize:"12px"}} className="text-center"> <span className="text-primary" >Conditions of Use</span> | <span className="" style={{color:"#888888",}}>Privacy Notice © 2012-2020, Amazon.com, Inc. and its affiliates </span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Delivery
