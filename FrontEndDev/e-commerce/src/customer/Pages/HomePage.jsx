import React from 'react'
import MainCarousel from '../components/HomeCarousel/MainCarousel'
import HomeSectionCard from '../components/HomeSectionCard/HomeSectionCard'
// import HomeSectionCarousel from '../components/HomeSectionCarousel/HomeSectionCarousel'

const HomePage = () => {
  return (
    <div>
      <MainCarousel/>
      <div>
        {/* <HomeSectionCarousel/> */}
        <HomeSectionCard/>
        
      </div>
    </div>
  )
}

export default HomePage
