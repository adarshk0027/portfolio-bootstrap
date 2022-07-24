import React from 'react'
import project1 from '../../image/project-1.jpg'
import project2 from '../../image/project-2.jpg'
import project3 from '../../image/project-3.jpg'
import project4 from '../../image/project-4.jpg'
import project5 from '../../image/project-5.jpg'
import project6 from '../../image/project-6.jpg'
import { BsSearch } from 'react-icons/bs'
import './style.css'
function Portfolio () {
  return (
    <section className='portfolio d-flex align-items-center text-center' id='portfolio' data-aos="fade-down" data-aos-duration="2000">
      <div className='container'>
        <div className='row'>
          <div className='discription col-12 p-b-2'>
            <h1 className='display-4 fw-semibold'>Our Portfolio</h1>
            <div className='line'></div>
            <p className='mt-5'>
              We Love To Craft Digital Expieriances for brands rather than crap
              and more lorem lipsum and skills
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 pb-2' data-aos="fade-down" data-aos-delay="150">
            <div className='image-item image-zoom'>
              <div className='image-zoom-wrapper'>
                <img src={project1} alt='' />
              </div>
              <a href={project1} data-fancybox='gallery' className='link'>
                <BsSearch className='icon' />
              </a>
            </div>
          </div>

          <div className='col-md-4 pb-2' data-aos="fade-down" data-aos-delay="150">
            <div className='image-item image-zoom'>
              <div className='image-zoom-wrapper'>
                <img src={project5} alt='' />
              </div>
              <a href={project5} data-fancybox='gallery' className='link'>
                <BsSearch className='icon' />
              </a>
            </div>
          </div>

          <div className='col-md-4 pb-2' data-aos="fade-down" data-aos-delay="150">
            <div className='image-item image-zoom'>
              <div className='image-zoom-wrapper'>
                <img src={project4} alt='' />
              </div>
              <a href={project4} data-fancybox='gallery' className='link'>
                <BsSearch className='icon' />
              </a>
            </div>
          </div>
          <div className='col-md-4 pt-2' data-aos="fade-down" data-aos-delay="150">
            <div className='image-item image-zoom'>
              <div className='image-zoom-wrapper'>
                <img src={project3} alt='' />
              </div>
              <a href={project3} data-fancybox='gallery' className='link'>
                <BsSearch className='icon' />
              </a>
            </div>
          </div>

          <div className='col-md-4 pt-2' data-aos="fade-down" data-aos-delay="150">
            <div className='image-item image-zoom'>
              <div className='image-zoom-wrapper'>
                <img src={project2} alt='' />
              </div>
              <a href={project2} data-fancybox='gallery' className='link'>
                <BsSearch className='icon' />
              </a>
            </div>
          </div>

          <div className='col-md-4 pt-2' data-aos="fade-down" data-aos-delay="150">
            <div className='image-item image-zoom'>
              <div className='image-zoom-wrapper'>
                <img src={project6} alt='' />
              </div>
              <a href={project6} data-fancybox='gallery' className='link'>
                <BsSearch className='icon' />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Portfolio
