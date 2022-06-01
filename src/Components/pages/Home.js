import React from 'react'
// import Footer from '../Footer'
// import Header from '../Header'
import Layout from '../Layout'
// import Main from '../Main'

import { faStar, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Carousel } from 'react-bootstrap';

import img1 from '../../assets/imgs/1.jpg';
// import img2 from '../../assets/imgs/2.jpg';
import img3 from '../../assets/imgs/3.jpg';
import img4 from '../../assets/imgs/4.jpg';
import img5 from '../../assets/imgs/5.jpg';
import img6 from '../../assets/imgs/6.jpg';
import img9 from '../../assets/imgs/9.jpg';
import img10 from '../../assets/imgs/10.jpg';
import imgBanner from '../../assets/imgs/imgbanner.png';

// import refrigerator from '../../images/col1.jpg'
// import Ac from '../../images/col2.jpg'
// import Micro from '../../images/col3.jpg'
// import col4 from '../../images/col4.jpg'

const Home = () => {
    return (
        <>

            <Layout>
                <div className="a_main position-relative">
                    <div className="a_main1 a_main_top">

                        {/* carousel  */}

                        <Carousel>


                            <Carousel.Item>
                                <div className="olay w-100 h-100  position-absolute top-0 start-0"></div>
                                <img
                                    className="d-block  h-100"
                                    src="https://m.media-amazon.com/images/I/61IsFjcy1IL._SX1500_.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="olay w-100 h-100  position-absolute top-0 start-0"></div>
                                <img
                                    className="d-block  h-100"
                                    src={img3}
                                    alt="Second slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="olay w-100 h-100  position-absolute top-0 start-0"></div>
                                <img
                                    className="d-block  h-100"
                                    src={img1}
                                    alt="First slide"
                                />

                            </Carousel.Item>

                            <Carousel.Item>
                                <div className="olay w-100 h-100  position-absolute top-0 start-0"></div>
                                <img
                                    className="d-block  h-100"
                                    src={img4}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="olay w-100 h-100  position-absolute top-0 start-0"></div>
                                <img
                                    className="d-block  h-100"
                                    src={img5}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="olay w-100 h-100  position-absolute top-0 start-0"></div>
                                <img
                                    className="d-block  h-100"
                                    src={img6}
                                    alt="Third slide"
                                />


                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="olay w-100 h-100  position-absolute top-0 start-0"></div>
                                <img
                                    className="d-block img_h_w  "
                                    src={img9}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="olay w-100 h-100  position-absolute top-0 start-0"></div>
                                <img
                                    className="d-block img_h_w  "
                                    src={img10}
                                    alt="Second slide"
                                />
                            </Carousel.Item>


                        </Carousel>

                    </div>
                    {/* main 2 start */}

                    <div className="  a_main_bottom ml-1 position-absolute ">

                        <div className="a_main_bottom_1 mb-3 row m-0">

                            <div className="col main_col p-2 mr_col " style={{ width: "304px" }}>
                                <div className="a_mainbox1 p-3">

                                    <div className="a_mainbox1_inner w-100 h-100  ">
                                        <div className="row m-0 " style={{ height: "65px" }} >
                                            <div className="col-4 ">
                                                <FontAwesomeIcon style={{ fontSize: '3rem', "color": "#AFB7BB" }} icon={faUserCircle} />                                             </div>
                                            <div className="col-8 ">
                                                <h4 className="m-0">Hi,<span> Sagar </span> </h4>
                                                <span className="fs-6"> Customer since 2016 </span>
                                            </div>
                                        </div>
                                        <p className=" fw-bold "> Top links for you</p>
                                        <div className="row m-0 a_toplinks">
                                            <div className="col-6  p-0  ">
                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                    <img className=" img-fluid h-75 w-100" src="https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/orders._AC_SR120,80_.png" alt="img..." />
                                                    <p className=" accFont ">Your orders</p>
                                                </a>

                                            </div>
                                            <div className="col-6  p-0  ">
                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                    <img className=" img-fluid h-75 w-100" src="https://m.media-amazon.com/images/G/31/HUD/Dashboard/ProfileCard/976419031._AC_SR120,80_.png" alt="img..." />
                                                    <p className=" accFont ">Mobile and Accessories</p>
                                                </a>

                                            </div>
                                            <div className="col-6  p-0  ">
                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                    <img className=" img-fluid h-75 w-100" src="https://m.media-amazon.com/images/G/31/HUD/Dashboard/ProfileCard/6648217031._AC_SR120,80_.png" alt="img..." />
                                                    <p className="accFont ">Fashion</p>
                                                </a>

                                            </div>
                                            <div className="col-6  p-0  ">
                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                    <img className=" img-fluid h-75 w-100" src="https://m.media-amazon.com/images/G/31/HUD/Dashboard/ProfileCard/2454178031._AC_SR120,80_.png" alt="img..." />
                                                    <p className="accFont ">Grocery</p>
                                                </a>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col main_col p-2 mr_col ms-2 " style={{ width: "304px" }}>
                                <div className="a_mainbox1 p-3 me-0">
                                    <div className="a_mainbox1_inner w-100 h-100 ">
                                        <div className="a_mainbox1_inner w-100 h-100  ">
                                            <div className="row m-0  " style={{ height: "65px" }} >
                                                {/* <div className="col-4 ">
                                                <FontAwesomeIcon style={{ fontSize: '3rem', "color": "#AFB7BB" }} icon={faUserCircle} />
                                            </div> */}
                                                <div className="col-12 p-0 ">
                                                    <h4 className=" mt-2 mb-4 d-inline-block m-0 w-100 fw-bolder " style={{ fontSize: "18px" }}  > &nbsp;  Top rated, premium <br />  &nbsp;  quality | Amazon Brands </h4>
                                                    {/* <span className="fs-6"> Customer since 2016 </span> */}
                                                </div>
                                            </div>
                                            {/* <p className=" fw-bold "> Top links for you</p> */}
                                            <div className="row m-0 a_toplinks">
                                                <div className="col-6  p-0  mt-2 ">
                                                    <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                        <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg" alt="img..." />
                                                        <p className=" accFont ">Home products

                                                        </p>
                                                    </a>

                                                </div>
                                                <div className="col-6  p-0  mt-2 ">
                                                    <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                        <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/pbbaupbgw/xcm_banners_furniture_186x116_186x116_in-en._SY116_CB666250402_.jpg" alt="img..." />
                                                        <p className=" accFont ">
                                                            Furniture
                                                        </p>
                                                    </a>

                                                </div>
                                                <div className="col-6  p-0 mt-2  ">
                                                    <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                        <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg" alt="img..." />
                                                        <p className="accFont ">
                                                            Daily essentials
                                                        </p>
                                                    </a>

                                                </div>
                                                <div className="col-6  p-0  mt-2 ">
                                                    <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                        <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg" alt="img..." />
                                                        <p className="accFont ">
                                                            Clothing essentials
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col main_col p-2 ms-1 " style={{ width: "304px" }}>
                                <div className="a_mainbox1 p-3">
                                    <div className="a_mainbox1_inner w-100 h-100 m-0 p-0 ">
                                        <div className="a_mainbox1  m-0 ">
                                            <div className="a_mainbox1_inner w-100 h-100 ">
                                                <div className="a_mainbox1_inner w-100 h-100  ">
                                                    <div className="row m-0  mt-2 " style={{ height: "65px" }} >
                                                        {/* <div className="col-4 ">
                                                <FontAwesomeIcon style={{ fontSize: '3rem', "color": "#AFB7BB" }} icon={faUserCircle} />
                                            </div> */}
                                                        <div className="col-12 p-0 ">
                                                            <h4 className=" mt-2 mb-3 d-inline-block m-0 w-100 fw-bold " style={{ fontSize: "20px" }}  >  &nbsp;Top picks for your home </h4>
                                                            {/* <span className="fs-6"> Customer since 2016 </span> */}
                                                        </div>
                                                    </div>
                                                    {/* <p className=" fw-bold "> Top links for you</p> */}
                                                    <div className="row m-0 a_toplinks">
                                                        <div className="col-6  p-0  mt-2 ">
                                                            <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="img..." />
                                                                <p className=" accFont ">ACs

                                                                </p>
                                                            </a>

                                                        </div>
                                                        <div className="col-6  p-0  mt-2 ">
                                                            <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="img..." />
                                                                <p className=" accFont ">
                                                                    Refrigerators
                                                                </p>
                                                            </a>

                                                        </div>
                                                        <div className="col-6  p-0 mt-2  ">
                                                            <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="img..." />
                                                                <p className="accFont ">
                                                                    Microwaves
                                                                </p>
                                                            </a>

                                                        </div>
                                                        <div className="col-6  p-0  mt-2 ">
                                                            <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" alt="img..." />
                                                                <p className="accFont ">
                                                                    Washing machines
                                                                </p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col  ">
                                <div className="row ms-1">
                                    <div className="col-12 p-3 bg-white ms-2 mb-3 mt-2" style={{ width: "314px", "height": "144px" }}>
                                        <h4 className="mb-3">Sign in for your best experience</h4>
                                        <button className="btn btn-warning  rounded-1" style={{ width: "268px", "lineHeight": "1", "height": "32px", "background": "#F7CA00" }}> Sign in Securely </button>
                                    </div>
                                    <div className="col-12 p-0 ms-3   " style={{ height: "251px", "width": "287px" }}>
                                        <div className=" " style={{ "height": 170 + "px" }} >
                                            <img className="img-fluid overflow-hidden" src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" alt="img..." />
                                            {/* <h6>TECHNO Spark 7T(Magnet Black, 4GB RAM...</h6> */}
                                        </div>

                                        <div className="float-start d-none">
                                            <FontAwesomeIcon className="text-warning" icon={faStar} />
                                            <FontAwesomeIcon className="text-warning" icon={faStar} />
                                            <FontAwesomeIcon className="text-warning" icon={faStar} />
                                            <FontAwesomeIcon className="text-warning" icon={faStar} />
                                            {/* <FontAwesomeIcon className="text-white border" icon={faStar}/> */}
                                            <FontAwesomeIcon className="text-warning fstar" icon={faStar} />
                                            <span className="ratingCount">21</span>
                                            <div> ₹1900</div>
                                        </div>
                                        <button className="d-none btn btn-sm btn-warning float-end ">Shop now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/**************************mainBottom2*********************************/}
                        <div className="a_main_bottom_1 a_main_bottom_1_2  mb-3 row m-0">

                            <div className="col main_col p-2  " style={{ width: "304px" }}>
                                <div className="a_mainbox1 p-3 me-0">
                                    <div className="a_mainbox1_inner w-100 h-100  ">
                                        <div className="row m-0  " style={{ height: "65px" }} >
                                            {/* <div className="col-4 ">
                                                <FontAwesomeIcon style={{ fontSize: '3rem', "color": "#AFB7BB" }} icon={faUserCircle} />
                                            </div> */}
                                            <div className="col-12 ">
                                                <h2 className=" d-inline-block m-0 w-100 mt-4 fw-bold " style={{ fontSize: "19px" }} >Revamp your home in style </h2>
                                                {/* <span className="fs-6"> Customer since 2016 </span> */}
                                            </div>
                                        </div>
                                        {/* <p className=" fw-bold "> Top links for you</p> */}
                                        <div className="row m-0 a_toplinks">
                                            <div className="col-6  p-0  ">
                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg" alt="img..." />
                                                    <p className=" accFont ">Bedsheets, curtains & more
                                                    </p>
                                                </a>

                                            </div>
                                            <div className="col-6  p-0  ">
                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg" alt="img..." />
                                                    <p className=" accFont ">
                                                        Home decoration
                                                    </p>
                                                </a>

                                            </div>
                                            <div className="col-6  p-0  ">
                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg" alt="img..." />
                                                    <p className="accFont ">
                                                        Home storage
                                                    </p>
                                                </a>

                                            </div>
                                            <div className="col-6  p-0  ">
                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg" alt="img..." />
                                                    <p className="accFont ">
                                                        Lighting solutions
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col main_col p-2 " style={{ width: "304px" }}>
                                <div className="a_mainbox1 p-3 me-0">
                                    <div className="a_mainbox1_inner w-100 h-100 ">
                                        <div className="a_mainbox1_inner w-100 h-100  ">
                                            <div className="row m-0  " style={{ height: "65px" }} >
                                                {/* <div className="col-4 ">
                                                <FontAwesomeIcon style={{ fontSize: '3rem', "color": "#AFB7BB" }} icon={faUserCircle} />
                                            </div> */}
                                                <div className="col-12 ">
                                                    <h5 className=" d-inline-block m-0 w-100 mt-4 fw-bold "  >Shop by Category </h5>
                                                    {/* <span className="fs-6"> Customer since 2016 </span> */}
                                                </div>
                                            </div>
                                            {/* <p className=" fw-bold "> Top links for you</p> */}
                                            <div className="row m-0 a_toplinks">
                                                <div className="col-6  p-0  ">
                                                    <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                        <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg" alt="img..." />
                                                        <p className=" accFont ">Fresh

                                                        </p>
                                                    </a>

                                                </div>
                                                <div className="col-6  p-0  ">
                                                    <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                        <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg" alt="img..." />
                                                        <p className=" accFont ">
                                                            Fashion
                                                        </p>
                                                    </a>

                                                </div>
                                                <div className="col-6  p-0  ">
                                                    <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                        <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg" alt="img..." />
                                                        <p className="accFont ">
                                                            Electronics
                                                        </p>
                                                    </a>

                                                </div>
                                                <div className="col-6  p-0  ">
                                                    <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                        <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg" alt="img..." />
                                                        <p className="accFont ">
                                                            Mobiles
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col main_col p-2 " style={{ width: "304px" }}>
                                <div className="a_mainbox1 p-3 me-0">
                                    <div className="a_mainbox1_inner w-100 h-100 " >
                                        <div className="row m-0  " style={{ height: "65px" }} >

                                            <div className="col-12 ">
                                                <h2 className=" d-inline-block m-0 w-100 mt-2 fw-bold " style={{ fontSize: "19px" }} >Now save bill details & get timely reminders </h2>
                                            </div>
                                        </div>
                                        <div className="row m-0 a_toplinks">
                                            <div className="col-6  p-0  ">
                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Postpaid_186x116._SY116_CB663599035_.jpg" alt="img..." />
                                                    <p className=" accFont ">Postpaid bill

                                                    </p>
                                                </a>

                                            </div>
                                            <div className="col-6  p-0  ">
                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/LPG_186x116._SY116_CB663599035_.jpg" alt="img..." />
                                                    <p className=" accFont ">

                                                        LPG gas cylinder
                                                    </p>
                                                </a>

                                            </div>
                                            <div className="col-6  p-0  ">
                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/Credit_card_186x116._SY116_CB663599035_.jpg" alt="img..." />
                                                    <p className="accFont ">
                                                        Home storage
                                                    </p>
                                                </a>

                                            </div>
                                            <div className="col-6  p-0  ">
                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/Avatar_QC_PC/GPRC_186x116._SY116_CB663599035_.jpg" alt="img..." />
                                                    <p className="accFont ">
                                                        Lighting solutions
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col main_col p-2 " style={{ width: "304px" }}>
                                <div className="a_mainbox1 p-3 me-0">
                                    <div className="a_mainbox1_inner w-100 h-100 " >
                                        <div className="row m-0  " style={{ height: "65px" }} >

                                            <div className="col-12 ">
                                                <h2 className=" d-inline-block m-0 w-100 mt-2 fw-bold " style={{ fontSize: "19px" }} >Top rated, premium quality | Amazon Brands & </h2>
                                            </div>
                                        </div>
                                        <div className="row m-0 a_toplinks">
                                            <div className="col-6  p-0  ">
                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg" alt="img..." />
                                                    <p className=" accFont ">
                                                        Home products
                                                    </p>
                                                </a>

                                            </div>
                                            <div className="col-6  p-0  ">
                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/pbbaupbgw/xcm_banners_furniture_186x116_186x116_in-en._SY116_CB666250402_.jpg" alt="img..." />
                                                    <p className=" accFont ">
                                                        Furniture
                                                    </p>
                                                </a>

                                            </div>
                                            <div className="col-6  p-0  ">
                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg" alt="img..." />
                                                    <p className="accFont ">
                                                        Daily essentials
                                                    </p>
                                                </a>

                                            </div>
                                            <div className="col-6  p-0  ">
                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg" alt="img..." />
                                                    <p className="accFont ">
                                                        Clothing essentials
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>






                        {/* carousel 2 */}

                        <div className="a_main_bottom_3 p-3 bg-white ">
                            <div className="todays mb-4 ">
                                <h3 className="float-start">Today's Deals</h3><button type="button" className="float-start btn btn-link text-decoration-none">See All Deals</button>
                            </div>

                            <Carousel id="carouselExampleControl2">
                                <Carousel.Item>
                                    <div className=" row">
                                        <div className="col p-0">
                                            <div className="imgPlace  h-75 text-center">
                                                <img src="https://m.media-amazon.com/images/I/41H6Le9nO0L.__AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>

                                            <span > <span className="minValue fw-bold"> ₹349.00</span>  </span> <span className="maxValue fw-bold">- ₹5,499.00</span>
                                            <span className="d-block"> Ends in 15:06:55  </span>

                                        </div>
                                        <div className="col p-0">
                                            <div className="imgPlace  h-75 text-center">
                                                <img src="https://m.media-amazon.com/images/I/413fM5GT3uS.__AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>

                                            <span > <span className="minValue fw-bold"> ₹349.00</span>  </span> <span className="maxValue fw-bold">- ₹5,499.00</span>
                                            <span className="d-block"> Ends in 15:06:55  </span>

                                        </div>
                                        <div className="col p-0">
                                            <div className="imgPlace  h-75 text-center">
                                                <img src="https://m.media-amazon.com/images/I/51fU-iWByBL.__AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>

                                            <span > <span className="minValue fw-bold"> ₹349.00</span>  </span> <span className="maxValue fw-bold">- ₹5,499.00</span>
                                            <span className="d-block"> Ends in 15:06:55  </span>

                                        </div>
                                        <div className="col p-0">
                                            <div className="imgPlace  h-75 text-center">
                                                <img src="https://m.media-amazon.com/images/I/41LRLdVQvBS.__AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>

                                            <span > <span className="minValue fw-bold"> ₹349.00</span>  </span> <span className="maxValue fw-bold">- ₹5,499.00</span>
                                            <span className="d-block"> Ends in 15:06:55  </span>

                                        </div>
                                        <div className="col p-0">
                                            <div className="imgPlace  h-75 text-center">
                                                <img src="https://m.media-amazon.com/images/I/41ozwujDVTS.__AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>

                                            <span > <span className="minValue fw-bold"> ₹349.00</span>  </span> <span className="maxValue fw-bold">- ₹5,499.00</span>
                                            <span className="d-block"> Ends in 15:06:55  </span>

                                        </div>
                                        <div className="col  p-0">
                                            <div className="imgPlace  h-75 text-center">
                                                <img src="https://m.media-amazon.com/images/I/41-zK4YWpES.__AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>

                                            <span > <span className="minValue fw-bold"> ₹349.00</span>  </span> <span className="maxValue fw-bold">- ₹5,499.00</span>
                                            <span className="d-block"> Ends in 15:06:55  </span>

                                        </div>
                                    </div>

                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className=" row">
                                        <div className="col p-0">
                                            <div className="imgPlace  h-75 text-center">
                                                <img src="https://m.media-amazon.com/images/I/41Hv3PfalAS.__AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>

                                            <span > <span className="minValue fw-bold"> ₹349.00</span>  </span> <span className="maxValue fw-bold">- ₹5,499.00</span>
                                            <span className="d-block"> Ends in 15:06:55  </span>

                                        </div>
                                        <div className="col p-0">
                                            <div className="imgPlace  h-75 text-center">
                                                <img src="https://m.media-amazon.com/images/I/41znff7SgPL.__AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>

                                            <span > <span className="minValue fw-bold"> ₹349.00</span>  </span> <span className="maxValue fw-bold">- ₹5,499.00</span>
                                            <span className="d-block"> Ends in 15:06:55  </span>

                                        </div>
                                        <div className="col p-0">
                                            <div className="imgPlace  h-75 text-center">
                                                <img src="https://m.media-amazon.com/images/I/41-zK4YWpES.__AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>

                                            <span > <span className="minValue fw-bold"> ₹349.00</span>  </span> <span className="maxValue fw-bold">- ₹5,499.00</span>
                                            <span className="d-block"> Ends in 15:06:55  </span>

                                        </div>
                                        <div className="col p-0">
                                            <div className="imgPlace  h-75 text-center">
                                                <img src="https://m.media-amazon.com/images/I/41xXB+71RaL.__AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>

                                            <span > <span className="minValue fw-bold"> ₹349.00</span>  </span> <span className="maxValue fw-bold">- ₹5,499.00</span>
                                            <span className="d-block"> Ends in 15:06:55  </span>

                                        </div>
                                        <div className="col p-0">
                                            <div className="imgPlace  h-75 text-center">
                                                <img src="https://m.media-amazon.com/images/I/41WuEc7I4PL.__AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>

                                            <span > <span className="minValue fw-bold"> ₹349.00</span>  </span> <span className="maxValue fw-bold">- ₹5,499.00</span>
                                            <span className="d-block"> Ends in 15:06:55  </span>

                                        </div>
                                        <div className="col p-0">
                                            <div className="imgPlace  h-75 text-center">
                                                <img src="https://m.media-amazon.com/images/I/41iIvBMGhFS.__AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>

                                            <span > <span className="minValue fw-bold"> ₹349.00</span>  </span> <span className="maxValue fw-bold">- ₹5,499.00</span>
                                            <span className="d-block"> Ends in 15:06:55  </span>

                                        </div>
                                    </div>


                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className=" row">
                                        <div className="col p-0">
                                            <div className="imgPlace  h-75 text-center">
                                                <img src="https://m.media-amazon.com/images/I/31RM9gXuDSL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>

                                            <span > <span className="minValue fw-bold"> ₹349.00</span>  </span> <span className="maxValue fw-bold">- ₹5,499.00</span>
                                            <span className="d-block"> Ends in 15:06:55  </span>

                                        </div>
                                        <div className="col p-0">
                                            <div className="imgPlace  h-75 text-center">
                                                <img src="https://m.media-amazon.com/images/I/41JUbD67xQS._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>

                                            <span > <span className="minValue fw-bold"> ₹349.00</span>  </span> <span className="maxValue fw-bold">- ₹5,499.00</span>
                                            <span className="d-block"> Ends in 15:06:55  </span>

                                        </div>
                                        <div className="col p-0">
                                            <div className="imgPlace  h-75 text-center">
                                                <img src="https://m.media-amazon.com/images/I/51sKz12d3FS._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>

                                            <span > <span className="minValue fw-bold"> ₹349.00</span>  </span> <span className="maxValue fw-bold">- ₹5,499.00</span>
                                            <span className="d-block"> Ends in 15:06:55  </span>

                                        </div>
                                        <div className="col p-0">
                                            <div className="imgPlace  h-75 text-center">
                                                <img src="https://images-eu.ssl-images-amazon.com/images/I/811lrGbXwIL._AC_UL160_SR160,160_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>

                                            <span > <span className="minValue fw-bold"> ₹349.00</span>  </span> <span className="maxValue fw-bold">- ₹5,499.00</span>
                                            <span className="d-block"> Ends in 15:06:55  </span>

                                        </div>
                                        <div className="col p-0">
                                            <div className="imgPlace  h-75 text-center">
                                                <img src="https://m.media-amazon.com/images/I/41ATg85WOeL.__AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>

                                            <span > <span className="minValue fw-bold"> ₹349.00</span>  </span> <span className="maxValue fw-bold">- ₹5,499.00</span>
                                            <span className="d-block"> Ends in 15:06:55  </span>

                                        </div>
                                        <div className="col p-0">
                                            <div className="imgPlace  h-75 text-center">
                                                <img src="https://m.media-amazon.com/images/I/5102k1Hur3L.__AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>

                                            <span > <span className="minValue fw-bold"> ₹349.00</span>  </span> <span className="maxValue fw-bold">- ₹5,499.00</span>
                                            <span className="d-block"> Ends in 15:06:55  </span>

                                        </div>
                                    </div>


                                </Carousel.Item>
                            </Carousel>

                        </div>
                        <div className="a_main_bottom_4  mt-3 p-3 bg-white   ">
                            <div className="todays mb-4 ">
                                <h3 className="float-start fs-4 fw-normal">For the well-being of your loved ones</h3>
                            </div>

                            <Carousel id="carouselExampleControl3"  >
                                <Carousel.Item>
                                    <div className=" row">
                                        <div className="col imgCont p-0">
                                            <div className="imgPlace  h-75  text-center">
                                                <img src="https://m.media-amazon.com/images/I/41DlRqyWt3L._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>



                                        </div>
                                        <div className="col imgCont p-0">
                                            <div className="imgPlace  h-75  text-center">
                                                <img src="https://m.media-amazon.com/images/I/41tdg5E6B1S._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>



                                        </div>
                                        <div className="col imgCont p-0">
                                            <div className="imgPlace  h-75  text-center">
                                                <img src="https://m.media-amazon.com/images/I/41sDV3dti-L._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>



                                        </div>
                                        <div className="col imgCont p-0">
                                            <div className="imgPlace  h-75  text-center">
                                                <img src="https://m.media-amazon.com/images/I/41sQt1ScAJS._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>



                                        </div>
                                        <div className="col imgCont p-0">
                                            <div className="imgPlace  h-75  text-center">
                                                <img src="https://m.media-amazon.com/images/I/5171P+N8tfL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>



                                        </div>
                                        <div className="col imgCont  p-0">
                                            <div className="imgPlace  h-75  text-center">
                                                <img src="https://m.media-amazon.com/images/I/41LG0UF6w-S._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>



                                        </div>
                                    </div>

                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className=" row">
                                        <div className="col imgCont p-0">
                                            <div className="imgPlace  h-75  text-center">
                                                <img src="https://m.media-amazon.com/images/I/41VrJz9fHkL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>



                                        </div>
                                        <div className="col imgCont p-0">
                                            <div className="imgPlace  h-75  text-center">
                                                <img src="https://m.media-amazon.com/images/I/51opC1Qk-GL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>



                                        </div>
                                        <div className="col imgCont p-0">
                                            <div className="imgPlace  h-75  text-center">
                                                <img src="https://m.media-amazon.com/images/I/41ZXqDf9D4S._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>



                                        </div>
                                        <div className="col imgCont p-0">
                                            <div className="imgPlace  h-75  text-center">
                                                <img src="https://m.media-amazon.com/images/I/41cBxvyxbnL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>



                                        </div>
                                        <div className="col imgCont p-0">
                                            <div className="imgPlace  h-75  text-center">
                                                <img src="https://m.media-amazon.com/images/I/51TNfStjONL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>



                                        </div>
                                        <div className="col imgCont p-0">
                                            <div className="imgPlace  h-75  text-center">
                                                <img src="https://m.media-amazon.com/images/I/41iNZltBmzL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>



                                        </div>
                                    </div>


                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className=" row">
                                        <div className="col imgCont p-0">
                                            <div className="imgPlace  h-75  text-center">
                                                <img src="https://m.media-amazon.com/images/I/51cW5TXLxEL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>



                                        </div>
                                        <div className="col imgCont p-0">
                                            <div className="imgPlace  h-75  text-center">
                                                <img src="https://m.media-amazon.com/images/I/41kdLbkq5cL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>



                                        </div>
                                        <div className="col imgCont p-0">
                                            <div className="imgPlace  h-75  text-center">
                                                <img src="https://m.media-amazon.com/images/I/41OGHLFCRPL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>



                                        </div>
                                        <div className="col imgCont p-0">
                                            <div className="imgPlace  h-75  text-center">
                                                <img src="https://m.media-amazon.com/images/I/514vsca18gL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>



                                        </div>
                                        <div className="col imgCont p-0">
                                            <div className="imgPlace  h-75  text-center">
                                                <img src="https://m.media-amazon.com/images/I/41ATg85WOeL.__AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>



                                        </div>
                                        <div className="col imgCont p-0">
                                            <div className="imgPlace  h-75  text-center">
                                                <img src="https://m.media-amazon.com/images/I/5102k1Hur3L.__AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                            </div>



                                        </div>
                                    </div>


                                </Carousel.Item>
                            </Carousel>

                        </div>
                        {/* new row */}

                        <div className=" row a_main_bottom_1  mt-3 p-3   ">
                            <div className="col main_col p-2 mr_col " style={{ width: "304px" }}>
                                <div className="a_mainbox1 p-3">

                                    <div className="a_mainbox1_inner w-100 h-100  ">
                                        <div className="row m-0  gardenOutdoor "   >
                                            <div className="col-12 ">
                                                <h5 className="fw-bold">Up to 50% off | Garden & outdoor</h5>
                                            </div>
                                        </div>

                                        <div className="col  p-0  " style={{ height: "314px" }}>
                                            <a href="#detail" className="rounded-0 p-0 m-0 btn  w-100" style={{ height: "95%" }}>
                                                <img className=" img-fluid  w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/CategorycardPC/Gardendecor379x304._SY304_CB432664123_.jpg" alt="img..." />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col main_col p-2 mr_col ms-2 " style={{ width: "304px" }}>
                                <div className="a_mainbox1 p-3 me-0">
                                    <div className="a_mainbox1_inner w-100 h-100 ">
                                        <div className="a_mainbox1_inner w-100 h-100  ">
                                            <div className="row m-0  " style={{ height: "65px" }} >
                                                <div className="col-12 p-0 ">
                                                    <h4 className=" mt-2 mb-4 d-inline-block m-0 w-100 fw-bolder " style={{ fontSize: "18px" }}  > &nbsp;  Top rated, premium <br />  &nbsp;  quality | Amazon Brands </h4>
                                                </div>
                                            </div>
                                            <div className="row m-0 a_toplinks">
                                                <div className="col-6  p-0  mt-2 ">
                                                    <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                        <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg" alt="img..." />
                                                        <p className=" accFont ">Home products

                                                        </p>
                                                    </a>

                                                </div>
                                                <div className="col-6  p-0  mt-2 ">
                                                    <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                        <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/pbbaupbgw/xcm_banners_furniture_186x116_186x116_in-en._SY116_CB666250402_.jpg" alt="img..." />
                                                        <p className=" accFont ">
                                                            Furniture
                                                        </p>
                                                    </a>

                                                </div>
                                                <div className="col-6  p-0 mt-2  ">
                                                    <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                        <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg" alt="img..." />
                                                        <p className="accFont ">
                                                            Daily essentials
                                                        </p>
                                                    </a>

                                                </div>
                                                <div className="col-6  p-0  mt-2 ">
                                                    <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                        <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg" alt="img..." />
                                                        <p className="accFont ">
                                                            Clothing essentials
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col main_col p-2 ms-1 " style={{ width: "304px" }}>
                                <div className="a_mainbox1 p-3">
                                    <div className="a_mainbox1_inner w-100 h-100 m-0 p-0 ">
                                        <div className="a_mainbox1  m-0 ">
                                            <div className="a_mainbox1_inner w-100 h-100 ">
                                                <div className="a_mainbox1_inner w-100 h-100  ">
                                                    <div className="row m-0  mt-2 " style={{ height: "65px" }} >
                                                        <div className="col-12 p-0 ">
                                                            <h4 className=" mt-2 mb-3 d-inline-block m-0 w-100 fw-bold " style={{ fontSize: "20px" }}  >  &nbsp;Top picks for your home </h4>
                                                        </div>
                                                    </div>
                                                    <div className="row m-0 ">
                                                        <div className="col-6  p-0  mt-2 ">
                                                            <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="img..." />
                                                                <p className=" accFont ">ACs

                                                                </p>
                                                            </a>

                                                        </div>
                                                        <div className="col-6  p-0  mt-2 ">
                                                            <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="img..." />
                                                                <p className=" accFont ">
                                                                    Refrigerators
                                                                </p>
                                                            </a>

                                                        </div>
                                                        <div className="col-6  p-0 mt-2  ">
                                                            <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="img..." />
                                                                <p className="accFont ">
                                                                    Microwaves
                                                                </p>
                                                            </a>

                                                        </div>
                                                        <div className="col-6  p-0  mt-2 ">
                                                            <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" alt="img..." />
                                                                <p className="accFont ">
                                                                    Washing machines
                                                                </p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col main_col p-2 ms-1 " style={{ width: "304px" }}>
                                <div className="a_mainbox1 p-3">
                                    <div className="a_mainbox1_inner w-100 h-100 m-0 p-0 ">
                                        <div className="a_mainbox1  m-0 ">
                                            <div className="a_mainbox1_inner w-100 h-100 ">
                                                <div className="a_mainbox1_inner w-100 h-100  ">
                                                    <div className="row m-0  mt-2 " style={{ height: "65px" }} >
                                                        <div className="col-12 p-0 ">
                                                            <h4 className=" mt-2 mb-3 d-inline-block m-0 w-100 fw-bold " style={{ fontSize: "20px" }}  > &nbsp; Cookware & dining </h4>
                                                        </div>
                                                    </div>
                                                    <div className="row m-0 ">
                                                        <div className="col-6  p-0  mt-2 ">
                                                            <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__1_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg" alt="img..." />
                                                                <p className=" accFont ">Gas stoves

                                                                </p>
                                                            </a>

                                                        </div>
                                                        <div className="col-6  p-0  mt-2 ">
                                                            <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__2_1573567224_jpg_LOWER_QL85_._SY116_CB448746415_.jpg" alt="img..." />
                                                                <p className=" accFont ">
                                                                    Cookware
                                                                </p>
                                                            </a>

                                                        </div>
                                                        <div className="col-6  p-0 mt-2  ">
                                                            <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_3_copyx400x2C5x_1573713358_jpg_LOWER_QL85_._SY116_CB448746425_.jpg" alt="img..." />
                                                                <p className="accFont ">
                                                                    Kitchen storage
                                                                </p>
                                                            </a>

                                                        </div>
                                                        <div className="col-6  p-0  mt-2 ">
                                                            <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__4_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg" alt="img..." />
                                                                <p className="accFont ">
                                                                    Tableware
                                                                </p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ height: "20px", "border": "none", "margin": "0px", "background": "transparent" }} />
                            <div className=" row m-0 " style={{ height: "253px" }}>
                                <div className="col ">
                                    <a href="/" className="text-center d-block" >
                                        <img className="" src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="...img" />
                                    </a>
                                </div>
                            </div>
                            <hr style={{ height: "20px", "border": "none", "margin": "0px", "background": "transparent" }} />

                            {/* new row start of accessories */}

                            <div className="row a_main_bottom_1 p-0" >
                                <div className="col bg-white  ms-2  pt-4 pb-4 ps-3  " style={{ height: "421px", "width ": "313px" }} >
                                    <div className="home_accessories">
                                        <div className="main_header ">
                                            <h5 className="fw-bold  mb-2 ms-1 " style={{ fontSize: "19px" }} >Up to 60% off | Fitness essentials to set up your </h5>
                                        </div>

                                        <a href="/"  >
                                            <img style={{ width: "274px", height: "278px" }} src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_379x304_Compressed._SY304_CB448278349_.jpg" className=" " alt="img..." />
                                        </a>

                                    </div>
                                </div>
                                <div className="col bg-white  ms-3 pt-4 pb-4  ps-3 " style={{ height: "421px", "width ": "313px" }} >
                                    <div className="home_accessories">
                                        <div className="main_header ">
                                            <h5 className="fw-bold  mb-2 ms-1 " style={{ fontSize: "19px" }} >Up to 50% off | Chimneys </h5>
                                        </div>

                                        <a href="/"  >
                                            <img style={{ width: "274px", height: "278px" }} src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/Chimney_GW_CC_379x304._SY304_CB427965740_.jpg" className=" mt-3 " alt="img..." />
                                        </a>

                                    </div>
                                </div>
                                <div className="col bg-white  ms-3 pt-4 pb-4 ps-3  " style={{ height: "421px", "width ": "313px" }} >
                                    <div className="home_accessories">
                                        <div className="main_header ">
                                            <h5 className="fw-bold mb-2 ms-1 " style={{ fontSize: "19px" }} >Start a hobby in photography</h5>
                                        </div>

                                        <a href="/"  >
                                            <img style={{ width: "274px", height: "278px" }} src="https://images-eu.ssl-images-amazon.com/images/G/31/Cameras/MSO/379x304_pc_card_1._SY304_CB643056800_.jpg" className=" mt-3 " alt="img..." />
                                        </a>

                                    </div>
                                </div>
                                <div className="col bg-white  ms-3 pt-4 pb-4  ps-3 " style={{ height: "421px" }} >
                                    <div className="home_accessories">
                                        <div className="main_header ">
                                            <h5 className="fw-bold mb-2 ms-1 mb-2" style={{ fontSize: "19px" }} >Value Packs under ₹599 | Amazon Brands & more</h5>
                                        </div>

                                        <a href="/"  >
                                            <img style={{ width: "274px", height: "278px" }} src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2021/wrs/mencombo_low._SY304_CB666768535_.jpg" className=" " alt="img..." />
                                        </a>

                                    </div>
                                </div>

                            </div>


                        </div>
                        {/* <hr style={{ height: "20px", "border": "none", "margin": "0px", "background": "transparent" }} /> */}

                        {/* New Carousel   */}

                        <div className="a_main_bottom_4  mt-3 p-3 bg-white   ">
                            <div className="todays mb-4 ">
                                <h3 className="float-start fs-4 fw-normal">For the well-being of your loved ones</h3>
                            </div>

                            <div id="carouselExampleControls4" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div className=" row">
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/41DlRqyWt3L._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/41tdg5E6B1S._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/41sDV3dti-L._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/41sQt1ScAJS._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/5171P+N8tfL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont  p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/41LG0UF6w-S._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className=" row">
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/41VrJz9fHkL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/51opC1Qk-GL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/41ZXqDf9D4S._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/41cBxvyxbnL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/51TNfStjONL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/41iNZltBmzL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className=" row">
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/51cW5TXLxEL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/41kdLbkq5cL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/41OGHLFCRPL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/514vsca18gL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/41ATg85WOeL.__AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/5102k1Hur3L.__AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev carouselPrev4" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon sprtSht_arrow_prev" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next carouselNext4" type="button" data-bs-target="#carouselExampleControls4" data-bs-slide="next">
                                    <span class="carousel-control-next-icon sprtSht_arrow_next " aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>


                        </div>

                        <div className="a_main_bottom_4  mt-3 p-3 bg-white   ">
                            <div className="todays mb-4 ">
                                <h3 className="float-start fs-4 fw-normal mb-3">Up to 65% off | Refurbished laptops</h3>
                            </div>

                            <div id="carouselExampleControls5" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div className=" row">
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/61BeBTB41DL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/31deLL-f2IL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/61Oa2SVfjWL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/71GO1kcv8vS._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/610YYIikTyL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className=" row">
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/31deLL-f2IL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/61R6kEAt-9S._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/61dNyIyqghL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/61zUVkVjM8L._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/71AFVwHNQLL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className=" row">
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/419zrO+4FxL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/71dG2zTOI6L._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/71C41fSti6L._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/71BmiD1dzWL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/61gz6yarchL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                            <div className="col imgCont p-0">
                                                <div className="imgPlace  h-75  text-center">
                                                    <img src="https://m.media-amazon.com/images/I/51BWw9fnsCL._AC_SY200_.jpg" className="img-fluid  h-100 " alt="img..." />
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev carouselPrev5" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon sprtSht_arrow_prev" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next carouselNext5" type="button" data-bs-target="#carouselExampleControls5" data-bs-slide="next">
                                    <span class="carousel-control-next-icon sprtSht_arrow_next " aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>

                            <div className="row mt-4 mb-4 ">
                                <div className="col text-center ">
                                    <a href="/">
                                        <img src={imgBanner} alt="img..." />
                                    </a>
                                </div>
                            </div>

                            {/* main bottom 6 */}
                            <div className=" row a_main_bottom_1  mt-3 p-3   ">
                                <div className="col main_col p-2 mr_col " style={{ width: "304px" }}>
                                    <div className="a_mainbox1 p-3">

                                        <div className="a_mainbox1_inner w-100 h-100  ">
                                            <div className="row m-0  gardenOutdoor "   >
                                                <div className="col-12 ">
                                                    <h5 className=" w-100 fw-bolder mb-4" style={{ fontSize: "19px" }}>Up to 60% off | Top deals on stationery supplies</h5>
                                                </div>
                                            </div>

                                            <div className="col  p-0  " style={{ height: "314px" }}>
                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  w-100" >
                                                    <img className=" img-fluid  w-100" style={{ height: "276px" }} src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OP/BTS/D14264916_IN_Printers_OP_GW_revamp_nov19_dashbord_Card_1x_4._SY304_CB667376048_.jpg" alt="img..." />
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col main_col p-2 mr_col ms-2 " style={{ width: "304px" }}>
                                    <div className="a_mainbox1 p-3 me-0">
                                        <div className="a_mainbox1_inner w-100 h-100 ">
                                            <div className="a_mainbox1_inner w-100 h-100  ">
                                                <div className="row m-0  " style={{ height: "65px" }} >
                                                    <div className="col-12 p-0 ">
                                                        <h4 className=" mt-2 mb-4 d-inline-block m-0 w-100 fw-bolder " style={{ fontSize: "18px" }}  > &nbsp;  Top rated, premium <br />  &nbsp;  quality | Amazon Brands </h4>
                                                    </div>
                                                </div>
                                                <div className="row m-0 a_toplinks">
                                                    <div className="col-6  p-0  mt-2 ">
                                                        <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                            <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg" alt="img..." />
                                                            <p className=" accFont ">Home products

                                                            </p>
                                                        </a>

                                                    </div>
                                                    <div className="col-6  p-0  mt-2 ">
                                                        <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                            <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/pbbaupbgw/xcm_banners_furniture_186x116_186x116_in-en._SY116_CB666250402_.jpg" alt="img..." />
                                                            <p className=" accFont ">
                                                                Furniture
                                                            </p>
                                                        </a>

                                                    </div>
                                                    <div className="col-6  p-0 mt-2  ">
                                                        <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                            <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg" alt="img..." />
                                                            <p className="accFont ">
                                                                Daily essentials
                                                            </p>
                                                        </a>

                                                    </div>
                                                    <div className="col-6  p-0  mt-2 ">
                                                        <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                            <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg" alt="img..." />
                                                            <p className="accFont ">
                                                                Clothing essentials
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col main_col p-2 ms-1 " style={{ width: "304px" }}>
                                    <div className="a_mainbox1 p-3">
                                        <div className="a_mainbox1_inner w-100 h-100 m-0 p-0 ">
                                            <div className="a_mainbox1  m-0 ">
                                                <div className="a_mainbox1_inner w-100 h-100 ">
                                                    <div className="a_mainbox1_inner w-100 h-100  ">
                                                        <div className="row m-0  mt-2 " style={{ height: "65px" }} >
                                                            <div className="col-12 p-0 ">
                                                                <h4 className=" mt-2 mb-3 d-inline-block m-0 w-100 fw-bold " style={{ fontSize: "20px" }}  >  &nbsp;Top picks for your home </h4>
                                                            </div>
                                                        </div>
                                                        <div className="row m-0 ">
                                                            <div className="col-6  p-0  mt-2 ">
                                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="img..." />
                                                                    <p className=" accFont ">ACs

                                                                    </p>
                                                                </a>

                                                            </div>
                                                            <div className="col-6  p-0  mt-2 ">
                                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="img..." />
                                                                    <p className=" accFont ">
                                                                        Refrigerators
                                                                    </p>
                                                                </a>

                                                            </div>
                                                            <div className="col-6  p-0 mt-2  ">
                                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="img..." />
                                                                    <p className="accFont ">
                                                                        Microwaves
                                                                    </p>
                                                                </a>

                                                            </div>
                                                            <div className="col-6  p-0  mt-2 ">
                                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" alt="img..." />
                                                                    <p className="accFont ">
                                                                        Washing machines
                                                                    </p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col main_col p-2 ms-1 " style={{ width: "304px" }}>
                                    <div className="a_mainbox1 p-3">
                                        <div className="a_mainbox1_inner w-100 h-100 m-0 p-0 ">
                                            <div className="a_mainbox1  m-0 ">
                                                <div className="a_mainbox1_inner w-100 h-100 ">
                                                    <div className="a_mainbox1_inner w-100 h-100  ">
                                                        <div className="row m-0  mt-2 " style={{ height: "65px" }} >
                                                            <div className="col-12 p-0 ">
                                                                <h4 className=" mt-2 mb-3 d-inline-block m-0 w-100 fw-bold " style={{ fontSize: "20px" }}  > &nbsp; Cookware & dining </h4>
                                                            </div>
                                                        </div>
                                                        <div className="row m-0 ">
                                                            <div className="col-6  p-0  mt-2 ">
                                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__1_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg" alt="img..." />
                                                                    <p className=" accFont ">Gas stoves

                                                                    </p>
                                                                </a>

                                                            </div>
                                                            <div className="col-6  p-0  mt-2 ">
                                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__2_1573567224_jpg_LOWER_QL85_._SY116_CB448746415_.jpg" alt="img..." />
                                                                    <p className=" accFont ">
                                                                        Cookware
                                                                    </p>
                                                                </a>

                                                            </div>
                                                            <div className="col-6  p-0 mt-2  ">
                                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_3_copyx400x2C5x_1573713358_jpg_LOWER_QL85_._SY116_CB448746425_.jpg" alt="img..." />
                                                                    <p className="accFont ">
                                                                        Kitchen storage
                                                                    </p>
                                                                </a>

                                                            </div>
                                                            <div className="col-6  p-0  mt-2 ">
                                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__4_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg" alt="img..." />
                                                                    <p className="accFont ">
                                                                        Tableware
                                                                    </p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" row a_main_bottom_1  p-3 pb-2  ">
                                <div className="col main_col p-2 mr_col " style={{ width: "304px" }}>
                                    <div className="a_mainbox1 p-3">

                                        <div className="a_mainbox1_inner w-100 h-100  ">
                                            <div className="row m-0  gardenOutdoor "   >
                                                <div className="col-12 ">
                                                    <h5 className=" w-100 fw-bolder mb-4" style={{ fontSize: "19px" }}>JOIN PRIME today at ₹999/year</h5>
                                                </div>
                                            </div>

                                            <div className="col  p-0  " style={{ height: "314px" }}>
                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  w-100" >
                                                    <img className=" img-fluid  w-100" style={{ height: "276px" }} src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/LeptonPhase4/acq/DesktopGateway_CategoryCard_379X3045._SY304_CB638167136_.jpg" alt="img..." />
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="col main_col p-2 mr_col ms-2 " style={{ width: "304px" }}>
                                    <div className="a_mainbox1 p-3 me-0">
                                        <div className="a_mainbox1_inner w-100 h-100 ">
                                            <div className="a_mainbox1_inner w-100 h-100  ">
                                                <div className="row m-0  " style={{ height: "65px" }} >
                                                    <div className="col-12 p-0 ">
                                                        <h4 className=" mt-2 mb-4 d-inline-block m-0 w-100 fw-bolder " style={{ fontSize: "18px" }}  > &nbsp;  Get set play | Videogames </h4>
                                                    </div>
                                                </div>
                                                <div className="row m-0 a_toplinks">
                                                    <div className="col-6  p-0  mt-2 ">
                                                        <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                            <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MayARTMedia21/Nitendo-1x._SY116_CB664265200_.jpg" alt="img..." />
                                                            <p className=" accFont ">Consoles | Nintendo, Oculus & more

                                                            </p>
                                                        </a>

                                                    </div>
                                                    <div className="col-6  p-0  mt-2 ">
                                                        <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                            <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MayARTMedia21/Games-1x._SY116_CB664265201_.jpg" alt="img..." />
                                                            <p className=" accFont ">
                                                                Top chart games
                                                            </p>
                                                        </a>

                                                    </div>
                                                    <div className="col-6  p-0 mt-2  ">
                                                        <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                            <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MayARTMedia21/Accessories-1x._SY116_CB664265201_.jpg" alt="img..." />
                                                            <p className="accFont ">
                                                                Play like a pro | Accessories
                                                            </p>
                                                        </a>

                                                    </div>
                                                    <div className="col-6  p-0  mt-2 ">
                                                        <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                            <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MayARTMedia21/Curency-1x._SY116_CB664265201_.jpg" alt="img..." />
                                                            <p className="accFont ">
                                                                Digital wallet, game pass & more
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col main_col p-2 ms-1 " style={{ width: "304px" }}>
                                    <div className="a_mainbox1 p-3">
                                        <div className="a_mainbox1_inner w-100 h-100 m-0 p-0 ">
                                            <div className="a_mainbox1  m-0 ">
                                                <div className="a_mainbox1_inner w-100 h-100 ">
                                                    <div className="a_mainbox1_inner w-100 h-100  ">
                                                        <div className="row m-0  mt-2 " style={{ height: "65px" }} >
                                                            <div className="col-12 p-0 ">
                                                                <h4 className=" mt-2 mb-3 d-inline-block m-0 w-100 fw-bold " style={{ fontSize: "20px" }}  >  &nbsp;Echo devices | Smart speaker with Alexa </h4>
                                                            </div>
                                                        </div>
                                                        <div className="row m-0 ">
                                                            <div className="col-6  p-0  mt-2 ">
                                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/FTV-GW/MSO/QC--PC-white1X._SY116_CB660361586_.jpg" alt="img..." />
                                                                    <p className=" accFont ">Echo Dot

                                                                    </p>
                                                                </a>

                                                            </div>
                                                            <div className="col-6  p-0  mt-2 ">
                                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/PDHINDI/part2/QC-02_1X._SY116_CB660513597_.jpg" alt="img..." />
                                                                    <p className=" accFont ">
                                                                        All-new Echo Dot
                                                                    </p>
                                                                </a>

                                                            </div>
                                                            <div className="col-6  p-0 mt-2  ">
                                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/PDHINDI/part2/QC-03_1X._SY116_CB660513597_.jpg" alt="img..." />
                                                                    <p className="accFont ">
                                                                        Echo Show 5
                                                                    </p>
                                                                </a>

                                                            </div>
                                                            <div className="col-6  p-0  mt-2 ">
                                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/PDHINDI/part2/QC-04_1X._SY116_CB660513597_.jpg" alt="img..." />
                                                                    <p className="accFont ">
                                                                        Amazon Echo
                                                                    </p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col main_col p-2 ms-1 " style={{ width: "304px" }}>
                                    <div className="a_mainbox1 p-3">
                                        <div className="a_mainbox1_inner w-100 h-100 m-0 p-0 ">
                                            <div className="a_mainbox1  m-0 ">
                                                <div className="a_mainbox1_inner w-100 h-100 ">
                                                    <div className="a_mainbox1_inner w-100 h-100  ">
                                                        <div className="row m-0  mt-2 " style={{ height: "65px" }} >
                                                            <div className="col-12 p-0 ">
                                                                <h4 className=" mt-2 mb-3 d-inline-block m-0 w-100 fw-bold " style={{ fontSize: "20px" }}  > &nbsp;Up to 45% off | Shop by Pet </h4>
                                                            </div>
                                                        </div>
                                                        <div className="row m-0 ">
                                                            <div className="col-6  p-0  mt-2 ">
                                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/Dog_186X116._SY116_CB644270746_.jpg" alt="img..." />
                                                                    <p className=" accFont ">Dog supplies

                                                                    </p>
                                                                </a>

                                                            </div>
                                                            <div className="col-6  p-0  mt-2 ">
                                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/Cat_186X116._SY116_CB644270746_.jpg" alt="img..." />
                                                                    <p className=" accFont ">
                                                                        Cat supplies
                                                                    </p>
                                                                </a>

                                                            </div>
                                                            <div className="col-6  p-0 mt-2  ">
                                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/bird_186X116._SY116_CB644270746_.jpg" alt="img..." />
                                                                    <p className="accFont ">
                                                                        Birds & small animals
                                                                    </p>
                                                                </a>

                                                            </div>
                                                            <div className="col-6  p-0  mt-2 ">
                                                                <a href="#detail" className="rounded-0 p-0 m-0 btn  h-100 w-100">
                                                                    <img className=" img-fluid h-75 w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/fish_186X116._SY116_CB644270746_.jpg" alt="img..." />
                                                                    <p className="accFont ">
                                                                        Aquarium accessories
                                                                    </p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="container-fluid position-relative " style={{ width: "1348px", right: "36px" }}>
                                <div className="row bg-white ">
                                    <div className="col text-center container-fluid pt-3 pb-3 ">
                                    <hr className=""/>
                                        <p style={{fontSize:"13px"}} className="mb-2">See personalized recommendations</p>
                                        <button className="sign_bottom_main fw-bold border rounded-1" style={{border:"none" , fontSize:"12px" , background: "#FFCE52 " , width:"230px", height:"28px"}}>Sign in</button>
                                        <p style={{fontSize:"11px"}} className="mt-1"> New customer? 
                                        <span className="text-primary">
                                            Start here.
                                        </span>
                                         </p>
                                    <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Layout>
        </>
    )
}

export default Home
