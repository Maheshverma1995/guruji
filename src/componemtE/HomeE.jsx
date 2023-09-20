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
                        <h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aperiam harum autem nam doloribus. Et odio accusantium inventore quod fugit sint earum in mollitia quas. Qui placeat libero impedit nostrum!
                        </h4>
                        <p>Shree 108 Visudhsagar ji</p>

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
                                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cupiditate maxime non sunt ex ullam tempora, ipsa, tempore maiores suscipit praesentium excepturi ad soluta nesciunt similique deleniti? Soluta, expedita non.</p>
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
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus veritatis nemo totam, possimus labore, nihil, praesentium fugiat consectetur libero repellat hic rem sint molestias quod delectus itaque assumenda perspiciatis facilis ratione fuga laborum debitis repellendus laboriosam reprehenderit? Temporibus totam blanditiis dignissimos ad beatae debitis magni illo, animi quam doloribus, quia soluta natus. Quo delectus quod alias earum dolorem pariatur eum quos assumenda reiciendis est praesentium quia facilis nemo autem esse, natus voluptatibus voluptas! Pariatur dolorum facere nostrum a atque dolorem soluta ea unde ullam nesciunt. Eos dicta reprehenderit consectetur quo eaque quaerat voluptas nam tempore quia, ducimus enim nulla eligendi.</p>
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
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptatem!</h1>
                            <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga at repellat nemo, id odio iure. Quidem aperiam rerum saepe nisi, at assumenda facere asperiores similique molestias, nulla aspernatur, illo atque!
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
