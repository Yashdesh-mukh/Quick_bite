import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div
      id="footer"
      className="text-[#D9D9D9] bg-[#323232] flex flex-col items-center gap-5 px-[8vw] pt-20 pb-5"
    >
      <div className="w-full grid grid-cols-[2fr_1fr_1fr] gap-20 max-[750px]:flex max-[750px]:flex-col max-[750px]:gap-9">
        {/* Left */}
        <div className="flex flex-col items-start gap-5">
          <img src={assets.logo} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="flex gap-4">
            <img className="w-10 cursor-pointer" src={assets.facebook_icon} alt="" />
            <img className="w-10 cursor-pointer" src={assets.twitter_icon} alt="" />
            <img className="w-10 cursor-pointer" src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        {/* Center */}
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white text-xl font-semibold">COMPANY</h2>
          <ul>
            <li className="mb-2 cursor-pointer">Home</li>
            <li className="mb-2 cursor-pointer">About us</li>
            <li className="mb-2 cursor-pointer">Delivery</li>
            <li className="mb-2 cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        {/* Right */}
        <div className="flex flex-col items-start gap-5">
          <h2 className="text-white text-xl font-semibold">GET IN TOUCH</h2>
          <ul>
            <li className="mb-2 cursor-pointer">+1-212-456-7890</li>
            <li className="mb-2 cursor-pointer">contact@tomato.com</li>
          </ul>
        </div>
      </div>

      <hr className="w-full h-[2px] bg-gray-600 my-5 border-none" />

      <p className="text-center text-sm">&copy; 2024 Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
