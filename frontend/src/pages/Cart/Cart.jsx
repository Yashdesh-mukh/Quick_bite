import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)
  const navigate = useNavigate()

  return (
    <div className="my-[100px] px-4">
      {/* Cart Items */}
      <div>
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="h-px bg-[#E2E2E2] border-0" />

        {food_list.map((item, index) => {
          if (cartItems[item.food_id] > 0) {
            return (
              <div key={index}>
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center my-2 text-black">
                  <img src={item.food_image} alt="" className="w-[50px]" />
                  <p>{item.food_name}</p>
                  <p>${item.food_price}</p>
                  <div className="max-w-[40px] text-center border border-[#EBEBEB] p-2 text-xs">
                    {cartItems[item.food_id]}
                  </div>
                  <p>${item.food_price * cartItems[item.food_id]}</p>
                  <p className="cursor-pointer" onClick={() => removeFromCart(item.food_id)}>
                    x
                  </p>
                </div>
                <hr className="h-px bg-[#E2E2E2] border-0" />
              </div>
            )
          }
        })}
      </div>

      {/* Bottom Section */}
      <div className="mt-[80px] flex justify-between gap-[max(12vw,20px)] flex-col-reverse lg:flex-row">
        {/* Promo Code */}
        <div className="flex-1">
          <p className="text-[#555]">If you have a promo code, Enter it here</p>
          <div className="mt-2 flex justify-between items-center bg-[#eaeaea] rounded">
            <input
              type="text"
              placeholder="promo code"
              className="bg-transparent border-none outline-none px-2 py-3 flex-1"
            />
            <button className="w-[max(10vw,150px)] py-3 px-2 bg-black text-white rounded">
              Submit
            </button>
          </div>
        </div>

        {/* Cart Total */}
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-xl font-semibold">Cart Totals</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="my-2 h-px bg-[#E2E2E2] border-0" />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 5}</p>
            </div>
            <hr className="my-2 h-px bg-[#E2E2E2] border-0" />
            <div className="flex justify-between text-[#555] font-bold">
              <p>Total</p>
              <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/order')}
            className="bg-[#FF4C24] text-white w-[max(15vw,200px)] py-3 rounded cursor-pointer"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
