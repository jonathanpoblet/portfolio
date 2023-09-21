import React from 'react';
import './education.css';

export default function Education() {
  return (
    <div className='education'>
        <h2 className='education-title'>EDUCATION</h2>

        <div className='timeline-area'>
          <div>
            <h2>CoderHouse</h2>
            <p>Backend Programming</p>
            <p>November 2022 - April 2023</p>
          </div>
          <div>
            <h2>OpenBootCamp</h2>
            <p>TypeScript JS</p>
            <p>November 2022 - January 2023</p>
          </div>
          <div>
            <h2>OpenBootCamp</h2>
            <p>React JS</p>
            <p>September 2022 - November 2022</p>
          </div>
          <div>
            <h2>CoderHouse</h2>
            <p>Web Development</p>
            <p>April 2022 - September 2022</p>
          </div>
        </div>
    </div>
  )
}
