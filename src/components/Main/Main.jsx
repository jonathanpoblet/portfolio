import React from 'react';
import Skills from './Skills/Skills';
import Languages from './Languages/Languages';

import './main.css';

export default function Main() {
  return (
    <main className='main'>
        <img className='main-banner' src="../../../public/assets/banner.png" alt="banner" id='home' />

        <section className='main-information' id='skills'>
          <Skills />
          <Languages />
        </section>
    </main>
  )
}
