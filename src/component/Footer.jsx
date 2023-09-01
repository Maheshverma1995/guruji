import React from 'react'
import './Footer.css'
import  sagar  from './Pics/Acharya_Vishuddh_Sagar_Ji.jpg';
import Marquee from "react-fast-marquee";
import Iframe from 'react-iframe'

const Footer = () => {
  return (
    <div>
      <div className="grid one">
    <div className="row">
        <div className="col-md-4">
            <div className="row row1">
                <div className="col-lg-4">
                    <img alt='..' src={sagar}
                  style={{height:"100px", width:"100px"}}   />
                </div>
                <div className="col-lg-8">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia atque assumenda cumque error, soluta ipsam?Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Odio unde expedita quas sed voluptatem, alias cons
                        ectetur praesentium esse
                    </p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="row">
                <div className="col-12">
                    <h2> Latest News</h2>
                </div>
                <div className="col-4"></div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <img alt='..' src={sagar}
                    style={{height:"7vh", width:"10vh"}}  />
                </div>
                <div className="col-lg-8">
                    Lorem ipsum dolor sit amet.
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <img alt='..' src={sagar}
                    style={{height:"7vh", width:"10vh"}}  />
                </div>
                <div className="col-lg-8">
                    Lorem ipsum dolor sit amet.
                </div>
            </div>
            <div className="row">
                <div className="col-12" id="row_col2">
                    <div className="data1">
                        Comment
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-10">
                    <div className="data2">
                        Download App
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="row">
                <div className="img-fluid">
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.8601152399!2d77.2366679395753!3d28.52240362144885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1691661954169!5m2!1sen!2sin"style={{width:'22vw',height:'100%'}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                </div>
            </div>
            <div className="row" id="icon">
                <div className="col-4">
                    <img alt='..' src="https://lezebre.lu/images/detailed/16/22523-facebook-logo.png"
                    style={{height:"50px", width:"50px"}}  />
                </div>
                <div className="col-4">
                    <img alt='..' src="https://www.interstellarrift.com/wiki/images/d/d8/Youtube-logo-png-photo-0.png"
                     style={{height:"50px", width:"50px"}} />
                </div>
                <div className="col-4">
                    <img alt='..' src="https://www.amnesty.ie/wp-content/uploads/2020/05/Insta-logo.jpg"
                     style={{height:"50px", width:"50px"}} />
                </div>
            </div>
        </div>
    </div>
<hr/>
    <div className="row">
        <div className="col-md-5" >
            <h2>
                2023 Vishuddhsagar.com
            </h2>
        </div>
        <div className="col-md-7" >
            <Marquee>
            <h3>@copyright kLIK PLUS All Rights Reserved</h3>
            </Marquee>
        </div>
    </div>
</div>
    </div>
  )
}

export default Footer
