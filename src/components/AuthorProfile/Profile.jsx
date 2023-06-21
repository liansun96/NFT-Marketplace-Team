import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { RiMessengerFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
import AuthCard from "./AuthCard";
import { cards } from "./Cards";

const Profile = () => {
  return (
    <div className="bg-info">
      <div className="py-10 lg:py-20 w-[90%] md:w-[85%] lg:w-[90%] 3xl:w-[70%] 4xl:w-[55%] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-5 items-start justify-start">
          <div className="bg-primary p-5 rounded-xl shadow-md w-full md:w-[50%] lg:w-[25%] mx-auto">
            <div className="mb-5">
              <img
                src="https://themebeyond.com/html/nftmak/assets/img/others/author_profile.png"
                className="rounded-lg w-full"
                alt=""
              />
            </div>
            <div className="mb-5">
              <div className="flex items-center gap-3">
                <h4 className="text-lg text-heading_text font-semibold">
                  Olivia Jenar
                </h4>
                <div className="">
                  <img
                    src="https://themebeyond.com/html/nftmak/assets/img/icons/star.svg"
                    alt=""
                  />
                </div>
              </div>
              <p className="text-body_text text-xs ">@ marketplace</p>
            </div>
            <div className="mb-5">
              <p className="text-body_text text-xs  pb-5 border-b border-purple">
                Myself Olivia_ ipsum dolor amet this consectetur adipisicing
                elit. Quis non fugit totam laborio.
              </p>
            </div>
            <div className="flex justify-between items-center mb-10">
              <div className="">
                <p className="text-heading_text font-semibold">Collection</p>
                <p className="text-body_text">201</p>
              </div>
              <div className="">
                <p className="text-heading_text font-semibold">Creation</p>
                <p className="text-body_text">235</p>
              </div>
            </div>
            <div className="">
              <h4 className="text-lg text-heading_text font-semibold mb-4">
                Follow Social Media :
              </h4>
              <div className="bg-[#070b24] p-5 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex justify-center items-center bg-gradient-to-r from-[#6345ed] to-[#bc3cd3] h-[35px] w-[35px] rounded-full cursor-pointer">
                    <div className="flex justify-center items-center h-[30px] w-[30px] rounded-full bg-[#070b24]">
                      <RiFacebookFill className="text-heading_text text-xl" />
                    </div>
                  </div>
                  <div className="flex lg:flex-col items-center text-xs font-semibold text-heading_text cursor-pointer hover:text-purple duration-300">
                    <div className="">
                      <p>Facebook/</p>
                    </div>
                    <div className="">
                      <p>@joys_Aoi</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex justify-center items-center bg-gradient-to-r from-[#6345ed] to-[#bc3cd3] h-[35px] w-[35px] rounded-full cursor-pointer">
                    <div className="flex justify-center items-center h-[30px] w-[30px] rounded-full bg-[#070b24]">
                      <RiMessengerFill className="text-heading_text text-xl" />
                    </div>
                  </div>
                  <div className="flex lg:flex-col items-center text-xs font-semibold text-heading_text cursor-pointer hover:text-purple duration-300">
                    <div className="">
                      <p>Messenger/</p>
                    </div>
                    <div className="">
                      <p>@joys_Aoi</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex justify-center items-center bg-gradient-to-r from-[#6345ed] to-[#bc3cd3] h-[35px] w-[35px] rounded-full cursor-pointer">
                    <div className="flex justify-center items-center h-[30px] w-[30px] rounded-full bg-[#070b24]">
                      <RiWhatsappFill className="text-heading_text text-xl" />
                    </div>
                  </div>
                  <div className="flex lg:flex-col items-center text-xs font-semibold text-heading_text cursor-pointer hover:text-purple duration-300">
                    <div className="">
                      <p>Whatsapp/</p>
                    </div>
                    <div className="">
                      <p>@joys_Aoi</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex justify-center items-center bg-gradient-to-r from-[#6345ed] to-[#bc3cd3] h-[35px] w-[35px] rounded-full cursor-pointer">
                    <div className="flex justify-center items-center h-[30px] w-[30px] rounded-full bg-[#070b24]">
                      <RiYoutubeFill className="text-heading_text text-xl" />
                    </div>
                  </div>
                  <div className="flex lg:flex-col items-center text-xs font-semibold text-heading_text cursor-pointer hover:text-purple duration-300">
                    <div className="">
                      <p>Youtube/</p>
                    </div>
                    <div className="">
                      <p>@joys_Aoi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[75%]">
            <div className="p-5 bg-primary w-full rounded mb-10">
              <div className="flex flex-col md:flex-row  items-center gap-5">
                <div className="flex items-center gap-5">
                  <div className="bg-gradient-to-r from-[#6345ed] to-[#bc3cd3] px-5 py-2 rounded-full border border-icon cursor-pointer">
                    <p className="text-heading_text text-xs  font-semibold">
                      ALL NFT
                    </p>
                  </div>
                  <div className="bg-media_bg hover:bg-gradient-to-r from-[#6345ed] to-[#bc3cd3] px-5 py-2  border-icon border rounded-full cursor-pointer">
                    <h5 className="text-heading_text text-xs  font-semibold ">
                      VIRTUAL WORLD
                    </h5>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="bg-media_bg hover:bg-gradient-to-r from-[#6345ed] to-[#bc3cd3] px-5 py-2  border-icon border rounded-full cursor-pointer">
                    <h5 className="text-heading_text text-xs font-semibold">
                      COLLECTIBLES
                    </h5>
                  </div>
                  <btn className="bg-media_bg hover:bg-gradient-to-r from-[#6345ed] to-[#bc3cd3] px-5 py-2  border-icon border rounded-full cursor-pointer">
                    <p className="text-heading_text text-xs font-semibold">
                      MUSIC
                    </p>
                  </btn>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-5">
              {cards?.map((card) => (
                <AuthCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
