import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Icons = () => {
  useEffect(()=>
  {
    Aos.init({duration:2000});
  },
  []);
  return (
    
      <div className='container  body '>
        <div className='row  d-flex justify-content-around'>
            <div data-aos='fade-up' className='col-md-3    ' id='icon-col'>
                <img style={{width:'80px'}} className='img-fluid' src="./images/jain-dharm.png" alt="" />
            </div>
            <div data-aos='fade-up' className='col-md-3  ' id='icon-col'>
                <img style={{width:'80px'}} className='img-fluid' src="./images/logo-image.png" alt="" />
            </div>
            <div data-aos='fade-up' className='col-md-3 mt-4  ' id='icon-col'>
                <img style={{width:'80px'}} className='img-fluid' src="./images/logo-video-image.png" alt="" />
            </div>
            <div data-aos='fade-up' className='col-md-3 mt-4  me-1 ' id='icon-col'>
                <img style={{width:'80px'}} className='img-fluid' src="./images/logo-news-image.png" alt="" />
            </div>
        </div>
      </div>
    
  )
}

export default Icons
