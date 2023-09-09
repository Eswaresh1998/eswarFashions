import { Logo_URL, cart_img, notification_img } from "./Uitil/constants"



const Header = () =>{
    return (
        <div className="Header-Container">
            <div className="Logo-Container">
                <img className="Logo" src={Logo_URL}alt="Company-Logo" />
            </div>
            <div className="Navigation-Container">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><img className="cart" src={cart_img} alt="Cart Images" /></li>
                    <li><img className="notification" src={notification_img} alt="" /></li>
                </ul>

            </div>

        </div>
    )
}
export default Header