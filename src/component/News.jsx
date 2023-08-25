import React from 'react'
import './Home.css'
import sagar from './Pics/Acharya_Vishuddh_Sagar_Ji.jpg';
import { Link } from 'react-router-dom';

const News = () => {
  return (
    <div>
    <div className="grid">
      <div className="bg-layoutt" id='frame'>
        <div className="row m-1" >
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

      {/* ////////////////////////////////////////////////////////////////////////////// */}
      <div className="row py-3" style={{ width: "100%", margin: "auto", backgroundColor: "#fceccb" }}>


        <div className="col-sm-4 my-2 ">
          <div className="card" >
            <img src={sagar} className="card-img-top" alt="sss" />
            <div className="card-body mx-0">
              <h5 className="card-title py-8">lorem</h5>
              <p className="card-text">lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio debitis natus pariatur esse praesentium nostrum.</p>
              <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4 my-2 " >
          <div className="card">
            <img src={sagar} className="card-img-top height" alt="sss" />
            <div className="card-body mx-0">
              <h5 className="card-title">lorem jad cmd</h5>
              <p className="card-text">lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tempora! Odit doloribus totam quos dignissimos?</p>
              <Link to="#" class="btn btn-primary">See more</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4 my-2  ">
          <div className="card">
            <img src={sagar} className="card-img-top height" alt="sss" />
            <div className="card-body mx-0">
              <h5 className="card-title">lorem jad cmd</h5>
              <p className="card-text">loremn Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis labore, laborum corporis fugit repellendus.</p>
              <Link to="#" class="btn btn-primary">See more</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4 my-2 ">
          <div className="card" >
            <img src={sagar} className="card-img-top" alt="sss" />
            <div className="card-body mx-0">
              <h5 className="card-title py-8">lorem</h5>
              <p className="card-text">lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio debitis natus pariatur esse praesentium nostrum.</p>
              <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4 my-2 " >
          <div className="card">
            <img src={sagar} className="card-img-top height" alt="sss" />
            <div className="card-body mx-0">
              <h5 className="card-title">lorem jad cmd</h5>
              <p className="card-text">lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tempora! Odit doloribus totam quos dignissimos?</p>
              <Link to="#" class="btn btn-primary">See more</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4 my-2  ">
          <div className="card">
            <img src={sagar} className="card-img-top height" alt="sss" />
            <div className="card-body mx-0">
              <h5 className="card-title">lorem jad cmd</h5>
              <p className="card-text">loremn Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis labore, laborum corporis fugit repellendus.</p>
              <Link to="#" class="btn btn-primary">See more</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4 my-2 ">
          <div className="card" >
            <img src={sagar} className="card-img-top" alt="sss" />
            <div className="card-body mx-0">
              <h5 className="card-title py-8">lorem</h5>
              <p className="card-text">lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio debitis natus pariatur esse praesentium nostrum.</p>
              <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4 my-2 " >
          <div className="card">
            <img src={sagar} className="card-img-top height" alt="sss" />
            <div className="card-body mx-0">
              <h5 className="card-title">lorem jad cmd</h5>
              <p className="card-text">lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tempora! Odit doloribus totam quos dignissimos?</p>
              <Link to="#" class="btn btn-primary">See more</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4 my-2  ">
          <div className="card">
            <img src={sagar} className="card-img-top height" alt="sss" />
            <div className="card-body mx-0">
              <h5 className="card-title">lorem jad cmd</h5>
              <p className="card-text">loremn Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis labore, laborum corporis fugit repellendus.</p>
              <Link to="#" class="btn btn-primary">See more</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4 my-2 ">
          <div className="card" >
            <img src={sagar} className="card-img-top" alt="sss" />
            <div className="card-body mx-0">
              <h5 className="card-title py-8">lorem</h5>
              <p className="card-text">lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio debitis natus pariatur esse praesentium nostrum.</p>
              <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4 my-2 " >
          <div className="card">
            <img src={sagar} className="card-img-top height" alt="sss" />
            <div className="card-body mx-0">
              <h5 className="card-title">lorem jad cmd</h5>
              <p className="card-text">lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tempora! Odit doloribus totam quos dignissimos?</p>
              <Link to="#" class="btn btn-primary">See more</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4 my-2  ">
          <div className="card">
            <img src={sagar} className="card-img-top height" alt="sss" />
            <div className="card-body mx-0">
              <h5 className="card-title">lorem jad cmd</h5>
              <p className="card-text">loremn Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis labore, laborum corporis fugit repellendus.</p>
              <Link to="#" class="btn btn-primary">See more</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4 my-2 ">
          <div className="card" >
            <img src={sagar} className="card-img-top" alt="sss" />
            <div className="card-body mx-0">
              <h5 className="card-title py-8">lorem</h5>
              <p className="card-text">lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio debitis natus pariatur esse praesentium nostrum.</p>
              <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4 my-2 " >
          <div className="card">
            <img src={sagar} className="card-img-top height" alt="sss" />
            <div className="card-body mx-0">
              <h5 className="card-title">lorem jad cmd</h5>
              <p className="card-text">lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tempora! Odit doloribus totam quos dignissimos?</p>
              <Link to="#" class="btn btn-primary">See more</Link>
            </div>
          </div>
        </div>

        <div className="col-sm-4 my-2  ">
          <div className="card">
            <img src={sagar} className="card-img-top height" alt="sss" />
            <div className="card-body mx-0">
              <h5 className="card-title">lorem jad cmd</h5>
              <p className="card-text">loremn Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis labore, laborum corporis fugit repellendus.</p>
              <Link to="#" class="btn btn-primary">See more</Link>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
  )
}

export default News
