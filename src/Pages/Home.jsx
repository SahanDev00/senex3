import React from 'react'
import Hero from './Hero'
import Difference from '../Components/Difference'
import Brands from '../Components/Brands'
import HomeCards from '../Components/HomeCards'
import Trusted from '../Components/Trusted'
import NewsPaper from '../Components/NewsPaper'
import { Helmet } from 'react-helmet'


const Home = () => {
  return (
      <div>
        <Helmet><title>SENEX | Best Computer Shop in Gampaha, Sri Lanka You'll Ever Find.</title></Helmet>
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