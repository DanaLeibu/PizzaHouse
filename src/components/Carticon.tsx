import React from 'react'
import Image from 'next/image'

const Carticon = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="cart icon" fill />
      </div>
      <span>Cart (3)</span>
    </div>
  )
}

export default Carticon
