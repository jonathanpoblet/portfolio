import React from 'react';
import { ProgressBar } from '../../ProgressBar/ProgressBar';

import { Html5Icon, Css3Icon, JavascriptIcon, ReactIcon, NodeIcon, MongoDBIcon } from '../../../icons/Icons';

import './skills.css';

export default function Skills() {
  return (
    <div className='skills'>
      <h2 className='skills-title'>SOFTWARE SKILLS</h2>

      <div className='skills-container'>
        <Html5Icon  className='skills-container-icon'/>
        <p className='skills-container-language'>HTML5</p>
        <ProgressBar percentage='85' />
      </div>

      <div className='skills-container'>
        <Css3Icon  className='skills-container-icon'/>
        <p className='skills-container-language'>CSS</p>
        <ProgressBar percentage='85' />
      </div>

      <div className='skills-container'>
        <JavascriptIcon  className='skills-container-icon'/>
        <p className='skills-container-language'>JavaScript</p>
        <ProgressBar percentage='90' />
      </div>

      <div className='skills-container'>
        <ReactIcon  className='skills-container-icon'/>
        <p className='skills-container-language'>React js</p>
        <ProgressBar percentage='90' />
      </div>

      <div className='skills-container'>
        <NodeIcon  className='skills-container-icon'/>
        <p className='skills-container-language'>Node JS</p>
        <ProgressBar percentage='70' />
      </div>

      <div className='skills-container'>
        <MongoDBIcon  className='skills-container-icon'/>
        <p className='skills-container-language'>MongoDB</p>
        <ProgressBar percentage='60' />
      </div>
    </div>
  )
}
