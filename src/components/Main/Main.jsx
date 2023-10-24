import Skills from './Skills/Skills';
import Languages from './Languages/Languages';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import AboutMe from './AboutMe/AboutMe';

import './main.css';
import Projects from './Projects/Projects';

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
            <Skills />
          </article>
          
          <article className='main-resume-articles'>
            <Experience />
            <Education />
          </article>
        </section>

        <section className='main-projects' id='projects'>
          <article className='main-projects-article'>
            <Projects />
          </article>
        </section>
    </main>
  )
}
