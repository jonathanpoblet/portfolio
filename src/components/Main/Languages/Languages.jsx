import React from 'react';
import './languages.css';
import { ProgressBar } from '../../ProgressBar/ProgressBar';

export default function Languages() {
  return (
    <div className='languages'>
        <h2 className='languages-title'>LANGUAGES</h2>
        <div className='languages-container'>
            <p className='languages-container-title'>Spanish</p>
            <ProgressBar percentage='100' />
        </div>
        <div className='languages-container'>
            <p className='languages-container-title'>English</p>
            <ProgressBar percentage='85' />
        </div>
        <div className='languages-container'>
            <p className='languages-container-title'>Portuguese</p>
            <ProgressBar percentage='70' />
        </div>
    </div>
  )
}
