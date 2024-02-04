import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
    <div className='mb-4 mt-4 w-4/5 h-60 flex flex-wrap shadow-inner'>
    <hr className='font-bold'></hr>
      <div className='w-2/4 mt-8 ml-8 justify-center items-center'>
        <Link to="/">
          <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="logo" className='mt-8 h-16'/>
        </Link>
      </div>
      <div className='w-36 flex mt-8 ml-8 justify-center items-center'>
        <ul className='text-lg'>
          <h1 className='text-xl font-bold mb-8'>Resources</h1>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='about-us'>
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className='w-36 flex mt-8 ml-8 justify-center items-center'>
        <ul className='text-lg '>
          <h1 className='text-xl font-bold mb-8'>Follow</h1>
          <li>
            <Link to='#'>
              Github
            </Link>
          </li>
          <li>
            <Link to='#'>
              Discard
            </Link>
          </li>
        </ul>
      </div>
      <div className='w-40 flex mt-8 ml-8 justify-center items-center'>
        <ul className='text-lg '>
          <h1 className='text-xl font-bold mb-8'>Legal</h1>
          <li>
            <Link to='#'>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to='#'>
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
      <div className='shadow-inner text-center w-full'>
        <p className='mt-8'>All Right Reserved @<a href='http://spliterr.rf.gd'>Spliterr</a> 2024</p>
      </div>
    </div>
    </>
  )
}

export default Footer