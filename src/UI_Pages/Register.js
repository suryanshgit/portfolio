
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
        e.preventDefault();
        var userflag=false;
        var passflag=false;
        var hobbyflag=false;
        // -----------------------validating the user name------------------
        // ------------username feild should not contain numbers------------
        if(!isNaN(cred.userName)){
            document.getElementById("username-validation").innerText="**Numbers are not allowed in this field";
            userflag=false ;
            
        }
        else{
            document.getElementById("username-validation").innerText="";
            userflag=true ;
        }
        // ----------username limit from 5 to 20 letters---------------
        if(cred.userName.length<5 || cred.userName>20)
        {
            document.getElementById("username-validation").innerText="**Username cannot be less than 5 or greater than 20";
            userflag=false ;
            
        }
        else{
            document.getElementById("username-validation").innerText="";
            userflag=true ;
        }

        // -----------------Validation on password--------------------
        // -----------------password legth cannot be less than 8 or greater than 15----------
        if(cred.password.length<8){
            document.getElementById("password-validation").innerText="**Password cannot be less than 8 ";
            passflag=false ;
            
        }
        else{
            document.getElementById("password-validation").innerText="";
            passflag=true;
        }
        // -----------------Validation for hobby-------------------------
        if(!isNaN(cred.hobby)){
            document.getElementById("hobby-validation").innerText="**Number is not allowed in hobby field";
            hobbyflag=false;
           

        }
        else{
            document.getElementById("hobby-validation").innerText="";
            hobbyflag=true;
        }

        if(userflag&&passflag&&hobbyflag){
        sessionStorage.setItem(cred.userName,cred.password);
        //Your are registered
        setRegisterMsg("Your are registered successfully");
        setCred({userName:'',password:'',hobby:''})
       
        }
    }
    return(
        <>
            <div className="register-div" >
            <div className="container" style={obj}>
                <h5 style={{textAlign:'center'}}>Enter your details</h5>
                <label  className="mt-2" for="username">Username</label>
                <input onChange={handleInput} className="mt-2" name="userName" id="username" type="text" value={cred.userName}/>
                <span className="text-danger" id="username-validation" style={{fontSize:'13px'}}></span>

                <label className="mt-2" for="password">Password</label>
                <input onChange={handleInput} className="mt-2" id="password" name="password" type="password" value={cred.password}/>
                <span className="text-danger" id="password-validation" style={{fontSize:'13px'}}></span>

                <label className="mt-2" for="hobby">Hobby</label>
                <input  onChange={handleInput} className="mt-2" id="hobby" name="hobby" type="text" value={cred.hobby}/>
                <span className="text-danger" id="hobby-validation" style={{fontSize:'13px'}}></span>

                <button onClick={handleSubmit} type="button" style={{marginTop:'30px',marginBotton:'30px'}} className="btn btn-primary">Submit</button>
                <p style={{color:'green',marginTop:'15px'}}>{registerMsg}</p>
            </div>
            </div>
        </>
    );

}

export default Register;
