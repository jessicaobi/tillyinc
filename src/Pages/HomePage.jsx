import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import NavBar from '../Components/NavBar';
import "../App.css";
import logo from "../assets/Tilly Inc. Logo.png"

function HomePage() {



    return (
        <div className="placeholder">
            <NavBar></NavBar>


            <img className="logo" src={logo}></img>
            <p className="pagedescriptor">Auto Bodywork Mechanic in Paulding County, Georgia</p>
            <div className="row">
                <img className="practicepic" src="https://media.istockphoto.com/id/680471684/photo/rust-car-parts-in-junkyard.jpg?s=1024x1024&w=is&k=20&c=lNaMRh1aWPauaMLv-OCry1M92gRCH2H1Ingn7QlVYpA="></img>
                <img className="practicepic" src="https://lirp.cdn-website.com/e87d2f8b84134e56b543ca494eba0795/dms3rep/multi/opt/759-640w.jpg"></img>
                <img className="practicepic" src="https://c8.alamy.com/comp/2H5A5K3/old-abandoned-car-parts-in-junkyard-in-san-juanico-mexico-baja-california-sur-2H5A5K3.jpg"></img>
                <img className="practicepic" src="https://st.depositphotos.com/2798591/4493/i/450/depositphotos_44931395-stock-photo-metal-scrap-the-used-car.jpg"></img>

            </div>

            <div className="companyinfo">
                <p>274 Reynolds Road</p>
                <p>Hiram, GA, 30141</p>
                <p>Office Phone: 770-372-3166</p>
                <p>Cell Phone: 470-661-2126</p>
                <p>Email: tillyinc274@gmail.com</p>
            </div>

            <div className="businessinfobox">
                <div className="businessinfotitle">
                    <h1 className="businessinfotitle">Business Info</h1>
                </div>
                <p></p>
                <div className="tableinfo">
                    <table className="tablecontent">
                        <tbody>
                            <tr>
                                <td>Monday</td>
                                <td>9AM</td>
                                <td>6PM</td>
                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                <td>9AM</td>
                                <td>6PM</td>
                            </tr>
                            <tr>
                                <td>Wednesday</td>
                                <td>9AM</td>
                                <td>6PM</td>
                            </tr>
                            <tr>
                                <td>Thursday</td>
                                <td>9AM</td>
                                <td>6PM</td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td>9AM</td>
                                <td>6PM</td>
                            </tr>
                            <tr>
                                <td>Saturday</td>
                                <td>9AM</td>
                                <td>2PM</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>CLOSED</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="quickinfo">
                    {/* <br>Tilly Inc.
                    <br>274 Reynolds Road
                    <br>Hiram, GA, 30141
                    <br>770-372-3166 */}

                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5954746128737!2d-84.73350582377361!3d33.87431472710372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f53b5f7c9c8333%3A0x1d2267daf366bceb!2sTilly%2C%20Inc.!5e0!3m2!1sen!2sus!4v1704503227029!5m2!1sen!2sus" width="325" height="300" style={{border:0}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>



            </div>
        </div>
    )

}

export default HomePage;