import { faEnvelope, faSearch, faStar, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useState } from 'react'
// import Footer from '../Footer'
// import Header from '../Header'
import Layout from '../Layout'
// import Layout from '../Layout'
import img1 from '../../assets/info.svg'
import ReactImageMagnify from 'react-image-magnify';
import watchImg1200 from '../../assets/wristwatch2.jpg'
import watchImg300 from '../../assets/wristwatch.jpg'
import Img2 from '../../assets/main_top_banner.jpg'
import Img3 from '../../assets/tr.png'
import V from '../../assets/asus.mkv'

const Detail = () => {

    const scrollSetFix = {
        prodScrollFix: ' position-relative '
    }

    const [scroll, setScroll] = useState(scrollSetFix)

    useEffect(() => {
        console.log("add");
        window.addEventListener('scroll', detailHandleScroll)
        return () => {
            console.log("remove scroll")
            window.removeEventListener('scroll', detailHandleScroll)
        }
    });

    const detailHandleScroll = () => {
        console.log("OKOKOKOK " + window.scrollY)
        if (window.scrollY < 90) {
            setScroll({ prodScrollFix: "position-relative top-0 " })
        }
        else if (window.scrollY >= 89 && window.scrollY <= 1100) {
            setScroll({ prodScrollFix: "position-fixed top-0 " })
        } else {
            setScroll({ prodScrollFix: " position-relative t1225 " })
        }

    }

    return (

        <>

            <Layout>
                <div className="modal prodVideoBox " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl  " >
                        <div className="modal-content">
                            <div className="modal-header videoAndImage mx-auto pb-0">
                                <ul className="nav nav-pills vidAndImg position-relative ">
                                    <li className="nav-item">
                                        <a className="nav-link rounded-0 fw-bold " data-bs-toggle="pill" href="#home">VIDEOS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link rounded-0 fw-bold " data-bs-toggle="pill" href="#menu1">IMAGES</a>
                                    </li>

                                </ul>
                                <button type="button" className="btn-close videoClsBtn" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body  prodVideoBoxBody mx-auto border-top ">


                                <div className="tab-content">
                                    <div className="tab-pane container active" id="home">
                                        <div className="row m-0 ">
                                            <div className="col-7 h-100 ">
                                                <video className="img-fluid h-100 w-100 rounded-1  " controls>
                                                    <source src={V} type="video/mp4" />
                                                    <source src="movie.ogg" type="video/ogg" />
                                                    Your browser does not support the video tag.
                                                </video>
                                                <h6> ASUS ROG Zephyrus G14, 14" FHD 120Hz, Ryzen 5 4600HS, GTX 1650Ti 4GB Graphics, Gaming laptop </h6>
                                                <p> Amazon Videos </p>
                                            </div>
                                            <div className="col-5 h-100 p-0 h-75 ">
                                                {/* <h6> ASUS ROG Zephyrus G14 AMD Ryzen 5 4600HS 14 inches FHD 120Hz, NVIDIA GTX 1650Ti 4GB Graphics, Gaming Laptop (8GB/512GB SSD/Office 2019/Windows 10/White/Anime Matrix/1.7 Kg), GA401II-HE127TS </h6> */}
                                                <span className="badge bg-secondary w-100 text-dark text-start " style={{ background: "#EAEDED" }}>Videos for this product </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane container fade" id="menu1">
                                        <div className="row overflow-hidden">
                                            <div className="col-9 h-100 ">
                                                <img src="https://m.media-amazon.com/images/I/91Oam4MucXL._SL1500_.jpg" className="img-fluid imgLaptop position-relative " alt="..img" />
                                            </div>
                                            <div className="col-3 h-100 ">
                                                <span className="fw-bolder"> ASUS ROG Zephyrus G14 AMD Ryzen 5 4600HS 14 inches FHD 120Hz, NVIDIA GTX 1650Ti 4GB Graphics, Gaming Laptop (8GB/512GB SSD/Office 2019/Windows 10/White/Anime Matrix/1.7 Kg), GA401II-HE127TS</span>

                                                <p>Pattern name: <span>Laptop</span> </p>

                                                <ul className="nav mb-2 "  >
                                                    <li className="nav-item  prImgHover prImgHoverNone">
                                                        <a className="nav-link px-0 m-1 " href="#detail"><img src="https://m.media-amazon.com/images/I/41vBR51y8jL._AA50_.jpg" alt="img... " className="img-fluid " /></a>
                                                    </li>

                                                    <li className="nav-item prImgHover prImgHoverNone ">
                                                        <a className="nav-link px-0 m-1 " href="#detail"><img src="https://m.media-amazon.com/images/I/51Jj+Qfs-zL._AA50_.jpg" alt="img... " className="img-fluid " /></a>
                                                    </li>
                                                    <li className="nav-item prImgHover prImgHoverNone ">
                                                        <a className="nav-link px-0 m-0 " href="#detail"><img src="https://m.media-amazon.com/images/I/51OMV88VFLL._AA50_.jpg" alt="img... " className="img-fluid " /></a>
                                                    </li>
                                                    <li className="nav-item prImgHover prImgHoverNone ">
                                                        <a className="nav-link px-0 m-0 " href="#detail"><img src="https://m.media-amazon.com/images/I/41PTXuJIfgL._AA50_.jpg" alt="img... " className="img-fluid " /></a>
                                                    </li>

                                                </ul>
                                                <ul className="nav"  >
                                                    <li className="nav-item prImgHover prImgHoverNone ">
                                                        <a className="nav-link px-0 m-1  " href="#detail"><img src="https://m.media-amazon.com/images/I/41IDf6ZPXaL._AA50_.jpg" alt="img... " className="img-fluid " /></a>
                                                    </li>
                                                    <li className="nav-item prImgHover prImgHoverNone ">
                                                        <a className="nav-link px-0 m-1 " href="#detail"><img src="https://m.media-amazon.com/images/I/41upE6fqmbL._AA50_.jpg" alt="img... " className="img-fluid " /></a>
                                                    </li>
                                                    <li className="nav-item prImgHover prImgHoverNone ">
                                                        <a className="nav-link px-0 m-0 " href="#detail"><img src="https://m.media-amazon.com/images/I/41wu2KRhtML._AA50_.jpg" alt="img... " className="img-fluid " /></a>
                                                    </li>
                                                    <li className="nav-item prImgHover prImgHoverNone ">
                                                        <a className="nav-link px-0 m-1 " href="#detail" > <img src="https://m.media-amazon.com/images/I/51z0SkOXqmL._AA50_.jpg" alt="img... " className="img-fluid " /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="a_main bg-white mx-auto a_dtl_main ">
                    <div className="a_dtl_top_banner tbdr">
                        <img src={Img2} className="mx-auto d-block " alt="banner..." />
                    </div>
                    <div className="dtl_top_consider_this_item tbdr d-none ">
                        <h3 >Consider these available items</h3>
                        <div className="row m-0 h-75  ">
                            <div className="col-4 p-0 tbdr">
                                <a href="/detail" className="btn btn-danger rounded-0 w-100 border-0 h-100 "> </a>
                            </div>
                            <div className="col-4 p-0 tbdr">
                                <a href="/detail" className="btn btn-danger rounded-0 w-100 border-0 h-100 "> </a>
                            </div>
                            <div className="col-4 p-0 tbdr">
                                <a href="/detail" className="btn btn-danger rounded-0 w-100 border-0 h-100 "> </a>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0 a_dtl_prodCont">
                        <div className="col-10 p-0 tbdr">
                            <div className="row m-0  h-100">
                                <div className="col-1 p-0 tbdr">
                                    <div>

                                    </div>
                                    <ul className={" a_dtl_thumbnail nav flex-column  mx-auto  " + scroll.prodScrollFix}>
                                        <li className="nav-item">
                                            <a className="nav-link p-0 mb-2 mt-1 border " href="/detail">
                                                <img src="https://m.media-amazon.com/images/I/61TlKHyOHLL._SL1000_.jpg " className="img-fluid" alt="" />
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link p-0 mb-2  mt-1 border overflow-hidden  " data-bs-toggle="modal" data-bs-target="#exampleModal" href="/detail">
                                                <img src={Img3} className=" play_btn img-fluid position-absolute" alt="play" />
                                                <img src="https://m.media-amazon.com/images/I/61TlKHyOHLL._SL1000_.jpg " className="img-fluid  " alt="..." />
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link p-0 mb-2  mt-1 border " href="/detail">
                                                <img src="https://m.media-amazon.com/images/I/61TlKHyOHLL._SL1000_.jpg " className="img-fluid" alt="..." />
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link p-0 mb-2 mt-1 border " href="/detail">
                                                <img src="https://m.media-amazon.com/images/I/61TlKHyOHLL._SL1000_.jpg " className="img-fluid" alt="" />
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                                <div className="col-6 p-0 tbdr">
                                    <div className={" d-none a_detail_proMainImg  " + scroll.prodScrollFix}>
                                        <ReactImageMagnify {...{
                                            smallImage: {
                                                alt: 'Wristwatch by Ted Baker London',
                                                isFluidWidth: true,
                                                src: watchImg300
                                            },
                                            largeImage: {
                                                src: watchImg1200,
                                                width: 1200,
                                                height: 1800
                                            },
                                            shouldUsePositiveSpaceLens: true
                                        }} />
                                        {/* <img src="https://m.media-amazon.com/images/I/61TlKHyOHLL._SL1000_.jpg" className="img-fluid" alt="img..." /> */}
                                    </div>
                                </div>
                                <div className="col-5 p-0 laptop tbdr">
                                    <h4>Lenovo IdeaPad Slim 3 2021 11th Gen Intel Core i5 15.6 FHD Thin & Light Laptop (8GB/512GB SSD/Windows 10/MS Office/Backlit Keyboard/2 Year Warranty/Arctic Grey/1.65Kg), 82H801CWIN</h4>
                                    <a href="/" className="btn btn-link text-start d-block" style={{ color: "#007185" }}>Visit the Lenovo Store </a>
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                                    <FontAwesomeIcon icon={faStar} className="text-warning" />

                                    <span style={{ color: "#007185" }} > 4 Ratings </span>
                                    <hr />
                                    <span className="d-block text-start" style={{ color: "#565959" }} > <span className="text-decoration-line-through"> M.R.P.: ₹79,890.00 </span>  </span>
                                    <span className="d-block text-start " style={{ color: "#565959" }} >Price: <span style={{ color: "#B12704" }} > ₹57,990.00 </span> </span>
                                    <span className="d-block text-start" style={{ color: "565959" }} >You Save: <span style={{ color: "#B12704" }} > ₹21,900.00(27%) </span> </span>
                                    <ul className="list-group">
                                        <li className="list-group-item"> <span style={{ color: "565959" }}>Save</span>  Extra with 4 offers</li>
                                        <li className="list-group-item">EMI starts at ₹2,777. No Cost EMI available EMI</li>
                                        <li className="list-group-item">Exchange Offer: Up to ₹17,950.00 off on Exchange</li>
                                        <li className="list-group-item">
                                            <a href="/" >See 3 more</a>
                                        </li>
                                    </ul>

                                    <ul className="nav ">
                                        <li className="nav-item m-0">
                                            <a className="nav-link px-4 " href="/detail">
                                                <img style={{ height: "35px" }} src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" alt="...img" />
                                                <br /> <span > 7 Days Replacement</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link pe-3" href="/detail">
                                                <img style={{ height: "35px" }} src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png" alt="...img" />
                                                <br /> <span   >Amazon Delivered</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link pe-3" href="/detail">
                                                <img style={{ height: "35px" }} src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png" alt="...img" />
                                                <br /> <span > 2 Year Warranty</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link pe-3" href="/detail">
                                                <img style={{ height: "35px" }} src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/No_contact_delivery_final._CB432269791_.png" alt="...img" />
                                                <br /> <span > No-Contact Delivery</span>
                                            </a>
                                        </li>

                                    </ul>

                                    <a className="btn btn-link" href="#productInfo"> See more  product details</a>


                                </div>
                            </div>
                        </div>
                        <div className="col-2 tbdr p-0" >
                            <ul className=" nav ">
                                <li className="nav-item">
                                    <a className="nav-link " href="/detail">Share</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/detail"><FontAwesomeIcon icon={faEnvelope} /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/detail">
                                        <FontAwesomeIcon icon={'facebook-f'} size="2x" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="/detail"  >
                                        c
                                    </a>
                                </li>
                            </ul>

                            <form >
                                <div className="card">
                                    <div className="card-header ps-3">
                                        <div className="form-check  ">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                <span className="d-block text-dark">  Without Exchange </span>
                                                <span className="d-block text-danger">  Up to ₹ 17,000.00 off</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="card-body ps-3">
                                        <div className="form-check  ">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                <span className="d-block text-dark">  With Exchange </span>
                                                <span className="float-start d-inline-block  text-danger exchangeFont ">   ₹ 50,000.00 </span>  &nbsp;  <span className=" exchangeFont d-inline-block float-end  text-decoration-line-through">  ₹ 80,000.00 </span>
                                            </label>

                                            <div>
                                                <span className=" d-inline-block mb-3 "> Quantity: </span>
                                                <select className=" d-inline-block form-select form-select-sm " style={{ width: "33%" }} aria-label="Default select example">
                                                    <option value="1" selected> 1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </select>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <button className="btn btn-warning" type="button">Add to cart</button>
                                                <button className="btn " style={{ background: "#ffa41c" }} type="button"><span className="text-dark" style={{ outline: "none" }}> Buy now </span></button>
                                            </div>

                                        </div>
                                        <div className="form-check" >
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Default checkbox
                                            </label>
                                        </div>


                                    </div>
                                    <hr />
                                    <select className="form-select w-75 mb-3 mx-auto" aria-label="Default select example" >
                                        <option selected>Add to Wish List</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>

                                    <a href="/detail" className=" d-block  dtl_sponsored ">
                                        <div className="   dtl_sponsoredImg overflow-hidden">
                                            <img className="img-thumbnail" src="https://m.media-amazon.com/images/I/417BhGZxmEL.jpg" alt="...sponsored" />
                                        </div>
                                        <span className=" text-muted me-2 position-relative float-end"> Sponsored <img className="img-fluid  infoCircle" src={img1} alt="info" /> </span>

                                    </a>


                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="a_dtl_FreqBoughtTogether border-top border-bottom tbdr">
                        <h5>Frequently bought together</h5>
                        <nav aria-label="breadcrumb">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#home">
                                    <img src="https://images-eu.ssl-images-amazon.com/images/I/71S8U9VzLTL._AC_UL116_SR116,116_.jpg" alt="img..." />
                                </a></li>
                                <li className="breadcrumb-item" ><a href="#library">
                                    <img src="https://images-eu.ssl-images-amazon.com/images/I/51kdFjyPRAL._AC_UL116_SR116,116_.jpg" alt="img..." />
                                </a></li>
                            </ul>

                        </nav>
                        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
    This item: ASUS ROG Zephyrus G14 AMD Ryzen 5 4600HS 14 inches FHD 120Hz, NVIDIA GTX 1650Ti 4GB Graphics,... <span className="text-danger ">₹81,990.00</span>
                                   
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
  <label class="form-check-label" for="flexCheckChecked">
        Asus ROG BP1501 15.6-inch Gaming Laptop Backpack (Black) <span className="text-danger">₹1,499.00</span>
  </label>
</div>
                    </div>
                    <div className="a_dtl_havQ border-top  tbdr">
                        <h5> Have a question? </h5>
                        <p>Find answers in product info, Q&As, reviews </p>
                    </div>
                    <div className="a_dtl_prodRelItem border-top border-bottom tbdr">
                        <h5>Products Related to this item</h5>
                        <form className="  w-75 border rounded-3 " >
                            <div className="row m-0">
                                <div className="col-1 p-0 float-end ">
                                    <FontAwesomeIcon className="float-end me-2 mt-2" icon={faSearch} />
                                </div>
                                <div className="col-11 p-0 ">
                                    <input className=" havQInput border-0 form-control float-end form-control-sm  " />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="a_dtl_custAlsoRev border-top border-bottom tbdr">
                        c
                    </div>
                    <div className="a_dtl_prodInfo">


                        <div className="row">
                            <div className="col border-top">
                                <h5 id="productInfo" className="text-warning pt-2 pb-2">Product information</h5>

                                <table className="table pt-2 ">
                                    <thead>
                                        <tr className="border-top">
                                            <th className="table-light w-50" scope="col">#</th>
                                            <th scope="col">First</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className="table-light w-50" scope="row">1</th>
                                            <td>Mark</td>

                                        </tr>
                                        <tr>
                                            <th className="table-light w-50" scope="row">2</th>
                                            <td>Jacob</td>

                                        </tr>
                                        <tr>
                                            <th className="table-light w-50" scope="row">3</th>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col border-top">
                                <h5 className="text-warning pt-2 pb-2">Product information</h5>
                                <table className="table pt-2">

                                    <thead>
                                        <tr className="border-top">
                                            <th className="table-light w-50" scope="col">#</th>
                                            <th scope="col">First</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className="table-light w-50 " scope="row">1</th>
                                            <td >Mark</td>

                                        </tr>
                                        <tr>
                                            <th className="table-light w-50" scope="row">2</th>
                                            <td>Jacob</td>

                                        </tr>
                                        <tr>
                                            <th className="table-light w-50" scope="row">3</th>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                    <div className="a_dtl_custQnA tbdr">
                        <h5>Customer Question & Answers </h5>
                        <form >
                            <input className="form-control form-control-sm w-50" placeholder="Have a question? Search htmlFor answers " />
                        </form>
                    </div>
                    <div className="a_custReview tbdr "  >
                        <div className="row m-0 h-100">
                            <div className="col-4 tbdr ">
                                <div className="dtl_custReviewAside tbdr">
                                    <h5>Customer Reviews</h5>
                                    <table className="table progTab">
                                        <tbody>
                                            <tr>
                                                <td className="w-25">
                                                    <a href="/" style={{ color: "#007185" }} className=" text-decoration-none ">5 star</a>
                                                </td>
                                                <td className="w-50" >
                                                    <div className="  progPos progress bg-warning mb-3   " style={{ width: "73%" }} >
                                                        <div className="progress-bar " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td className=" w-25">
                                                    <a href="/" style={{ color: "#007185" }} className=" text-decoration-none "> 100% </a>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td className="w-25">
                                                    <a href="/" style={{ color: "#007185" }} className=" text-decoration-none ">5 star</a>
                                                </td>
                                                <td className="w-50">
                                                    <div className="progress  mb-3 bg-warning progPos  " style={{ width: "22%" }} >
                                                        <div className="progress-bar " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td className="w-25">

                                                    <a href="/" style={{ color: "#007185" }} className=" text-decoration-none "> 100% </a>

                                                </td>

                                            </tr>
                                            <tr>
                                                <td className="w-25">
                                                    <a href="/" style={{ color: "#007185" }} className=" text-decoration-none ">5 star</a>
                                                </td>
                                                <td className="w-50">
                                                    <div className="progress mb-3 progPos bg-warning  " style={{ width: "44%" }} >
                                                        <div className="progress-bar " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td className="w-25">
                                                    <a href="/" style={{ color: "#007185" }} className=" text-decoration-none "> 100% </a>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td className="w-25">
                                                    <a href="/" style={{ color: "#007185" }} className=" text-decoration-none ">5 star</a>
                                                </td>
                                                <td className="w-50">
                                                    <div className="progress mb-3 bg-warning progPos  " style={{ width: "100%" }}  >
                                                        <div className="progress-bar " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td className="w-25" >
                                                    <a href="/" style={{ color: "#007185" }} className=" text-decoration-none "> 100% </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                            <div className="col-8 tbdr">
                                <div className="review_img tbdr">
                                    <h5>Reviews With Images</h5>
                                </div>

                                {/* review from images */}

                                <h4>Top Reviews from India</h4>

                                <div className="a_indiviual_comment mt-3 tbdr">
                                    <div>
                                        <FontAwesomeIcon icon={faUserAlt} /> <span className="userName ">Vinod Kumar</span>

                                    </div>
                                    <div className="custIdEleg">
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />

                                        <a className="elegant text-decoration-none" href="/" style={{ color: "#007185" }}  > Elegant Design with Superb Features </a>

                                    </div>
                                    <span className="text-warning d-block" > Verified Purchase </span>

                                    <span className="reviewed">Reviewed in India on 26 May 2021 </span>
                                    <p> The whole experience from delivery to commissioning was completely seamless; the packaging is strong and very sturdy, using a lot of bio-degradable materials; the unboxing was a delight, and fixing the (included) wall mount was a piece of cake.

                                        bio-degradable materials; the unboxing was a delight, and fixing the (included) wall mount was a piece of cake.
                                        bio-degradable materials; the unboxing was a delight, and fixing the (included) wall mount was a piece of cake.
                                        bio-degradable materials; the unboxing was a delight, and fixing the (included) wall mount was a piece of cake.
                                        bio-degradable materials; the unboxing was a delight, and fixing the (included) wall mount was a piece of cake.
                                        bæio-degradable materials; the unboxing was a delight, and fixing the (included) wall mount was a piece of cake.
                                        bio-degradable materials; the unboxing was a delight, and fixing the (included) wall mount was a piece of cake.
                                        bio-degradable materials; the unboxing was a delight, and fixing the (included) wall mount was a piece of cake.
                                        bio-degradable materials;
                                        bio-degradable materials; the unboxing was a delight, and fixing the (included) wall mount was a piece of cake.
                                        bio-degradable materials; the unboxing was a delight, and fixing the (included) wall mount was a piece of cake.
                                        bio-degradable materials;



                                    </p>

                                    <span> 7 people found this helpful</span>

                                    <div>
                                        <button className="btn btn-light border " >Helpfull</button>
                                        <button className="btn ">Helpfull</button>
                                    </div>

                                </div>

                                <div className="a_indiviual_comment mt-5 tbdr">
                                    <div>
                                        <FontAwesomeIcon icon={faUserAlt} /> <span className="userName ">Ajay Kumar</span>

                                    </div>
                                    <div className="custIdEleg">
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />

                                        <a className="elegant text-decoration-none" href="/" style={{ color: "#007185" }}  > Elegant Design with Superb Features </a>

                                    </div>
                                    <span className="text-warning d-block" > Verified Purchase </span>

                                    <span className="reviewed">Reviewed in India on 26 May 2021 </span>
                                    <p> The whole experience from delivery to commissioning was completely seamless; the packaging is strong and very sturdy, using a lot of bio-degradable materials; the unboxing was a delight, and fixing the (included) wall mount was a piece of cake.

                                        bio-degradable materials; the unboxing was a delight, and fixing the (included) wall mount was a piece of cake.
                                        bio-degradable materials; the unboxing was a delight, and fixing the (included) wall mount was a piece of cake.
                                        bio-degradable materials; the unboxing was a delight, and fixing the (included) wall mount was a piece of cake.
                                        bio-degradable materials; the unboxing was a delight, and fixing the (included) wall mount was a piece of cake.
                                        bæio-degradable materials; the unboxing was a delight, and fixing the (included) wall mount was a piece of cake.
                                        bio-degradable materials; the unboxing was a delight, and fixing the (included) wall mount was a piece of cake.
                                        bio-degradable materials; the unboxing was a delight, and fixing the (included) wall mount was a piece of cake.
                                        bio-degradable materials;
                                        bio-degradable materials; the unboxing was a delight, and fixing the (included) wall mount was a piece of cake.
                                        bio-degradable materials; the unboxing was a delight, and fixing the (included) wall mount was a piece of cake.
                                        bio-degradable materials;



                                    </p>

                                    <span> 7 people found this helpful</span>

                                    <div>
                                        <button className="btn btn-light border " >Helpfull</button>
                                        <button className="btn ">Helpfull</button>
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

export default Detail