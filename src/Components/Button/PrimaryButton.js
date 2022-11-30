import React from 'react'

const PrimaryButton = ({ children, classes, handler }) => {
  return (
    <button
      onClick={handler}
      className={`hover:text-gray-100 bg-gradient-to-r from-pink-500 to-pink-700 text-white ${classes}`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
