
import { useState } from 'react';
import './Login.css'
import data from '../Backend/Data'
import { Redirect, useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { LatestState, reducer } from '../App'

const styles={
    minHeight:'82vh',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
}


const Login = () => {
    const obj = useContext(LatestState);
    const history = useHistory();
    //  const [state,dispatch]=useContext(LatestState);
    const [loginCred, setLoginCred] = useState({ userName: '', password: '' });
    const [loginFailureMsg,setLoginFailureMsg]=useState();
    const handelInput = (e) => {
        let name, value; 
        name = e.target.name;
        value = e.target.value;
        setLoginCred({ ...loginCred, [name]: value })
    }

    const handelLogin = (e) => {
        e.preventDefault();

        console.log("Handling the login form");
        var userflag=false;
        var passflag=false;
        // ------------------validating the username-----------------
        if(!isNaN(loginCred.userName)){
            document.getElementById("user-validation").innerText="**Number are not allowed in this field";
            userflag=false;
        }
        else{
            document.getElementById("user-validation").innerText="";
            userflag=true;
        }
        // ---------------length of number should be in between 5 and 20----------------
        if(loginCred.userName.length<5 || loginCred.userName.length>20){
            document.getElementById("user-validation").innerText="**Username cannot be less than 5 or greater than 20";
            userflag=false;
        }
        else{
            document.getElementById("user-validation").innerText="";
            userflag=true;
        }

        // -----------------------------------Password validaton-------------------------------
        // pasword cannot be less than 8
        if(loginCred.password<8){
            document.getElementById("pass-validation").innerText="**Password cannot be less than 8";
            passflag=false;
        }
        else{
            document.getElementById("pass-validation").innerText="";
            passflag=true;
        }
        console.log("value of userflag and passflag")
        console.log(userflag);
        console.log(passflag);

        if(userflag && passflag){
        if (loginCred.password.localeCompare(sessionStorage.getItem(loginCred.userName)) == 0) {
            console.log(`Welcome ${loginCred.userName}`)
            obj.dispatch();
            history.push("/portfolio/home");
        }
        else if(loginCred.userName=="admin" && loginCred.password=="admin")
        {
            console.log(`Welcome ${loginCred.userName}`)
            obj.dispatch();
            history.push("/portfolio/home");   
        }
        else { 
            console.log("Please enter valid credentials");
            setLoginFailureMsg("Please enter valid credentials");
            setLoginCred({userName:"",password:""});
            
        }
    }


    }
    return (
        <>
           
            <div className="login-div"   >
            <div className="loginPage col-6" >
                <h5 className="text-center mb-4">Login</h5>

                <p style={{color:'green',fontSize:'12px'}}>Login using username admin and password admin</p>
                <label for="username">Username</label>
                <input onChange={handelInput} type="text" id="username" name="userName" value={loginCred.userName}></input><br></br>
                <span id="user-validation" style={{color:'red',fontSize:'13px',marginTop:'-20px',marginBottom:'15px'}}></span>

                <label for="pass">Password</label>
                <input onChange={handelInput} type="password" id="pass" name="password" value={loginCred.password}></input><br></br>
                <span id="pass-validation" style={{color:'red',fontSize:'13px',marginTop:'-20px',marginBottom:'15px'}}></span>

                <button onClick={handelLogin} type="button" className="btn btn-primary" style={{ width: '150px', height: '40px' }}>Submit</button>
                <p style={{color:'red',marginTop:'15px'}}>{loginFailureMsg}</p>
            </div>
           
            </div>
           
        </>
    );
}


export default Login;