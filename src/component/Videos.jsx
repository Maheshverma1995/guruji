import React, { useEffect } from 'react'
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HomeSection2 from './HomeSection2';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Videos = () => {
    useEffect(()=>
    {
      Aos.init({duration:1000});
    },
    []);
    return (
        <div className='body'>
            <HomeSection2/>
            <h1 className='text-center'>Videos</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 mt-3 mb-4 rounded'>
                        <div className="card ">
                            <video data-aos="zoom-in-down" className='img-fluid rounded ' controls muted src=""></video>
                            <div className="card-body">
                                <h5 data-aos="fade-down-up" className="card-title">शीर्षक</h5>
                                <p data-aos="fade-down-up" className="card-text">श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
                                <div className='d-flex justify-content-between'>
                                    <Link to="videodetails" className="btn btn-danger">Read More</Link>
                                    <span><FaDownload></FaDownload></span>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mt-3 mb-4 rounded'>
                        <div className="card ">
                            <video data-aos="zoom-in-down" className='img-fluid rounded ' controls muted src=""></video>
                            <div className="card-body">
                                <h5 data-aos="fade-down-up" className="card-title">शीर्षक</h5>
                                <p data-aos="fade-down-up" className="card-text">श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
                                <div className='d-flex justify-content-between'>
                                    <Link to="videodetails" className="btn btn-danger">Read More</Link>
                                    <span><FaDownload></FaDownload></span>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mt-3 mb-4 rounded'>
                        <div className="card ">
                            <video data-aos="zoom-in-down" className='img-fluid rounded ' controls muted src=""></video>
                            <div className="card-body">
                                <h5 data-aos="fade-down-up" className="card-title">शीर्षक</h5>
                                <p data-aos="fade-down-up" className="card-text">श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
                                <div className='d-flex justify-content-between'>
                                    <Link to="videodetails" className="btn btn-danger">Read More</Link>
                                    <span><FaDownload></FaDownload></span>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mt-3 mb-4 rounded'>
                        <div className="card ">
                            <video data-aos="zoom-in-down" className='img-fluid rounded ' controls muted src=""></video>
                            <div className="card-body">
                                <h5 data-aos="fade-down-up" className="card-title">शीर्षक</h5>
                                <p data-aos="fade-down-up" className="card-text">श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
                                <div className='d-flex justify-content-between'>
                                    <Link to="videodetails" className="btn btn-danger">Read More</Link>
                                    <span><FaDownload></FaDownload></span>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mt-3 mb-4 rounded'>
                        <div className="card ">
                            <video data-aos="zoom-in-down" className='img-fluid rounded ' controls muted src=""></video>
                            <div className="card-body">
                                <h5 data-aos="fade-down-up" className="card-title">शीर्षक</h5>
                                <p data-aos="fade-down-up" className="card-text">श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
                                <div className='d-flex justify-content-between'>
                                    <Link to="videodetails" className="btn btn-danger">Read More</Link>
                                    <span><FaDownload></FaDownload></span>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mt-3 mb-4 rounded'>
                        <div className="card ">
                            <video data-aos="zoom-in-down" className='img-fluid rounded ' controls muted src=""></video>
                            <div className="card-body">
                                <h5 data-aos="fade-down-up" className="card-title">शीर्षक</h5>
                                <p data-aos="fade-down-up" className="card-text">श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
                                <div className='d-flex justify-content-between'>
                                    <Link to="videodetails" className="btn btn-danger">Read More</Link>
                                    <span><FaDownload></FaDownload></span>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mt-3 mb-4 rounded'>
                        <div className="card ">
                            <video data-aos="zoom-in-down" className='img-fluid rounded ' controls muted src=""></video>
                            <div className="card-body">
                                <h5 data-aos="fade-down-up" className="card-title">शीर्षक</h5>
                                <p data-aos="fade-down-up" className="card-text">श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
                                <div className='d-flex justify-content-between'>
                                    <Link to="videodetails" className="btn btn-danger">Read More</Link>
                                    <span><FaDownload></FaDownload></span>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mt-3 mb-4 rounded'>
                        <div className="card ">
                            <video data-aos="zoom-in-down" className='img-fluid rounded ' controls muted src=""></video>
                            <div className="card-body">
                                <h5 data-aos="fade-down-up" className="card-title">शीर्षक</h5>
                                <p data-aos="fade-down-up" className="card-text">श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
                                <div className='d-flex justify-content-between'>
                                    <Link to="videodetails" className="btn btn-danger">Read More</Link>
                                    <span><FaDownload></FaDownload></span>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mt-3 mb-4 rounded'>
                        <div className="card ">
                            <video data-aos="zoom-in-down" className='img-fluid rounded ' controls muted src=""></video>
                            <div className="card-body">
                                <h5 data-aos="fade-down-up" className="card-title">शीर्षक</h5>
                                <p data-aos="fade-down-up" className="card-text">श्रुतज्ञान की परम्परा को भविष्य के लिए वृद्धिंगत करने में मनीषियों, महापुरुषों, आचार्यों तथा मुनियों का बेजोड़ योगदान हर प्रकार के ज्ञान के द्वारा सत्साहित्य का प्रतिपादन होता रहा है।</p>
                                <div className='d-flex justify-content-between'>
                                    <Link to="videodetails" className="btn btn-danger">Read More</Link>
                                    <span><FaDownload></FaDownload></span>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className='d-flex justify-content-center' aria-label="Page navigation  example">
                <ul className="pagination ">
                    <li className="page-item">
                        <Link className="page-link" to="videodetails" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </Link>
                    </li>
                    <li className="page-item"><Link className="page-link" to="videodetails">1</Link></li>
                    <li className="page-item"><Link className="page-link" to="videodetails">2</Link></li>
                    <li className="page-item"><Link className="page-link" to="videodetails">3</Link></li>
                    <li className="page-item">
                        <Link className="page-link" to="videodetails" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Videos
