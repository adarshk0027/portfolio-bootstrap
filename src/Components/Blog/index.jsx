import React from 'react'
import blog1 from '../../image/blog-post-1.jpg'
import blog2 from '../../image/blog-post-2.jpg'
import blog3 from '../../image/blog-post-3.jpg'
import './style.css'
function Blog () {
  return (
    <section className='blog d-flex align-items-center justify-center text-center' id='blog' data-aos="fade-down" data-aos-duration="5000">
      <div className='container'>
        <div className='row' data-aos="fade-down" data-aos-duration="1000">
          <div className='discription col-12'>
            <h1 className='display-4 fw-semibold'>News & Feeds</h1>
            <div className='line'></div>
            <p className='mt-4'>
              We Love To Craft Digital Expieriances for brands rather than crap
              and more lorem lipsum and skills
            </p>
          </div>
        </div>
        <div className='row d-flex g-4' data-aos="fade-down" data-aos-duration="1000">
        <div className='col-lg-4 col-sm-12 mt-3'>
            <div className='blog-item image-zoom'>
              <div className='image-zoom-wrapper'>
                <img src={blog1} alt='' />
              </div>
              <div className='blog-desc'>
              <h4 className='fw-semibold display-7'>WEB DESIGN</h4>
                <p className='gray-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam libero facere consequatur atque molestiae dolorem
                  itaque impedit voluptates hic, quisquam maxime.
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-sm-12 mt-3'>
            <div className='blog-item image-zoom'>
              <div className='image-zoom-wrapper'>
                <img src={blog2} alt='' />
              </div>
              <div className='blog-desc'>
              <h4 className='fw-semibold display-7'>WEB DESIGN</h4>
                <p className='gray-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam libero facere consequatur atque molestiae dolorem
                  itaque impedit voluptates hic, quisquam maxime.
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-sm-12 mt-3'>
            <div className='blog-item image-zoom'>
              <div className='image-zoom-wrapper'>
                <img src={blog3} alt='' />
              </div>
              <div className='blog-desc'>
              <h4 className='fw-semibold display-7'>WEB DESIGN</h4>
                <p className='gray-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam libero facere consequatur atque molestiae dolorem
                  itaque impedit voluptates hic, quisquam maxime.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Blog
