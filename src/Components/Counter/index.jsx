import React from 'react'
import './style.css'
function Counter() {
  return (
    <section className='counter d-flex align-items-center text-center justify-center'>
      <div className="container">
        <div className="row g-4">
           <div className="col-sm-6 col-lg-3 c" data-aos="fade-down" data-aos-delay="150">
                <h1 className='fw-semibold text-white display-4'>9,000 +</h1>
                <h6 className='fw-semibold text-uppercase text-white'>Total Downloads</h6>
           </div>
           <div className="col-sm-6 col-lg-3 c" data-aos="fade-down" data-aos-delay="200">
                <h1 className='fw-semibold display-4 text-white'>5K +</h1>
                <h6 className='fw-semibold text-uppercase text-white'>Trusted Clients</h6>
           </div>
           <div className="col-sm-6 col-lg-3 c" data-aos="fade-down" data-aos-delay="150">
                <h1 className='fw-semibold display-4 text-white'>1M +</h1>
                <h6 className='fw-semibold text-uppercase text-white'>Theme Designers</h6>
           </div>
           <div className="col-sm-6 col-lg-3 c" data-aos="fade-down" data-aos-delay="200">
                <h1 className='fw-semibold display-4 text-white'>500 +</h1>
                <h6 className='fw-semibold text-uppercase text-white'>Team Memebers</h6>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Counter