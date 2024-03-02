import React from 'react'
import Navbar from './Navbar'
import { useState, useEffect } from 'react';

const Layout = ({ children }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);
    

    return (
        <div>
            {loading ? (
                <>
                    <div className="wrapper">
                        <div className="circle_loading"></div>
                        <div className="circle_loading"></div>
                        <div className="circle_loading"></div>
                        <div className="shadows"></div>
                        <div className="shadows"></div>
                        <div className="shadows"></div>
                    </div>
                </>
            ) : (
                <>
                    <Navbar />
                    <div className='px-24 max-xl:px-5'>
                        {children}
                    </div>
                </>
            )}
        </div>
    )
}
export default Layout;