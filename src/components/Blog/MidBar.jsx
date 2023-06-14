import React from "react";

const MidBar = () => {
  const listItem = [
    {
      id: 1,
      image: "https://themebeyond.com/html/nftmak/assets/img/icons/cat_001.png",
      title: "All",
    },
    {
      id: 2,
      image: "https://themebeyond.com/html/nftmak/assets/img/icons/cat_01.png",
      title: "Games",
    },
    {
      id: 3,
      image: "https://themebeyond.com/html/nftmak/assets/img/icons/cat_02.png",
      title: "Art",
    },
    {
      id: 4,
      image: "https://themebeyond.com/html/nftmak/assets/img/icons/cat_03.png",
      title: "Trading Cards",
    },
    {
      id: 5,
      image: "https://themebeyond.com/html/nftmak/assets/img/icons/cat_04.png",
      title: "Music",
    },
    {
      id: 6,
      image: "https://themebeyond.com/html/nftmak/assets/img/icons/cat_05.png",
      title: "Domain Names",
    },
    {
      id: 7,
      image: "https://themebeyond.com/html/nftmak/assets/img/icons/cat_06.png",
      title: "Memes",
    },
    {
      id: 8,
      image: "https://themebeyond.com/html/nftmak/assets/img/icons/cat_07.png",
      title: "Collectibles",
    },
  ];
  return (
    <div className="flex w-full bg-[#1C1832] flex-wrap justify-center py-5 lg:py-8 items-center">
      {listItem.map((item) => {
        return (
          <div key={item.id} className="px-5 text-gray-400 py-2 first:text-white flex gap-2 justify-center items-center">
            <img className="w-4 h-4" src={item.image} alt="" />
            <p className="font-semibold">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MidBar;
