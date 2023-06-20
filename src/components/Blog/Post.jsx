import React from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialPinterest,
  TiSocialTwitter,
} from "react-icons/ti";

const Post = () => {
  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main>
      <div className="flex flex-col items-center md:flex-row gap-10 bg-[#1C1832] px-5 py-10 md:p-10 rounded-lg">
        <div className="md:w-60 flex items-center justify-center rounded-full bg-gradient-to-r from-[#7244EF] to-[#E039FD] ">
          <img
            src="https://themebeyond.com/html/nftmak/assets/img/blog/post_avatar_img.png"
            className="p-1.5 "
          />
        </div>
        <div className="text-[#E6E6D4] text-center md:text-start flex flex-col gap-3">
          <h4 className="text-xl font-semibold text-white">Thomas Herlihy</h4>
          <p>
            Non-core vaccines are given dependng on the dog's exposure risk.
            These include vaccines against Bordetella.
          </p>
          <div className="flex gap-3 justify-center md:justify-start">
            <button className="w-9 h-9 bg-[#2f2a44] hover:bg-gradient-to-r from-[#7244EF] to-[#E039FD]  flex items-center justify-center text-xl rounded-sm text-[#E6E6D4]">
              <TiSocialFacebook />
            </button>
            <button className="w-9 h-9 bg-[#2f2a44] hover:bg-gradient-to-r from-[#7244EF] to-[#E039FD]  flex items-center justify-center text-xl rounded-sm text-[#E6E6D4]">
              <TiSocialTwitter />
            </button>
            <button className="w-9 h-9 bg-[#2f2a44] hover:bg-gradient-to-r from-[#7244EF] to-[#E039FD]  flex items-center justify-center text-xl rounded-sm text-[#E6E6D4]">
              <TiSocialLinkedin />
            </button>
            <button className="w-9 h-9 bg-[#2f2a44] hover:bg-gradient-to-r from-[#7244EF] to-[#E039FD]  flex items-center justify-center text-xl rounded-sm text-[#E6E6D4]">
              <TiSocialPinterest />
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex justify-between text-white my-5">
        <button onClick={handleOnClick} className="flex items-center gap-3 hover:text-[#E039FD] font-semibold transition duration-500">
          <HiChevronDoubleLeft className="w-[50px] h-[50px] p-3 text-white rounded-lg bg-gradient-to-b from-[#7244EF] to-[#E039FD]"/> PREVIOUS POST
        </button>
        <button onClick={handleOnClick} className="ml-auto flex items-center gap-3 hover:text-[#E039FD] font-semibold transition duration-500">
        NEXT POST <HiChevronDoubleRight className="w-[50px] h-[50px] p-3 text-white rounded-lg bg-gradient-to-b from-[#7244EF] to-[#E039FD]"/> 
        </button>
      </div>
    </main>
  );
};

export default Post;
