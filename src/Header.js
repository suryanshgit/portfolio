import react, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
// import './Header.css'
import './Head.css'
import {useHistory} from 'react-router-dom'
import { useContext } from 'react'
import { LatestState } from './App'



// import {GiHamburgerMenu} from "react-icons"
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {CartContext} from './CartCounter/CounterContextProvider';





const obj = {
    boxSizing:'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: '20px',
    border: '5px solid green'

}


 


const Header = () => {
    const history=useHistory();
    const [flag, setFlag] = useState(false);
    const login = useContext(LatestState);
    const {counter}=useContext(CartContext);
    
    
   
    function cartHandle(){
       
        // setCart(JSON.parse(localStorage.getItem("cart")));
        // alert(`You have successfully added item to the cart. There are total ${counter} number of items in the cart`);
        localStorage.setItem("itemCount",counter);
        history.push("/portfolio/home/cart")

    };
    




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
                <div className=" brand-name"> <Link className="navlink" to="/portfolio/">Foodpedia</Link></div>
                <div className=" menu-container " >
                    <ul className={flag ? "mobile-view" : "desktop-view"}>
                        <li>
                            <NavLink className="navlink" activeClassName="selected_class" to="/portfolio/home" >Home</NavLink>
                        </li>
                        <li className="mainMenu">
                            <NavLink className="navlink mainMenu-content " activeClassName="selected_class" to="/portfolio/content" >Famous Food  </NavLink>
                            <ul className="subMenu">
                                <li><NavLink className="navlink " to="/portfolio/content/Maharashtra">Maharashtra</NavLink></li>
                                <li><NavLink className="navlink " to="/portfolio/content/UP">Uttar Pradesh</NavLink></li>
                                <li><NavLink className="navlink " to="/portfolio/content/Bihar">Bihar</NavLink></li>
                                <li><NavLink className="navlink " to="/portfolio/content/Rajasthan">Rajasthan</NavLink></li>
                                <li><NavLink className="navlink " to="/portfolio/content/Gujarat">Gujarat</NavLink></li>
                            </ul>

                        </li>
                        <li>
                            <NavLink className="navlink" activeClassName="selected_class" to="/portfolio/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" activeClassName="selected_class" to="/portfolio/logout">Logout</NavLink>
                        </li>
                        <li>
                            <button onClick={cartHandle}><ShoppingCartIcon className="cart-icon" style={{fontSize:'30px'}} /><span id="cart"  style={{marginLeft:'-12px',fontWeight:'bold',position:'absolute',top:'-10px',fontSize:'20px'}}>{counter>0?counter:''}</span></button>
                           
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
                <div className=" brand-name"> <Link className="navlink" to="/portfolio/">Foodpedia</Link></div>
                <div className=" menu-container " >
                    <ul className={flag ? "mobile-view" : "desktop-view"}>
                        <li>
                            <NavLink className="navlink" activeClassName="selected_class" to="/portfolio/home" >Home</NavLink>
                        </li>
                        
                        <li>
                            <NavLink className="navlink" activeClassName="selected_class" to="/portfolio/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" activeClassName="selected_class" to="/portfolio/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" activeClassName="selected_class" to="/portfolio/register">Register</NavLink>
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
