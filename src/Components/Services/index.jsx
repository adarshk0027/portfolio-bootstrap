import React from 'react'
import { FaUserMinus, FaPenNib } from 'react-icons/fa'
import { GrCloudComputer } from 'react-icons/gr'
import { AiTwotonePieChart } from 'react-icons/ai'
import { TbLetterT } from 'react-icons/tb'
import './style.css'
function Service () {
  return (
    <section className='service d-flex align-item-center text-center' id="service">
      <div className='container '>
        <div className='row' data-aos="fade-down" data-aos-duration="4000">
          <div className='service-text col-12 ml-auto '>
            <h1 className='display-4 fw-semibold'>Awsome Services</h1>
            <div className='line'></div>
            <p className='mt-4'>
              We Love To Craft Digital Expieriances for brands rather than crap
              and more lorem lipsum and skills
            </p>
          </div>
        </div>
        <div className='row text-center' data-aos="fade-down" data-aos-duration="4000">
          <div className='  pt-lg-4 pt-sm-3 d-flex row g-2'>
            <div className='services theme-shadow col-lg-4 col-sm-6 g-5' data-aos="fade-down" data-aos-delay="50">
              <div className='icons'>
                <FaUserMinus className='icon' />
              </div>
              <h4 className='bold pt-2 p-b-3'>BRANDING</h4>
              <p className='gray-text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
                ullam porro. Minus aliquam quae rerum, impedit culpa non ratione
                dicta beatae esse? Sint.
              </p>
            </div>

            <div className='services theme-shadow col-lg-4 col-sm-6 g-5' data-aos="fade-down" data-aos-delay="50">
              <div className='icons'>
                <FaUserMinus className='icon' />
              </div>
              <h4 className='bold pt-2 p-b-3'>UI/UX DESIGN</h4>
              <p className='gray-text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
                ullam porro. Minus aliquam quae rerum, impedit culpa non ratione
                dicta beatae esse? Sint.
              </p>
            </div>
            <div className='services theme-shadow col-lg-4 col-sm-6 g-5' data-aos="fade-down" data-aos-delay="50">
              <div className='icons'>
                <FaPenNib className='icon' />
              </div>
              <h4 className='bold pt-2 p-b-3'>GRAPHIC DESIGN</h4>
              <p className='gray-text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
                ullam porro. Minus aliquam quae rerum, impedit culpa non ratione
                dicta beatae esse? Sint.
              </p>
            </div>

            <div className='services theme-shadow col-lg-4 col-sm-6 g-5' data-aos="fade-down" data-aos-delay="50">
              <div className='icons'>
                <GrCloudComputer className='icon' />
              </div>
              <h4 className='bold pt-2 p-b-3'>MACHIENE LEARNING</h4>
              <p className='gray-text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
                ullam porro. Minus aliquam quae rerum, impedit culpa non ratione
                dicta beatae esse? Sint.
              </p>
            </div>

            <div className='services theme-shadow col-lg-4 col-sm-6 g-5' data-aos="fade-down" data-aos-delay="50">
              <div className='icons'>
                <AiTwotonePieChart className='icon' />
              </div>
              <h4 className='bold pt-2 p-b-3'>MARKETING</h4>
              <p className='gray-text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
                ullam porro. Minus aliquam quae rerum, impedit culpa non ratione
                dicta beatae esse? Sint.
              </p>
            </div>
            <div className='services theme-shadow col-lg-4 col-sm-6 g-5' data-aos="fade-down" data-aos-delay="50">
              <div className='icons'>
                <TbLetterT className='icon' />
              </div>
              <h4 className='bold pt-2 p-b-3'>TYPOGRAPHY</h4>
              <p className='gray-text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
                ullam porro. Minus aliquam quae rerum, impedit culpa non ratione
                dicta beatae esse? Sint.
              </p>
            </div>


          </div>

          {/* row ends */}
        </div>
      </div>
    </section>
  )
}

export default Service
