import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyContex from './contex';
import { useDispatch, useSelector } from 'react-redux';
import { loginFunc } from '../redux/usersActions';
import { login } from '../axios/usersAxios';

export const Login=()=>{
  const myD=useDispatch()

  const navigate = useNavigate();
  const isConnect=useSelector(x=>x.users.isConnect)
  const [loginUser,setLoginUser]=useState({
    userName:"",
    password:""
  })
 



  
  const handleLogin = (e) => {
    e.preventDefault()
     if(loginUser.userName=="מנהל"&&loginUser.password=="1234"){
         myD(loginFunc("m"))
         navigate('/')
     }
      else{
        login(loginUser.userName,loginUser.password)
                    .then((x)=>{myD(loginFunc("u",x.data));navigate('/myPersonal')})
                    .catch((error)=>{console.log(error.message)})
      }
      
  };


 return <>
<h1>התחברות</h1>
<div className="tab-pane fade show active container d-flex justify-content-center align-items-center" >
              
                <form onSubmit={(e)=>handleLogin(e)}>
                <div  className="form-outline mb-4">
                  <input type="text"  className="form-control" onBlur={(x)=>setLoginUser({...loginUser,userName:x.target.value})} required/>
                  <label className="form-label" >User Name</label>
                </div>   
                <div  className="form-outline mb-4">
                  <input type="password" className="form-control" onChange={(x)=>setLoginUser({...loginUser,password:x.target.value})} required/>
                  <label className="form-label">Password</label>
                </div>
                <input type="hidden" value="loginForm"/>
                <button type="submit" className="btn btn-primary btn-block mb-4" >Sign in</button>
                <div className="text-center">
                  <p id="registerHelp">Not a member? <Link to="/myRegistration"> Register</Link></p>
                </div>
              </form>
            </div>
 </>
}