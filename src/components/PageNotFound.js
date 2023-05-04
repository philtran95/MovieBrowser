import React from "react";
import { Link } from "react-router-dom";
import Hero from './Hero';
// import Navbar from "./Navbar";


function PageNotFound() {
    return (
        <>
            {/* <Navbar /> */}
           <Hero text ="Error 404" />
            <div>
                <h1>Oops! You seem to be lost.</h1>
                <p>Here are some helpful links:</p>
                <Link to='/'>
                        <button className='btn btn-primary' type="button">
                                Go Back to Home
                        </button>   
                </Link>
                <Link to='/About'>
                        <button className='btn btn-primary' type="button">
                                About Us
                        </button>   
                </Link>
                <Link to='/contact'>
                        <button className='btn btn-primary' type="button">
                                Contact
                        </button>   
                </Link>
            </div>
        </>
    );
};

export default PageNotFound;