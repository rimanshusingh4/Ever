import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { account } from '../config/Auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
            toast.success("Login Success."),{
                autoClose: 2000,
            };
        } catch (error) {
            navigate("/login")
            toast.error("Something Wrong.");
            
        }
    }
  return (
    <div className='mt-20 mb-10 w-1/3 border-8 border-gray-700 hover:bg-orange-600 rounded-3xl  text-center' >
        <Input onChange={(e)=> setUserData({...userData, email:e.target.value})} label="email" type='text' name='email' placeholder='Enter Email id' className='w-4/6 border  border-gray-600 p-5 mt-3 rounded-lg'/>
        <Input onChange={(e)=> setUserData({...userData, password:e.target.value})} label="password" type='password' name='password' placeholder='Enter Password' className='w-4/6 border border-gray-600 p-5 mt-3 rounded-lg'/>
        <Button onClick={loginFunc} type='submit'className='w-1/3 mb-6 bg-orange-700 active:bg-gray-700 mt-3'>Login</Button>
    </div>
  )
}

export default Login