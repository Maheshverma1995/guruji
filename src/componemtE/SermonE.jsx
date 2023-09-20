import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaThumbsUp, FaShareAlt, FaDownload } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'
import HomeSectionE from "./HomeSectionE";

const SermonE = () => {
  useEffect(()=>
  {
    Aos.init({duration:1000});
  },
  []);
  return (
    <div className="body" >
      <HomeSectionE />
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

          <h2 className="text-center text-danger mt-5 mb-3">Heading</h2>

          <div className="col">
            <p data-aos="fade-up" className="mahotsav-paragraph p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel itaque ipsa in, officia atque fugiat aliquam blanditiis consectetur enim illo quisquam deserunt quaerat earum maxime consequatur laboriosam nemo error architecto harum officiis assumenda qui! Quos reiciendis nostrum animi veniam exercitationem debitis, earum optio! Ipsa rerum quidem, consectetur nostrum veritatis voluptate totam ipsum natus laborum ab enim at voluptas cum quod? Quo ex mollitia corporis ad suscipit officiis id, molestias quam tenetur soluta sit culpa temporibus, dolore sint, incidunt totam quas eius inventore veritatis harum libero. Impedit non qui aliquid vel officiis iure dolores explicabo beatae perferendis rerum exercitationem, perspiciatis reiciendis minima quisquam ipsa? Dolorum dignissimos exercitationem soluta ex, dolorem qui hic cum suscipit at consectetur alias id a, sapiente temporibus perspiciatis quasi veniam nihil aspernatur odit nisi tempora. Error, at aspernatur vitae optio excepturi, et eum unde similique esse aliquid quam, neque eius nam minima sunt ipsam nulla dignissimos aut rerum recusandae autem? Doloribus deserunt corporis ducimus possimus error magnam ab nam vitae necessitatibus, voluptate est minima sint culpa similique? Harum aliquam odio facere eveniet libero recusandae dignissimos temporibus! Officiis itaque iure, voluptatem eaque natus ab nostrum, vero saepe distinctio voluptate, dolor autem necessitatibus explicabo non quis quos quaerat esse!
            </p>
          </div>
        </div>

      </div>
      <div className="container body1 ">
        <div className="col-3"><h2 className="p-2" style={{ minWidth:'220px', backgroundColor: 'red', bottom: '0' }}>Heading Content</h2>
        </div>
        <div style={{ width: '100%', height: '2px', backgroundColor: 'red', marginTop: '-8px' }}></div>
        <div className="row mt-5 ">
          <div className="col-md-4 mt-2 mb-4">
            <div className="card">
              <video  data-aos="flip-up" className="img-fluid" controls muted  src=""></video>
              <div className="card-body">
                <h2 className="card-title">Heading</h2>
                <p data-aos="fade-up" className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis odit aut, expedita ipsum laboriosam sint saepe reprehenderit voluptatum impedit? Sint repudiandae natus, iste nemo veritatis voluptate deserunt tempore excepturi unde!
                </p>
                <Link to="#" className="btn btn-danger">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-2 mb-4">
            <div className="card">
              <video  data-aos="flip-up" className="img-fluid" controls muted  src=""></video>
              <div className="card-body">
                <h2 className="card-title">Heading</h2>
                <p data-aos="fade-up" className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo nam quisquam laudantium eligendi delectus vel velit quae soluta aspernatur sunt pariatur saepe praesentium dignissimos assumenda fugit totam, perferendis magni.
                </p>
                <Link to="#" className="btn btn-danger">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-2 mb-5">
            <div className="card ">
              <video  data-aos="flip-up" className="img-fluid" controls muted  src=""></video>
              <div className="card-body">
                <h2 className="card-title">Heading</h2>
                <p data-aos="fade-up" className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo nam quisquam laudantium eligendi delectus vel velit quae soluta aspernatur sunt pariatur saepe praesentium dignissimos assumenda fugit totam, perferendis magni.
                </p>
                <Link to="#" className="btn btn-danger">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

  );
};

export default SermonE;
