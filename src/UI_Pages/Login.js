
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

        console.log("Handling the login form");
        if (loginCred.password.localeCompare(sessionStorage.getItem(loginCred.userName)) == 0) {
            console.log(`Welcome ${loginCred.userName}`)
            obj.dispatch();
            history.push("/home");
        }
        else { 
            console.log("Please enter valid credentials");
            setLoginFailureMsg("Please enter valid credentials");
        }


    }
    return (
        <>
           
            <div className="login-div"   >
            <div className="loginPage col-6" >
                <h5 className="text-center mb-5">Login</h5>
                <label for="username">Username</label>
                <input onChange={handelInput} type="text" id="username" name="userName" value={loginCred.userName}></input><br></br>
                <label for="pass">Password</label>
                <input onChange={handelInput} type="password" id="pass" name="password" value={loginCred.password}></input><br></br>
                <button onClick={handelLogin} type="button" className="btn btn-primary" style={{ width: '150px', height: '40px' }}>Submit</button>
                <p style={{color:'red',marginTop:'15px'}}>{loginFailureMsg}</p>
            </div>
           
            </div>
           
        </>
    );
}


export default Login;