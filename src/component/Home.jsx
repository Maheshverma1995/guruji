import React from 'react'
import "./Home.css";
import HomeSection2 from './HomeSection2';

const Home = () => {
    return (
        <div className='body'>
            <div className='container-fluid'>
                
                
                <div className='row home-row'>
                    <div className='col-md-6   '>
                    <h4>
                                    " ज्ञान गुणी होता है, ज्ञान के बिना परमात्मा और आत्मा की परिकल्पना भी नहीं कर सकते। जिस व्यक्ति के पास ज्ञान है वो कभी भी उग्र नहीं हो सकता। वह शीतल जल के सामान शांत रहता है।"
                                </h4>
                                <p>श्री 108 विशुद्धसागर जी महाराज</p>
                        
                    </div>
                    <div className='col-md-6'>
                        <img src="./images/Acharya_Vishuddh_Sagar_Ji-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row d-flex justify-content-center ' >
                    <div className='col-5' style={{marginTop:'-120px'}}>
                    <div class=" d-flex shadow-lg p-3 mb-5 bg-body rounded">
                        <div className='col-8' style={{width:'300px'}}>
                            <h1>Headding</h1>
                            <p style={{textAlign:'justify', padding:'10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id enim, atque libero laboriosam modi reprehenderit nisi tenetur praesentium nostrum culpa aspernatur impedit expedita non natus mollitia veniam ipsa vero eveniet!</p>
                            <button style={{width:'200px'}} type="button" class="btn btn-danger">Left</button>
                        </div>
                        <div className='col-4'>
                            <img style={{width:'300px'}} className='img-fluid' src="./images/Acharya_Vishuddh_Sagar_Ji-removebg-preview.png" alt="" />
                        </div>
                    
                    </div>
                    </div>
                </div>
                <div className='row'><HomeSection2/></div>
            </div>

           

            <div className='container mt-4 mb-5'>
                <div className='row'>
                    
                    <div className='col-md-6 position-relative home-section-1'>
                        <div className='row home-section-1-row-1'>
                            <img className='img-fluid p-5 ' src="./images/Acharya_Vishuddh_Sagar_Ji-removebg-preview.png" alt="" />
                            <p>श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
                            <span></span>
                            
                        </div>
                        <div className='row home-section-1-row-2'>
                            <div className='col'>
                            <h1 className='text-center'>Headding</h1>
                        <p>श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
                        <button type="button" class="btn btn-danger">Read More</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className='col-md-6'>
                        
                    </div>

                </div>
            </div>
            {/* /////////////////////////////////////////////////////////////////// */}
           

                </div>
               
            
    )
}

export default Home
