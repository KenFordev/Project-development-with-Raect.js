import React, { useEffect } from 'react'
import './works.css'
import { BiCalendarCheck } from "react-icons/bi";
import Aos from 'aos';
import "aos/dist/aos.css"

function Works() {

    const mobile = './images/mobile.svg'
    const circle = './images/circle.svg'

    const theCars = './images/cars.png'
    useEffect(() => {
        Aos.init({duration: 2000 });
    },[])

  return (
    <div className="works-bg">
        <div className="container">
            <div className="works-con">
                <div className="works-header"
                     data-aos="zoom-out">
                    <h2>How <p className='green-color'>Three</p> work</h2>
                    <p className='text-g'>
                        Download and install the tere app. Enter your phone number and make your user account. when approved you may start driving.
                    </p>
                </div>
                <div className="works-content">
                    <div className="works-left"
                         data-aos="fade-right"
                         data-aos-offset="100"
                         data-aos-delay="40"
                         data-aos-duration="2000"
                        >
                        <div className="works-left-item works-item">
                            <BiCalendarCheck className='left-icon'/>
                            <h3>Request a ride</h3>
                            <p>
                                Have to reach office or going for shopping ? 
                                Just put your current location and destination and search a ride that suits you
                            </p>
                        </div>
                        <div className="works-left-item works-item">
                            <BiCalendarCheck className='left-icon'/>
                            <h3>instant notifications</h3>
                            <p>
                                Get instant notifications for your rides and be in contact with fellow riders all the time
                            </p>
                        </div>
                    </div>
                    <div className="works-center">
                        <div data-aos="fade-up" 
                            className="works-cen-item"
                            data-aos-offset="200"
                            data-aos-delay="800"
                            data-aos-duration="1000"
                            >
                            <div className="works-mobile">
                                <img src={mobile} alt="" />
                            </div>
                            <div className="works-circle">
                                <img src={circle} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="works-right"
                         data-aos="fade-left"
                         data-aos-offset="100"
                         data-aos-delay="40"
                         data-aos-duration="2000"
                        >
                        <div className="works-right-item works-item">
                            <BiCalendarCheck className='left-item'/>
                            <h3>POST A RIDE</h3>
                            <p> 
                                Going somewhere but hate to travel alone - just post your ride details and publish it
                            </p>
                        </div>
                        <div className="works-right-item works-item">
                            <BiCalendarCheck className='left-item'/>
                            <h3>CASHLESS PAYMENT</h3>
                            <p>
                                Payment made easy by using your own Wallet - no more cash to carry
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works