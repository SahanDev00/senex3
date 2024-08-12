import React from 'react'
import Hero from './Hero'
import Difference from '../Components/Difference'
import Brands from '../Components/Brands'
import HomeCards from '../Components/HomeCards'
import Trusted from '../Components/Trusted'
import NewsPaper from '../Components/NewsPaper'


const Home = () => {
  return (
    <div>
        <Hero/>
        <Difference/>
        <Brands/>
        <HomeCards/>
        <Trusted/>
        <NewsPaper/>
    </div>
  )
}

export default Home