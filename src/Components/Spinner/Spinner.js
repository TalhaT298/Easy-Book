import React from 'react'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-full'>
   
      <div className='w-10 h-10 border-8 flex justify-center items-center border-dashed rounded-full animate-spin mt-5 border-rose-900'></div>
      
    </div>
  )
}

export default Spinner
