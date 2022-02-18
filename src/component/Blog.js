import React from 'react'
import './Blog.css'
import img1 from "../img/img1.png"
import blog from "../img/blog1.jpg"
import blog2 from "../img/blog3.jpg"
import blog3 from "../img/blog4.jpg"
import animate from "../img/orange.jpg"




const Blog = () => {
  return (
    <div className='all-plog'>
        <img className='anomation1' src={animate} />
        <div className='container'>
            <div className='title'>
                <p id='Blog'>Some Information</p>
                <h2>Blog</h2>
                <h4>Change Your Life In One Click</h4>
                <img src={img1} />
            </div>
            <div className='main-blog'>
               <div className='item-blog-1'>
                   <div className='img-blog'>
                        <img src={blog} />
                   </div>
                   <div className='text-blog'>
                        <h4>Welcome there</h4>
                        <h1>Your weight loss support</h1>
                         <p>t's a familiar story: You pledge to honor a daily elliptical routine and count every last calorie. But soon, you're eating cupcakes at 
                        the office and grabbing happy hour mojitos, thinking, 
                        Oops, diet over</p>
                   </div>
                  
               </div>
               <div className='item-blog-2'>
               <div className='item-blog'>
                   <div className='img-blog'>
                        <img src={blog2} />
                   </div>
                   <div className='text-blog'>
                        <h1>HEALTH & DIET</h1>
                   </div>
                  
               </div>
               <div className='item-blog'>
                   <div className='img-blog'>
                        <img src={blog3} />
                   </div>
                   <div className='text-blog'>
                        <h1>BODY & FITNESS GUIDE</h1>
                   </div>
                  
               </div>
               </div>
            </div>
           </div> 
    </div>
  )
}

export default Blog