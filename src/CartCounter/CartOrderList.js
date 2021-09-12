import { createContext,useState} from 'react'


export const FinalOrderCart=createContext();

const CartOrderList=(props)=>{
    // JSON.parse(localStorage.getItem("cart"))
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
    return(
        <>
        <FinalOrderCart.Provider value={{cart,setCart}}>
            {props.children}
        </FinalOrderCart.Provider>

        </>
    );
}

export default CartOrderList;