import Skills from './Skills/Skills';
import Languages from './Languages/Languages';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import AboutMe from './AboutMe/AboutMe';

import './main.css';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

export default function Main() {
  return (
    <main className='main'>
        <img className='main-banner' src="./assets/banner.png" alt="banner" id='home' />

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

        <section className='main-contact' id='contact'>
          <article className='main-contact-article'>
            <Contact/>
          </article>
        </section>
    </main>
  )
}
