import React from "react";
import { createAndSellNFTs } from "../../constants/index";
import CreateAndSellNFTCard from "./CreateAndSellNFTCard";

const CreateAndSellNFTs = () => {
  return (
    <div className="bg-[#070b24] py-10 flex items-center">
      <div className="w-[90%] md:w-[85%] lg:w-[90%] 3xl:w-[70%] 4xl:w-[55%] mx-auto">
        <div className="flex items-center gap-2 mb-28">
          <h4 className="text-heading_text text-xl md:text-2xl font-semibold">
            Create And Sell Your NFTs
          </h4>
          <img
            src="https://themebeyond.com/html/nftmak/assets/img/icons/title_icon03.png"
            alt="create-and-sell-NFTs-image"
          />
        </div>
        <div className="flex flex-col flex-wrap md:flex-row justify-between gap-16 md:gap-10 lg:gap-2 mb-6">
          {createAndSellNFTs?.map((createAndSellNFT) => (
            <CreateAndSellNFTCard
              key={createAndSellNFT.id}
              createAndSellNFT={createAndSellNFT}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateAndSellNFTs;
