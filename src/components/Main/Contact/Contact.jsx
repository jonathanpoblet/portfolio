import { BiPhone } from 'react-icons/bi';
import { SiGmail, SiInstagram } from 'react-icons/si';
import './contact.css';

export default function Contact() {
  return (
    <>
      <h2 className='contact-title'>CONTACT</h2>
      <div className='contact-container'>
        <div
          className='contact-container-info'
          onClick={() => window.open('https://wa.me/541130565913', '_blank')}
        >
          <BiPhone className='contact-container-info-icon' />
          <p className='contact-container-info-text'>+54 11 3056 5913</p>
        </div>
        <div
          className='contact-container-info'
          onClick={() => window.open('mailto:contacto@virtualdesigns.tech')}
        >
          <SiGmail className='contact-container-info-icon' />
          <p className='contact-container-info-text'>contacto@virtualdesigns.tech</p>
        </div>
        <div
          className='contact-container-info'
          onClick={() => window.open('https://www.instagram.com/jonathan_poblet/', '_blank')}
        >
          <SiInstagram className='contact-container-info-icon' />
          <p className='contact-container-info-text'>@jonathan_poblet</p>
        </div>
      </div>
    </>
  );
}
