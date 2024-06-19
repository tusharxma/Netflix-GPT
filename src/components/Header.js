import React from 'react'
import NetflixLogo from '../assets/images/NetflixLogo.png'

const Header = () => {
  return (
    <div>
      <div className='w-full p-5 absolute bg-gradient-to-b from-black z-20'>
        <img className='h-16 ml-44' src={NetflixLogo} alt='Netflix Logo' />
      </div>
    </div>
  )
}

export default Header