import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import NavBar from '../Components/NavBar';
import logo from "../assets/Tilly Inc. Logo.png"

import "../App.css";


function InventoryPage() {

    return (

        <div className="placeholder">

        <div className="placeholder">
        <NavBar></NavBar>
 <img className = "logo" src={logo}/>
 
<p className="pagedescriptor">Welcome to the Tilly Inc. Inventory Search</p>
<p className = "inventoryinfo">This page has all of our current available inventory in alphabetical order! If you are on a smaller device you can scroll left to right to view the
    entire table.
</p>
<div className = "tablecontainer">
    <iframe className = "inventorytable" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTZG8GYruoc8halgm7yeaB0xjpdIEYn4rH-gnkeNpAjHGg5zq5rw3nZURAOGsyBovQbe1xV6WrQoYTx/pubhtml?gid=0&amp;single=true&amp;widget=false&amp;headers=false&amp;chrome=false"></iframe>
</div>
        </div>
                </div>

    )

}

export default InventoryPage;