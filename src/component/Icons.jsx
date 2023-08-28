import React from 'react'


const Icons = () => {
  return (
    <div className='container-fluid mb-4'>
      <div className='container mt-5'>
        <div className='row d-flex justify-content-evenly'>
            <div className='col-3 m-3 ' id='icon-col'>
                <img style={{width:'80px'}} className='  img-fluid' src="./images/jain-dharm.png" alt="" />
            </div>
            <div className='col-3 m-3 ' id='icon-col'>
                <img style={{width:'80px'}} className='  img-fluid' src="./images/logo-image.png" alt="" />
            </div>
            <div className='col-3 m-3 ' id='icon-col'>
                <img style={{width:'80px'}} className='  img-fluid' src="./images/logo-video-image.png" alt="" />
            </div>
            <div className='col-3 m-3 ' id='icon-col'>
                <img style={{width:'80px'}} className='  img-fluid' src="./images/logo-news-image.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Icons
