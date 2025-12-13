import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import NavBar from '../Components/NavBar';
import logo from "../assets/Tilly Inc. Logo.png"
import "../App.css";


function AboutUsPage() {



    return (

        <div className="placeholder">
        <NavBar></NavBar>
 <img class = "logo" src={logo}/>

        <div class= "companyinfo">
            <p>274 Reynolds Road</p>
            <p>Hiram, GA, 30141</p>
            <p>Office Phone: 770-372-3166</p>
            <p>Cell Phone: 470-661-2126</p>
            <p>Email: tillyinc274@gmail.com</p>
        </div>


        </div>
    )

}

export default AboutUsPage;