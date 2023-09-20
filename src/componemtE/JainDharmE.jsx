import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import HomeSectionE from './HomeSectionE';
const JainDharamE = () => {
    useEffect(()=>
    {
      Aos.init({duration:1000});
    },
    []);
    return (
        <div className='body'>
            <HomeSectionE />
            <div className='container mt-5 '>   
                <div className='row'>
                    <div className='col d-flex justify-content-center'>

                        <img data-aos="zoom-in-down" className='img-fluid' src="./images/mahavir5_578148d122ebf.jpeg" alt="" />
                    </div>
                </div>
                <div className='row'>
                <div className='col'>
               
                    <h1 data-aos="fade-right" className='display-1 text-danger mt-5 text-center'>Jain dharm </h1>
                    <p data-aos="fade-up" className='display'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores dignissimos suscipit vitae eaque optio, similique, libero adipisci voluptas saepe dolores ipsam nemo, earum officiis tempore voluptatum delectus ab amet molestiae autem repudiandae. Reiciendis necessitatibus rerum nulla molestias veniam sit fuga non mollitia eum soluta voluptas aspernatur ducimus molestiae doloribus placeat perspiciatis, ex hic, tenetur impedit. Minus quis recusandae dolorem ad, voluptatibus quaerat ipsam. Cupiditate explicabo architecto delectus nobis vero!</p>
                       <p data-aos="fade-right">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quaerat ducimus facere maiores alias fugiat quam assumenda, sunt et. Accusantium soluta voluptatem est labore adipisci fugiat cum provident! Dolores eligendi architecto doloribus consectetur officia rerum laboriosam. Fugiat quis itaque possimus mollitia repellendus illo? Vel placeat voluptas eos suscipit mollitia, ab incidunt autem ipsa, distinctio nam, dolores sit voluptatem. Eum repellendus, officiis at eligendi placeat, quam odio non eius in deleniti vitae, ipsum iusto nostrum natus modi facere praesentium nemo omnis ullam nulla maiores quas sed. Perspiciatis voluptatibus error recusandae aut, itaque assumenda magnam quibusdam cupiditate aliquid quam a blanditiis facere.</p>
                        <p data-aos="fade-up">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestias sapiente itaque quam, voluptatum hic, dignissimos quas quo a perferendis suscipit iure architecto perspiciatis sit voluptas minima est quaerat illum culpa commodi quis consectetur iste! Vitae aliquam perspiciatis quis. Totam rerum dolores harum mollitia ullam minus? Aut, officia excepturi temporibus eos saepe quis amet, ad inventore expedita, dolorum quasi neque officiis odit deleniti dolor mollitia. Laudantium assumenda ipsam, quae inventore labore illo qui beatae esse iusto voluptate cum voluptatibus iure!</p>
                        <p data-aos="fade-right">
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ut voluptate voluptates magnam quidem animi, cumque nobis eos earum, fugiat quisquam delectus quos eligendi dolorem aperiam quo facilis laboriosam dolor sapiente rerum impedit molestiae corporis! Voluptates labore rerum odio illo dolorem aut incidunt a magnam temporibus laboriosam excepturi optio, deserunt dolore quas voluptatibus ullam, rem corporis expedita exercitationem tempora unde?
                    </p>
                    <button className='btn btn-danger 'data-aos="fade-right" style={{ width: '200px', marginTop: '80px', height: '60px' }}>Read-More</button>
                    <div style={{ width: '100%', height: '2px', backgroundColor: 'red' }}></div>
                
                </div>
                </div>
                <div className='row mt-5 '>
                    <div className='col-md-6'>
                        <div className="card bg-dark text-white">
                            <img data-aos="zoom-in-down" className="card-img " style={{ height: '400px', textAlige: 'center' }} src="./images/hq720.jpg" alt=".." />
                            <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                <button className='btn btn-danger   'data-aos="fade-up" style={{ width: '200px', height: '60px' }}>Read-More</button>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="card bg-dark text-white">
                            <img data-aos="zoom-in-down" className="card-img " style={{ height: '400px', textAlige: 'center' }} src="./images/images (1).jpg" alt=".." />
                            <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                <button className='btn btn-danger  'data-aos="fade-right" style={{ width: '200px', height: '60px' }}>Read-More</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-2 '>
                    <div className='col-md-6'>
                        <div className="card bg-dark text-white">
                            <img data-aos="zoom-in-down" className="card-img " style={{ height: '400px', textAlign: 'center' }} src="./images/hq720.jpg" alt=".." />
                            <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                <button className='btn btn-danger  'data-aos="fade-up" style={{ width: '200px', height: '60px' }}>Read-More</button>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mb-5'>
                        <div className="card bg-dark text-white">
                            <img data-aos="zoom-in-down" className="card-img " style={{ height: '400px', textAlige: 'center' }} src="./images/images (1).jpg" alt=".." />
                            <div className="card-img-overlay d-flex align-items-center justify-content-center">
                                <button className='btn btn-danger  'data-aos="fade-right" style={{ width: '200px', height: '60px' }}>Read-More</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JainDharamE
