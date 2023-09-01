import React, { useEffect } from 'react'
import '../App.css'
import Marquee from 'react-fast-marquee'
import Iframe from 'react-iframe'
import { FaFacebookSquare, FaYoutube, FaInstagram } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'
 

const Footer = () => {
    useEffect(()=>
    {
      Aos.init({duration:1000});
    },
    []);
    return (
        <div>
            <div className='container-fluid shadow-lg' style={{ backgroundColor: 'orange' }}>
                <div className='container-fluid'>
                    <div className="row">
                        <div className='col-md-4'>
                            <div className='row'>
                            <h1 data-aos="fade-up" className='text-white text-center' > डायरी</h1>
                                <div className='col-md-6'data-aos="fade-up">
                                    <img className='img-fluid mt-3' src="./images/Acharya_Vishuddh_Sagar_Ji-removebg-preview.png" alt="" />
                                </div>
                                <div className='col-md-6'>
                                    <p className='text-white mt-4' data-aos="fade-up">बीजांकुर न्याय के समान श्रुतज्ञान की परम्परा और आचार्यपरम्परा एक दूसरे के पूरक हैं। आचरंति यस्माद् व्रतानी त्याचार्यः ।।3।। यस्माद् सम्यग्ज्ञानादि गुणाधारा हृदय व्रतानि स्वर्गापवर्ग सुखामृत बीजानि भव्या हितार्थ माचरति स आचार्यः |</p>
                                </div>
                                {/* <div className='col mt-3'><input className='rounded w-75' type="text"  placeholder='comment' /></div> */}
                            </div>
                        </div>
                        <div className='col-md-4'data-aos="fade-up">
                            <h1 className='text-white' data-aos="fade-up"> नवीनतम समाचार </h1>
                            <div className='col'>
                                <div className='row row-news'>

                                    <div className='col-4 mt-2'>
                                        <img className='img-fluid' src="./images/1954421679_WhatsAppImage2018-12-22at11_28_53.cropped.jpeg.b2233a68b7c1d163a1e90c5db67e9cac.jpeg" alt="" />
                                    </div>
                                    <div className='col-8 text-white'>श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</div>
                                    <div className='col-4 mt-2'>
                                        <img className='img-fluid' src="./images/1954421679_WhatsAppImage2018-12-22at11_28_53.cropped.jpeg.b2233a68b7c1d163a1e90c5db67e9cac.jpeg" alt="" />
                                    </div>
                                    <div className='col-8 text-white'>श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</div>
                                    <div className='col-4 mt-2'>
                                        <img className='img-fluid' src="./images/1954421679_WhatsAppImage2018-12-22at11_28_53.cropped.jpeg.b2233a68b7c1d163a1e90c5db67e9cac.jpeg" alt="" />
                                    </div>
                                    <div className='col-8 text-white'>श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</div>
                                    <div className='col-4 mt-2'>
                                        <img className='img-fluid' src="./images/1954421679_WhatsAppImage2018-12-22at11_28_53.cropped.jpeg.b2233a68b7c1d163a1e90c5db67e9cac.jpeg" alt="" />
                                    </div>
                                    <div className='col-8 text-white'>श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</div>
                                    <div className='col-4 mt-2'>
                                        <img className='img-fluid' src="./images/1954421679_WhatsAppImage2018-12-22at11_28_53.cropped.jpeg.b2233a68b7c1d163a1e90c5db67e9cac.jpeg" alt="" />
                                    </div>
                                    <div className='col-8 text-white'>श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</div>
                                </div>

                            </div>
                            <div className='col d-flex justify-content-center'><input className='rounded-start mt-4' type="text"  placeholder='comment' />
                            <button type="button" style={{height:'40px',}} class=" bg-danger btn-danger text-white rounded-end mt-4">Send</button>
                            </div>
                            <div className='col d-flex justify-content-center mt-4'><button  type="button" className="btn btn-dark w-50">मोबाइल ऐप डाउनलोड करें</button></div>
                        </div>

                        <div className='col-md-4 mt-4'data-aos="fade-up">
                            
                                <Iframe className='rounded' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d448713.71846192505!2d77.07221524153388!3d28.52240403697898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1693116547906!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Iframe>
                            <div className='row mt-4'>
                                <div className='col d-flex justify-content-between'>
                                <div className='col-md-4'><span style={{ color:'#910b0c',fontSize: '50px' }}><FaFacebookSquare/></span></div>
                                <div className='col-md-4'><span style={{ color:'#910b0c',fontSize: '50px' }}><FaYoutube/></span></div>
                                <div className='col-md-4'><span style={{ color:'#910b0c',fontSize: '50px' }}><FaInstagram/></span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='row footer-row-2 shadow-lg p-3'>
                    <div className='col-md-6'>
                        <h1 className='text-white'>2023 vishuddhsagar.com</h1>
                    </div>
                    <div className='col-md-6'>
                        <Marquee>
                             <p className='text-white ' style={{ fontSize:'20px'}}> &#169;  COPYRIGHT KLIK PLUS SOLUTION IT PRIVATE LIMITED</p>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Footer;
