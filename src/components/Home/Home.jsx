import React from 'react'
import Hero from './Hero'
import TopCollection from './TopCollection'
import './Home.css'
import CreateAndSellNFTs from './CreateAndSellNFTs'
import ExploreProduct from './ExploreProducts'
import LatestNewsUpdate from './LatestNewsUpdate'
import About from './About'
import Testiomonail from './Testiomonail'
import Footer from './Footer'
import FeaturesOfTheWeek from './FeaturesOfTheWeek'

const Home = () => {
  return (
    <div className='md:pl-[110px]'>
        <Hero />
        <TopCollection/>
        <FeaturesOfTheWeek/>
        <CreateAndSellNFTs/>
        <ExploreProduct/>
        <LatestNewsUpdate/>
        <About/>
        <Testiomonail/>
        <Footer/>
    </div>
  )
}

export default Home