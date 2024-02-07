import React from 'react'

function Button({
    children,
    type='button',
    textColor='text-white',
    className ='',
    ...props
}) {
  return (
    <button className={`size text-lg font-medium  px-6 py-2 rounded-3xl cursor-pointer ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button