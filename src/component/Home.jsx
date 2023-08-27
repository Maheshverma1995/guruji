import React from 'react'
import "./Home.css";
import HomeSection2 from './HomeSection2';
import { FaAngleDown } from "react-icons/fa";

const Home = () => {
    return (
        <div >
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
            <div className='container-fluid body'>
                <div className='row d-flex justify-content-center ' >
                    <div className='col-5' style={{ marginTop: '-120px' }}>
                        <div class=" d-flex shadow-lg p-3 mb-5 bg-body rounded">
                            <div className='col-8' style={{ width: '300px' }}>
                                <h1>शीर्षक </h1>
                                <p style={{ textAlign: 'justify', padding: '10px' }}>श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
                                <button style={{ width: '200px' }} type="button" class="btn btn-danger">और पढ़ें</button>
                            </div>
                            <div className='col-4'>
                                <img style={{ width: '300px' }} className='img-fluid' src="./images/Acharya_Vishuddh_Sagar_Ji-removebg-preview.png" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='row'><HomeSection2 /></div>
            </div>
            <div className='container mt-4 mb-5'>
                <div className='row d-flex justify-content-between'>

                    <div className='col-md-6 p-5'>
                        <div className='row '>
                            <img className='img-fluid' src="./images/Layout for Front page (2).jpg" alt="" />
                            

                        </div>
                        <div className='row home-section-1-row-2'>
                            <div className='col'>
                                <h1 className='text-center'>शीर्षक </h1>
                                <p>श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
                                <button type="button" class="btn btn-danger">और पढ़ें</button>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-6 p-5  border-start'>
                        <img className='img-fluid border-start h-75' src="./images/Annotation 2023-08-05 120024.png" alt="" />

                    </div>

                </div>
            </div>
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col'>
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="./images/3.thumb.png.91ba6627087d30f9721388f4fe348721.png" class="d-block w-100 slider-image img-fluid" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="./images/3page_2.jpg" class="d-block w-100 slider-image img-fluid" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="./images/3page_2.png" class="d-block w-100 slider-image img-fluid" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row mt-5 mb-5'>
                    <div className='col-md-6'>
                        <h1>शीर्षक</h1>
                        <p>श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
                        <button type="button" class="btn btn-danger">और पढ़ें</button>
                    </div>
                    <div className='col-md-6'>
                        <img className='img-fluid' src="./images/Acharya_Vishuddh_Sagar_Ji-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src="./images/Layout for Front page (1).jpg" class="img-thumbnail shadow-lg" alt="..." />
                    </div>
                    <div className='col-md-4'>
                        <img src="./images/Layout for Front page (2).jpg" class="img-thumbnail shadow-lg" alt="..." />
                    </div>
                    <div className='col-md-4'>
                        <img src="./images/Layout for Front page (1).jpg" class="img-thumbnail shadow-lg" alt="..." />
                    </div>
                    <button type="button" class="btn btn-danger image-more"><FaAngleDown /></button>
                </div>
            </div>
            <div className='container-fluid  '>
                <div className='row mt-5'>
                    <div className='col '>
                        <video className='img-fluid' style={{ height:'300px',width:'100%'}} poster='./image/bottum-image.png' controls autoPlay muted  src=""></video>
                    </div>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <video className='img-fluid'  poster='./image/bottum-image.png' controls autoPlay muted  src=""></video>
                    </div>
                    <div className='col-md-4'>
                        <video className='img-fluid'  poster='./image/bottum-image.png' controls autoPlay muted  src=""></video>
                    </div>
                    <div className='col-md-4'>
                        <video className='img-fluid'  poster='./image/bottum-image.png' controls autoPlay muted  src=""></video>
                    </div>
                    <button type="button" class="btn btn-danger image-more"><FaAngleDown /></button>
                </div>
            </div>

        </div>


    )
}

export default Home
