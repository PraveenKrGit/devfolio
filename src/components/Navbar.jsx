import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa'

export const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center transform hover:scale-110 transition-transform duration-300 cursor-pointer'>
            <img className='mx-2 w-10' src={logo} alt="logoo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin className='transform hover:scale-110 transition-transform duration-300 cursor-pointer'/>
            <FaGithub className='transform hover:scale-110 transition-transform duration-300 cursor-pointer'/>
            <FaInstagram className='transform hover:scale-110 transition-transform duration-300 cursor-pointer'/>
            <FaSquareXTwitter className='transform hover:scale-110 transition-transform duration-300 cursor-pointer'/>
        </div>
    </nav>
  )
}
