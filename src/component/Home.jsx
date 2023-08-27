import React from 'react'
import { Button } from 'react-bootstrap'
import "./Home.css";
import vill from './Pics/baba_5.png';
import sagar from './Pics/Acharya_Vishuddh_Sagar_Ji.jpg';
import { Link } from 'react-router-dom';
import HomeSection2 from './HomeSection2';

const Home = () => {
    return (
        <div>
            <div className='container-fluid'>
                <img className='home-img img-fluid mt-0 ' src="./images/back-home.jpeg" alt="" />
                <div className='row position-absolute top-50 start-'>
                    <div className='col-md-6 '>
                    <h4>
                                    " ज्ञान गुणी होता है, ज्ञान के बिना परमात्मा और आत्मा की परिकल्पना भी नहीं कर सकते। जिस व्यक्ति के पास ज्ञान है वो कभी भी उग्र नहीं हो सकता। वह शीतल जल के सामान शांत रहता है।"
                                </h4>
                                <p>श्री 108 विशुद्धसागर जी महाराज</p>
                        
                    </div>
                    <div className='col-md-6'> hi</div>
                </div>
            </div>
            <div className='container-fluid'>
                <HomeSection2/>
            </div>

            {/* ///////////////////////////////// /////////////////////////// */}
            {/* <div className='grid'>
                <div className="bg-layoutt" id='frame'>
                    <div className="row py-5  " style={{ width: "90%", margin: "auto" }}>
                        <div className="col-lg-3 col-md-6  my-3   " >
                            <div className="card p-2">
                                <h2 className='bg-primary text-center p-2' style={{ width: "100%" }}>Live Updates</h2>
                                <p >Itaque, veritatis quas. Aliquam Lorem ipsum dolor sit amet conse ctetur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Enim? lorem 100 sequi asperiores qui alias persp iciatis, expedita ducimus iste quod quibusdam cumque suscipit quis in molestias dolore facilis fugit?  sit amet ctetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6  my-3   " >
                            <div className="card p-2">
                                <h2 className='bg-primary text-center p-2' style={{ width: "100%" }}>Calender</h2>
                                <p >Itaque, veritatis quas. Aliquam Lorem ipsum dolor sit amet conse ctetur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Enim? lorem 100 sequi asperiores qui alias persp iciatis, expedita ducimus iste quod quibusdam cumque suscipit quis in molestias dolore facilis fugit?  sit amet ctetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6  my-3   " >
                            <div className="card p-2">
                                <h2 className='bg-primary text-center p-2' style={{ width: "100%" }}>Thoughts</h2>
                                <p >Itaque, veritatis quas. Aliquam Lorem ipsum dolor sit amet conse ctetur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Enim? lorem 100 sequi asperiores qui alias persp iciatis, expedita ducimus iste quod quibusdam cumque suscipit quis in molestias dolore facilis fugit?  sit amet ctetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6  my-3   " >
                            <div className="card p-2">
                                <h2 className='bg-primary text-center p-2' style={{ width: "100%" }}>Live Sessions</h2>
                                <p >Itaque, veritatis quas. Aliquam Lorem ipsum dolor sit amet conse ctetur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Enim? lorem 100 sequi asperiores qui alias persp iciatis, expedita ducimus iste quod quibusdam cumque suscipit quis in molestias dolore facilis fugit?  sit amet ctetur adipisicing elit.</p>
                            </div>
                        </div>






                    </div>
                </div>

                <div className="row " >
                    <div className="col-md-5 my-3 drop-shadow " style={{ margin: "auto" }}>
                        <div className="card p-2">
                            <div className="card-body">
                                <iframe width={"100%"} height={"320"} src="https://www.youtube.com/embed/uAH9qMJFk5E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <h1>heading</h1>
                                <p>80 साल तक जीना कठोर काम नहीं इतने समय तक निष्कलंक होके जीना कठिन है _- आचार्य विशुद्ध सागर जी</p>
                                <Button>Read more</Button>

                            </div>

                        </div>
                    </div>

                    <div className="col-md-5 my-3 drop-shadow " style={{ margin: "auto" }} >
                        <div className="card p-2">
                            <div className="card-body">
                                <iframe width={"100%"} height={"320"} src="https://www.youtube.com/embed/uAH9qMJFk5E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <h1>heading</h1>
                                <p>80 साल तक जीना कठोर काम नहीं इतने समय तक निष्कलंक होके जीना कठिन है _- आचार्य विशुद्ध सागर जी</p>
                                <Button>Read more</Button>
                            </div>

                        </div>
                    </div>

                </div>
            </div> */}

            {/* /////////////////////////////carousel//////////////////////////////// */}

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner three">
                    <div className="carousel-item active">
                        <img src="./images/mahavir-jayanti-min.png" className="d-block img-fluid w-100" alt="kd" />
                    </div>
                    <div class="carousel-item">
                        <img src="./images/mahavir-jayanti-min.png" clas sName="d-block img-fluid w-100" alt="jnj" />
                    </div>
                    <div class="carousel-item">
                        <img src="./images/mahavir-jayanti-min.png" className="d-block img-fluid w-100" alt="jj" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
                    </div>
                </div>
            </div>
            {/* /////////////////////////////////////////////////////////////////// */}
            <div className="grid">
                <div className="row " >
                    <div className="col-md-5 my-4 drop-shadow " style={{ margin: "auto" }}>
                        <div className="card p-2">
                            <div className="card-body">
                                <h1 className="fs-1 sec-h1">lorem</h1>
                                <p className='  sec-p' id='first'>Lorem ipsum dolor sit, Lorem, ipsum dolor sit amet cons ecte tur adipisicing elit. Assumenda cupiditate sed voluptatum quam dolorem! amet consectetur adipisicing elit. Unde consequatur deserunt, omnis ea molestias placeat?</p>
                                <Button className='sec-btn'>read more</Button>

                            </div>

                        </div>
                    </div>

                    <div className="col-md-5 my-4 drop-shadow " style={{ margin: "auto" }} >
                        <div className="card p-2">
                            <img src={vill} className='img-fluid' style={{ height: "100%" }} alt='..' />


                        </div>

                    </div>

                </div>



                {/* /////////////////////////////////////////////////////////// */}
                <div className="row my-1 py-3" style={{ width: "100%", margin: "auto" }}>


                    <div className="col-sm-4 my-2 ">
                        <div className="card">
                            <img src={sagar} className="card-img-top" alt="sss" />
                            <div className="card-body mx-0">
                                <h5 className="card-title">lorem jad cmd</h5>
                                <p className="card-text">lorem</p>
                                <Link to="#" class="btn btn-primary">See more</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 my-2 ">
                        <div className="card">
                            <img src={sagar} className="card-img-top" alt="sss" />
                            <div className="card-body mx-0">
                                <h5 className="card-title">lorem jad cmd</h5>
                                <p className="card-text">lorem</p>
                                <Link to="#" class="btn btn-primary">See more</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 my-2  ">
                        <div className="card">
                            <img src={sagar} className="card-img-top height" alt="sss" />
                            <div className="card-body mx-0">
                                <h5 className="card-title">lorem jad cmd</h5>
                                <p className="card-text">lorem</p>
                                <Link to="#" class="btn btn-primary">See more</Link>
                            </div>
                        </div>
                    </div>


                </div>
                {/* ////////////////////////////////////////////////////////////////////////// */}
               <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                    <div className="row">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/uAH9qMJFk5E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                    </div>
                </div>
               </div>
                {/* ///////////////////////////////////////////////// */}

                <div className="row py-3" style={{ width: "100%", margin: "auto" }}>


                    <div className="col-sm-4 my-2 ">
                        <div className="card" >
                            <img src={sagar} className="card-img-top" alt="sss" />
                            <div className="card-body mx-0">
                                <h5 className="card-title py-8">lorem</h5>
                                <p className="card-text">lorem</p>
                                <Link to="#" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 my-2 " >
                        <div className="card">
                            <img src={sagar} className="card-img-top height" alt="sss" />
                            <div className="card-body mx-0">
                                <h5 className="card-title">lorem jad cmd</h5>
                                <p className="card-text">lorem</p>
                                <Link to="#" class="btn btn-primary">See more</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 my-2  ">
                        <div className="card">
                            <img src={sagar} className="card-img-top height" alt="sss" />
                            <div className="card-body mx-0">
                                <h5 className="card-title">lorem jad cmd</h5>
                                <p className="card-text">lorem</p>
                                <Link to="#" class="btn btn-primary">See more</Link>
                            </div>
                        </div>
                    </div>

                </div>
                {/* /////////////////////////////////////////////////////////////////// */}
                {/* <div className="row py-3" style={{ width: "100%", margin: "auto" }}>


                    <div className="col-md-3 my-2 ">
                        <div className="card p-4" >
                            <img src="https://play-lh.googleusercontent.com/x0IbpAmkccXWXYQm UPtpwX68KQ2eudOhxwF_r8Fy9Iyb7TNyGN1_X8OxveZSNWZa6g" className="card-img-top img-fluid circle" alt="sss" />
                            <div className="card-body mx-0">
                                <h5 className="card-title">lorem jad lorem </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 my-2  " >
                        <div className="card p-4">
                            <img src="https://png.pngtree.com/png-vector/20190508/ourmid/png tree-gallery-vector-icon-png-image_1027754.jpg" className="card-img-top img-fluid circle" alt="sss" />
                            <div className="card-body mx-0">
                                <h5 className="card-title">lorem jad lorem </h5>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 my-2  ">
                        <div className="card p-4">
                            <img src="https://ps.w.org/yotuwp-easy-youtube-embed/assets/icon -256x256.png?rev=2869253" className="card-img-top img-fluid circle" alt="sss" />
                            <div className="card-body mx-0">
                                <h5 className="card-title">lorem jad lorem </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 my-2  " >
                        <div className="card p-4">
                            <img className="col-10 card-img-top img-fluid circle" src="https://st2.depositphotos.com/6789684/12262/v/600/depositphotos_122620866-stock-illustration-illustration-of-flat-icon.jpg" alt="sss" />
                            <div className="card-body mx-0">
                                <h5 className="card-title">lorem jad lorem </h5>
                            </div>
                        </div>
                    </div>


                </div> */}
            </div>

        </div>
    )
}

export default Home
