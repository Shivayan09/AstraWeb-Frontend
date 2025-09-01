import React, { useState } from 'react'
import useIsMobile from "./useIsMobile";
import { Menu } from 'lucide-react';

const Navbar = () => {

  const isMobile = useIsMobile();

  const [isDropdown, setDropdown] = useState()

  return (
    <div className='md:absolute md:left-1/2 md:-translate-x-1/2'>
      {!isMobile ?
        <div className='mt-7'>
          <ul className='flex gap-20 font-semibold text-gray-600'>
            <li
              className='cursor-pointer transition-all duration-300 hover:text-black'
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Home
            </li>
            <li
              className='cursor-pointer transition-all duration-300 hover:text-black'
              onClick={() => document.getElementById('business')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Business
            </li>
            <li
              className='cursor-pointer transition-all duration-300 hover:text-black'
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Portfolio
            </li>
            <li
              className='cursor-pointer transition-all duration-300 hover:text-black'
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Pricing
            </li>
            <li
              className='cursor-pointer transition-all duration-300 hover:text-black'
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact
            </li>
          </ul>
        </div>
        :
        <div className='fixed z-20 top-5 right-2'>
          <Menu onClick={() => { setDropdown(!isDropdown) }} className='ml-auto' />
          {isDropdown &&
            <div className='bg-gray-100/90 w-40 absolute -right-2 -top-4 -z-10 h-screen flex flex-col justify-between'>
              <ul className='flex flex-col gap-7 mt-10 justify-center items-center text-[0.9rem] font-semibold'>
                <li
                  className='cursor-pointer transition-all duration-300 hover:text-black'
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Home
                </li>
                <li className='cursor-pointer transition-all duration-300 hover:text-black'
                  onClick={() => document.getElementById('business')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Business
                </li>
                <li className='cursor-pointer transition-all duration-300 hover:text-black'
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Portfolio
                </li>
                <li className='cursor-pointer transition-all duration-300 hover:text-black'
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Pricing
                </li>
                <li className='cursor-pointer transition-all duration-300 hover:text-black'
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact
                </li>
              </ul>
              <ul className='flex flex-col gap-5 justify-center items-center text-[0.9rem] text-gray-600 font-semibold mb-3'>
                <li>Account</li>
                <li>Log Out</li>
                <li className='text-[0.6rem] text-gray-300'>All rights reserved</li>
              </ul>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default Navbar
