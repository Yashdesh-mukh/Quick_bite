import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Sign Up')

  return (
    <div className="absolute z-[1] w-full h-full bg-black/60 grid">
      <div className="place-self-center w-[max(23vw,330px)] text-gray-500 bg-white flex flex-col gap-[25px] p-[25px_30px] rounded-md text-sm animate-fadeIn">
        {/* Title */}
        <div className="flex justify-between items-center text-black">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            alt="close"
            className="w-4 cursor-pointer"
            onClick={() => setShowLogin(false)}
          />
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-5">
          {currState === 'Sign Up' && (
            <input
              type="text"
              placeholder="Your name"
              className="outline-none border border-[#C9C9C9] p-2 rounded"
            />
          )}
          <input
            type="email"
            placeholder="Your email"
            className="outline-none border border-[#C9C9C9] p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="outline-none border border-[#C9C9C9] p-2 rounded"
          />
        </div>

        {/* Button */}
        <button className="border-none p-2 rounded text-white bg-[#FF4C24] text-base cursor-pointer">
          {currState === 'Login' ? 'Login' : 'Create account'}
        </button>

        {/* Terms */}
        <div className="flex items-start gap-2 -mt-4">
          <input type="checkbox" className="mt-[5px]" />
          <p>
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>

        {/* Toggle link */}
        {currState === 'Login' ? (
          <p>
            Create a new account?{' '}
            <span
              onClick={() => setCurrState('Sign Up')}
              className="text-[#FF4C24] font-medium cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span
              onClick={() => setCurrState('Login')}
              className="text-[#FF4C24] font-medium cursor-pointer"
            >
              Login here
            </span>
          </p>
        )}
      </div>
    </div>
  )
}

export default LoginPopup
