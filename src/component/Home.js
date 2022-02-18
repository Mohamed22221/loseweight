import React from 'react'
import './Home.css'
import HomeImg from '../img/img-home.jpg'
import animate from '../img/11.png'
import SectionHome1 from '../img/service-1.jpg'
import SectionHome2 from '../img/service-4.jpg'
import SectionHome3 from '../img/service-3.jpg'


const Home = () => {
  return (
    <div className='home' id='Home'>
        <img className='anomation1' src={animate} />
        <div className='container'>
            <div className='main-home'>
                <div className='text-home'>
                <h1>Delicious juices to lose weight and better health in <span>21 days</span> </h1>
                <button className='btn' ><a href='https://go.smoothiediet.com/?hop=rayanahmed'>
                   Visit Wepsite
                </a>
                <i className="fa-brands fa-golang"></i></button>
                </div>  
                 <div className='img-home'>
                 <img src={HomeImg} />
                 </div>
                </div>
               
        </div>
        <div className='second-home'>
            <div className='container'>
                <div className='all-home'>

               
                   <div className='item-home'>
                       <div className='item-img'>
                           <img src={SectionHome1}></img>
                       </div>
                       <div className="item-text">
                            <h2> INFLAMMATION</h2> 
                        <button className='btn' ><a href='http://www.healthwellnessreview.com/silent_killer/?id=rayanahmed&tid=YOURTID'>
                              WANT MORE?
                            </a>
                            <i className="fa-solid fa-arrow-right-long"></i></button>
                       </div>
                     
                   </div>
                 
                   <div className='item-home'>
                       <div className='item-img'>
                           <img src={SectionHome2}></img>
                       </div>
                       <div className="item-text">
                            <h2> FOOD WARNING</h2> 
                        <button className='btn' ><a href='http://www.healthwellnessreview.com/food_warning/?id=rayanahmed&tid=YOURTID'>
                              WANT MORE?
                            </a>
                            <i className="fa-solid fa-arrow-right-long"></i></button>
                       </div>
                     
                   </div>
                   
                   <div className='item-home'>
                       <div className='item-img'>
                           <img src={SectionHome3}></img>
                       </div>
                       <div className="item-text">
                            <h2> WEIGHT LOSS GUIDE</h2> 
                        <button className='btn' ><a href='http://www.healthwellnessreview.com/women/?id=rayanahmed&tid=YOUR_TID'>
                              WANT MORE?
                            </a>
                            <i className="fa-solid fa-arrow-right-long"></i></button>
                       </div>
                     
                   </div>
                   
                   </div>
               </div>
               </div>
    </div>
  )
}

export default Home