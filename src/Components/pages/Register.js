import React from 'react'
import {  NavLink } from 'react-router-dom'
// import Layout from '../Layout'

const Register = () => {
    return (
        <>

            <div className="row  signinformcont  justify-content-center" >


                <div className="col-4  m-0 justify-content-center"  >
                    <div>

                        <NavLink to="/signin" className="mb-3 mx-auto logo " >

                        </NavLink>

                    </div>


                    <div className="border p-3 signinwidthheight m-0 " >
                        <h4>Create Account </h4>
                        <form className=" ">
                            <div className="mb-3">
                                <label for="name" className="form-label">Your name  </label>
                                <input type="text" className="form-control form-control-sm" id="yourname" placeholder="" />
                            </div>
                            <div className="mb-3">
                                <label for="name" className="form-label">Mobile number  </label>
                                <div className="row">
                                    <div className="col-3 pe-0">
                                        <div className="dropdown ">
                                            <button className="btn  btn-light btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                +91
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item" href="/register">+93</a></li>
                                                <li><a className="dropdown-item" href="/register">+94</a></li>
                                                <li><a className="dropdown-item" href="/register">+95</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-9 ps-0">
                                        <input type="number" className="form-control form-control-sm" id="mobno" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email (optional)  </label>
                                <input type="email" className="form-control form-control-sm" id="emailop" placeholder="" />
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Password  </label>
                                <input type="password" className="form-control form-control-sm" id="pass" placeholder="" />
                                <span>Passwords must be at least 6 characters.</span>
                            </div>

                            <p>We will send you a text to verify your phone.
                                Message and Data rates may apply.</p>

                            <button type="submit" className="btn btn-sm signinContinue btnHeight btn btn-warning border w-100"> Continue </button>

                        </form>
                        <a href="#help"> Need help?</a>
                    </div>

                    <hr style={{ width: "349px" }} />
                    <p style={{ marginLeft: "7.5rem" }} className=" m-0 "  > Already have an account? Sign in </p>
                    <p className="m-0">Buying for work? </p>
                </div>
            </div>
            <footer className="  mt-5">
                <ul className="nav  " style={{ marginLeft: "451px" }}>
                    <li className="nav-item">
                        <a className="nav-link " href="/">Conditions of Use</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Privacy Notice</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Help</a>
                    </li>
                </ul>
                <span className="d-block  " style={{ marginLeft: "470px" }}>© 1996-2021, Amazon.com, Inc. or its affiliates</span>

            </footer>

        </>
    )
}

export default Register
