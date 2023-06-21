import React from 'react'

const Footer = () => {
  return (
    <div className="bg-info pb-[60px] md:pb-0 ">
    <div className="w-[90%] 3xl:w-[70%] 4xl:w-[55%] mx-auto flex flex-col lg:flex-row lg:justify-between items-center gap-3 py-7">
      <div className="">
        <p className="text-body_text text-xs lg:text-sm font-semibold">
          All rights reserved © 2022 by{" "}
          <span className="text-heading_text cursor-pointer">
            ThemeBeyond
          </span>
        </p>
      </div>
      <div className="flex items-center gap-1">
        <p className="font-light md:font-semibold text-heading_text text-xs lg:text-sm hover:text-purple duration-500 px-1 cursor-pointer">
          Privacy Policy
        </p>
        <p className="text-icon text-sm">|</p>
        <p className="font-light md:font-semibold text-heading_text text-xs lg:text-sm hover:text-purple duration-500 px-1 cursor-pointer">
          Terms And Condition
        </p>
        <p className="text-icon text-sm">|</p>
        <p className="font-light md:font-semibold text-heading_text text-xs lg:text-sm hover:text-purple duration-500 px-1 cursor-pointer">
          Contact Us
        </p>
      </div>
    </div>
  </div>
  )
}

export default Footer