import react, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
// import './Header.css'
import './Head.css'
import { useContext } from 'react'
import { LatestState } from './App'
// import {GiHamburgerMenu} from "react-icons"
import MenuIcon from '@material-ui/icons/Menu';



const obj = {

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: '20px',
    border: '5px solid green'

}


 


const Header = () => {

    const [flag, setFlag] = useState(false);
    const login = useContext(LatestState);
    console.log("value of state in Header")
    console.log(login);
    console.log(login.state)

    // const useEffect = (() => {

    // })


    function handleSize() {
        // console.log("Changing the width of the window")
        // console.log(window.innerWidth)
        if (window.innerWidth>768)
            document.querySelector(".menu-container").style.display = "block";
        else
            document.querySelector(".menu-container").style.display = "none";
    }
    // if(window.innerWidth> 768px)

//add window resize hook
window.addEventListener("resize", handleSize);

const [windowSize, setWindowSize] = useState(window.innerWidth);

// ---------------------Event Handling---------------------
const handleMobileView = () => {
    setFlag(!flag);
    // ------------------doubt in below logic---------------------
    if (flag == true)
        document.querySelector(".menu-container").style.display = "none";
    else
        document.querySelector(".menu-container").style.display = "block";
}

 

if (login.state) {

    return (
        <>
            <div className=" main-div" >
                <div className=" brand-name"> <Link className="navlink" to="/">Foodpedia</Link></div>
                <div className=" menu-container " >
                    <ul className={flag ? "mobile-view" : "desktop-view"}>
                        <li>
                            <NavLink className="navlink" activeClassName="selected_class" to="/home" >Home</NavLink>
                        </li>
                        <li className="mainMenu">
                            <NavLink className="navlink mainMenu-content " activeClassName="selected_class" to="/content" >Content </NavLink>
                            <ul className="subMenu">
                                <li><NavLink className="navlink " to="/content/Maharashtra">Maharashtra</NavLink></li>
                                <li><NavLink className="navlink " to="/content/UP">Uttar Pradesh</NavLink></li>
                                <li><NavLink className="navlink " to="/content/Bihar">Bihar</NavLink></li>
                            </ul>

                        </li>
                        <li>
                            <NavLink className="navlink" activeClassName="selected_class" to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" activeClassName="selected_class" to="/logout">Logout</NavLink>
                        </li>


                    </ul>

                </div>
                <div className=" hamburger ">
                    <button className="bg-primary" onClick={handleMobileView} style={{ border: 'none', color: 'white' }}>
                        <MenuIcon />
                    </button>
                </div>
            </div>

        </>
    );

}
else {
    return (
        <>
           
            <div className=" main-div" >
                <div className=" brand-name"> <Link className="navlink" to="/">Foodpedia</Link></div>
                <div className=" menu-container " >
                    <ul className={flag ? "mobile-view" : "desktop-view"}>
                        <li>
                            <NavLink className="navlink" activeClassName="selected_class" to="/home" >Home</NavLink>
                        </li>
                        
                        <li>
                            <NavLink className="navlink" activeClassName="selected_class" to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" activeClassName="selected_class" to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" activeClassName="selected_class" to="/register">Register</NavLink>
                        </li>


                    </ul>

                </div>
                <div className=" hamburger ">
                    <button className="bg-primary" onClick={handleMobileView} style={{ border: 'none', color: 'white' }}>
                        <MenuIcon />
                    </button>
                </div>
            </div>
        </>
    );

}
}

export default Header;
