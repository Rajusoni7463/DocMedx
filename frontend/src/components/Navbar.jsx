import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext';

const Navbar = () => {
    const navigate = useNavigate();
    const {token,setToken,userData}= useContext(AppContext)
    const [showMenu,setShowMenu]= useState(false)

    const logOut = ()=>{
        setToken('')
        localStorage.removeItem('token')
    }
    
  return (
    <div className='-mx-[155px] flex items-center justify-between bg-slate-300 text-sm py-4 mb-5 border-b  '>
        <h1 className='w-44 cursor-pointer text-primary font-bold text-[36px] pl-10'>DocMedx</h1>
        {/* <img className='w-44 cursor-pointer' src={assets.logo} alt="" /> */}
        <ul className='hidden md:flex items-start gap-10 font-medium ml-auto mr-8 '>
            <NavLink to="/">
                <li className='py-1 '>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>   
            </NavLink>
            <NavLink to="/doctors">
                <li className='py-1 '>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>   
            </NavLink>
            <NavLink to="/about">
                <li className='py-1 '>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>   
            </NavLink>
            <NavLink to="/contact">
                <li className='py-1 '>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>   
            </NavLink>
        </ul>
        <div className='flex items-center gap-4 mr-5'>
            {
                token  && userData
                ?
                <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-8 rounded-full' src={userData.image} alt="" />
                    <img  className='w-2.5' src={assets.dropdown_icon} alt="" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                            <p onClick={()=>{navigate('/my-profile')}} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>{navigate('/my-appointments')}} className='hover:text-black cursor-pointer'>My Appoinments</p>
                            <p onClick={logOut} className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                    </div>
                </div>
                :<button onClick={()=>{navigate('/login')}} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
            }
            
        </div>
    </div>
  )
}

export default Navbar