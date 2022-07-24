import React from 'react'
import logo from '../../image/eschler-logo.png'
import {AiOutlineInstagram,AiOutlineTwitter,AiOutlineGithub} from 'react-icons/ai'
import './style.css'
function Footer_Web () {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 col-lg-3 footers'>
            <img src={logo} className="logo"></img> 
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam possimus repudiandae veniam quis in, reiciendis.
              </li>
            </ul>
            <div className='d-flex '>
              <AiOutlineGithub className='social'/>
              <AiOutlineInstagram className='social'/>
              <AiOutlineTwitter className='social'/>
            </div>
          </div>
          <div className='col-sm-6 col-lg-3 footers  align-items-center justify-center'>
            <div className='footer-title col-12'>
              <h4 className='display-6x fw-semibold text-white'>Services</h4>
              <div className='footer-line'></div>
            </div>
            <ul>
              <li>
                <p className='gray-text p'>UX Design</p>
              </li>
              <li className='gray-text'>
              <p className='gray-text p'>Web Design</p>
              </li>
              <li className='gray-text'>
              <p className='gray-text p'> Branding</p>
              </li>
              <li className='gray-text'>
              <p className='gray-text p'>Programming</p>
              </li>
            </ul>
          </div>

          <div className='col-sm-6 col-lg-3 footers  align-items-center justify-center'>
            <div className='footer-title col-12'>
              <h4 className='display-6x fw-semibold text-white'>About Us</h4>
              <div className='footer-line'></div>
            </div>
            <ul>
              <li>
                <p className='gray-text p'>Blog</p>
              </li>
              <li className='gray-text'>
              <p className='gray-text p'>Pricing</p>
              </li>
              <li className='gray-text'>
              <p className='gray-text p'>Company</p>
              </li>
              <li className='gray-text'>
              <p className='gray-text p'>Creer</p>
              </li>
            </ul>
          </div>

          <div className='col-sm-6 col-lg-3 footers  align-items-center justify-center'>
            <div className='footer-title col-12'>
              <h4 className='display-6x fw-semibold text-white'>contact</h4>
              <div className='footer-line'></div>
            </div>
            <ul>
              <li>
                <p className='gray-text p'>NEW YORK NY 3300</p>
              </li>
              <li className='gray-text'>
              <p className='gray-text p'> (414)586-3017</p>
              </li>
              <li className='gray-text'>
              <p className='gray-text p'> www.expample.com</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer_Web
