import React from "react";
import { FaAngleDoubleRight, FaShareAlt } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import supermarket from '../../assets/supermarket.png'
import user from '../../assets/user.png'
import calendar from '../../assets/calendar.png'
// import Post from "./Post";
// import DetailForm from "./DetailForm";

const LgCard = () => {
  const cardItems = [
    {
      id: 1,
      image:
        "https://themebeyond.com/html/nftmak/assets/img/blog/blog_thumb01.png",
      title: "Marketplace is the online shop for the video",
      tag: [
        {
          id: 1,        
          icon: supermarket,
          title: "NFT Marketplace",
        },
        {
          id: 2,
          icon: user,
          title: "Admin",
        },
        {
          id: 3,
          icon: calendar,
          title: "March 10, 2022",
        },
      ],
      description:
        "Wallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum nsectetur. Non fungible tokens or NFTs are cryptographic assets on a blockchain with unique identification codes a metadata that distinguish them from each other Unlike cryptocurren.",
    },
    {
      id: 2,
      image:
        "https://themebeyond.com/html/nftmak/assets/img/blog/blog_thumb02.png",
      title: "Marketplace is the online shop for the video",
      tag: [
        {
          id: 1,        
          icon: supermarket,
          title: "NFT Marketplace",
        },
        {
          id: 2,
          icon: user,
          title: "Admin",
        },
        {
          id: 3,
          icon: calendar,
          title: "March 10, 2022",
        },
      ],
      description:
        "Wallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum nsectetur. Non fungible tokens or NFTs are cryptographic assets on a blockchain with unique identification codes a metadata that distinguish them from each other Unlike cryptocurren.",
    },
    {
      id: 3,
      image:
        "https://themebeyond.com/html/nftmak/assets/img/blog/blog_thumb03.png",
      title: "Marketplace is the online shop for the video",
      tag: [
        {
          id: 1,        
          icon: supermarket,
          title: "NFT Marketplace",
        },
        {
          id: 2,
          icon: user,
          title: "Admin",
        },
        {
          id: 3,
          icon: calendar,
          title: "March 10, 2022",
        },
      ],
      description:
        "Wallet that is functional for NFT purcasin You have Coinbase account at this point.Lorem ipsum nsectetur. Non fungible tokens or NFTs are cryptographic assets on a blockchain with unique identification codes a metadata that distinguish them from each other Unlike cryptocurren.",
    },
  ];
  return (
    <div className="flex justify-evenly flex-col md:flex-row px-3 md:px-5">
      <div className="md:w-[60%]">
        {cardItems.map((item) => {
          return (
            <div
              key={item.id}
              className="w-full mb-10 rounded-lg bg-[#1C1832] text-[#E6E6D4]"
            >
              <img src={item.image} alt="" />
              <div className="px-5 md:px-10 py-5">
                <ul className="flex items-center flex-wrap md:my-5 md:gap-5">
                  {item.tag.map((tag) => {
                    return (
                      <li
                        key={tag.id}
                        className="flex gap-3 mr-5 md:mr-0 items-center justify-center "
                      >
                        <img className="w-4 h-4" src={tag.icon} alt="" />
                        <p className="hover:text-[#D83AFC] cursor-pointer">{tag.title}</p>
                      </li>
                    );
                  })}
                </ul>
                <h2 className="font-semibold text-2xl mt-5 mb-5 hover:text-[#D83AFC] cursor-pointer">{item.title}</h2>
                <p className="pb-10">{item.description}</p>
                <img src="https://themebeyond.com/html/nftmak/assets/img/blog/blog_line.png" />
                <div className="py-5 flex justify-between">
                  <button className="px-8 py-3 outline-dashed outline-1 -outline-offset-[6px] text-sm font-semibold rounded-full bg-gradient-to-r from-[#7144EF] to-[#D83AFC] hover:bg-gradient-to-l transition duration-500 ">
                    READ MORE
                  </button>
                  <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#7144EF] to-[#D83AFC] p-1 ">
                    <div className="bg-[#1C1832] w-full h-full rounded-full flex justify-center items-center">
                      <FaShareAlt />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      <Post/>
      <DetailForm/>
      </div>
      <div className="md:w-[30%]">
        <div className="bg-[#1C1832] w-full rounded-lg p-8">
          <h2 className="font-semibold text-[#E6E6D4] text-xl mb-8">Search</h2>
          <div className="flex items-center h-14 w-full relative  rounded-lg">
            <input
              className="bg-[#090E2A] w-full p-3 h-full text-[#E6E6D4] rounded-lg focus-visible:outline-0"
              type="text"
              name=""
              id=""
              placeholder="Search..."
            />
            <button className="absolute right-0 w-14 h-14 flex justify-center items-center rounded-md bg-gradient-to-r from-[#7144EF] to-[#D83AFC] text-[#E6E6D4]">
              <BiSearch className="font-bold" />
            </button>
          </div>
        </div>
        <div className="bg-[#1C1832] w-full rounded-lg p-8 my-10">
          <h2 className="font-semibold text-[#E6E6D4] text-xl mb-5">Categories</h2>
          <ul>
            <li className="text-gray-200 hover:text-[#D83AFC] cursor-pointer border-b border-dashed border-gray-500 py-2.5 flex justify-between items-center">
              <p>Domain Names</p>
              <FaAngleDoubleRight className="text-xs" />
            </li>
            <li className="text-gray-200 hover:text-[#D83AFC] cursor-pointer border-b border-dashed border-gray-500 py-2.5 flex justify-between items-center">
              <p>Photography</p>
              <FaAngleDoubleRight className="text-xs" />
            </li>
            <li className="text-gray-200 hover:text-[#D83AFC] cursor-pointer border-b border-dashed border-gray-500 py-2.5 flex justify-between items-center">
              <p>Coinbase</p>
              <FaAngleDoubleRight className="text-xs" />
            </li>
            <li className="text-gray-200 hover:text-[#D83AFC] cursor-pointer border-b border-dashed border-gray-500 py-2.5 flex justify-between items-center">
              <p>Trading Cards</p>
              <FaAngleDoubleRight className="text-xs" />
            </li>
          </ul>
        </div>
        <div className="bg-[#1C1832] w-full rounded-lg p-8 my-10">
            <h2 className="font-semibold text-[#E6E6D4] text-xl mb-5">Recent Post</h2>
            {
                cardItems.filter(item => item.id !== 1).map(el => {
                    return <div key={el.id}>
                        <img src={el.image} alt="" />
                        <ul className="flex gap-5">
                        {
                            el.tag.filter(item=> item.id !== 1).map(tag => {
                                return (
                                    <li
                                    key={tag.id}
                                    className="flex gap-3 my-3 items-center text-[#E6E6D4] "
                                  >
                                    <img className="w-4 h-4" src={tag.icon} alt="" />
                                    <span className="hover:text-[#D83AFC] cursor-pointer">{tag.title}</span>
                                  </li>
                                )
                            })
                        }
                        </ul>
                <h2 className="font-semibold text-xl text-[#E6E6D4] mb-5 hover:text-[#D83AFC] cursor-pointer">{el.title}</h2>
                    </div>
                })
            }
        </div>
      </div>
    </div>
  );
};

export default LgCard;
