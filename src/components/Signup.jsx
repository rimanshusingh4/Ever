import React, { useState } from 'react'
import { ID } from 'appwrite';
import Input from './Input'
import Button from './Button'
import { useNavigate } from 'react-router-dom';
import { account } from '../config/Auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// function Signup() {
const Signup = ()=>{
    const [userData, setUserData] = useState({email:"",password:"", name:""});
    const navigate = useNavigate();
    const signFunc = async ()=>{
        const signPromis = account.create(
            ID.unique(),
            userData.email,
            userData.password,
            userData.name
        )
        signPromis.then(function(res){
            console.log("Responce of signpromis",res);
            if(res.status===true){
                toast.success("Account Created Successfully.");
                verify();
                // console.log("Userdata before API call",userData)
            }
            else{
                toast.error("There are some Problem please try Again");
            }
        },function(err){
            console.log(signPromis)
        })
        const verify = async () => { 
            try {
                // Create an email session
                let session = await account.createEmailSession(userData.email, userData.password);
                // Create verification with a valid URL
                let verifyPromise = await account.createVerification("https://ever-eight.vercel.app/Verify");
                // Handle success
                toast.success("Verification Email sent to Your Email.");
            } catch (error) {
                // Handle error
                console.error("Verification failed:", error);
                toast.error("Failed to create verification. Please try again.");
            }
        }
        
    }
  return (
    <div className='mt-20 mb-10 w-1/3 border-8 border-orange-700 hover:bg-gray-600 rounded-3xl  text-center'>
        <Input onChange={(e)=> setUserData({...userData, name:e.target.value})} label="name" type='text' name='name' placeholder='Enter Full Name' className='w-4/6 border  border-gray-600 p-5 mt-4 rounded-lg' required/>
        <Input onChange={(e)=> setUserData({...userData, email:e.target.value})} label="email" type='email' name='email' placeholder='Enter Email Id' className='w-4/6 border border-gray-600 p-5 mt-3 rounded-lg' required/>
        <Input onChange={(e)=> setUserData({...userData, password:e.target.value})} label="password" type='password' name='password' placeholder='Enter Password' className='w-4/6 border border-gray-600 p-5 mt-2 rounded-lg' required/>

        <Button onClick={signFunc} className='w-1/3 mb-6 bg-gray-700 hover:bg-orange-700 mt-3'>Signup</Button>
    </div>
  )
}

export default Signup