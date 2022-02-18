import React from 'react'
import "./Apout.css"
import Aboutimg1 from"../img/about1.jpg"
import Aboutimg2 from"../img/about2.jpg"
import Aboutimg3 from"../img/about3.jpg"
import animate2  from"../img/2.png"
import img1 from "../img/img1.png"
const Apout = () => {
  return (
    <div className='main-apout'>
        <img className='anomation2' src={animate2} />
        <div className='container'>
            <div className='title'>
                <p>Some Information</p>
                <h2 id='About'>About Us</h2>
                <h4>Change Your Life In One Click</h4>
                <img src={img1} />
            </div>
            <div className='apoutall-item'>
                <div className='item-apout'>
                    <div className='img-about'>
                        <img src={Aboutimg1} />
                    </div>
                    <div className='text-about'>
                        <h2>ٌٌRecipes</h2>
                        <p>More than 30 prescriptions for burning fat and do not affect the negative on health, characterized by delicious taste and good mental state.</p>
                        <button className='btn' ><a href='https://go.smoothiediet.com/?hop=rayanahmed'>
                         WANT MORE?
                        </a>
                        <i className="fa-solid fa-arrow-right-long"></i></button>
                    </div>
                </div>
                <div className='item-apout'>
                    <div className='img-about'>
                        <img src={Aboutimg2} />
                    </div>
                    <div className='text-about'>
                        <h2>FULL 21-DAY</h2>
                        <p>You're getting the FULL 21-DAY WEIGHT LOSS AND HEALTH IMPROVEMENT PROGRAM I regularly use with my private coaching clients.</p>
                        <button className='btn' ><a href='https://go.smoothiediet.com/?hop=rayanahmed'>
                         WANT MORE?
                        </a>
                        <i className="fa-solid fa-arrow-right-long"></i></button>
                    </div>
                </div>
                <div className='item-apout'>
                    <div className='img-about'>
                        <img src={Aboutimg3} />
                    </div>
                    <div className='text-about'>
                        <h2>How We Perform</h2>
                        <p>It’s a familiar story: You pledge to honor a daily elliptical routine and count every last calorie. But soon, you’re eating cupcakes 
                            at the office and grabbing happy hour mojitos.</p>
                        <button className='btn' ><a href='http://www.healthwellnessreview.com/silent_killer/?id=rayanahmed&tid=YOURTID'>
                         WANT MORE?
                        </a>
                        <i className="fa-solid fa-arrow-right-long"></i></button>
                    </div>
                </div>
            </div>
        </div>
        
   
        
    </div>
    
  )
}

export default Apout