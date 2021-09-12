
import Mycart from './Mycart';
import "./Checkout.css";
import FinalCart from './FinalCart';
import {CartContext} from '../CartCounter/CounterContextProvider'
import {useContext,useState} from 'react';
import {useHistory} from 'react-router-dom'

 

const Checkout = () => {
    const [cart,setCart]=useState(JSON.parse(localStorage.getItem("cart")));
    const {counter, IncreaseCounter, DecreaseCounter, setCounter}=useContext(CartContext);
    const history=useHistory();
    //Order placed
    function orderPlaced(){
        setCounter(0);
       history.push("/portfolio/home/checkout/orderPlaced");

    }

     //clearing the cart
  const clearCart = () => {
    setCounter(0);
    setCart("");
    localStorage.removeItem("itemCount");
    localStorage.removeItem("cart");
    localStorage.setItem("cart", "[]");
  };
    return(
        <>
        <div style={{textAlign:'center',padding:'20px'}}><h3>Welcome to the checkout page</h3></div>
    <div className="checkout-main-div">
    {/* checkout order */}
        <div className="checkout-order" style={{width:"60%"}}>
       
           <FinalCart cart={cart} setCart={setCart}/>
           <div className="clear-cart-button-div">
           <button className="clearCart"  onClick={clearCart}>
                Clear Cart
        </button>
           </div>
       
        </div>
        {/* user information */}
        <div className="">
            <div className="user-info">
            <div>
            <label htmlFor="Name">Name</label><br/>
            <input type="text" name="Name" placeholder="Enter your full name" size="30"/>
            </div>
            <div>
            <label htmlFor="phno">Phone number</label>
            <input type="text" name="phno" placeholder="Enter your mobile number" size="30" />
            </div>
            <div>
            <label htmlFor="address">Address</label>
            <textarea rows="4" cols="35" placeholder="Enter your address" size="30"/>
            <br/><br/>
            <button className="submit-customer-order bg-primary text-white p-2 mt-2" style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} onClick={orderPlaced}>
            Place Order</button>
            </div>
            </div>
            
          

        </div>
       
    </div>
    
    </>
    );
   
};


export default Checkout;
