import React from 'react'
import { Accordion  } from 'react-bootstrap';
import './Services.css'
import img1 from "../img/img1.png"

const Services = () => {
  return (
    <section className='services'>
        
        <div className='acordion'>
        <div className='container'>
            <div className='title'>
                <p id='Service'>Some Information</p>
                <h2>Services</h2>
                <h4>Change Your Life In One Click</h4>
                <img src={img1} />
            </div>
           
                
            <Accordion defaultActiveKey="0" className='this-acordion'>
  <Accordion.Item eventKey="0">
    <Accordion.Header >Do you want to lose weight?</Accordion.Header>
    <Accordion.Body>
    This product we offer is especially weight loss in short duration and if you want to lose weight you'll speed up in buying this product
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Do you want to improve your body shape?</Accordion.Header>
    <Accordion.Body>
    If you want to improve your body shape and enjoy his life and enjoy a delicious taste of the best at the fastest time without affecting your health,
     and more than 30 juice meals you can buy at a low price
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header> I have diabetes, will thid work for me?</Accordion.Header>
    <Accordion.Body>
    Fresh, whole fruits, as well as blended green smoothies not only
     provide a healthy way for diabetics to get more fruits and vegetables in their diet, green smoothies also may help reverse some of the diet and lifestyle problems that exacerbate diabetes, or contributes to its progression. The great thing about the Smoothie Diet is that it kicks off a chain-reaction of lifestyle changes that reduce or eliminate the factors that exacerbate the disease, and reverses the condition in some individuals. Please note that while I am a nutrition expert, I am not a doctor. If you have diabetes or ANY other health condition, you should always consults 
     with your doctor first before making any dietary changes.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Do you want a suitable and simple price?</Accordion.Header>
    <Accordion.Body>
    If for some reason this program does not work for you even though you
     have followed it exactly as I have laid out, I have no problem giving
      you a full refund. I'll even cover you for a full 60 days so if you are unhappy for any reason over the next 2 months, you get your money back. If you are not happy with the program, then I don’t want you to have to pay for it. I believe in building relationships 
    with my customers and your satisfaction is my #1 priority.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
            </div>
        
            
            </div>
    </section>
  )
}

export default Services