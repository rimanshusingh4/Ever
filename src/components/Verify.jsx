import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { account } from '../config/Auth';

function Verify() {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const secret = params.get("secret");
    const id = params.get("userId");
    console.log(secret);

    
    async function updateVerify(){
        try {
            const verify = account.updateVerification(id,secret)
            alert("User Verified");
            navigate("/login");
        } catch (error) {
            console.log(error)
        }
    }
    updateVerify();
  return (
    <>
         
    </>
  )
}

export default Verify