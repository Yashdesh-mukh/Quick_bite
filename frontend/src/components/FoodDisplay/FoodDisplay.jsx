import React, { useContext } from 'react'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)

  return (
    <div className="mt-[30px]" id="food-display">
      <h2 className="text-[max(2vw,24px)] font-semibold mt-[30px]">Top dishes near you</h2>
      <div className="flex flex-wrap justify-between gap-[30px] mt-[30px] row-gap-[50px]">
        {food_list.map((item) => {
          if (category === 'All' || category === item.food_category) {
            return (
              <FoodItem
                key={item.food_id}
                image={item.food_image}
                name={item.food_name}
                desc={item.food_desc}
                price={item.food_price}
                id={item.food_id}
              />
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
