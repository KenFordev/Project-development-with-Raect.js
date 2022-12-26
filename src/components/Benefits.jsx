import React, { useEffect } from 'react'
import './benefits.css'
import Aos from 'aos';
import "aos/dist/aos.css"

function Benefits() {

    
    const people = './images/people.svg'
    const money = './images/money.svg'
    const computer = './images/computer.svg'

    useEffect(() => {
        Aos.init({duration: 2000 });
    },[])

  return (
    <div>
        <div className="be-bg">
            <div className="container">
                <div className="be-con">
                    <div className="be-top"
                         data-aos="zoom-out"
                        >
                        <h1><p className='text-green'>tere</p>benefits</h1>
                    </div>
                    <div className="be-bottom">

                        <div className="be-item"
                             data-aos="fade-up"
                            >
                            <div className="be-left">
                                <div className="be-left-top_flex">
                                    <h1>01.</h1>
                                    <h2>Flexible<br/>working hours</h2>
                                </div>
                                <p>You can decide when, and how much time you want to drive.</p>
                            </div>
                            <div className="be-right img-item">
                                <img src={people} alt="" />
                            </div>
                        </div>

                        <div className="be-item be-mobile"
                             data-aos="fade-up"
                            >
                            <div className="be-left img-item">
                                <img src={money} alt="" />
                            </div>
                            <div className="be-right">
                                <div className="be-left-top_flex">
                                    <h1>02.</h1>
                                    <h2>Earnings</h2>
                                </div>
                                <p>By driving with tere you can earn more.</p>
                            </div>
                        </div>

                        <div className="be-item"
                             data-aos="fade-up"
                            >
                            <div className="be-left">
                                <div className="be-left-top_flex">
                                    <h1>03.</h1>
                                    <h2>Customer<br/>support 24/7</h2>
                                </div>
                                <p>Tere is a local service provider and we are your service 24/7!</p>
                            </div>
                            <div className="be-right img-item">
                                <img src={computer} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benefits