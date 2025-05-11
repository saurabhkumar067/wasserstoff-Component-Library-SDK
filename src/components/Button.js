import React from 'react'

function Button({button}) {
  return (
    <button type='submit' className="bg-green-600 w-full rounded-sm py-2 cursor-pointer hover:bg-green-800 duration-500">
          {button}
        </button>
  )
}

export default Button