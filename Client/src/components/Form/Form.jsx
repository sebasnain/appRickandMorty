import React from "react";
import './Form.modules.css'
import { useState } from "react";
import validation, { validationPass } from "./validation";


export default function Form(props){

    const [ userData , setUserData] = useState({
        email: '',
        password: '',
    })

    const [ errors , setErrors ] = useState({
        email: '',
        password: '',
    })



    const handleChange = (event)=>{
        const { name , value} = event.target
        setUserData({...userData,
            [name]:value
        })
        if(name === "email"){
            setErrors({...userData , [name]: validation(value)})  
        } 
        else {
            setErrors({...errors, [name]: validationPass(value)})
          }
        
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
         props.login(userData)
    }
  console.log(userData.email,userData.password)
    return(
        <form className="form" onSubmit={handleSubmit}>
           <img className="img" src="https://e1.pxfuel.com/desktop-wallpaper/80/926/desktop-wallpaper-rick-and-morty-logo-png-for-computer-supreme-rick-and-morty.jpg" alt="logo-R&M"/>
           <label >Email:</label>
           <input className="input" name="email" type="text" placeholder="  Aqui tu email" value={userData.email} onChange={handleChange}  ></input>
          <div className="divDanger">
          {errors.email && <p className='danger'>{errors.email}</p> }
          </div> 
           <label>Password:</label>
           <input className="input" name="password" type="text" placeholder="  Aqui tu contraseña" value={userData.password} onChange={handleChange} ></input>
           <div className="divDanger">
          {errors.password && <p className='danger'>{errors.password}</p> }
          </div> 
           <button type="submit" className='btn'><b>Login</b></button>
        </form>
    )
}