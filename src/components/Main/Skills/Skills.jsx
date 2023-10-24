import React from 'react';
import { ProgressBar } from '../../ProgressBar/ProgressBar';

import { Html5Icon, Css3Icon, JavascriptIcon, ReactIcon, NodeIcon, MongoDBIcon, ExpressIcon, TypeScriptIcon } from '../../../icons/Icons';

import './skills.css';
import { SiMysql } from 'react-icons/si';

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
        <TypeScriptIcon className='skills-container-icon'/>
        <p className='skills-container-language'>TypeScript</p>
        <ProgressBar percentage='50' />
      </div>

      <div className='skills-container'>
        <NodeIcon  className='skills-container-icon'/>
        <p className='skills-container-language'>Node JS</p>
        <ProgressBar percentage='70' />
      </div>

      <div className='skills-container'>
        <ExpressIcon  className='skills-container-icon-express'/>
        <p className='skills-container-language'>Express JS</p>
        <ProgressBar percentage='70' />
      </div>

      <div className='skills-container'>
        <MongoDBIcon  className='skills-container-icon'/>
        <p className='skills-container-language'>MongoDB</p>
        <ProgressBar percentage='60' />
      </div>

      <div className='skills-container'>
        <SiMysql  className='skills-container-icon'/>
        <p className='skills-container-language'>MySQL</p>
        <ProgressBar percentage='60' />
      </div>
    </div>
  )
}
