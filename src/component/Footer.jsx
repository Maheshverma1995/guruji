import React from 'react'
import './Footer.css'
import Marquee from 'react-fast-marquee'
import Iframe from 'react-iframe'
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className='container-fluid mb-5 mt-5' style={{ backgroundColor: 'orange' }}>
                <div className='container'>
                <div className="row">
                    <div className='col-md-4'>
                    <h1> blogs</h1>
                       <div className='row'>
                     
                        <div className='col-md-4'>
                            <img className='img-fluid'  src="./images/Acharya_Vishuddh_Sagar_Ji-removebg-preview.png" alt="" />
                        </div>
                        <div className='col-md-8'>
                            <p>बीजांकुर न्याय के समान श्रुतज्ञान की परम्परा और आचार्यपरम्परा एक दूसरे के पूरक हैं। आचरंति यस्माद् व्रतानी त्याचार्यः ।।3।। यस्माद् सम्यग्ज्ञानादि गुणाधारा हृदय व्रतानि स्वर्गापवर्ग सुखामृत बीजानि भव्या हितार्थ माचरति स आचार्यः |</p>
                        </div>
                       </div>
                    </div>
                    <div className='col-md-4'>
                        <h1> Latest News</h1>
                        <div className='col'>
                            <div className='row row-news'>
                                
                                <div className='col-4 mt-2'>
                                    <img className='img-fluid' src="./images/1954421679_WhatsAppImage2018-12-22at11_28_53.cropped.jpeg.b2233a68b7c1d163a1e90c5db67e9cac.jpeg" alt="" />
                                </div>
                                <div className='col-8'>kdlfjdskfkldsfdsfj</div>
                                <div className='col-4 mt-2'>
                                    <img className='img-fluid' src="./images/1954421679_WhatsAppImage2018-12-22at11_28_53.cropped.jpeg.b2233a68b7c1d163a1e90c5db67e9cac.jpeg" alt="" />
                                </div>
                                <div className='col-8'>kdlfjdskfkldsfdsfj</div>
                                <div className='col-4 mt-2'>
                                    <img className='img-fluid' src="./images/1954421679_WhatsAppImage2018-12-22at11_28_53.cropped.jpeg.b2233a68b7c1d163a1e90c5db67e9cac.jpeg" alt="" />
                                </div>
                                <div className='col-8'>kdlfjdskfkldsfdsfj</div>
                                <div className='col-4 mt-2'>
                                    <img className='img-fluid' src="./images/1954421679_WhatsAppImage2018-12-22at11_28_53.cropped.jpeg.b2233a68b7c1d163a1e90c5db67e9cac.jpeg" alt="" />
                                </div>
                                <div className='col-8'>kdlfjdskfkldsfdsfj</div>
                                <div className='col-4 mt-2'>
                                    <img className='img-fluid' src="./images/1954421679_WhatsAppImage2018-12-22at11_28_53.cropped.jpeg.b2233a68b7c1d163a1e90c5db67e9cac.jpeg" alt="" />
                                </div>
                                <div className='col-8'>kdlfjdskfkldsfdsfj</div>
                            </div>
                            
                        </div>
                        <div className='col'>hi</div>
                        <div className='col'>hi</div>
                    </div>
                    
                    <div className='col-md-4 mt-4'>
                    <div className='row'>
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d448713.71846192505!2d77.07221524153388!3d28.52240403697898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1693116547906!5m2!1sen!2sin" style={{width:'100%' ,height:'100%',border:'1px solid grey',borderRadius:'50px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe></div>
                     <div className='row mt-4'>
                        <div className='col-md-2'><span style={{fontSize:'50px'}}><FaFacebookSquare/></span></div>
                        <div className='col-md-2'><span style={{fontSize:'50px'}}></span></div>
                        <div className='col-md-2'><span style={{fontSize:'50px'}}></span></div>
                        </div>
                     </div>
                </div>
                
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1>2023 vishuddhsagar.com</h1>
                    </div>
                    <div className='col-md-6'>
                        <Marquee>
                        <span style={{width:'50px'}}>&#169;</span> COPYRIGHT KLIK PLUS SOLUTION IT PRIVATE LIMITED
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Footer
