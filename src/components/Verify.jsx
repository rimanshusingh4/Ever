import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { account } from '../config/Auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Verify() {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const secret = params.get("secret");
    const id = params.get("userId");
    console.log(secret);
    const verify=null

    async function updateVerify(){
        try {
            verify = await account.updateVerification(id,secret)            
        } catch (error) {
            console.log(error)
            toast.error("Not a valid Call")
        }
    }
    useEffect(()=>{
      if(verify){
        toast.success("User Verified");
        navigate("/login");
      }
    })
    updateVerify();
  return (
    <>
         
    </>
  )
}

export default Verify