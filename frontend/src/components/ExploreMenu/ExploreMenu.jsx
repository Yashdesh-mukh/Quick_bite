import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext)

  return (
    <div className="flex flex-col gap-5" id="explore-menu">
      <h1 className="text-[#262626] font-medium text-2xl sm:text-3xl">Explore our menu</h1>
      <p className="text-[#808080] max-w-[60%] sm:max-w-full sm:text-sm">
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>

      <div className="flex items-center justify-between gap-[30px] text-center my-5 overflow-x-scroll scrollbar-hide">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))
            }
            className="explore-menu-list-item cursor-pointer"
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`w-[7.5vw] min-w-[80px] rounded-full transition duration-200 cursor-pointer ${
                category === item.menu_name ? 'border-[4px] border-tomato p-[2px]' : ''
              }`}
            />
            <p className="mt-2 text-[#747474] text-[max(1.4vw,16px)] cursor-pointer">{item.menu_name}</p>
          </div>
        ))}
      </div>

      <hr className="my-2 h-[2px] bg-[#E2E2E2] border-none" />
    </div>
  )
}

export default ExploreMenu
