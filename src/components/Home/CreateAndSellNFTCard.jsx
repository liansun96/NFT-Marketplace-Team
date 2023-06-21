import React from 'react'

const CreateAndSellNFTCard = ({createAndSellNFT}) => {
  return (
    <div className='relative duration-700 hover:-translate-y-5  md:w-[330px] lg:w-[260px] 2xl:w-[300px] 4xl:w-[310px] h-[200px] bg-primary rounded-xl p-7 space-y-3'>
        <span className="duration-300 text-purple hover:text-dark_blue">{createAndSellNFT.step}</span>
        <h5 className="text-xl font-bold text-heading_text">{createAndSellNFT.title}</h5>
        <p className="text-body_text text-sm tracking-wider font-light">
          {createAndSellNFT.description} 
        </p>
        <img className='absolute -top-[45px] right-5' src={createAndSellNFT.iconImage} alt="" />
    </div> 
  )
}

export default CreateAndSellNFTCard