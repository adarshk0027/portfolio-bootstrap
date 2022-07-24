import React from 'react'
import person1 from '../../image/person-1.jpg'
import person2 from '../../image/person-2.jpg'
import person3 from '../../image/person-3.jpg'
import './style.css'
function Teams () {
  return (
    <section className='team d-flex align-items-center text-center justify-center' id='team'>
      <div className='container'>
        <div className='row' data-aos="fade-down" data-aos-duration="5000">
          <div className='discription col-12'>
            <h1 className='display-4 fw-semibold'>Our Team </h1>
            <div className='line'></div>
            <p className='mt-4'>
              We Love To Craft Digital Expieriances for brands rather than crap
              and more lorem lipsum and skills
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 g-3' data-aos="fade-down" data-aos-delay="250">
            <div className='teams image-zoom'>
              <div className='image-zoom-wrapper'>
                <img src={person1} alt='' />
              </div>
              <div className='img-content'>
                <h4 className='display-7 fw-semibold'>JHON DOE</h4>
                <p className='fw-semibold'>WORKFLOW ARTIST</p>
              </div>
            </div>
          </div>

          <div className='col-md-4 g-3' data-aos="fade-down" data-aos-delay="250">
            <div className='teams image-zoom'>
              <div className='image-zoom-wrapper'>
                <img src={person2} alt='' />
              </div>
              <div className='img-content'>
                <h4 className='display-7 fw-semibold'>EMMANUAL ABE</h4>
                <p className='fw-semibold'>WEB DESIGNER</p>
              </div>
            </div>
          </div>

          <div className='col-md-4 g-3' data-aos="fade-down" data-aos-delay="250">
            <div className='teams image-zoom'>
              <div className='image-zoom-wrapper'>
                <img src={person3} alt='' />
              </div>
              <div className='img-content'>
                <h4 className='display-7 fw-semibold'> AUGUSTIN </h4>
                <p className='fw-semibold'>WEB DEVELOPER</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Teams
