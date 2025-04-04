import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import './footer.css';

const Footer = () => {
  return (
    <footer className='d-flex flex-wrap justify-content-center align-items-center footer flex-row'>
      <div className='col-md-4 d-flex align-items-center'>
        <span className='mb-md-0 text-white'>©2025 Jonathan Poblet</span>
      </div>

      <ul className='nav col-md-4 justify-content-end list-unstyled d-flex align-items-center'>
        <li className='ms-3 footer-li'>
          <a
            className='text-muted'
            href='https://api.whatsapp.com/send?phone=541130565913&text=Hi,%20I%20want%20to%20consult%20for%20a%20website!'
            target='_blank'
          >
            <FaWhatsapp className='footer-icons' />
          </a>
        </li>
        <li className='ms-3 footer-li'>
          <a
            className='text-muted'
            href='https://www.instagram.com/virtualdesigns.tech/'
            target='_blank'
          >
            <FaInstagram className='footer-icons' />
          </a>
        </li>
        <li className='ms-3 footer-li'>
          <a className='text-muted' href='mailto:contacto@virtualdesigns.tech' target='_blank'>
            <AiOutlineMail className='footer-icons' />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
