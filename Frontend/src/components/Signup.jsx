import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"


function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (data) => console.log(data);
    return (
    <>
      <div className='flex h-screen justify-center items-center'>
            <div className="w-[600px]">
                <div className="modal-box dark:bg-white dark:text-black">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    
                        <h3 className="font-bold text-lg">SignUp</h3>

                        {/* name */}   
                        <div className="mt-4 space-y-2">
                            <span>Name</span><br/>
                            <input type='Text' placeholder='Enter Your Name' className='w-80 px-3 border rounded-md bg-white text-slate-600'
                                {...register("name", { required: true })}/><br/>
                                {errors.name && (<span className="text-sm text-red-500">Name is required</span>)}
                        </div>

                        {/* email */}   
                        <div className="mt-4 space-y-2">
                            <span>Email</span><br/>
                            <input type='Email' placeholder='Enter Your Email' className='w-80 px-3 border rounded-md bg-white text-slate-600'
                                {...register("email", { required: true })}/><br/>
                                {errors.email && (<span className="text-sm text-red-500">Email is required</span>)}
                        </div>

                        {/* password */}
                        <div className="mt-4 space-y-2">
                            <span>Password</span><br/>
                            <input type="password" placeholder="Enter your password" className=" bg-white w-80 px-3 py-1 border rounded-md text-slate-600"
                                {...register("password", { required: true })}/><br/>
                                {errors.password && (<span className="text-sm text-red-500">Password is required</span>)}
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
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup
