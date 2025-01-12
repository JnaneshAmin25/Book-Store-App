import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Signup() {
  return (
    <>
      <div className='flex h-screen justify-center items-center'>
            <div className="w-[600px]">
                <div className="modal-box dark:bg-white dark:text-black">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    </form>
                    <h3 className="font-bold text-lg">SignUp</h3>

                    {/* name */}   
                    <div className="mt-4 space-y-2">
                        <span>Name</span><br/>
                        <input type='Text' placeholder='Enter Your Name' className='w-80 px-3 border rounded-md bg-white text-slate-600'/>
                    </div>

                    {/* email */}   
                    <div className="mt-4 space-y-2">
                        <span>Email</span><br/>
                        <input type='Email' placeholder='Enter Your Email' className='w-80 px-3 border rounded-md bg-white text-slate-600'/>
                    </div>

                    {/* password */}
                    <div className="mt-4 space-y-2">
                        <span>Password</span><br/>
                        <input type="password" placeholder="Enter your password" className=" bg-white w-80 px-3 py-1 border rounded-md text-slate-600"/>
                    </div>

                    {/* button */}
                    <div className='flex justify-around mt-[30px]'>
                        <button className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200'>SignUp</button>
                        <p>Have an account?
                            <button className="underline text-blue-500 cursor-pointer" 
                            onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button> 
                            <Login/> 
                        </p>           
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup
