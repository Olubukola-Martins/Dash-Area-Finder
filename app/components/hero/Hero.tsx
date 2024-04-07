
import React from 'react'
import HeroSearchSection from './HeroSearchSection'
import HeroCardSection from './HeroCardSection'

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-3 justify-between w-full">
      <HeroSearchSection />
      <div className='max-lg:mx-auto'>
        <HeroCardSection />
      </div>
    </div>
  );
}
// flex-grow relative
export default Hero