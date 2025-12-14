import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import "../App.css";


function NavBar() {



    return (

        <div className="tabcontent">
            <div className="tabbuttons">
                <div className="linkname">
                    <Link to="/">
                        <button className="individualbutton">Home</button>
                    </Link>
                </div>
                <div className="linkname">
                    <Link to="/inventory">
                        <button className="individualbutton">Inventory Search</button>
                    </Link>
                </div>
                <div className="linkname">
                    <Link to="/contact">
                        <button className="individualbutton">Contact Us</button>
                    </Link>
                </div>

            </div>
        </div>
    )

}

export default NavBar;