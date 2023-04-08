import React from 'react'
import {
    Banner,
  About,
  Roadmap,
  Features,
  TopNfts,
  Team,
  Contact,
} from '../components/index'
const Home = () => {
  return (
    <>
    <div className="home">
        <Banner/>
        <About/>
        <Features/>
        <TopNfts/>
        <Roadmap/>
        <Team/>
        <Contact/>
    </div>
    </>
  )
}

export default Home