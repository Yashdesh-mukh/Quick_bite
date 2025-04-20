import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({ image, name, price, desc, id }) => {
  const [itemCount, setItemCount] = useState(0)
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)

  return (
    <div className="w-[280px] mx-auto rounded-[15px] shadow-[0px_0px_10px_#00000015] transition-all duration-300 animate-fadeIn hover:scale-[1.02]">
      <div className="relative">
        <img className="w-full rounded-t-[15px]" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full hover:border-2 hover:border-[#FF4C24]"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] bg-white p-[6px] rounded-full">
            <img
              className="w-[30px] cursor-pointer"
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              className="w-[30px] cursor-pointer"
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-[20px]">
        <div className="flex justify-between items-center mb-[10px]">
          <p className="text-[20px] font-medium">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-[12px] text-[#676767]">{desc}</p>
        <p className="text-[22px] text-[#FF4C24] font-medium mt-[10px]">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
