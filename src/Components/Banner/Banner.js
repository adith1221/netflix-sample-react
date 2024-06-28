import React, { useEffect } from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='Banner'>
        <div className="contents">
        <h1 className='title'>Movie Name</h1>
            <div className='buttons'>
                <button className='play'>play</button>
                <button className='play'>more</button>
            </div>
        </div>
        <h1 className='description'>We and our 831 partners store and/or access information on a device, such as unique IDs in cookies to process personal data. You may accept or manage your choices by clicking below or at any time in the privacy policy page. These choices will be signaled to our partners and will not affect browsing data</h1>
      <div className="fade">
        
      </div>
    </div>
  )
}

export default Banner
