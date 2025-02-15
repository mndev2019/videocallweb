// import React from 'react'

import { Outlet, useLocation } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"
import { useEffect } from "react"

const WebLayout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <Header />
            <main>
                {<Outlet />}
            </main>
            <Footer />
        </>
    )
}

export default WebLayout
