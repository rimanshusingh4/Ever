import React from 'react'

function Home() {
  return (
    <>
      <div className='flex flex-wrap w-4/5 h-2/6'>
        <div className='h-1/3 w-2/6 m-24'>
          <img src='https://i.ibb.co/5BCcDYB/Remote2.png' alt='Home'/>
        </div>
        <div className='mt-36 ml-36 text-end'>
          <h1 className='text-6xl font-bold'>Download Now.</h1>
          <h1 className='text-4xl font-bold mt-1'>Current Context.</h1>
          <button className='p-3 bg-orange-700 rounded-3xl text-white font-semibold text-lg mt-6'>Download now</button>
        </div>
        <div className='mt-20 ml-96'>
          <img src="https://i.ibb.co/2M7rtLk/Remote1.png" className='w-2/3 h-4/5' alt='home'/>
          <h1 className='text-6xl font-semibold'>Lorem ipsum</h1>
        </div>
      </div>
      
    </>
  )
}
export default Home