import React from 'react'
import Rsidebar from '../Blog/Rsidebar'
import Nav from '../Nav'
import ScrollBtn from '../ScrollBtn'
import BrowserByCategory from './BrowserByCategory'
import Category from './Category'
import Footer from './Footer'
import Hero from './Hero'

const Collection = () => {
  return (
    <div className="lg:pl-[110px] relative">
      <section className="md:h-[470px] h-[250px] explore-bg pt-3 md:pt-8 bg-[#070B24]">
        <Nav/>
        <Hero/>
      </section>

      <section className="block md:hidden"></section>

      <section>
        <Category/>
      </section>

      <section>
        <BrowserByCategory />
      </section>

      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default Collection