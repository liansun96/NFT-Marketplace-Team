import React from "react";
import { createAndSellNFTs } from "../../constants/index";
import CreateAndSellNFTCard from "./CreateAndSellNFTCard";

const CreateAndSellNFTs = () => {
  return (
    <div className="bg-[#070b24] h-[60vh] flex items-center">
      <div className="w-[90%] mx-auto">
        <div className="flex items-center gap-2 mb-28">
          <h4 className="text-heading_text text-2xl font-semibold">
            Create And Sell Your NFTs
          </h4>
          <img
            src="https://themebeyond.com/html/nftmak/assets/img/icons/title_icon03.png"
            alt="create-and-sell-NFTs-image"
          />
        </div>
        <div className="flex justify-between gap-2 mb-6">
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
