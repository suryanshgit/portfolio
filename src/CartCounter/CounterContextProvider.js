import { getThemeProps } from '@material-ui/styles';
import {useState,createContext} from 'react'


export const CartContext=createContext();

const CounterContextProvider=(props)=>{
   

    const [counter,setCounter]=useState( parseInt(localStorage.getItem("itemCount"))>0?parseInt(localStorage.getItem("itemCount")):0);
    

    const IncreaseCounter=()=>{
        setCounter(counter+1);
    }
    const DecreaseCounter=()=>{
        setCounter(counter-1);
    }
    return(
        <>
            <CartContext.Provider value={{counter,IncreaseCounter,DecreaseCounter,setCounter}}>
                {props.children}
            </CartContext.Provider>


        </>
    );
}
export default CounterContextProvider;
