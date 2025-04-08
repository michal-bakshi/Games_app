import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyContex from './contex';
import { addUser } from '../axios/usersAxios';
import { addNewUser } from '../redux/usersActions';
import { useDispatch } from 'react-redux';

export const Registration=()=>{
   const navigate=useNavigate();
   const dispatch=useDispatch()
   //const setIsConnect=useContext(MyContex).setisConnect

   const [user,setUser]=useState({
    // name:"",
    // password:"",
    // number:"",
    // expirationDate: "",
    // cvv:"",
    
   });
   const [massege, setMassege] = useState({
    special: "",
    letters8: "",
    bigLetter: "",
    number: "",
    password: "",
  });
  
  // const validatePassword = () => {
  //   const password = user.password;
  //   let isValid = true;
  
  //   if (password.length < 8) {
  //     setMassege((prevMassege) => ({
  //       ...prevMassege,
  //       letters8: "הסיסמה חייבת לכלול לפחות 8 תווים.",
  //     }));
  //     isValid = false;
  //   } else {
  //     setMassege((prevMassege) => ({
  //       ...prevMassege,
  //       letters8: "",
  //     }));
  //   }
  
  //   if (!/[A-Z]/.test(password)) {
  //     setMassege((prevMassege) => ({
  //       ...prevMassege,
  //       bigLetter: "הסיסמה חייבת לכלול לפחות אות גדולה אחת.",
  //     }));
  //     isValid = false;
  //   } else {
  //     setMassege((prevMassege) => ({
  //       ...prevMassege,
  //       bigLetter: "",
  //     }));
  //   }
  
  //   if (!/\d/.test(password)) {
  //     setMassege((prevMassege) => ({
  //       ...prevMassege,
  //       number: "הסיסמה חייבת לפחות לכלול ספרה אחת.",
  //     }));
  //     isValid = false;
  //   } else {
  //     setMassege((prevMassege) => ({
  //       ...prevMassege,
  //       number: "",
  //     }));
  //   }
  
  //   if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
  //     setMassege((prevMassege) => ({
  //       ...prevMassege,
  //       special: "הסיסמה חייבת לכלול לפחות תו מיוחד אחד.",
  //     }));
  //     isValid = false;
  //   } else {
  //     setMassege((prevMassege) => ({
  //       ...prevMassege,
  //       special: "",
  //     }));
  //   }
  
  //   return isValid;
  // };
  

   const validateFormInput=(e)=>{
       e.preventDefault()
      
     if(user.password!=user.repeatPassword){
        setMassege((prevMassege) => ({
            ...prevMassege,
            email:"",
            password: "הסיסמא אינה זהה",
          }));
    return;
        }
        
         else {
        setMassege((prevMassege) => ({
            ...prevMassege,
            email:"",
            password: "",
            validatePasswordInput:"",
          }));
          handleRegister();
        }
   }

   const handleRegister =  () => {
    console.log("in add function ",user)
        addUser(user)
             .then((x)=>{
               dispatch(addNewUser(x));
               navigate('/myPersonal')
                })
             .catch((err)=>console.log(err));   
  }

    return<>
    <h1 className="font-weight-bold">הרשמה</h1>
    <div className="tab-pane fade show active container d-flex justify-content-center align-items-center">
     <form onSubmit={(e)=>validateFormInput(e)}>
        <div>
        <label className="form-label"> שם משתמש</label>
            <input type="text" name="fullName" id="userName" className="form-control" 
            onBlur={(x)=>setUser({...user,name:x.target.value})}/>
        </div>
        <div>
        <label className="form-label"> פרטי אשראי </label>
             <label className="form-label"> מספר אשראי</label>
            <input type="text" className="form-control" placeholder='4580 0087 3354 1234'
            onBlur={(x)=>setUser({...user,number:x.target.value})}/>
              <label className="form-label"> תוקף  </label>
            <input type="text" className="form-control" placeholder='01/1'
            onBlur={(x)=>setUser({...user,expirationDate:x.target.value})}/>
              <label className="form-label"> 3 ספרות בגב הכרטיס  </label>
            <input type="text" className="form-control" placeholder='123'
            onBlur={(x)=>setUser({...user,cvv:x.target.value})}/>
        </div>
     
        <div className="form-outline mb-4">
            <label className="form-label" >סיסמא</label>
            <input type="password" name="registerPassword" id="registerPassword" className="form-control"
            onChange={(x)=>setUser({...user,password:x.target.value})} 
            required />
            <p className="text-danger">{massege.letters8}</p>
            <p className="text-danger">{massege.number}</p> 
            <p className="text-danger">{massege.bigLetter}</p> 
            <p className="text-danger">{massege.special}</p> 
        </div>
         <div className="form-outline mb-4">
          <label className="form-label" >אימות סיסמא </label>
            <input type="password" name="registerRepeatPassword" id="registerRepeatPassword" className="form-control"
             onChange={(x)=>setUser({...user,repeatPassword:x.target.value})}
              required/>
             <p className="text-danger">{massege.password}</p> 
        </div>
        <input type="hidden" value="register"/>
        <button type="submit" className="btn btn-primary btn-block mb-3">ok</button>
        <p id="loginHelp">already a member? <Link to="/mylogin"> Log in</Link></p>   
         </form> 
  </div> 
  </>
}