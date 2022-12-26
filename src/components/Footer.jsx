import React, { useEffect } from 'react'
import './footer.css'
import { BiDownload, BiCube } from "react-icons/bi";
import Aos from 'aos';
import "aos/dist/aos.css"

function Footer() {
    const logoTere = './images/foot-logo.svg'

    useEffect(() => {
        Aos.init({duration: 2000 });
    },[])

  return (
    <div>
        <div className="foot-bg">
            <div className="container">
                <div className="foot-con">
                    <div className="foot-con-grid"
                         data-aos="fade-up"
                        >
                        <div className="foot-item foot-logo">
                            <a href="#"><img src={logoTere} alt="" /></a>
                        </div>
                        <div className="foot-item foot-left foot-top">
                            <h2>Be Our Friend</h2>
                            <p>3. Season park, Jakarta</p>
                            <p>support@foodyar.co,id</p>
                            <p>021-1111-2222</p>
                        </div>
                        <div className="foot-item foot-left foot-mobile">
                            <h2>Be Our Friend</h2>
                            <p>3. Season park, Jakarta</p>
                            <p>support@foodyar.co,id</p>
                            <p>021-1111-2222</p>
                        </div>
                        <di className="foot-btn foot-btn-left">
                            <div className="foot-item-btn">
                                <BiDownload className='foot-logo'/>
                                <a href="#">download</a>
                            </div>
                            <div className="foot-item-btn">
                                <BiCube className='foot-logo'/>
                                <a href="#">download</a>
                            </div>  
                        </di>
                    </div>
                    <div className="foot-all"
                         data-aos="fade-up"
                        >
                        <h1>All Rights Reserved tere by Codematics 2022</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


                        
                    

export default Footer