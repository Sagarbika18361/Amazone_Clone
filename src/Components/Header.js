import { faBars, faCaretDown,  faChevronDown, faChevronRight, faMapMarkerAlt, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
// import { Modal } from 'react-bootstrap'
import Flag from 'react-world-flags'

import {Link, NavLink} from 'react-router-dom';

import banner from '../assets/imgs/header_banner.jpg'
import amaz from '../assets/imgs/amazlogo.png';

// import Ember from '../assets/fonts/ember/AmazonEmber_Rg.ttf';

// const myCustomFont = ` 
//     @font-face{
//         font-family:'emberRg'
//         src:url(${Ember}) format('truetype');
//     }
//     html,body{
//         font-family:"emberRg,Arial,sans-serif !important";
//     }
// `;

const Header = () => {

    // ALLnav menu start

    const allNavMenuIntial = {
        a: " l366 "
    }

    const [allNavMenuState, setAllNav] = useState(allNavMenuIntial);

    const allNav = () => {
        setAllNav({
            a: "l0"
        })
    }

    const closeBtnAllNav = () => {
        setAllNav({
            a: " l366 "

        })
    }

    // ALLnav menu end 

    const initialState = {
        x: ''
    }
    // modal

    // const modal = {
    //     x: 'header_modal l934'
    // }


    const cssStyle = {
        z: ""
    }

    // prime overlay
    const overlay4 = {
        s: " d-none"
    }


    // Prime overLay start

    const [overlayShow, setShow4] = useState(overlay4);


    const showOverlay = () => {

        setShow4({ s: ' d-block ' })
    };


    const hideOverlay = () => {

        setShow4({ s: ' d-none ' })
    };

    // prime overlay end
    const [cssStyleState, setCss] = useState(cssStyle);

    const [state, setState] = useState(initialState);



    // modal 

    // const [show3, setShow3] = useState(modal);


    // modal left 

    // const handleModal = () => {
    //     setShow3({
    //         x: " header_modal l433"
    //     })


    // }




    const formHandle = () => {
        if (cssStyleState.z === "borderForm") {

            setCss({ z: '' })

        } else {

            setCss({ z: 'borderForm' });
        }
    }

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // Modal 2 country


    // const [show2, setShow2] = useState(false);

    // const handleShow2 = () => setShow2(true);
    // const handleClose2 = () => setShow2(false);



    //Scroll event

    const headerTop = () => {
        if (window.scrollY >= 60) {
            setState({ x: 'position-fixed  start-0 top-0' })
        } else {
            setState({ x: '' })
        }
    }

    useEffect(() => {
        console.log("add");
        window.addEventListener('scroll', headerTop)
        return () => {
            console.log("remove state")
            window.removeEventListener('scroll', headerTop)
        }
    });

    // scroll end

    // submitHandler to prevent reload on click 

    const clickHandler = (e) => {
        e.preventDefault()
    }

    // submitHandler to prevent reload on click of allNavMenu




    return (
        <>
            {/* <style>
                {myCustomFont}
            </style> */}

            <div className={' overlay w-100 h-100 ' + overlayShow.s}></div>


            {/*************************************All modal start********************************/}

            {/* <div className="modal  " id="exampleModal4" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="exampleModal4Label" aria-hidden="true">
                <div className={'modal-dialog modal-dialog-scrollable  h-100 ' + show3.x} >
                    <div className="modal-content">
                        <div className="modal-header text-white mheaderColor">
                            <h4 className="modal-title" id="exampleModal4" >
                                <FontAwesomeIcon icon={faUser} />Hello, Sign in</h4>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close">
                            </button>

                        </div>
                        <div className="modal-body pt-2">
                            <h5 className="fw-bolder ps-4 text-dark ">Trending</h5>
                            <ul className="nav flex-column  modal_header_ul">
                                <li className="nav-item">
                                    <a className="nav-link " href="/">Best Seller </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">New Release</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"> Movies and Shakers</a>
                                </li>
                            </ul>

                            <hr />

                            <h5 className="fw-bolder ps-4 text-dark ">Digital Content And Devices </h5>
                            <ul className="nav flex-column  modal_header_ul">
                                <li className="nav-item">
                                    <a className="nav-link " href="/">Echo & Alexa <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Kindle E-Readers &amp; eBooks <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"> Audible Audiobooks <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"  >Amazon Prime Video <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"  >Amazon Prime Music <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                                </li>
                            </ul>


                            <hr />

                            <h5 className="fw-bolder ps-4 text-dark ">Shop By Department </h5>
                            <ul className="nav flex-column  modal_header_ul">
                                <li className="nav-item">
                                    <a className="nav-link " href="/"> Tv,Appliances,Electronics <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Men's Fashion <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Women's Fashion <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/" >See All <FontAwesomeIcon className="" icon={faChevronDown} /></a>
                                </li>

                            </ul>


                            <hr />

                            <h5 className="fw-bolder ps-4 text-dark ">Programs & Features </h5>
                            <ul className="nav flex-column  modal_header_ul">
                                <li className="nav-item">
                                    <a className="nav-link " href="/"> Gift Cards & Mobile Recharges <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Flight Tickets </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">#FounditOnAmazon </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"  >Amazon Outlet </a>
                                </li>

                            </ul>


                            <hr />

                            <h5 className="fw-bolder ps-4 text-dark "> Help & Settings </h5>
                            <ul className="nav flex-column mb-3 modal_header_ul">
                                <li className="nav-item">
                                    <a className="nav-link " href="/"> Your Account </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Customer Service </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"> Sign In </a>
                                </li>

                            </ul>
                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
            </div> */}

            {/*************************************All modal end********************************/}




            {/* Modal country show2 */}


            {/* <Modal className="ht_country " show={show2} onMouseOut={handleClose2} animation={false}>
                <Modal.Header >

                </Modal.Header>

                <Modal.Body>


                </Modal.Body>
                <Modal.Footer>



                </Modal.Footer>
            </Modal>
 */}



            {/* modal 2 */}

            {/* <Modal className="ht_signin " show={show} onMouseOut={handleClose}>
                <Modal.Header className="text-center pb-0 pt-3 a_signin" closeButton>



                </Modal.Header>
                <Modal.Body className="pt-2">



                </Modal.Body>

            </Modal> */}

            {/******************************** Header Top start ********************************/}
            {/******************************** All nav modal start ********************************/}


            {/*************************************All Navmodal2 new Start********************************/}
            {/* <h5 className="modal-title " id="staticBackdropLabel"><FontAwesomeIcon icon={faUser} /> Hello, Sign in</h5> */}
            {/* <button className=" btnCloseAllNav text-white position-relative float-end fw-bolder btn  btn-sm top-0">X</button> */}





            <div className={'allNavMenu h-100  position-fixed top-0  position-relative   ' + allNavMenuState.a} >
                <div className="h-100 text-white modal-dialog-scrollable allNavInnerDiv  position-absolute "  >
                    <div className="modal-content rounded-0 " >
                        <div className="modal-header text-white mheaderColor rounded-0 ">
                            <h4 className="modal-title" id="exampleModal4" >
                                <FontAwesomeIcon icon={faUser} />Hello, Sign in</h4>
                            <button type="button" className="btn-close btnCloseAllNav   btn-close-white " onClick={closeBtnAllNav} >
                            </button>

                        </div>
                        <div className="modal-body h-100  pt-2" style={{ height: "365px !important" }}>
                            <h5 className="fw-bolder ps-4 text-dark ">Trending</h5>
                            <ul className="nav flex-column  modal_header_ul">
                                <li className="nav-item">
                                    <a className="nav-link " href="/">Best Seller </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">New Release</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"> Movies and Shakers</a>
                                </li>
                            </ul>

                            <hr />

                            <h5 className="fw-bolder ps-4 text-dark ">Digital Content And Devices </h5>
                            <ul className="nav flex-column  modal_header_ul">
                                <li className="nav-item">
                                    <a className="nav-link " href="/">Echo & Alexa <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Kindle E-Readers &amp; eBooks <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"> Audible Audiobooks <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"  >Amazon Prime Video <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"  >Amazon Prime Music <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                                </li>
                            </ul>


                            <hr />

                            <h5 className="fw-bolder ps-4 text-dark ">Shop By Department </h5>
                            <ul className="nav flex-column  modal_header_ul">
                                <li className="nav-item">
                                    <a className="nav-link " href="/"> Tv,Appliances,Electronics <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Men's Fashion <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Women's Fashion <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/" >See All <FontAwesomeIcon className="" icon={faChevronDown} /></a>
                                </li>

                            </ul>


                            <hr />

                            <h5 className="fw-bolder ps-4 text-dark ">Programs & Features </h5>
                            <ul className="nav flex-column  modal_header_ul">
                                <li className="nav-item">
                                    <a className="nav-link " href="/"> Gift Cards & Mobile Recharges <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Flight Tickets </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">#FounditOnAmazon </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"  >Amazon Outlet </a>
                                </li>

                            </ul>


                            <hr />

                            <h5 className="fw-bolder ps-4 text-dark "> Help & Settings </h5>
                            <ul className="nav flex-column mb-3 modal_header_ul">
                                <li className="nav-item">
                                    <a className="nav-link " href="/"> Your Account </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Customer Service </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"> Sign In </a>
                                </li>

                            </ul>
                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>

            </div>





            {/*************************************All Navmodal2 end********************************/}
            {/*************************************All Navmodal3 start********************************/}
            {/* <div className= {"allNavMenu position-fixed  top-0 h-100 " + allNavMenuState.a}> */}
            {/* 
                <!-- Button trigger modal --> */}
            {/* <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Launch static backdrop modal
                </button> */}

            {/* <!-- Modal --> */}
            {/* <div className="modal fade modal-dialog-scrollable "  data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Understood</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}





            {/******************************** All nav modal3 End ********************************/}



            <header>
                <div className={'a_header_top p-1 w-100 ' + state.x}>
                    <NavLink to="/" className="h-100 btn me-1 pt-2" activeStyle={{ width: "10%" }}> <a href="/"> <img className="img-fluid"  alt="..." src={amaz} /> </a> </NavLink>
                    <button className="h-100 btn me-1 fs-6 text-white lh-1 " style={{ width: "10%" }}>
                        <div >
                            <div >
                                <FontAwesomeIcon className="float-start lh-1 gprs " icon={faMapMarkerAlt} />
                            </div>
                            <div className="float-start deliver p-0"> Deliver to Sagar</div><br />
                            <div className="deliver p-0">
                                <span className="fw-bolder fs-5 text-start" >Delhi</span>
                            </div>
                        </div>
                    </button>

                    {/* Search Bar Form  */}
                    <form className={"  bg-white me-1 h_form d-inline-block  " + cssStyleState.z} >
                        <div className="row">
                            <div className="col-1 border-end tbds" >
                                <div className="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button" className="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        All
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <li><a className="dropdown-item" href="/">Dropdown link</a></li>
                                        <li><a className="dropdown-item" href="/">Dropdown link</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-10 p-0">
                                <input onBlur={formHandle} onFocus={formHandle} className={"form-control rounded-0 " + cssStyleState.z} />
                            </div>
                            <div className="col-1 " id="search">
                                <div className="d-grid gap-2">
                                    <button className="w-100 btn btn-warning btn-block " type="submit"><FontAwesomeIcon className="fs-4 text-dark" icon={faSearch} /></button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <button className=" ht_country_btn h-100 position-relative btn p-0 mx-2" style={{ width: "4%" }} >
                        {/* onMouseEnter={handleShow2} */}

                        <Flag code={'in'} height="16" className="d-inline-block me-1" /> <FontAwesomeIcon className="text-white" icon={faChevronDown} />
                        <div className="text-start p-3 ht_country position-absolute border bg-white rounded-3">
                            <div className="arrow-up arrow-up_country position-absolute  "></div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Default radio
                                </label>
                            </div>
                            <hr />
                            <form >
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Default radio
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        Default checked radio
                                    </label>
                                </div>
                            </form>
                            <hr />
                            <p className="float-start"> <Flag code={'in'} height="16" /> You are shopping on Amazon.in.</p>


                            <a href="/" type="button" className="btn btn-link">Change country/region</a>


                        </div>

                    </button>
                    <button className=" ht_signin_btn position-relative d-inline-block p-0   text-white h-100  headerBtnForm btn me-1 text-white ms-2 " style={{ width: "8%" }}>

                        <div className="Hello1 text-start">Hello, Sign in</div>
                        <span className="Hello2 d-inline-block p-0 m-0 fw-bolder text-start ">Account & Lists</span>

                        <div className=" ht_signin position-absolute bg-white border rounded-1">
                            <div className="arrow-up arrow-up_signin position-absolute "></div>
                            <div className="mx-auto pt-1 border-bottom">
                                <Link to="/signin" className="btn  w-50 mt-3" style={{ background: "#F0C14B" }}> Sign in</Link>
                                <p className="newCustomer "> New Customer? <Link to="/register" className=" btn btn-link"> Start here. </Link>  </p>
                            </div>

                            <div className="row m-0">
                                <div className="col p-0 border-end mt-2">

                                    <ul className="nav flex-column">
                                        <h5 className="text-dark ">Your List</h5>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Create a Wish List </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Find a Wish List</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Wish from Any Website</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Baby Wish List</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Discover Your Style</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Explore Showroom</a>
                                        </li>

                                    </ul>

                                </div>
                                <div className="col p-0">
                                    <ul className="nav flex-column">

                                        <h5 className="text-dark mt-2">Your Account</h5>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Your Account </a>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/order">Your Orders</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/wishlist">Your Wish List </Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Your Recommendations</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/"> Your Prime Membership</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Your Prime Video</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Your Subscribe & Save Items</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Memberships & Subscriptions</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Your Amazon Business Account</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Your Seller Account</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Manage Your Content and Devices</a>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </div>
                    </button>
                    <button className="text-white h-100 btn me-0 p-0" style={{ width: "8%" }}>
                        <div className="text-center">Returns</div>
                        <span className="fw-bolder orders" > & Orders</span>
                    </button>
                    <Link  to="/cart" className="h-100 btn ps-0 text-white d-inline-block" style={{ width: "8%" }}>
                        {/* <FontAwesomeIcon className="text-white fs-3" icon={faCartPlus} /> */}
                        <div className="cart_div">
                            <span className="cartCount" id="nav_cart_count  fs-4 fw-bold d-inline-block"> 0 </span>
                            <span className="cart_sprtSht d-inline-block ">  </span>
                            <span className="cart "> Cart</span>
                        </div>
                    </Link>
                </div>

                {/***************************************Header TOP END *************************************/}
                {/***************************************header bottom*************************************/}
                <div className="a_header_bottom">
                    <ul className="nav float-start ms-2 ">
                        <li className="nav-item ms-2" >
                            <a className="nav-link " href="/" onClick={clickHandler}  > <FontAwesomeIcon className="fs-5 " onClick={clickHandler} icon={faBars} />

                                <span className="allmodal" onClick={allNav}  > All</span>

                            </a>
                        </li>
                        {/* <li className="nav-item ms-2">
                            <a className="nav-link  " aria-current="page" href="/" data-bs-toggle="modal" data-bs-target="#exampleModal4"> <FontAwesomeIcon className="fs-5 " icon={faBars} />

                                <span className="allmodal"> All</span>

                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Best Sellers </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Mobile </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Electronics </a>
                        </li>
                        <li className="nav-item position-relative">
                            <a className="nav-link prime" onMouseOver={showOverlay} onMouseOut={hideOverlay} href="/">Prime <FontAwesomeIcon icon={faCaretDown} />  </a>
                            <div className="primeBox p-3 rounded-1 position-absolute d-none">
                                <div className="arrow-up arrow-up_prime  position-absolute "></div>
                                <img className="img-fluid" src="https://m.media-amazon.com/images/G/31/prime/NavFlyout/TryPrime/2018/Apr/IN-Prime-PIN-TryPrime-MultiBen-Apr18-400x400._CB442254244_.jpg" alt="img..." />
                            </div>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link " href="/" >Fashion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/" >New Release</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/" >Customer Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/" >Amazon Pay</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/" >Computers</a>
                        </li>
                    </ul>
                    <a className="hbanner float-end p-0 m-0 " href="/">
                        <img className="img-fluid" src={banner} alt="..." />
                    </a>
                    <ul className=" nav float-start d-none">
                        <li className="nav-item">
                            <a className="nav-link " href="/" >Home &amp; Kitchen </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/" >Today's Deal</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/" >Toy's & Games</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/" >Books</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link " href="/" >Sell</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/" >Coupons</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header
