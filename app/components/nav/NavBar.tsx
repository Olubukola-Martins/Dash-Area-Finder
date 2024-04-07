import React from 'react'
import Image from 'next/image';
import LoginBtn from './LoginBtn';


const NavBar = () => {
  return (
    <div className='w-full flex justify-between py-5 sticky top-0 mt-0'><Image alt="logo" src="/ic_logo.png" width={92} height={29}/><LoginBtn/> </div>
  )
}

export default NavBar