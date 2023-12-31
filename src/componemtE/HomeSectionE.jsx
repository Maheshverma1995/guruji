import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../App.css'

const HomeSectionE = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    },
        []);
    return (
        <div className='container-fluid body'>
            <div className='container'>
                <div className='row mb-3'>
                    <div className='col-md-6 col-lg-3 mt-3' data-aos="fade-up">
                        <span><h1 className='home-section-2-h1'> Live Update</h1></span>
                        <div className='home-section-div row-news1 '>
                            <p>Äcärya Visuddhasägara has mastered the science-of-thought (nyäya), and his grip on complex concepts of Jaina metaphysics including anehäntaväda and syädväda is amazing. </p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3  mt-3' data-aos="fade-down">
                        <span><h1 className='home-section-2-h1'> Calendar </h1></span>
                        <div className='home-section-div'>
                            <div className='row row-news1'>

                                <div className='col-6 border-end'>
                                    <p>7 september  2023</p>
                                </div>
                                <div className='col-6'>rohini vrat</div>
                                <div className='col-6 border-end'>
                                    <p>11 september  2023</p>
                                </div>
                                <div className='col-6'>	paryushana beginning</div>
                                <div className='col-6 border-end'>
                                    <p>20 september  2023</p>
                                </div>
                                <div className='col-6'>Samvatsari festival</div>
                                <div className='col-6 border-end'>
                                    <p>4 October  2023</p>
                                </div>
                                <div className='col-6'>rohini vrat</div>
                                <div className='col-6 border-end'>
                                    <p>21 October  2023</p>
                                </div>
                                <div className='col-6'>Ashwin Navpad Oli starts</div>

                                <div className='col-6 border-end'>
                                    <p>28 October  2023</p>
                                </div>
                                <div className='col-6'>Ashwin Navapad Oli Full</div>
                                <div className='col-6 border-end'>
                                    <p>31 October  2023</p>
                                </div>
                                <div className='col-6'>rohini vrat</div>
                                <div className='col-6 border-end'>
                                    <p>12 November  2023</p>
                                </div>
                                <div className='col-6'>Lakshmi Puja</div>
                                <div className='col-6 border-end'>
                                    <p>14 November  2023</p>
                                </div>
                                <div className='col-6'>
                                    gujarati new year</div>
                                <div className='col-6 border-end'>
                                    <p>18 November  2023</p>
                                </div>
                                <div className='col-6'>
                                    profit panchami</div>
                                <div className='col-6 border-end'>
                                    <p>19 November  2023</p>
                                </div>
                                <div className='col-6'>Kartik Ashtanhika Vidhan starts</div>
                                <div className='col-6 border-end'>
                                    <p>26 November  2023</p>
                                </div>
                                <div className='col-6'>
                                    Kartik Chaumasi Chaudas</div>
                                <div className='col-6 border-end'>
                                    <p>27 November  2023</p>
                                </div>
                                <div className='col-6'>Kartik Ashtanhika Vidhan complete</div>
                                <div className='col-6 border-end'>
                                    <p>27 November  2023</p>
                                </div>
                                <div className='col-6'>Kartik Rath Yatra</div>
                                <div className='col-6 border-end'>
                                    <p>28 November  2023</p>
                                </div>
                                <div className='col-6'>rohini vrat</div>
                                <div className='col-6 border-end'>
                                    <p>25 December  2023</p>
                                </div>
                                <div className='col-6'>rohini vrat</div>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 mt-3' data-aos="fade-up">
                        <span><h1 className='home-section-2-h1'>
                            Today's</h1></span>
                        <div className='home-section-div row-news1'>
                            <p>uirodha — To aceept the quality in a substance that is opposite to its nature. ‘The matter (pudgala) has consciousness (cetanä).’</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 mt-3 mb-4' data-aos="fade-up">
                        <span><h1 className='home-section-2-h1'>
                            Live video</h1></span>
                        <div className='home-section-div row-news1'>
                            <p><video className='img-fluid' controls autoPlay muted src=""></video>
                                <h6 className='mt-4'>To assume that one substance can beeome the other substance. ‘The soul is the body.</h6>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeSectionE
