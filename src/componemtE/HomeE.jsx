import React, { useEffect } from 'react'
import "../component/Home.css";
import { FaAngleDown } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import HomeSectionE from './HomeSectionE';



const HomeE = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    },
        []);
    return (
        <div >
            <div className='container-fluid'>


                <div className='row home-row'>
                    <div className='col-lg-6' data-aos="fade-down">
                        <h4 className='fs-5 ps-5'>
                        You are an energetic, ascetic seeker immersed in the practice of truth, conduct according to the teachings, conduct according to the Guru's tradition, character - or should I say, a spiritual good Guru who gives good knowledge to everyone, whose specialty is that he seems to be his own to everyone. Pujya Shri is the holder of broad thoughts and appropriate thinking, beyond religious traditions and blind stereotypes.
                        </h4>
                        <p className='fs-3'>Shree 108 Visudhsagar ji</p>

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
                                <h1 className='text-center mt-3'>Headding </h1>
                                <p >On the one hand, as a result of the Agamic stream emanating from your spiritual nectar-filled speech, hundreds of works give the true understanding of your profound philosophical knowledge, on the other hand, the thirty-three child celibate Dixit Muni is highly educated, proficient in Prakrit, Apabhramsa, Sanskrit, Hindi, English, he is the master of your internal Gives the message of capability-equality and proper policy-expertise.</p>
                                <button style={{ width: '200px' }} type="button" className="btn btn-danger mb-3">Read More</button>
                            </div>
                            <div className='col-md-4 card-image-row-2 body shadow '>
                                <img className='img-fluid' src="./images/Acharya_Vishuddh_Sagar_Ji-removebg-preview.png" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='row'><HomeSectionE /></div>
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
                                    <h1 className='text-center'>Headding </h1>
                                    <p>Atall order in this ’Aali age (the fifth aeon, called ‘dusamti’)? Yes, but present in this age also are pious souls, ascetics (muni, sramana) and householders Ésröra#ad, endowed with right-faith (samyahtua, samyag-darsana) who follow laudable conduct (cäritra) according to the level of the destruction-cum-subsidence (Asayopasama) of their conduct-deluding (cäritra-mohanï ya) karmas. Äcärya Visuddhasägara (born 18 December, 1971) is one such rare gem among the present-day ascetics.

A digambara ascetie (nirgrañtha muni) since last twenty-nine years , Âcärya Visuddhasägara’s greatest commitment is to study the Scripture. A worthy son of ’Mother Jinavänï’, he spends maximum time, during the day and at night, in her service. With dedication and extraordinary concentration (eAägratä) he has brought out and assimilated profound concepts and tenets found deep in the ocean of the Scripture, with their associated five kinds of meanings — the word-meaning(sabdärtha), the standpoint- meaning (nayärtha), the sectarian-meaning (maförffia), the scriptural-meaning (ägamärtha) and the spiritual-meaning @/tôutirïfiad — beyond the reach of the ordinary souls.
</p>
                                    <button type="button" className="btn btn-danger">Read More</button>
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
                            <h1>Wisdom about the reality of substances Praesentium, voluptatem!</h1>
                            <p >The one who has the wisdom about the reality of substances, has assimilated the core of the Scripture, knows the ways of the world, has no desire for worldly riches and honour, has sharp intellect, is serene, has sharp wit to know beforehand the answers to all future questions, has the ability to face with calmness almost all kinds of questions, enjoys lordship over the audience, is attractive, and is a repository of good qualities; such leader of the eongregation (sangfia) should deliver his discourse in clear and sweet words, without speaking ill of others.
                            </p>
                            <button type="button" className="btn btn-danger mb-5">Read More</button>
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

export default HomeE
