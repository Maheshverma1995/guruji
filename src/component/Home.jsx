import React from 'react'
import "./Home.css";
import HomeSection2 from './HomeSection2';
import { FaAngleDown } from "react-icons/fa";

const Home = () => {
    return (
        <div >
            <div className='container-fluid'>


                <div className='row home-row'>
                    <div className='col-md-6  p-5 '>
                        <h4>
                            " ज्ञान गुणी होता है, ज्ञान के बिना परमात्मा और आत्मा की परिकल्पना भी नहीं कर सकते। जिस व्यक्ति के पास ज्ञान है वो कभी भी उग्र नहीं हो सकता। वह शीतल जल के सामान शांत रहता है।"
                        </h4>
                        <p>श्री 108 विशुद्धसागर जी महाराज</p>

                    </div>
                    <div className='col-md-6 mt-5 p-5' >
                        <img className='img-fluid' src="./images/Acharya_Vishuddh_Sagar_Ji-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='container-fluid body'>
                <div className='row d-flex justify-content-center ' >
                    <div className='col-md-5 card-home' >
                        <div class=" row  shadow-lg p-3 mb-5 bg-body rounded" id='card-home-div'>
                            <div className='col-md-8 p-5 '>
                                <h1>शीर्षक </h1>
                            <p>श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
                                <button style={{ width: '200px' }} type="button" class="btn btn-danger">और पढ़ें</button>
                            </div>
                            <div className='col-md-4 mt-5'>
                                <img  className='img-fluid' src="./images/Acharya_Vishuddh_Sagar_Ji-removebg-preview.png" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='row'><HomeSection2 /></div>
            </div>
            <div className='container mt-4 mb-5'>
                <div className='row d-flex justify-content-between'>

                    <div className='col-md-6 '>
                        <div className='row '>
                            <img className='img-fluid' src="./images/Layout for Front page (2).jpg" alt="" />


                        </div>
                        <div className='row home-section-1-row-2'>
                            <div className='col p-5'>
                                <h1 className='text-center'>शीर्षक </h1>
                                <p>श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
                                <button type="button" class="btn btn-danger">और पढ़ें</button>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-6 border-start'>
                        <img className='img-fluid border-start ' src="./images/Annotation 2023-08-05 120024.png" alt="" />

                    </div>

                </div>
            </div>
            <div className='container-fluid mt-5'>
                <div className='row '>
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
                        <h1>प्रथमानुयोग मर्या-ख्यानं, चरितं पुराण मपि पुण्यम् । बोधि समाधि निधानं, बोधति बोधः समीचीनः ।। 43।।</h1>
                        <p>अर्थ- जिस ग्रन्थ में चारों पुरुषार्थों (धर्म, अर्थ, काम, मोक्ष) का किसी एक महापुरुष के चारित्र का वर्णन होता है, उन कथाचरित्र और पुराण कहे जाने वाले ग्रन्थों को "प्रथमानुयोग" कहते हैं। इनके पठन-पाठन (पारायण) से, जानने से पुण्य तथा बोधि और समाधि की प्राप्ति होती है। यह सम्यग्ज्ञान का विषय है।
                            वे दोनों धर्मपरायण सुधी श्रावक अपने गृह ग्राम की ओर प्रस्थान करते हैं। मार्ग में ही एक दूसरे की
                        </p>
                        <button type="button" class="btn btn-danger">और पढ़ें</button>
                    </div>
                    <div className='col-md-6'>
                        <img className='img-fluid' src="./images/Acharya_Vishuddh_Sagar_Ji-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='container-fluid body'>
            <div className='container mt-5'>
                <div className='row   mb-5'>
                    <div className='col-md-4 mt-3'>
                        <img src="./images/Layout for Front page (1).jpg" class="img-thumbnail shadow-lg" alt="..." />
                    </div>
                    <div className='col-md-4 mt-3'>
                        <img src="./images/Layout for Front page (2).jpg" class="img-thumbnail shadow-lg" alt="..." />
                    </div>
                    <div className='col-md-4 mt-3 '>
                        <img src="./images/Layout for Front page (1).jpg" class="img-thumbnail shadow-lg" alt="..." />
                    </div>
                    <button type="button" class="btn btn-danger mt-3 image-more"><FaAngleDown /></button>
                </div>
            </div>
            </div>
            <div className='container-fluid  '>
                <div className='row '>
                    <div className='col '>
                        <video className='img-fluid video-home' style={{ height: '300px', width: '100%' }} poster='./images/bottum-image.png' controls autoPlay muted src=""></video>
                    </div>
                </div>
            </div>
            <div className='container-fluid body'>
            <div className='container'>
                <div className='row body mt-3'>
                    <div className='col-md-4 mt-3'>
                        <video className='img-fluid video-home' poster='./images/bottum-image.png' controls autoPlay muted src=""></video>
                    </div>
                    <div className='col-md-4 mt-3'>
                        <video className='img-fluid video-home' poster='./images/bottum-image.png' controls autoPlay muted src=""></video>
                    </div>
                    <div className='col-md-4 mt-3'>
                        <video className='img-fluid video-home' poster='./images/bottum-image.png' controls autoPlay muted src=""></video>
                    </div>
                    <button type="button" class="btn btn-danger mt-2 image-more"><FaAngleDown /></button>
                </div>
            </div>
            </div>

        </div>


    )
}

export default Home
