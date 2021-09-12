import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './UI_Pages/Content';
import Login from './UI_Pages/Login'
import Error from './UI_Pages/Error'
import {Route,Switch} from 'react-router-dom'
import Home from './UI_Pages/Home'
import {NavLink} from 'react-router-dom'
import Register from './UI_Pages/Register'
import { useReducer,useState } from 'react';
import About from './UI_Pages/About'
import Logout from './UI_Pages/Logout'
import FoodItem from './UI_Pages/FoodItem'
import {createContext,useContext} from 'react'
import CounterContextProvider from './CartCounter/CounterContextProvider'
import Mycart from './UI_Pages/Mycart'
import Checkout from './UI_Pages/Checkout'
import PlacedOrder from './UI_Pages/PlacedOrder'




const initialState=true;
const reducer=(state,action)=>{
    console.log(state,action);
    return !state;
  
   
}

export const LatestState=createContext();
function App() {
 
  const [state,dispatch]=useReducer(reducer,initialState); 
  // const Cart =useContext(CartContext);
  return (
      <>
      
    
        <LatestState.Provider value={{state,dispatch}}>
        <CounterContextProvider>
        <Header/>
        <RouteMenu value={state}/>
        </CounterContextProvider>
        </LatestState.Provider>
  
        <Footer/>
      </>
  );
}

const RouteMenu=(login)=>{
  console.log("Value of login is ");
  console.log(login)
  console.log(login.value)
  if(login.value){
  return(
    <>
  <Switch>
    <Route exact path="/portfolio/" component={Home}/>
    <Route exact path="/portfolio/home" component={Home}/>
    <Route exact path="/portfolio/about" component={About}/>
    <Route exact path="/portfolio/content" component={Content}/>
    <Route exact path="/portfolio/content/:state" component={Content}/>
    <Route exact path="/portfolio/logout" component={Logout}/>
    <Route exact path="/portfolio/food" component={FoodItem}/>
    <Route exact path="/portfolio/home/cart" component={Mycart}/>
    <Route exact path="/portfolio/home/checkout" component={Checkout}/>  
    <Route exact path="/portfolio/home/checkout/orderPlaced" component={PlacedOrder}/>
    <Route component={Error}/>
  </Switch>
  </>
  );
  }
  else{
    return(
      <>
  <Switch>
    <Route exact path="/portfolio/" component={Home}/>
    <Route exact path="/portfolio/home" component={Home}/>
    <Route exact path="/portfolio/login" component={Login}/>
    <Route exact path='/portfolio/register' component={Register}/>
    <Route exact path='/portfolio/about' component={About}/>
    <Route component={Error}/>
  </Switch>
  </>
    );
  }
}

export default App;
 

