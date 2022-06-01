import React from 'react'
import { Link } from 'react-router-dom'
// import Layout from '../Layout'

const SignIn = () => {
    return (
        <>

            <div className="row  signinformcont  justify-content-center" >


                <div className="col-4  m-0 justify-content-center"  >
                    <div>

                        <Link to="/" className="mb-3 mx-auto logo " >
                                    
                        </Link>
                    
                    </div>


                    <div className="border p-3 signinwidthheight m-0 " >
                        <h4>Sign-In</h4>
                        <form className=" ">
                            <div className="mb-3">
                                <label for="mobno" className="form-label">Email or mobile phone number </label>
                                <input type="email" className="form-control form-control-sm" id="mobno" placeholder="" />
                            </div>
                            <button type="submit" className="btn btn-sm signinContinue btnHeight btn btn-warning border w-100"> Continue </button>
                            <p>By continuing, you agree to Amazon's <a href="/signin" className="bg_change" >Conditions of Use</a>  and <a href="/signin " className="bg_change">Privacy Notice.</a> </p>
                        </form>
                        <a href="#help"> Need help?</a>
                    </div>

                    <hr style={{width:"349px"}}/>
                    <p style={{marginLeft: "7.5rem"}} className="newToAmazon"  > New to Amazon </p>
                    <button type="button" className=" btn btn-light btn-sm  border btnHeight  " style={{width:"350px"}}> Create your Amazon Account </button>



                </div>
            </div>
            <footer className="  mt-5">
                <ul className="nav  " style={{marginLeft: "451px"}}>
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
                <span className="d-block  " style={{marginLeft: "470px"}}>© 1996-2021, Amazon.com, Inc. or its affiliates</span>

            </footer>

        </>
    )
}

export default SignIn
