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
import { useReducer } from 'react';
import About from './UI_Pages/About'
import Logout from './UI_Pages/Logout'
import FoodItem from './UI_Pages/FoodItem'
import {createContext,useContext} from 'react'

const initialState=true;
const reducer=(state,action)=>{
    console.log(state,action);
    return !state;
  
   
}

export const LatestState=createContext();
function App() {
  const [state,dispatch]=useReducer(reducer,initialState); 
  return (
      <>
       
        <LatestState.Provider value={{state,dispatch}}>
        <Header/>
        <RouteMenu value={state}/>
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
    <Route exact path="/" component={Home}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/content" component={Content}/>
    <Route exact path="/content/:state" component={Content}/>
    <Route exact path="/logout" component={Logout}/>
    <Route exact path="/food" component={FoodItem}/>
    <Route component={Error}/>
  </Switch>
  </>
  );
  }
  else{
    return(
      <>
  <Switch>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path='/register' component={Register}/>
    <Route exact path='/about' component={About}/>
    <Route component={Error}/>
  </Switch>
  </>
    );
  }
}

export default App;
 

