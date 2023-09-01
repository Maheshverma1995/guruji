import React, { useEffect } from "react";
import HomeSection2 from "./HomeSection2";
import { Link } from "react-router-dom";
import { FaThumbsUp, FaShareAlt, FaDownload } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'

const VideoDetails = () => {
  useEffect(()=>
  {
    Aos.init({duration:1000});
  },
  []);
  return (
    <div className="body" >
      <HomeSection2 />
      <div className="container body mb-5">
        <div className="row">
          <div className="col">
            <div className="video-container">
              <video  data-aos="flip-up" className="img-fluid jiven-parichay-img" controls autoPlay muted loop src=""></video>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col mt-5 ">
            <span data-aos="fade-up"  className="me-2 ms-2 pe-2 ps-2 fs-1"><FaThumbsUp /></span>
            <span data-aos="fade-up" className="me-2 ms-2 pe-2 ps-2 fs-1"><FaShareAlt /></span>
            <span data-aos="fade-up" className="me-2 ms-2 pe-2 ps-2 fs-1"><FaDownload /></span>
          </div>

          <h2 className="text-center text-danger mt-5 mb-3">शीर्षक</h2>

          <div className="col">
            <p data-aos="fade-up" className="mahotsav-paragraph p-4">
              बीजांकुर न्याय के समान श्रुतज्ञान की परम्परा और आचार्यपरम्परा एक
              दूसरे के पूरक हैं। आचरंति यस्माद् व्रतानी त्याचार्यः ।।3।। यस्माद्
              सम्यग्ज्ञानादि गुणाधारा हृदय व्रतानि स्वर्गापवर्ग सुखामृत बीजानि
              भव्या हितार्थ माचरति स आचार्यः |(त.वा. 9/20) जिनसे व्रतों को धारण
              कर आचरण किया जाता है, वे आचार्य हैं। जिन सम्यक्दर्शनज्ञान आदि
              गुणों के आधारभूत महापुरुषों से भव्यजीव स्वर्ग-मोक्षरूप अमृत बीजभूत
              व्रतों को ग्रहण कर अपने हित के लिए आचरण करते हैं, व्रतों का पालन
              करते हैं व जो दीक्षा देते हैं, वे आचार्य कहलाते हैं। श्रुतज्ञान की
              परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों,
              आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा
              सत्साहित्य का प्रतिपादन होता रहा है। यह भारतभूमि पूर्व की भांति
              साधु-सन्तों के अवतरण, निष्क्रमण, आचरण एवं साधना से पवित्र, पावन,
              पुनीत होती रही है। तथा भूत, भविष्य एवं वर्तमान काल में अनेक
              भव्यजीव अपनी आत्मा का उद्धार कर रहे हैं। उन्हीं में से मुनिकुंजर,
              समाधिसम्राट्, अप्रतिम उपसर्गविजेता, आदर्श तपस्वी, महामुनि, दक्षिण
              भारत के वयोवृद्ध सन्त, आचार्यपरमेष्ठी श्री 108 आचार्य आदिसागर जी
              महाराज 'अंकलीकर' के पट्टाधीश आचार्य महावीरकीर्ति जी महाराज के
              शिष्य वात्सल्यरत्नाकर आचार्य श्री विमलसागर जी महाराज, इन
              महापुरुषों के उद्धार की प्रणाली आगमोक्त रही है। इन्होंने
              स्वात्महित के साथ परहित भी किया है तथा अपनी तपोपूत आत्मा से भव्य
              आत्माओं को हितोपदेश दिया है, वह उपदेश ग्रन्थ रूप में लीपिबद्ध है।
              आचार्य श्री आदिसागर जी (अंकलीकर) ने भाद्रपद शुक्ला 4 वि.सं. 1923
              सन् 1866 को अंकली में जन्म लिया। मगसिर शुक्ला 2 वि.सं. 1970, सन्
              1913 को कुंथलगिरि पर दीक्षा ली, ज्येष्ठ शुक्ला 5 वि.सं. 1972, सन्
              1915 को जयसिंहपुर (काडगेमला, उदगाँव) में आचार्यपद को ग्रहण किया।
              फाल्गुन कृष्णा 13 वि.सं. 2000 सन् 1944 को ऊदगाँव-कुंजवन में
              समाधिमरण किया। उन्होंने अपने दीक्षाकाल में प्रायश्चित्त विधान
              (प्राकृत) को भाद्रपद शुक्ला 5 वि.सं. 1972, सन् 1915, 'जिनधर्म
              रहस्य' (संस्कृत) को मगसिर शुक्ला 2 वि.सं. 1999, सन् 1942,
              दिव्यदेशना (कन्नड़) को मगसिर शुक्ला 11 वि.सं. 1999, सन् 1941,
              शिवपथ (संस्कृत) को भाद्रपद शुक्ला 4 वि.सं. 2000, सन् 1943, वचनामृत
              (मराठी) को माघ शुक्ला 14 वि. सं. 2000, सन् 1943, उद्बोधन (कन्नड़)
              को फाल्गुन शुक्ला 11 वि.सं. 2000, सन् 1943, अन्तिम दिव्य देशना
              (कन्नड़) को फाल्गुन कृष्णा 13, वि.सं. 2001, सन् 1944 में पूर्ण
              किया । आचार्य श्री आदिसागर जी महाराज (अंकलीकर) के पट्टाधीश आचार्य
              श्री महावीरकीर्ति जी महाराज ने वैशाख कृष्णा 9, वि.सं. 1967, सन्
              1910 को फिरोजाबाद में जन्म लिया, फाल्गुन शुक्ला 11, वि. सं. 2000,
              सन् 1943 को ऊदगांव में दीक्षा ली, आश्विन शुक्ला 10, वि.सं. 2000,
              सन् 1943 को ऊदगाँव में आचार्य पद ग्रहण किया, माघ कृष्णा 6, वि.सं.
              2028, सन् 1972 को महसाणा में समाधि प्राप्त की। आपने अपने परम्परागत
              ज्ञान से अपने दीक्षाकाल में प्रायश्चित्त विधान (संस्कृत टीका) को
              फाल्गुन शुक्ला 13, वि. सं. 2009, सन् 1952 वचनामृत (अंग्रेजी)
              वर्ड्स ऑफ नेक्टर को मगसिर कृष्णा 10, वि.सं. 2000, सन् 1943,
              धर्मानन्द श्रावकाचार (हिन्दी) को चैत्र शुक्ला 13, वि.सं. 2000 सन्
              1943, प्रबोधाष्टक (संस्कृत 13)
            </p>
          </div>
        </div>

      </div>
      <div className="container body1 ">
        <div className="col-3"><h2 className="p-2" style={{ minWidth:'220px', backgroundColor: 'red', bottom: '0' }}>शीर्षक Content</h2>
        </div>
        <div style={{ width: '100%', height: '2px', backgroundColor: 'red', marginTop: '-8px' }}></div>
        <div className="row mt-5 ">
          <div className="col-md-4 mt-2 mb-4">
            <div className="card">
              <video  data-aos="flip-up" className="img-fluid" controls muted  src=""></video>
              <div className="card-body">
                <h2 className="card-title">शीर्षक</h2>
                <p data-aos="fade-up" className="card-text">
                  श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।
                </p>
                <Link to="#" className="btn btn-danger">
                  और पढ़ें
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-2 mb-4">
            <div className="card">
              <video  data-aos="flip-up" className="img-fluid" controls muted  src=""></video>
              <div className="card-body">
                <h2 className="card-title">शीर्षक</h2>
                <p data-aos="fade-up" className="card-text">
                  श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।
                </p>
                <Link to="#" className="btn btn-danger">
                  और पढ़ें
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-2 mb-5">
            <div className="card ">
              <video  data-aos="flip-up" className="img-fluid" controls muted  src=""></video>
              <div className="card-body">
                <h2 className="card-title">शीर्षक</h2>
                <p data-aos="fade-up" className="card-text">
                  श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।
                </p>
                <Link to="#" className="btn btn-danger">
                  और पढ़ें
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

  );
};

export default VideoDetails;
