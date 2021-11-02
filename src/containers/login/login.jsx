// @ts-check

import React from "react";
import headerLogo from "../../images/headerlogo.png"
function Login() {
  return (

    <div className="flex h-screen bg-gray-100 items-center m-auto">
      <div className="mx-auto">
        <img className="mx-auto" src={headerLogo} alt="SkillaHub" />
        <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
          <div className="py-12 p-10 bg-white rounded-xl">
            <div className="mb-6">
              <label className="mr-4 text-gray-700 font-bold inline-block mb-2" htmlFor="name">Username</label>
              <input type="text" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your username" />
            </div>
            <div className="">
              <label className="mr-4 text-gray-700 font-bold inline-block mb-2" htmlFor="name">Password</label>
              <input type="password" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your password" />
            </div>
            <span className="text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200">Forgot password</span>
            <button className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300">LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;