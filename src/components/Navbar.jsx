import React from 'react'
import logo from "../assets/Photo.jpg"
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className=' flex flex-shrink-0 items-center'>
            <img src={logo} alt="logo" className=' w-10 h-10 rounded-full mx-2' />
        </div>
        <div className='flex gap-4 justify-center items-center text-2xl text-slate-50'>
            <FaLinkedinIn />
            <FaGithub />
            <FaSquareXTwitter />
            <FaInstagram />
        </div>
    </nav>
  )
}

export default Navbar