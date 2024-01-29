import React, { } from 'react';

const Home = () => {
  return (
    <div className='flex h-screen'>
      {/* <div className='transition-all cursor-pointer hover:text-opacity-50 text-4xl font-bold text-cyan-500 text-center my-40 border border-violet-600 border-4 p-2 rounded-full mx-10'>Hello World !</div> */}
      <div className='w-6/12 bg-cyan-700 text-center flex items-center justify-center text-4xl font-bold text-white font-mono'>Pet Sitter</div>
      <div className='w-6/12 flex items-center justify-center'>
        <div className='w-full'>
          <div className='text-2xl text-center mb-6 font-medium font-mono items-center'>Login</div>
          <div className='text-center mr-36'>Email:</div>
          <div className='flex justify-center'>
            <input className='mb-3 border p-1 border-gray-500 rounded-md' type='text'/>
          </div>
          <div className='text-center mr-28'>Password:</div>
          <div className='flex justify-center'>
            <input className='mb-3 border p-1 border-gray-500 rounded-md' type='text'/>
          </div>
          <div className='bg-blue-600 flex justify-center mx-96 rounded-md text-white font-medium p-1 cursor-pointer hover:bg-blue-500'>LOGIN</div>
          <div className='flex mt-4 justify-center mr-2'>Don't you have an account yet?</div>
          <div className='flex mt-2 justify-center hover:underline cursor-pointer text-blue-600 font-medium'>Register here!</div>
        </div>
      </div>
    </div>
  )
}

export default Home;