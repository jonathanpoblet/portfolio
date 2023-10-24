import { BiPhone } from 'react-icons/bi';
import { SiGmail, SiInstagram } from 'react-icons/si';
import './contact.css';

export default function Contact() {
  return (
    <>
        <h2 className='contact-title'>CONTACT</h2>
        <div className='contact-container'>
            <div className='contact-container-info'>
                <BiPhone className='contact-container-info-icon'/>
                <p className='contact-container-info-text'>+54 11 3056 5913</p>
            </div>
            <div className='contact-container-info'>
                <SiGmail className='contact-container-info-icon'/>
                <p className='contact-container-info-text'>jonathanpoblet228@gmail.com</p>
            </div>
            <div className='contact-container-info'>
                <SiInstagram className='contact-container-info-icon'/>
                <p className='contact-container-info-text'>@jonathan_poblet</p>
            </div>
        </div>
    </>
  )
}
