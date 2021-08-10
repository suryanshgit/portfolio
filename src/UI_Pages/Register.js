
import {useState } from 'react'
import './Register.css'

const main={
    minHeight:'83vh',
    display:'flex',
    alignItems:'center'
}
const Register=()=>{
    const obj={
      
        display:'flex',
        marginLeft:'25%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
        padding:'25px',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
    }

    const [cred,setCred]=useState({
        userName:'',
        password:'',
        hobby:''
    })
    const [registerMsg,setRegisterMsg]=useState();
    //managing the inputs for input fields
    const handleInput=(e)=>{
           setCred({...cred,[e.target.name]:e.target.value}); 

    }
    //handling the submit button
    const handleSubmit=(e)=>{
        sessionStorage.setItem(cred.userName,cred.password);
        //Your are registered
        setRegisterMsg("Your are registered successfully");
    }
    return(
        <>
            <div className="register-div" >
            <div className="container" style={obj}>
                <h5 style={{textAlign:'center'}}>Enter your details</h5>
                <label  className="mt-2" for="username">Username</label>
                <input onChange={handleInput} className="mt-2" name="userName" id="username" type="text" value={cred.userName}/>
                <label className="mt-2" for="password">Password</label>
                <input onChange={handleInput} className="mt-2" id="password" name="password" type="password" value={cred.password}/>
                <label className="mt-2" for="hobby">Hobby</label>
                <input  onChange={handleInput} className="mt-2" id="hobby" name="hobby" type="text" value={cred.hobby}/>
                <button onClick={handleSubmit} type="button" style={{marginTop:'30px',marginBotton:'30px'}} className="btn btn-primary">Submit</button>
                <p style={{color:'green',marginTop:'15px'}}>{registerMsg}</p>
            </div>
            </div>
        </>
    );

}

export default Register;
