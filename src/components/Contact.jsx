import React from 'react'
import img from "../assets/Contact.png"
import Input from './Input'
import Button from './Button'

function Contact() {
  return (
    <div className='w-2/3  flex flex-wrap items-center justify-between'>
      <div className='text-center mt-10 '>
        <h1 className='text-4xl font-bold'>Get in Touch.</h1>
        <h2 className='text-2xl font-semibold'>Fill in the form to start a conversation</h2>
        <img className='mt-8' src={img} alt='ContactImage'/>
      </div>
      <div className='flex flex-col m-32'>
        <Input label="name" type='text' name='name' placeholder='Enter Name' className='border border-gray-600 p-5 mt-3 rounded-lg'/>
        <Input label="email" type='text' name='email' placeholder='Enter Email' className='border border-gray-600 p-5 mt-3 rounded-lg'/>
        <textarea type='query' name='address' placeholder='Enter Your Question' className='border border-gray-600 p-5 mt-3 rounded-lg'></textarea>
        <Button type='submit' className='bg-orange-700 text-white font-bold text-xl p-4 mt-4'>Submit</Button>
      </div>
    </div>
  )
}

export default Contact