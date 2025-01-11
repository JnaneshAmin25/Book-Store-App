import React from 'react'

function Login() {
  return (
    <>
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-white dark:text-black">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Login</h3>
                    <div className="mt-4 space-y-2">
                        <span>Email</span><br/>
                        <input type='Email' placeholder='Enter Your Email' className='w-80 px-3 border rounded-md'/>
                    </div>
                </div>
            </dialog>
        </div> 
    </>
  )
}

export default Login
