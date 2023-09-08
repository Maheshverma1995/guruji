import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../App.css'

const HomeSection2 = () => {
    useEffect(()=>
  {
    Aos.init({duration:3000});
  },
  []);
    return (
        <div className='container-fluid body'>
            <div className='container'>
                <div className='row mb-3'>
                    <div className='col-md-6 col-lg-3 mt-3'data-aos="fade-up">
                        <span><h1 className='home-section-2-h1'> लाइव अपडेट</h1></span>
                        <div className='home-section-div row-news1 '>
                            <p>बीजांकुर न्याय के समान श्रुतज्ञान की परम्परा और आचार्यपरम्परा एक दूसरे के पूरक हैं। आचरंति यस्माद् व्रतानी त्याचार्यः ।।3।। यस्माद् सम्यग्ज्ञानादि गुणाधारा हृदय व्रतानि स्वर्गापवर्ग सुखामृत बीजानि भव्या हितार्थ माचरति स आचार्यः |(त.वा. 9/20) जिनसे व्रतों को धारण कर आचरण किया जाता है</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3  mt-3' data-aos="fade-down">
                        <span><h1 className='home-section-2-h1'> कैलेंडर </h1></span>
                        <div className='home-section-div'>
                                <div className='row row-news1'>

                                    <div className='col-6 border-end'>
                                        <p>7 सितंबर 2023</p>
                                    </div>
                                    <div className='col-6'>रोहिणी व्रत</div>
                                    <div className='col-6 border-end'>
                                        <p>11 सितंबर 2023</p>
                                    </div>
                                    <div className='col-6'>	पर्युषण पर्वारंभ</div>
                                    <div className='col-6 border-end'>
                                        <p>20 सितंबर 2023</p>
                                    </div>
                                    <div className='col-6'>सम्वत्सरी पर्व</div>
                                    <div className='col-6 border-end'>
                                        <p>4अक्टूबर 2023</p>
                                    </div>
                                    <div className='col-6'>रोहिणी व्रत</div>
                                    <div className='col-6 border-end'>
                                        <p>21अक्टूबर 2023</p>
                                    </div>
                                    <div className='col-6'>अश्विन नवपद ओली प्रारंभ</div>

                                    <div className='col-6 border-end'>
                                        <p>28अक्टूबर 2023</p>
                                    </div>
                                    <div className='col-6'>अश्विन नवपद ओली पूर्ण</div>
                                    <div className='col-6 border-end'>
                                        <p>31अक्टूबर 2023</p>
                                    </div>
                                    <div className='col-6'>रोहिणी व्रत</div>
                                    <div className='col-6 border-end'>
                                        <p>12नवंबर 2023</p>
                                    </div>
                                    <div className='col-6'>लक्ष्मी पूजा</div>
                                    <div className='col-6 border-end'>
                                        <p>14नवंबर 2023</p>
                                    </div>
                                    <div className='col-6'>गुजराती नया साल</div>
                                    <div className='col-6 border-end'>
                                        <p>18नवंबर 2023</p>
                                    </div>
                                    <div className='col-6'>लाभ पंचमी</div>
                                    <div className='col-6 border-end'>
                                        <p>19नवंबर 2023</p>
                                    </div>
                                    <div className='col-6'>कार्तिक अष्टान्हिका विधान प्रारंभ</div>
                                    <div className='col-6 border-end'>
                                        <p>26नवंबर 2023</p>
                                    </div>
                                    <div className='col-6'>कार्तिक चौमासी चौदस</div>
                                    <div className='col-6 border-end'>
                                        <p>27नवंबर 2023</p>
                                    </div>
                                    <div className='col-6'>कार्तिक अष्टान्हिका विधान पूर्ण</div>
                                    <div className='col-6 border-end'>
                                        <p>27नवंबर 2023</p>
                                    </div>
                                    <div className='col-6'>कार्तिक रथ यात्रा</div>
                                    <div className='col-6 border-end'>
                                        <p>28नवंबर 2023</p>
                                    </div>
                                    <div className='col-6'>रोहिणी व्रत</div>
                                    <div className='col-6 border-end'>
                                        <p>25दिसंबर 2023</p>
                                    </div>
                                    <div className='col-6'>रोहिणी व्रत</div>
                                </div>

                            </div>
                    </div>
                    <div className='col-md-6 col-lg-3 mt-3'data-aos="fade-up">
                        <span><h1 className='home-section-2-h1'> आज का विचार</h1></span>
                        <div className='home-section-div row-news1'>
                            <p>जिस ग्रन्थ में चारों पुरुषार्थों (धर्म, अर्थ, काम, मोक्ष) का किसी एक महापुरुष के चारित्र का वर्णन होता है, उन कथाचरित्र और पुराण कहे जाने वाले ग्रन्थों को "प्रथमानुयोग" कहते हैं। </p>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 mt-3 mb-4'data-aos="fade-up">
                        <span><h1 className='home-section-2-h1'> लाइव वीडियो</h1></span>
                        <div className='home-section-div row-news1'>
                            <p><video className='img-fluid' controls autoPlay muted src=""></video>
                            <h6 className='mt-4'>प्रथमानुयोग मर्या-ख्यानं, चरितं पुराण मपि पुण्यम् । बोधि समाधि निधानं, बोधति बोधः समीचीनः </h6>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeSection2
