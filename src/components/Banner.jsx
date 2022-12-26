import React, { useEffect } from 'react'
import './banner.css'
import { BiDownload, BiCube } from "react-icons/bi";
import Aos from 'aos';
import "aos/dist/aos.css"

function Banner() {

    const theCars = './images/cars.png'
    useEffect(() => {
        Aos.init({duration: 2000 });
    },[])

  return (
    <div className="banner-bg">
        <div className="container">
            <div className="ban-con">
                <div className="ban-left"
                     data-aos="fade-right"
                     data-aos-offset="200"
                     data-aos-delay="50"
                     data-aos-duration="1000"
                     data-aos-easing="ease-in-out"
                    >
                    <h1>download app,<br/>save money, make<br/>friends!</h1>
                    <p>Its simple and its free. Play your part in reducing Carbon Footprint and help Mother Nature to sustain its beauty. So what are you waiting for ? Lets ride together</p>
                    <div className="ban-btn">
                        <div className="btn-item">
                            <BiDownload className='ban-logo'/>
                            <a href="#">download</a>
                        </div>
                        <div className="btn-item">
                            <BiCube className='ban-logo'/>
                            <a href="#">download</a>
                        </div>
                    </div>
                </div>
                <div className="ban-right"
                     data-aos="fade-left"
                     data-aos-offset="200"
                     data-aos-delay="800"
                     data-aos-duration="1000"
                     data-aos-easing="ease-in-out"
                    >
                    <img src={theCars} alt="the cars" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner