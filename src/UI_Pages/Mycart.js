import "./Mycart.css";
// import AddBoxIcon from "@material-ui/icons/AddBox";
// import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
// import DeleteIcon from "@material-ui/icons/Delete";
import { useState, useContext,createContext } from "react";
import { CartContext } from "../CartCounter/CounterContextProvider";
import {useHistory, useParams} from 'react-router-dom'
import FinalCart from "./FinalCart";



export const FinalOrderCartMyCart=createContext();

const Mycart = () => {
  const history=useHistory();
  // const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [cart,setCart]=useState(JSON.parse(localStorage.getItem("cart")));
  
  const { counter, IncreaseCounter, DecreaseCounter, setCounter } =
    useContext(CartContext);
    // setCart(JSON.parse(localStorage.getItem("cart")));
  //   let id=useParams();
  //   console.log("value of url is");
  //   console.log(id);

  // console.log(`Present working directory is ${window.location.pathname}`);
  // // const {Image,qty}=cart[0];

  // //clearing the cart
  // const clearCart = () => {
  //   setCounter(0);
  //   // setCart("");
  //   localStorage.removeItem("itemCount");
  //   localStorage.removeItem("cart");
  //   localStorage.setItem("cart", "[]");
  // };

  // //handle quantity
  // const handleQuantity = (operation, ID) => {
  //   console.log(`values of operation and ID is ${operation} and ${ID}`);
  //   let tempCart = cart;
  //   console.log("Value of tempCart is");
  //   console.log(tempCart);
  //   let newCart = tempCart.map((item) => {
  //     if (item.Id == ID) {
  //       if (operation == "inc") {
  //         console.log(`Value of item quantity before increment ${item.qty}`);
  //         if (item.qty == 10) return false;
  //         item.qty = item.qty + 1;
  //         IncreaseCounter();
  //         localStorage.setItem(
  //           "itemCount",
  //           parseInt(localStorage.getItem("itemCount")) + 1
  //         );
  //         console.log(`Value of item quantity after increment ${item.qty}`);
  //       } else {
  //         if (item.qty == 0) return false;
  //         item.qty = item.qty - 1;
  //         DecreaseCounter();
  //         localStorage.setItem(
  //           "itemCount",
  //           parseInt(localStorage.getItem("itemCount")) - 1
  //         );
  //       }
  //     }
  //   });

  //   console.log("Value of newCart in handle Quantity");
  //   console.log(newCart);
  //   console.log("Value of tempCart in handle Quantity is ");
  //   console.log(tempCart);
  //   setCart(tempCart);
  //   console.log("Value inside Cart state is");
  //   console.log(cart);
  //   localStorage.setItem("cart", JSON.stringify(tempCart));
  //   if (operation == "inc") {
  //     if (document.querySelector(".quantity" + ID).value == 10) return false;
  //     document.querySelector(".quantity" + ID).value =
  //       Number(document.querySelector(".quantity" + ID).value) + 1;
  //   } else {
  //     if (document.querySelector(".quantity" + ID).value == 0) return false;
  //     document.querySelector(".quantity" + ID).value =
  //       Number(document.querySelector(".quantity" + ID).value) - 1;
  //   }
  // };

   

  // //handle Delete
  // const handleDelete = (id) => {
  //   //updating the cart counter
  //   cart.map((item) => {
  //     if (item.Id == id) {
  //       setCounter(counter - item.qty);
  //       localStorage.setItem("itemCount", counter - item.qty);
  //     }
  //   });
  //   // let cart=JSON.parse(localStorage.getItem("cart"));
  //   let tempCart = cart;
  //   let updatedCart = tempCart.filter((item) => item.Id != id);
  //   console.log(`Updated cart is`);
  //   console.log(updatedCart);
  //   // localStorage.setItem("cart",JSON.stringify(updatedCart))
  //   setCart(updatedCart);
  //   console.log(`We have deleted item with id ${id}`);

  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // };

  // console.log(`Length of the cart array is `);
  // console.log(cart.length);
  // console.log(cart);
  // console.log(JSON.parse(localStorage.getItem("cart")));
  // if (cart.length) {
  //   return (
  //     <>
  //       <h4>Welcome to the cart page</h4>
  //       <div className="main-cart-div">
  //         <div className="cart-content">
  //           {/* ../Food_pics/Bihar_food/litti chokha.webp */}
  //           {cart.map((item) => {
  //             return (
  //               <>
  //                 {/* <span className="cart-image"><img src={item.Image} alt="food image" /></span>
  //                  <span className="cart-qty">{item.qty}</span> */}
  //                 <div className="cart-item">
  //                   <img
  //                     className="item-image"
  //                     src={item.Image}
  //                     alt="food image"
  //                   />
  //                   <span className="food-desc">Food Item</span>
  //                   <div className="qty">
  //                     <button
  //                       className={"increment" + item.Id}
  //                       onClick={() => handleQuantity("inc", item.Id)}
  //                     >
  //                       <AddBoxIcon />
  //                     </button>
  //                     <input
  //                       className={"quantity" + item.Id}
  //                       type="number"
  //                       min="0"
  //                       max="10 "
  //                       value={item.qty}
  //                       style={{ width: "40px", textAlign: "center" }}
  //                     />
  //                     <button
  //                       className={"decrement" + item.Id}
  //                       onClick={() => handleQuantity("desc", item.Id)}
  //                     >
  //                       <IndeterminateCheckBoxIcon />
  //                     </button>
  //                   </div>
  //                   <span className="price">₹{item.qty * 50}</span>
  //                   <button onClick={() => handleDelete(item.Id)}>
  //                     <DeleteIcon />
  //                   </button>
  //                 </div>
  //               </>
  //             );
  //           })}
  //           <div className="cart-buttons">

  //             <button className="clearCart" onClick={clearCart}>
  //               Clear Cart
  //             </button>
  //             <button className="placeOrder" onClick={handleCheckout}>Checkout</button>
  //           </div>
  //         </div>

  //       </div>
  //     </>
  //   );
  // } else {
  //   return (
  //     <div className="main-cart-div">
  //       <h3>Cart is Empty right now</h3>
  //     </div>
  //   );
  // }

   //handle checkout
   function handleCheckout(){
      
    // document.querySelector(".placeOrder").remove();
    history.push("/portfolio/home/checkout");
  }
  //clearing the cart
  const clearCart = () => {
    setCounter(0);
    setCart("");
    localStorage.removeItem("itemCount");
    localStorage.removeItem("cart");
    localStorage.setItem("cart", "[]");
  };
  return (
    <>
    <div style={{textAlign:'center',padding:'20px'}}><h4>Welcome to the Cart</h4></div>
      
      <FinalCart cart={cart} setCart={setCart} />
     
      <div className="cart-buttons" style={{width:'80%',marginLeft:'auto',marginRight:'auto'}}>
        <button className="clearCart" onClick={clearCart}>
          Clear Cart
        </button>
        <button className="placeOrder" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </>
  );
};

export default Mycart;
