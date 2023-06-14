import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-between text-gray-300 text-xs px-10 py-7'>
        <p>All rights reserved © 2022 by <span className='font-semibold cursor-pointer'>ThemeBeyond</span></p>
        <ul className='flex md:gap-5 mt-5 md:mt-0 flex-wrap justify-center gap-3 font-semibold '>
            <li className='cursor-pointer hover:text-[#D83AFC]'>Privacy Policy</li>
            <li className='cursor-pointer hover:text-[#D83AFC]'>Terms And Conditions</li>
            <li className='cursor-pointer hover:text-[#D83AFC]'>Contact Us</li>
        </ul>
    </div>
  )
}

export default Footer