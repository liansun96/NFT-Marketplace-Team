import React from 'react'
import Hero from './Hero'
import TopCollection from './TopCollection'
import './Home.css'
import CreateAndSellNFTs from './CreateAndSellNFTs'
import ExploreProduct from './ExploreProducts'

const Home = () => {
  return (
    <div className='pl-[110px]'>
        <Hero/>
        <TopCollection/>
        <CreateAndSellNFTs/>
        <ExploreProduct/>
    </div>
  )
}

export default Home