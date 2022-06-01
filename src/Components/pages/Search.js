import { faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
// import Footer from '../Footer'
// import Header from '../Header'
import Layout from '../Layout'
import grth from '../../assets/thgrid.svg'



const Search = () => {


    const view1 = {
        r: 100,
        col1: 3,
        col2: 9
    }


    const [show1, setShow1] = useState(view1);
    // const [show2, setShow2] = useState(view2);

    const showGridMethod = () => {
        setShow1({

            r: '25 float-start',
            col1: 12,
            col2: 12

        });
    }
    const showListMethod = () => {
        setShow1({

            r: 100,
            col1: 3,
            col2: 9


        });
    }
    return (
        <>
            <Layout>
                <div className="a_srch_main tbdr">
                    <div className="a_srch_top  border-bottom">
                        <p className="float-start mb-0 ">1-16 of over 2,000 results for "laptop"</p>
                        <div className="dropdown float-end ">
                            <button className="btn btn-light btn-sm dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort by: Featured
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row a_srch_mbox  m-0 mt-3">
                        <div className="col-3 border-end  tbdr">
                            <div className="avg_cust_review ">
                                <span className="text-dark fw-bolder ">Avg. Customer Review </span>
                                <ul className="list-group">
                                    <li className="list-group-item p-0 border-0">
                                        <a href="/search" className="btn w-100 rounded-0 p-0"> <span className="sprtSht a_5star d-block float-start"> </span> <span className="float-start spanStar   "> &amp; Up</span> </a>
                                    </li>
                                    <li className="list-group-item p-0 border-0">
                                        <a href="/search" className="btn w-100 rounded-0 p-0"> <span className="sprtSht a_4star d-block float-start"> </span> <span className="float-start spanStar   "> &amp; Up</span></a>
                                    </li>
                                    <li className="list-group-item p-0 border-0">
                                        <a href="/search" className="btn w-100 rounded-0 p-0"> <span className="sprtSht a_3star d-block float-start"> </span> <span className="float-start spanStar   "> &amp; Up</span></a>
                                    </li>
                                    <li className="list-group-item p-0 border-0">
                                        <a href="/search" className="btn w-100 rounded-0 p-0"> <span className="sprtSht a_2star d-block float-start"> </span> <span className="float-start spanStar   "> &amp; Up</span></a>
                                    </li>
                                    <li className="list-group-item p-0 border-0">
                                        <a href="/search" className="btn w-100 rounded-0 p-0"> <span className="sprtSht a_1star d-block float-start"> </span> <span className="float-start spanStar   "> &amp; Up</span></a>
                                    </li>
                                </ul>
                                {/* <a href="/search" className="btn w-100 rounded-0 "> <span className="sprtSht a_4star d-block float-start"> </span> <span className="float-start spanStar"> &amp; Up</span></a> */}
                            </div>
                            <div className=" asidePrice ">
                                <span className="text-dark fw-bolder "> Price </span>
                                <ul className="list-group">
                                    <li className="list-group-item p-0 border-0">
                                        <a href="/search" className="btn  text-start p-0 w-100 rounded-0 "> Under-₹20,000 </a>
                                    </li>
                                    <li className="list-group-item p-0 border-0">
                                        <a href="/search" className="btn  text-start p-0 w-100 rounded-0 "> ₹20,000-₹30,000</a>
                                    </li>
                                    <li className="list-group-item p-0 border-0">
                                        <a href="/search" className="btn  text-start p-0 w-100 rounded-0 "> ₹30,000-₹40,000</a>
                                    </li>
                                    <li className="list-group-item p-0 border-0">
                                        <a href="/search" className="btn  text-start p-0 w-100 rounded-0 "> ₹40,000-₹50,000</a>
                                    </li>
                                    <li className="list-group-item p-0 border-0">
                                        <a href="/search" className="btn  text-start p-0 w-100 rounded-0 ">  Over ₹50,000</a>
                                    </li>
                                    <li className="list-group-item p-0 border-0">
                                        <div className="row m-0 ">
                                            <div className="col p-1">
                                                <input type="text" className="form-control form-control-sm" placeholder="₹Min" />
                                            </div>
                                            <div className="col p-1">
                                                <input type="text" className="form-control form-control-sm" placeholder="₹Max" />
                                            </div>
                                            <div className="col p-1">
                                                <a href="/" className="btn btn-sm btn-light"> Go</a>
                                            </div>
                                        </div>
                                    </li>


                                </ul>
                                <div className="srchAsideBrand">
                                    <ul className="list-group ">

                                        <p className="fw-bolder m-1">Brand</p>
                                        <li className="list-group-item p-0 border-0 ms-1 ">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            HP
                                        </li>
                                        <li className="list-group-item p-0 border-0 ms-1 ">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            Lenovo
                                        </li>
                                        <li className="list-group-item p-0 border-0 ms-1 ">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            ASUS
                                        </li>
                                        <li className="list-group-item p-0 border-0 ms-1 ">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            Dell
                                        </li>
                                        <li className="list-group-item p-0 border-0 ms-1 ">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            AVITA
                                        </li>
                                        <li className="list-group-item p-0 border-0 ms-1 ">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            Acer
                                        </li>
                                        <li className="list-group-item p-0 border-0 ms-1">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            MI
                                        </li>
                                    </ul>


                                    <div id="demo" className="collapse">
                                        <ul className="list-group ">


                                            <li className="list-group-item p-0 border-0 ms-1 ">
                                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                                HP
                                            </li>
                                            <li className="list-group-item p-0 border-0 ms-1 ">
                                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                                Lenovo
                                            </li>
                                            <li className="list-group-item p-0 border-0 ms-1 ">
                                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                                ASUS
                                            </li>
                                            <li className="list-group-item p-0 border-0 ms-1 ">
                                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                                Dell
                                            </li>
                                            <li className="list-group-item p-0 border-0 ms-1 ">
                                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                                AVITA
                                            </li>
                                            <li className="list-group-item p-0 border-0 ms-1 ">
                                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                                Acer
                                            </li>
                                            <li className="list-group-item p-0 border-0 ms-1">
                                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                                MI
                                            </li><li className="list-group-item p-0 border-0 ms-1 ">
                                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                                Acer
                                            </li><li className="list-group-item p-0 border-0 ms-1 ">
                                                <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                                Acer
                                            </li>
                                        </ul>

                                    </div>
                                    <button className="btn btn-link btn-sm text-decoration-none" data-bs-toggle="collapse" data-bs-target="#demo">See More</button>
                                </div>

                                {/* <a href="/search" className="btn w-100 rounded-0 "> <span className="sprtSht a_4star d-block float-start"> </span> <span className="float-start spanStar"> &amp; Up</span></a> */}
                            </div>
                        </div>
                        <div className="col-9 border-start ">
                            <div className=" ">
                                <button className="right-end btn btn-sm ms-2  float-end" onClick={showListMethod} >
                                    <FontAwesomeIcon icon={faList} />
                                </button>
                                <button className="grth btn btn-sm float-end ms-2 " onClick={showGridMethod}>
                                    <a href="/" className="d-block w-100 h-100 imgGrth" > <img src={grth} className="img-fluid" alt="...imggrth" /></a>
                                </button>
                            </div>
                            <div className="a_srch_filterTop border-top pt-3  ">
                                <h2>Filter by price</h2>
                                <ul className="nav border-bottom  ">
                                    <li className="nav-item me-2   pb-3 ">
                                        <a className="nav-link btn btn-light border text-dark" href="/search">Under ₹20,000</a>
                                    </li>
                                    <li className="nav-item me-2  ">
                                        <a className="nav-link btn btn-light border text-dark" href="/search">Under ₹30,000</a>
                                    </li>
                                    <li className="nav-item me-2  ">
                                        <a className="nav-link btn btn-light border text-dark" href="/search">Under ₹40,000</a>
                                    </li>
                                    <li className="nav-item me-2  ">
                                        <a className="nav-link btn btn-light border text-dark" href="/search">Under ₹50,000</a>
                                    </li>
                                    <li className="nav-item me-2  ">
                                        <a className="nav-link btn btn-light border text-dark" href="/search">Over ₹50,000</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="a_srch_prodResult pt-4 pb-4 ">
                                <div className={' m-0 border-top border-bottom row w-' + show1.r}>
                                    <div className={'p-3 col-' + show1.col1}>
                                        <a href="/search">
                                            <img className="img-fluid" src="https://m.media-amazon.com/images/I/4189ZMqGFIS._AC_UY218_.jpg" alt="...img"  />
                                        </a>
                                    </div>
                                    <div className={'p-3 col-' + show1.col2}>
                                        <h5><a href="/" className="text-decoration-none text-dark ">Dell Inspiron 3505 15.6" FHD Display Laptop (R5-3450U / 8GB / 1TB + 256Gb SSD / Vega Graphics / Win 10 + MSO / Accent Black) D560431WIN9B</a></h5>
                                        <p>
                                            <a href="/" className="a_5star sprtSht d-block">.</a>
                                        </p>
                                    </div>
                                </div>
                                <div className={' m-0 border-top border-bottom row w-' + show1.r}>
                                    <div className={'p-3 col-' + show1.col1}>
                                        <a href="/search">
                                            <img className="img-fluid" src="https://m.media-amazon.com/images/I/4189ZMqGFIS._AC_UY218_.jpg" alt="...img"  />
                                        </a>
                                    </div>
                                    <div className={'p-3 col-' + show1.col2}>
                                        <h5><a href="/" className="text-decoration-none text-dark ">Dell Inspiron 3505 15.6" FHD Display Laptop (R5-3450U / 8GB / 1TB + 256Gb SSD / Vega Graphics / Win 10 + MSO / Accent Black) D560431WIN9B</a></h5>
                                        <p>
                                            <a href="/" className="a_4_5star sprtSht d-block">.</a>
                                        </p>
                                    </div>
                                </div>
                                <div className={' m-0 border-top border-bottom row w-' + show1.r}>
                                    <div className={'p-3 col-' + show1.col1}>
                                        <a href="/search">
                                            <img className="img-fluid" src="https://m.media-amazon.com/images/I/4189ZMqGFIS._AC_UY218_.jpg" alt="...img"  />
                                        </a>
                                    </div>
                                    <div className={'p-3 col-' + show1.col2}>
                                        <h5><a href="/" className="text-decoration-none text-dark  ">Dell Inspiron 3505 15.6" FHD Display Laptop (R5-3450U / 8GB / 1TB + 256Gb SSD / Vega Graphics / Win 10 + MSO / Accent Black) D560431WIN9B</a></h5>
                                        <p>
                                            <a href="/" className="a_3star sprtSht d-block">.</a>
                                        </p>
                                    </div>
                                </div>
                                <div className={' m-0 border-top border-bottom row w-' + show1.r}>
                                    <div className={'p-3 col-' + show1.col1}>
                                        <a href="/search">
                                            <img className="img-fluid" src="https://m.media-amazon.com/images/I/4189ZMqGFIS._AC_UY218_.jpg" alt="...img"  />
                                        </a>
                                    </div>
                                    <div className={'p-3 col-' + show1.col2}>
                                        <h5><a href="/" className="text-decoration-none text-dark ">Dell Inspiron 3505 15.6" FHD Display Laptop (R5-3450U / 8GB / 1TB + 256Gb SSD / Vega Graphics / Win 10 + MSO / Accent Black) D560431WIN9B</a></h5>
                                        <p>
                                            <a href="/" className="a_4star sprtSht d-block">.</a>
                                        </p>
                                    </div>
                                </div>
                                <div className={' m-0 border-top border-bottom row w-' + show1.r}>
                                    <div className={'p-3 col-' + show1.col1}>
                                        <a href="/search">
                                            <img className="img-fluid" src="https://m.media-amazon.com/images/I/4189ZMqGFIS._AC_UY218_.jpg" alt="...img"  />
                                        </a>
                                    </div>
                                    <div className={'p-3 col-' + show1.col2}>
                                        <h5><a href="/" className="text-decoration-none text-dark ">Dell Inspiron 3505 15.6" FHD Display Laptop (R5-3450U / 8GB / 1TB + 256Gb SSD / Vega Graphics / Win 10 + MSO / Accent Black) D560431WIN9B</a></h5>
                                        <p>
                                            <a href="/" className="a_4_5star sprtSht d-block">.</a>
                                        </p>
                                    </div>
                                </div>
                                <div className={' m-0 border-top border-bottom row w-' + show1.r}>
                                    <div className={'p-3 col-' + show1.col1}>
                                        <a href="/search">
                                            <img className="img-fluid" src="https://m.media-amazon.com/images/I/4189ZMqGFIS._AC_UY218_.jpg" alt="...img"  />
                                        </a>
                                    </div>
                                    <div className={'p-3 col-' + show1.col2}>
                                        <h5><a href="/" className="text-decoration-none text-dark ">Dell Inspiron 3505 15.6" FHD Display Laptop (R5-3450U / 8GB / 1TB + 256Gb SSD / Vega Graphics / Win 10 + MSO / Accent Black) D560431WIN9B</a></h5>
                                        <p>
                                            <a href="/" className="a_4_5star sprtSht d-block">.</a>
                                        </p>
                                    </div>
                                </div>
                                <div className={' m-0 border-top border-bottom row w-' + show1.r}>
                                    <div className={'p-3 col-' + show1.col1}>
                                        <a href="/search">
                                            <img className="img-fluid" src="https://m.media-amazon.com/images/I/4189ZMqGFIS._AC_UY218_.jpg" alt="...img"  />
                                        </a>
                                    </div>
                                    <div className={'p-3 col-' + show1.col2}>
                                        <h5><a href="/" className="text-decoration-none text-dark ">Dell Inspiron 3505 15.6" FHD Display Laptop (R5-3450U / 8GB / 1TB + 256Gb SSD / Vega Graphics / Win 10 + MSO / Accent Black) D560431WIN9B</a></h5>
                                        <p>
                                            <a href="/" className="a_2star sprtSht d-block">.</a>
                                        </p>
                                    </div>
                                </div>
                                <div className={' m-0 border-top border-bottom row w-' + show1.r}>
                                    <div className={'p-3 col-' + show1.col1}>
                                        <a href="/search">
                                            <img className="img-fluid" src="https://m.media-amazon.com/images/I/4189ZMqGFIS._AC_UY218_.jpg" alt="...img"  />
                                        </a>
                                    </div>
                                    <div className={'p-3 col-' + show1.col2}>
                                        <h5><a href="/" className="text-decoration-none text-dark ">Dell Inspiron 3505 15.6" FHD Display Laptop (R5-3450U / 8GB / 1TB + 256Gb SSD / Vega Graphics / Win 10 + MSO / Accent Black) D560431WIN9B</a></h5>
                                        <p>
                                            <a href="/" className="a_3star sprtSht d-block">.</a>
                                        </p>
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

export default Search
