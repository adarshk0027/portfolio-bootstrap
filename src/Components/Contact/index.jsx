import React from 'react'
import './style.css'
function Contact () {
  return (
    <section className='contact d-flex align-items-center text-center' id='contact'>
      <div className='container'>
        <div className='row'>
          <div className='discription col-12'>
            <h1 className='display-4 fw-semibold text-white'>Get In Touch</h1>
            <div className='line'></div>
            <p className='mt-4 text-white'>
              We Love To Craft Digital Expieriances for brands rather than crap
              and more lorem lipsum and skills
            </p>
          </div>
        </div>
        <div className='row mt-5 contact-form'>
          <div className='col-lg-8'>
            <form className='row g-3 bg-white theme-shadow' data-aos="fade-left" data-aos-duration="2000">
              <div class='form-group mb-2 col-lg-6'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter First Name'
                />
              </div>

              <div class='form-group mb-2 col-lg-6'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter Last Name'
                />
              </div>
              <div class='form-group mb-2 col-lg-12'>
                <input
                  type={'email'}
                  className='form-control'
                  placeholder='Enter Email Address'
                />
              </div>
              <div class='form-group mb-2 col-lg-12'>
                <textarea rows={5} className="form-control" placeholder='Enter Message'></textarea>
              </div>
              <div class='form-group mb-2 col-lg-12'>
                <button className='btn-brand col-lg-10'>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
