import React from 'react'
import Hero from './Hero'
import TopCollection from './TopCollection'
import './Home.css'

const Home = () => {
  return (
    <div className='pl-[110px]'>
        <Hero/>
        <TopCollection/>
    </div>
  )
}

export default Home