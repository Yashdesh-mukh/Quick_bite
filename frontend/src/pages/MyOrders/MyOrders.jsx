import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets'

const MyOrders = () => {
  const [data, setData] = useState([])
  const { url, token, currency } = useContext(StoreContext)

  const fetchOrders = async () => {
    const response = await axios.post(`${url}/api/order/userorders`, {}, {
      headers: { token }
    })
    setData(response.data.data)
  }

  useEffect(() => {
    if (token) {
      fetchOrders()
    }
  }, [token])

  return (
    <div className='my-orders my-12'>
      <h2 className='text-2xl font-semibold text-gray-800'>My Orders</h2>
      <div className='flex flex-col gap-5 mt-8'>
        {data.map((order, index) => {
          return (
            <div key={index} className='grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-7 text-sm px-5 py-2.5 border border-tomato text-gray-700
              max-[900px]:grid-cols-[1fr_2fr_1fr] max-[900px]:gap-y-1 max-[900px]:text-xs'>

              <img src={assets.parcel_icon} alt="" className='w-[50px]' />
              
              <p className='col-span-1'>
                {order.items.map((item, idx) =>
                  idx === order.items.length - 1
                    ? `${item.name} x ${item.quantity}`
                    : `${item.name} x ${item.quantity}, `
                )}
              </p>
              
              <p>{currency}{order.amount}.00</p>
              <p>Items: {order.items.length}</p>

              <p>
                <span className='text-tomato'>&#x25cf;</span>{' '}
                <b className='font-medium text-gray-700'>{order.status}</b>
              </p>

              <button
                onClick={fetchOrders}
                className='border-none py-3 rounded bg-[#FFE1E1] text-gray-700 cursor-pointer
                max-[900px]:text-[10px]'
              >
                Track Order
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders
