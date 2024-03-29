import { LOGO_URL } from "../utils/constants";
import {useEffect, useState} from "react";
const Header = () => {

        let btnName = "Login"
        const [btnNameReact, setbtnNameReact] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = {LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li>Checkout</li>
                    <button className="login" onClick={() => {
                    //    if(btnNameReact == 'Login') {
                    //     setbtnNameReact('Log-Out');
                    //    } else {
                    //     setbtnNameReact('Login');
                    //    }
                    // ternar operatore 
                    btnNameReact == 'Login' ?
                        setbtnNameReact('Log-Out'):
                        setbtnNameReact('Login');
                       
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;