import React from 'react'


import Header from '../Components/Header.js';
// import Main from '../Components/Main.js';
import Footer from '../Components/Footer.js'

const Layout = (props) => {
    return (
        <>
        <div className="bgColor" style={{width : "100%" , overflow:"hidden" }}>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </div>
        <div className="r_Aside_panel bg-danger d-none">
            A
        </div>
        </>
    )
}

export default Layout
