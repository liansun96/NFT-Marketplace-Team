import React from "react";
import { ImRocket } from "react-icons/im";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialPinterest,
  TiSocialTwitter,
} from "react-icons/ti";

const Info = () => {
  return (
    <div className="py-20 px-10 md:px-16 md:h-96 bg-[#11122B] flex flex-col md:flex-row justify-between">
      <div className="md:w-[20%]">
        <img
          className="w-8"
          src="https://themebeyond.com/html/nftmak/assets/img/logo/logo.png"
          alt=""
        />
        <p className="text-sm text-[#E6E6D4] py-5 leading-7">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
          veritatis sequi doloribus fuga.
        </p>
        <div className="flex gap-3 mb-10 md:mb-0">
          <button className="w-10 h-10 bg-[#1D1933] hover:bg-[#E039FD]  flex items-center justify-center text-xl rounded-sm text-[#E6E6D4]">
            <TiSocialFacebook />
          </button>
          <button className="w-10 h-10 bg-[#1D1933] hover:bg-[#E039FD]  flex items-center justify-center text-xl rounded-sm text-[#E6E6D4]">
            <TiSocialTwitter />
          </button>
          <button className="w-10 h-10 bg-[#1D1933] hover:bg-[#E039FD]  flex items-center justify-center text-xl rounded-sm text-[#E6E6D4]">
            <TiSocialLinkedin />
          </button>
          <button className="w-10 h-10 bg-[#1D1933] hover:bg-[#E039FD]  flex items-center justify-center text-xl rounded-sm text-[#E6E6D4]">
            <TiSocialPinterest />
          </button>
        </div>
      </div>
      <div className="text-[#E6E6D4] mb-10 md:mb-0">
        <h2 className="font-semibold text-xl pb-3">Useful Links</h2>
        <ul className="text-sm leading-8">
          <li className="cursor-pointer hover:text-[#D83AFC] transition duration-300 hover:scale-95">
            All NFTs
          </li>
          <li className="cursor-pointer hover:text-[#D83AFC] transition duration-300 hover:scale-95">
            How It Works
          </li>
          <li className="cursor-pointer hover:text-[#D83AFC] transition duration-300 hover:scale-95">
            Create
          </li>
          <li className="cursor-pointer hover:text-[#D83AFC] transition duration-300 hover:scale-95">
            Explore
          </li>
          <li className="cursor-pointer hover:text-[#D83AFC] transition duration-300 hover:scale-95">
            Privacy & Terms
          </li>
        </ul>
      </div>
      <div className="text-[#E6E6D4] mb-10 md:mb-0">
        <h2 className="font-semibold text-xl pb-3">Community</h2>
        <ul className="text-sm leading-8">
          <li className="cursor-pointer hover:text-[#D83AFC] transition duration-300 hover:scale-95">
            Help Center
          </li>
          <li className="cursor-pointer hover:text-[#D83AFC] transition duration-300 hover:scale-95">
            Partners
          </li>
          <li className="cursor-pointer hover:text-[#D83AFC] transition duration-300 hover:scale-95">
            Suggestions
          </li>
          <li className="cursor-pointer hover:text-[#D83AFC] transition duration-300 hover:scale-95">
            Blog
          </li>
          <li className="cursor-pointer hover:text-[#D83AFC] transition duration-300 hover:scale-95">
            Newsletter
          </li>
        </ul>
      </div>
      <div className="text-[#E6E6D4]">
      <h2 className="font-semibold text-xl pb-3">Subscribe Us</h2>
      <div className="flex items-center h-14 w-full relative  rounded-lg">
            <input
              className="bg-[#1D1933] w-full p-3 h-full text-sm text-[#E6E6D4] rounded-lg focus-visible:outline-0"
              type="text"
              name=""
              id=""
              placeholder="info@youmail.com"
            />
            <button className="absolute right-0 w-14 h-14 flex justify-center items-center rounded-md bg-gradient-to-r from-[#7144EF] to-[#D83AFC] text-[#E6E6D4]">
              <ImRocket className="font-bold text-xl" />
            </button>
          </div>
      </div>
    </div>
  );
};

export default Info;
