import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { account } from '../config/Auth'
const Login=()=> {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const loginFunc = async ()=>{
        try {
            await account.createEmailSession(userData.email, userData.password);
            navigate("/");
        } catch (error) {
            alert("Something Wrong");
            navigate("signup")
        }
    }
  return (
    <div className='mt-20 mb-10 w-1/3 border-8 border-gray-700 hover:bg-orange-600 rounded-full  text-center'>
        <Input onChange={(e)=> setUserData({...userData, email:e.target.value})} label="email" type='text' name='email' placeholder='Enter Email id' className='w-3/5 border mt-6 border-gray-600 p-5 mt-3 rounded-lg'/>
        <Input onChange={(e)=> setUserData({...userData, password:e.target.value})} label="password" type='password' name='password' placeholder='Enter Password' className='w-3/5 border border-gray-600 p-5 mt-3 rounded-lg'/>
        <Button onClick={loginFunc} className='w-1/3 mb-6 bg-orange-700 active:bg-gray-700 mt-3'>Login</Button>
    </div>
  )
}

export default Login