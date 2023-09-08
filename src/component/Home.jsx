import React, { useEffect } from 'react'
import "./Home.css";
import HomeSection2 from './HomeSection2';
import { FaAngleDown } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';



const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    },
        []);
    return (
        <div >
            <div className='container-fluid'>


                <div className='row home-row'>
                    <div className='col-lg-6' data-aos="fade-down">
                        <h4>
                        सत्य की साधना, आगमानुसार, आचरण, गुरु-परम्परानुसार चारित्र - चलन में लवलीन आप एक ओजस्वी, तपस्वी साधक है या कहूँ जन-जन को सद्-बोध देने वाले आध्यात्मिक सद् गुरु, जिनकी विशेषता है कि- वह सभी को अपने लगते है। पंथ-परम्पराओं, अंध- रूढ़ियों से परे, विशद विचार, समीचीन सोच के धारक हैं पूज्य श्री ।
                        </h4>
                        <p>श्री 108 विशुद्धसागर जी महाराज</p>

                    </div>
                    <div className='col-lg-6 mt-5' data-aos="fade-down" >
                        <img className='img-fluid' src="./images/Acharya_Vishuddh_Sagar_Ji-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row d-flex  justify-content-center body ' >
                    <div className='col-md-5 card-home' data-aos="fade-up">
                        <div className=" row  shadow-lg p-3 mb-5 body rounded" id='card-home-div'>
                            <div className='col-md-8 body shadow '>
                                <h1 className='text-center mt-3'>शीर्षक </h1>
                                <p >एक ओर आपकी आध्यात्मिक अमृतमयी वाणी से निश्रित आगमिक धारा के परिणामस्वरूप शतक कृतियाँ आपके तलस्पर्शी तत्वज्ञान का सद्बोध कराती हैं, तो दूसरी और तैंतीस बाल ब्रह्मचारी दीक्षित मुनि को उच्च शिक्षित, प्राकृत, अपभ्रंस, संस्कृत, हिन्दी, अंग्रेजी में निष्णात हैं, वह आपकी आंतरिक क्षमता-समता एवं सम्यक् नीति-निपुणता का संदेश देते हैं।</p>
                                <button style={{ width: '200px' }} type="button" className="btn btn-danger mb-3">और पढ़ें</button>
                            </div>
                            <div className='col-md-4 card-image-row-2 body shadow '>
                                <img className='img-fluid' src="./images/Acharya_Vishuddh_Sagar_Ji-removebg-preview.png" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='row'><HomeSection2 /></div>
            </div>
            <div className='container-fluid body'>
                <div className='container'>
                    <div className='row  body d-flex justify-content-between'>

                        <div className='col-md-6 mt-3 mb-4 ' data-aos="fade-up">
                            <div className='row '>
                                <img className='img-fluid' src="./images/Layout for Front page (2).jpg" alt="" />


                            </div>
                            <div className='row home-section-1-row-2' data-aos="fade-up">
                                <div className='col p-3'>
                                    <h1 className='text-center'>शीर्षक </h1>
                                    <p>इक्कीसवी सदी के एक दूर-दृष्टा, युवाओं के प्रेरणा पुंज, आध्यात्मिक प्रवचनों के सफल प्रस्तोवा, आलौकिक व्यक्तित्व एवं विराट् कृतित्व के धनी, वीतरागी श्रमण संस्कृति के आध्यात्मिक सद्गुरु दिगम्बराचार्य का नाम है- अध्यात्मयोगी विशुद्धसागर जी । उगते यौवन के युवाओं को आध्यात्म की ओर अग्रसर कर उनकी सुप्त मानवीय चेतना को पुनर्जाग्रत कर, जीवन मूल्यों और अहिंसा का दिव्य अवदान देने वाले वाले अग्रदूत है पूज्यश्री । सहज-सरल व्यक्तित्व के धनी, नवीन दृष्टिकोण, अद्भुत चिंतन एवं आकर्षक लेखन कला में निष्णात, महाप्रज्ञावन्त, नीति-निपुण, चेतन रसायन के अन्वेषक वीतरागी वैज्ञानिक है, आचार्य विशुद्धसागर जी मुनिनाथ ।</p>
                                    <button type="button" className="btn btn-danger">और पढ़ें</button>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-6 mt-3 mb-4 mb-4 border-start' data-aos="fade-up">
                            <img className='img-fluid border-start ' src="./images/Annotation 2023-08-05 120024.png" alt="" />

                        </div>

                    </div>
                </div>
            </div>
            <div className='container-fluid body'>
                <div className='row'>
                    <div className='col mt-3 mb-4'>
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="./images/3.thumb.png.91ba6627087d30f9721388f4fe348721.png" className="d-block w-100 slider-image img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./images/3page_2.jpg" className="d-block w-100 slider-image img-fluid" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./images/3page_2.png" className="d-block w-100 slider-image img-fluid" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid body'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 mt-5  body' data-aos="fade-up">
                            <h1>प्रथमानुयोग मर्या-ख्यानं, चरितं पुराण मपि पुण्यम् । बोधि समाधि निधानं, बोधति बोधः समीचीनः ।। 43।।</h1>
                            <p >अर्थ- जिस ग्रन्थ में चारों पुरुषार्थों (धर्म, अर्थ, काम, मोक्ष) का किसी एक महापुरुष के चारित्र का वर्णन होता है, उन कथाचरित्र और पुराण कहे जाने वाले ग्रन्थों को "प्रथमानुयोग" कहते हैं। इनके पठन-पाठन (पारायण) से, जानने से पुण्य तथा बोधि और समाधि की प्राप्ति होती है। यह सम्यग्ज्ञान का विषय है।
                                वे दोनों धर्मपरायण सुधी श्रावक अपने गृह ग्राम की ओर प्रस्थान करते हैं। मार्ग में ही एक दूसरे की
                            </p>
                            <button type="button" className="btn btn-danger mb-5">और पढ़ें</button>
                        </div>
                        <div className='col-md-6  mb-5 body' data-aos="fade-up">
                            <img className='img-fluid mt-5' src="./images/Acharya_Vishuddh_Sagar_Ji-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid body'>
                <div className='container'>
                    <div className='row mb-2'>
                        <div className='col-md-4 mt-3' data-aos="fade-up">
                            <img src="./images/Layout for Front page (1).jpg" className="img-thumbnail shadow-lg" alt="..." />
                        </div>
                        <div className='col-md-4 mt-3' data-aos="fade-down">
                            <img src="./images/Layout for Front page (2).jpg" className="img-thumbnail shadow-lg" alt="..." />
                        </div>
                        <div className='col-md-4 mt-3 ' data-aos="fade-up">
                            <img src="./images/Layout for Front page (1).jpg" className="img-thumbnail shadow-lg" alt="..." />
                        </div>

                    </div>
                    <div className='row d-flex justify-content-center '>
                        <Link className="btn btn-danger mb-4 image-more" to="gallery" role="button"><FaAngleDown /></Link>
                    </div>
                </div>
            </div>
            <div className='container-fluid body'>
                <div className='row'>
                    <div className='col mb-3'>
                        <video className='img-fluid video-home' style={{ height: '300px', width: '100%' }} poster='./images/bottum-image.png' controls  autoPlay muted src=""></video>
                    </div>
                </div>
            </div>
            <div className='container-fluid body'>
                <div className='container '>
                    <div className='row'>
                        <div className='col-md-4 mt-3' data-aos="fade-up">
                            <video className='img-fluid video-home' poster='./images/bottum-image.png' controls autoPlay muted src=""></video>
                        </div>
                        <div className='col-md-4 mt-3' data-aos="fade-down">
                            <video className='img-fluid video-home' poster='./images/bottum-image.png' controls autoPlay muted src=""></video>
                        </div>
                        <div className='col-md-4 mt-3' data-aos="fade-up">
                            <video className='img-fluid video-home' poster='./images/bottum-image.png' controls autoPlay muted src=""></video>
                        </div>

                    </div>
                    <div className='row d-flex justify-content-center '>
                        <Link className="btn btn-danger mb-4 image-more" to="videos" role="button"><FaAngleDown /></Link>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Home
