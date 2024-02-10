import React, { useEffect, useState } from 'react'
import { account } from '../config/Auth';
import { useDispatch } from 'react-redux';
import { singinFailure, singinStart, singinSuccess } from '../redux/user/userSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { stringify } from 'postcss';

function Home() {
  const dispatch=useDispatch();
  const [userInfo, setUserInfo] = useState();
  const {currentUser} = useSelector((state)=>state.user)
  // console.log("WOW",currentUser)
  const navigate = useNavigate();
  

  useEffect(()=>{
    const infoPromise = account.get(); //API hit here.
    dispatch(singinStart())
    infoPromise.then(function(res){
      setUserInfo(res)
      dispatch(singinSuccess(res))
     
    },function(err){
      dispatch(singinFailure(err))
      // console.log(err)
    })

  },[dispatch])



  return !currentUser ? (
    <>
      <div className='flex flex-wrap w-4/5 h-2/6 justify-around'>
        <div className='h-1/3 w-2/6 mt-24'>
          <img src='https://i.ibb.co/5BCcDYB/Remote2.png' alt='Home'/>
        </div>
        <div className='mt-36 ml-36 text-end'>
          <h1 className='text-6xl font-bold'> Download Now.</h1>
          <h1 className='text-4xl font-bold mt-1'>Current Context.</h1>
          <button className='p-3 bg-orange-700 rounded-3xl text-white font-semibold text-lg mt-6'>Download now</button>
        </div>
        <div className='mt-20 ml-64'>
          <img src="https://i.ibb.co/2M7rtLk/Remote1.png" className='w-2/3 h-4/5' alt='home'/>
          <h1 className='text-6xl font-semibold'>Lorem ipsum</h1>
        </div>
      </div>
      
    </>
  ): 
  <>
    <div className='flex flex-wrap w-4/5 h-2/6 justify-around'>
        <div className='h-1/3 w-2/6 mt-24'>
          <img src='https://i.ibb.co/5BCcDYB/Remote2.png' alt='Home'/>
        </div>
        <div className='mt-36 ml-36 text-end'>
          <h1 className='text-6xl font-bold'>Welcome BOSS.</h1>
          <h1 className='text-4xl font-bold mt-1'>Current Context.</h1>
          <button className='p-3 bg-orange-700 rounded-3xl text-white font-semibold text-lg mt-6'>Download now</button>
        </div>
        <div className='mt-20 ml-64'>
          <img src="https://i.ibb.co/2M7rtLk/Remote1.png" className='w-2/3 h-4/5' alt='home'/>
          <h1 className='text-6xl font-semibold'>Lorem ipsum</h1>
        </div>
      </div>
  </>
}
export default Home