import React from 'react'

const Sortwith = ({data,setData}) => {

  //local functions
  const soerWithprice = () => {
    setData(data.slice().sort((a, b) => a.price - b.price))
  }  

  const soerWithRating = () => {
    setData(data.slice().sort((a, b) => b.rating - a.rating))
  }  

  return (
    <div className='text-slate-800 flex gap-2'>

      {/* button to sort by price  */}
      <button className='py-3 w-32 rounded-md font-semibold text-sm bg-gray-300 ' onClick={soerWithprice}>
        Sort by price
      </button>

      {/* sort by ratings  */}
      <button className='py-3 w-32 rounded-md font-semibold text-sm bg-gray-300' onClick={soerWithRating}>
        Sort by ratings
      </button>
    </div>
  )
}

export default Sortwith
