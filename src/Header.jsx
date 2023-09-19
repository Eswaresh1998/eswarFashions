import { Logo_URL, cart_img, notification_img } from "./Uitil/constants"
import { useState,useEffect } from "react";

const Header = () =>{
    const [btnName, setBtnName] =useState("Login");
    return (
        <div className="Header-Container">
            <div className="Logo-Container">
                <img className="Logo" src={Logo_URL}alt="Company-Logo" />
            </div>
            <div className="Navigation-Container">
                <ul>
                    <li><b>Home</b></li>
                    <li><b>About Us</b></li>
                    <li><b>Contact Us</b></li>
                    <li><img className="cart" src={cart_img} alt="Cart Images" /></li>
                    <li><img className="notification" src={notification_img} alt="" /></li>
                    <li><button className="Login" onClick={()=>{btnName==="Login"?setBtnName("Logout"):setBtnName("Login");}}>{btnName}</button></li>
                </ul>

            </div>

        </div>
    )
}
export default Header