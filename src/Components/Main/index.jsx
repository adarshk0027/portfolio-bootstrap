import React from 'react'
import './style.css'
function Main () {
  return (
    <section className='main d-flex align-items-center text-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12' data-aos="fade-right" data-aos-duration="2000" >
            <h1 className='fw-semibold display-1 text-light text-uppercase '>Welcome To Eschler</h1>
            <h3 className='text-light'>
              We Are Team Of Talented Designers Make Websites With Bootstrap
            </h3>
            <div className='mt-5 main-btn '>
            <button className='btn-brand button'>GET STARTED</button>
            <button className='btn-light white-button button'>OUR PORTFOLIO</button>
          </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Main
