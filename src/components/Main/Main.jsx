import React from 'react';
import Skills from './Skills/Skills';
import Languages from './Languages/Languages';
import Experience from './Experience/Experience';
import Education from './Education/Education';

import './main.css';

export default function Main() {
  return (
    <main className='main'>
        <img className='main-banner' src="../../../public/assets/banner.png" alt="banner" id='home' />

        <section className='main-aboutme' id='about-me'>
          <article className='main-aboutme-articles'>
            <Skills />
            <Languages />
          </article>

          <article className='main-aboutme-articles'>
            <Experience />
            <Education />
          </article>

          <article className='main-aboutme-articles'>
            <Languages />
          </article>
        </section>
    </main>
  )
}
