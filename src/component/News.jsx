import React, { useEffect } from 'react'
import sagar from './Pics/Acharya_Vishuddh_Sagar_Ji.jpg';
import { Link } from 'react-router-dom';
import HomeSection2 from './HomeSection2';
import Aos from 'aos'
import 'aos/dist/aos.css'

const News = () => {
  useEffect(()=>
  {
    Aos.init({duration:1000});
  },
  []);
  return (
    <div className='body'>
      <HomeSection2/>
    <div className="container">
      
      <div className="row">
        <div className="col-md-4 mt-2 mb-3">
          <div className="card" data-aos="flip-right" >
            <img src={sagar} className="img-fluid .jiven-parichay-img1" alt="sss" />
            <div className="card-body body1  position-relative home-section-div-card">
              <h5 className="card-title">lorem</h5>
              <p className="card-text">जिन सम्यक्दर्शनज्ञान आदि गुणों के आधारभूत महापुरुषों से भव्यजीव स्वर्ग-मोक्षरूप अमृत बीजभूत व्रतों को ग्रहण कर अपने हित के लिए आचरण करते हैं, व्रतों का पालन करते हैं व जो दीक्षा देते हैं, वे आचार्य कहलाते हैं।</p>
              <Link to="#" className="btn btn-danger position-absolute bottom-0 start-50 translate-middle-x mb-2">और देखें</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-2 mb-3 " >
          <div className="card" data-aos="flip-right">
            <img src={sagar} className="img-fluid .jiven-parichay-img1 height" alt="sss" />
            <div className="card-body body1  position-relative home-section-div-card">
              <h5 className="card-title">आशीर्वाद प्रत्यग् आत्मदर्शी</h5>
              <p className="card-text">जिन सम्यक्दर्शनज्ञान आदि गुणों के आधारभूत महापुरुषों से भव्यजीव स्वर्ग-मोक्षरूप अमृत बीजभूत व्रतों को ग्रहण कर अपने हित के लिए आचरण करते हैं, व्रतों का पालन करते हैं व जो दीक्षा देते हैं, वे आचार्य कहलाते हैं।</p>
              <Link to="#" class="btn btn-danger position-absolute  bottom-0 start-50 translate-middle-x mb-2 ">और देखें</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-2 mb-3  ">
          <div className="card" data-aos="flip-right">
            <img src={sagar} className="img-fluid .jiven-parichay-img1 height" alt="sss" />
            <div className="card-body body1  position-relative home-section-div-card">
              <h5 className="card-title">आशीर्वाद प्रत्यग् आत्मदर्शी</h5>
              <p className="card-text">श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
              <Link to="#" class="btn btn-danger position-absolute bottom-0 start-50 translate-middle-x mb-2">और देखें</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-2 mb-3 ">
          <div className="card" data-aos="flip-right" >
            <img src={sagar} className="img-fluid .jiven-parichay-img1" alt="sss" />
            <div className="card-body body1  position-relative home-section-div-card">
              <h5 className="card-title">lorem</h5>
              <p className="card-text">जिन सम्यक्दर्शनज्ञान आदि गुणों के आधारभूत महापुरुषों से भव्यजीव स्वर्ग-मोक्षरूप अमृत बीजभूत व्रतों को ग्रहण कर अपने हित के लिए आचरण करते हैं, व्रतों का पालन करते हैं व जो दीक्षा देते हैं, वे आचार्य कहलाते हैं।</p>
              <Link to="#" className="btn btn-danger position-absolute bottom-0 start-50 translate-middle-x mb-2">और देखें</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-2 mb-3 " >
          <div className="card" data-aos="flip-right">
            <img src={sagar} className="img-fluid .jiven-parichay-img1 height" alt="sss" />
            <div className="card-body body1  position-relative home-section-div-card">
              <h5 className="card-title">आशीर्वाद प्रत्यग् आत्मदर्शी</h5>
              <p className="card-text">जिन सम्यक्दर्शनज्ञान आदि गुणों के आधारभूत महापुरुषों से भव्यजीव स्वर्ग-मोक्षरूप अमृत बीजभूत व्रतों को ग्रहण कर अपने हित के लिए आचरण करते हैं, व्रतों का पालन करते हैं व जो दीक्षा देते हैं, वे आचार्य कहलाते हैं।</p>
              <Link to="#" class="btn btn-danger position-absolute bottom-0 start-50 translate-middle-x mb-2">और देखें</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-2 mb-3  ">
          <div className="card" data-aos="flip-right">
            <img src={sagar} className="img-fluid .jiven-parichay-img1 height" alt="sss" />
            <div className="card-body body1  position-relative home-section-div-card">
              <h5 className="card-title">आशीर्वाद प्रत्यग् आत्मदर्शी</h5>
              <p className="card-text">श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
              <Link to="#" class="btn btn-danger position-absolute bottom-0 start-50 translate-middle-x mb-2">और देखें</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-2 mb-3 ">
          <div className="card" data-aos="flip-right" >
            <img src={sagar} className="img-fluid .jiven-parichay-img1" alt="sss" />
            <div className="card-body body1  position-relative home-section-div-card">
              <h5 className="card-title">lorem</h5>
              <p className="card-text">जिन सम्यक्दर्शनज्ञान आदि गुणों के आधारभूत महापुरुषों से भव्यजीव स्वर्ग-मोक्षरूप अमृत बीजभूत व्रतों को ग्रहण कर अपने हित के लिए आचरण करते हैं, व्रतों का पालन करते हैं व जो दीक्षा देते हैं, वे आचार्य कहलाते हैं।</p>
              <Link to="#" className="btn btn-danger position-absolute bottom-0 start-50 translate-middle-x mb-2">और देखें</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-2 mb-3 " >
          <div className="card" data-aos="flip-right">
            <img src={sagar} className="img-fluid .jiven-parichay-img1 height" alt="sss" />
            <div className="card-body body1  position-relative home-section-div-card">
              <h5 className="card-title">आशीर्वाद प्रत्यग् आत्मदर्शी</h5>
              <p className="card-text">जिन सम्यक्दर्शनज्ञान आदि गुणों के आधारभूत महापुरुषों से भव्यजीव स्वर्ग-मोक्षरूप अमृत बीजभूत व्रतों को ग्रहण कर अपने हित के लिए आचरण करते हैं, व्रतों का पालन करते हैं व जो दीक्षा देते हैं, वे आचार्य कहलाते हैं।</p>
              <Link to="#" class="btn btn-danger position-absolute bottom-0 start-50 translate-middle-x mb-2">और देखें</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-2 mb-3  ">
          <div className="card" data-aos="flip-right">
            <img src={sagar} className="img-fluid .jiven-parichay-img1 height" alt="sss" />
            <div className="card-body body1  position-relative home-section-div-card">
              <h5 className="card-title">आशीर्वाद प्रत्यग् आत्मदर्शी</h5>
              <p className="card-text">श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
              <Link to="#" class="btn btn-danger position-absolute bottom-0 start-50 translate-middle-x mb-2">और देखें</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-2 mb-3 ">
          <div className="card" data-aos="flip-right" >
            <img src={sagar} className="img-fluid .jiven-parichay-img1" alt="sss" />
            <div className="card-body body1  position-relative home-section-div-card">
              <h5 className="card-title">lorem</h5>
              <p className="card-text">जिन सम्यक्दर्शनज्ञान आदि गुणों के आधारभूत महापुरुषों से भव्यजीव स्वर्ग-मोक्षरूप अमृत बीजभूत व्रतों को ग्रहण कर अपने हित के लिए आचरण करते हैं, व्रतों का पालन करते हैं व जो दीक्षा देते हैं, वे आचार्य कहलाते हैं।</p>
              <Link to="#" className="btn btn-danger position-absolute bottom-0 start-50 translate-middle-x mb-2">और देखें</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-2 mb-3 " >
          <div className="card" data-aos="flip-right">
            <img src={sagar} className="img-fluid .jiven-parichay-img1 height" alt="sss" />
            <div className="card-body body1  position-relative home-section-div-card">
              <h5 className="card-title">आशीर्वाद प्रत्यग् आत्मदर्शी</h5>
              <p className="card-text">जिन सम्यक्दर्शनज्ञान आदि गुणों के आधारभूत महापुरुषों से भव्यजीव स्वर्ग-मोक्षरूप अमृत बीजभूत व्रतों को ग्रहण कर अपने हित के लिए आचरण करते हैं, व्रतों का पालन करते हैं व जो दीक्षा देते हैं, वे आचार्य कहलाते हैं।</p>
              <Link to="#" class="btn btn-danger position-absolute bottom-0 start-50 translate-middle-x mb-2">और देखें</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-2 mb-3  ">
          <div className="card" data-aos="flip-right">
            <img src={sagar} className="img-fluid .jiven-parichay-img1 height" alt="sss" />
            <div className="card-body body1  position-relative home-section-div-card">
              <h5 className="card-title">आशीर्वाद प्रत्यग् आत्मदर्शी</h5>
              <p className="card-text">श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
              <Link to="#" class="btn btn-danger position-absolute bottom-0 start-50 translate-middle-x mb-2">और देखें</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-2 mb-3 ">
          <div className="card" data-aos="flip-right" >
            <img src={sagar} className="img-fluid .jiven-parichay-img1" alt="sss" />
            <div className="card-body body1  position-relative home-section-div-card">
              <h5 className="card-title">lorem</h5>
              <p className="card-text">जिन सम्यक्दर्शनज्ञान आदि गुणों के आधारभूत महापुरुषों से भव्यजीव स्वर्ग-मोक्षरूप अमृत बीजभूत व्रतों को ग्रहण कर अपने हित के लिए आचरण करते हैं, व्रतों का पालन करते हैं व जो दीक्षा देते हैं, वे आचार्य कहलाते हैं।</p>
              <Link to="#" className="btn btn-danger position-absolute bottom-0 start-50 translate-middle-x mb-2">और देखें</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-2 mb-3 " >
          <div className="card" data-aos="flip-right">
            <img src={sagar} className="img-fluid .jiven-parichay-img1 height" alt="sss" />
            <div className="card-body body1  position-relative home-section-div-card">
              <h5 className="card-title">आशीर्वाद प्रत्यग् आत्मदर्शी</h5>
              <p className="card-text">जिन सम्यक्दर्शनज्ञान आदि गुणों के आधारभूत महापुरुषों से भव्यजीव स्वर्ग-मोक्षरूप अमृत बीजभूत व्रतों को ग्रहण कर अपने हित के लिए आचरण करते हैं, व्रतों का पालन करते हैं व जो दीक्षा देते हैं, वे आचार्य कहलाते हैं।</p>
              <Link to="#" class="btn btn-danger position-absolute bottom-0 start-50 translate-middle-x mb-2">और देखें</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-2 mb-3  ">
          <div className="card" data-aos="flip-right">
            <img src={sagar} className="img-fluid .jiven-parichay-img1 height" alt="sss" />
            <div className="card-body body1  position-relative home-section-div-card">
              <h5 className="card-title">आशीर्वाद प्रत्यग् आत्मदर्शी</h5>
              <p className="card-text">श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
              <Link to="#" class="btn btn-danger position-absolute bottom-0 start-50 translate-middle-x mb-2">और देखें</Link>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
  )
}

export default News
