import { Link } from "react-router-dom";
import Hero from './Hero';


function NotFound() {
    return (
        <>
           <Hero text ="Error 404" />
            <div>
                <h1>Oops! You seem to be lost.</h1>
                <p>Here are some helpful links:</p>
                <Link to='/'>
                        <button className="button">Home</button>
                        {/* add Universal styling after */}
                </Link>
                <Link to='/About'>
                        <button className="button">About Us</button>
                </Link>
                <Link to='/contact'>
                        <button className="button">Contact</button>
                </Link>
            </div>
        </>
    );
};

export default NotFound;