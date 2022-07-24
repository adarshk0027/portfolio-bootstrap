import React from 'react'
import about from '../../image/about.jpg'
import {RiFlag2Line} from 'react-icons/ri'
import {FaUserShield} from 'react-icons/fa'
import {AiFillPieChart} from 'react-icons/ai'
import './style.css'
function About () {
  return (
    <section className='about d-flex align-items-center text-center' id='about' >
      <div className='container'>
        <div className='row' data-aos="fade-down" data-aos-duration="4000">
          <div className='discription col-12'>
            <h1 className='display-4 fw-semibold'>About us</h1>
            <div className='line'></div>
            <p className='mt-4'>
              We Love To Craft Digital Expieriances for brands rather than crap
              and more lorem lipsum and skills
            </p>
          </div>
        </div>  
        <div className='row abt mt-5' >
          <div className='image clo-sm-12 col-lg-6' data-aos="fade-down" data-aos-duration="3500">
            <img src={about} alt='' />
          </div>
          <div className='text col-lg-5 pt-3 pb-2' data-aos="fade-down" data-aos-duration="3500">
            <h1>About Eschler</h1>
            <p className='fw gray-text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              voluptatum, sit recusandae quisquam tota
            </p>
            <div className='iconbox d-flex align-items-center mt-4 pt-1'>
            <div className='icon-box'>
            <RiFlag2Line className='icon'/>
            </div>
              <div>
                <h4 className='display-9 bold'>Creative Agency</h4>
                <p className='gray-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores, dignissimos
                </p>
              </div>
            </div>
            <div className='iconbox d-flex align-items-center mt-4 p-1'>
            <div className='icon-box'>
            <FaUserShield className='icon'/>
            </div>
            <div>
            <h4 className='bold'>Truely MultyPurpose</h4>
                <p className='gray-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores, dignissimos
                </p>
              </div>
            </div>
            <div className='iconbox d-flex align-items-center mt-4 p-1'>
            
            <div className='icon-box'>
            <AiFillPieChart className='icon'/>
            </div>
            <div>
              <h4 className='bold'>web Design</h4>
                <p className='gray-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores, dignissimos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
