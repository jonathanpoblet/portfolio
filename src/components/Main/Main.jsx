import React from 'react';
import Skills from './Skills/Skills';
import Languages from './Languages/Languages';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import AboutMe from './AboutMe/AboutMe';

import './main.css';

export default function Main() {
  return (
    <main className='main'>
        <img className='main-banner' src="../../../public/assets/banner.png" alt="banner" id='home' />

        <section className='main-resume' id='resume'>
          <article className='main-resume-articles'>
            <AboutMe />
            <Languages />
          </article>

          <article className='main-resume-articles'>
            <Experience />
            <Education />
          </article>

          <article className='main-resume-articles'>
            <Skills />
          </article>

        </section>
    </main>
  )
}
