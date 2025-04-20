import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const { getTotalCartAmount, placeOrder } = useContext(StoreContext)
  const navigate = useNavigate()

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData((data) => ({ ...data, [name]: value }))
  }

  useEffect(() => {
    if (getTotalCartAmount() === 0) {
      navigate('/')
    }
  }, [])

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-[50px] my-[100px] px-4">
      {/* Left Section */}
      <div className="w-full max-w-[min(100%,500px)]">
        <p className="text-[30px] font-semibold mb-[50px]">Delivery Information</p>
        <div className="flex gap-3 mb-3">
          <input
            type="text"
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            placeholder="First name"
            className="w-full p-2 border border-[#C5C5C5] rounded outline-tomato"
          />
          <input
            type="text"
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            placeholder="Last name"
            className="w-full p-2 border border-[#C5C5C5] rounded outline-tomato"
          />
        </div>
        <input
          type="email"
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          placeholder="Email address"
          className="w-full mb-3 p-2 border border-[#C5C5C5] rounded outline-tomato"
        />
        <input
          type="text"
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          placeholder="Street"
          className="w-full mb-3 p-2 border border-[#C5C5C5] rounded outline-tomato"
        />
        <div className="flex gap-3 mb-3">
          <input
            type="text"
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            placeholder="City"
            className="w-full p-2 border border-[#C5C5C5] rounded outline-tomato"
          />
          <input
            type="text"
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            placeholder="State"
            className="w-full p-2 border border-[#C5C5C5] rounded outline-tomato"
          />
        </div>
        <div className="flex gap-3 mb-3">
          <input
            type="text"
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            placeholder="Zip code"
            className="w-full p-2 border border-[#C5C5C5] rounded outline-tomato"
          />
          <input
            type="text"
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            placeholder="Country"
            className="w-full p-2 border border-[#C5C5C5] rounded outline-tomato"
          />
        </div>
        <input
          type="text"
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          placeholder="Phone"
          className="w-full mb-3 p-2 border border-[#C5C5C5] rounded outline-tomato"
        />
      </div>

      {/* Right Section */}
      <div className="w-full max-w-[min(100%,500px)]">
        <div className="flex flex-col gap-5 mb-[50px]">
          <h2 className="text-xl font-semibold">Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-2 border-[#E2E2E2]" />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 5}</p>
            </div>
            <hr className="my-2 border-[#E2E2E2]" />
            <div className="flex justify-between font-bold text-[#555]">
              <p>Total</p>
              <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">Select Payment Method</h2>
          <div className="flex items-center gap-3 border border-[tomato] p-3 px-5 rounded cursor-pointer">
            <img src={assets.selector_icon} alt="" />
            <p>COD (Cash On Delivery)</p>
          </div>
          <button
            onClick={() => placeOrder(data)}
            className="bg-[tomato] text-white py-3 px-6 rounded cursor-pointer"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
