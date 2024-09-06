import React from 'react'
import img from "../../assets/1.jpg"
import face from "../../assets/face.jpeg"
import linkend from "../../assets/linkend.png"
import twitter from "../../assets/twitter.png"

import "./Footer.css"
function Footer() {


    return (
        <div className='footer' id='footer'>
            <div className='footer-connect'>
                <div className='footer-connect-left'>
                    <img src={img} style={{ width: "80px " }} ></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad reiciendis cumque adipisci dicta quidem optio sit corporis nam? Quo in, laborum ab quidem rerum repudiandae nesciunt recusandae incidunt perspiciatis neque.</p>
                    <div className="footer-social-icons">
                        <img src={face} alt="" style={{ width: "20px " }} />
                        <img src={linkend} alt="" style={{ width: "20px " }} />
                        <img src={twitter} alt="" style={{ width: "20px " }} />
                    </div>
                </div>
                <div className='footer-connect-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivarey</li>
                        <li>provite ploce</li>
                    </ul>
                </div>
                <div className='footer-connect-right'>
                    <ul>
                        <li>022222222222</li>
                        <li>conent@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className='footer-copyright'>
                copyrite 2024 totmato.com - al right 
            </p>
        </div>
    )
}
import "./Footer.css"
export default Footer