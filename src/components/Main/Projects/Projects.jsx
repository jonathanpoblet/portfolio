import './projects.css';

export default function Projects() {
  return (
    <>
        <h2 className='projects-title'>
            PROJECTS
        </h2>
        <div className='projects-container'>
            <img onClick={() => window.location.href = 'https://jonathanpoblet.github.io/taraborelli-agro/'} className='projects-container-img' src='./assets/agro.png'  alt='project img' />
            <img onClick={() => window.location.href = 'https://jonathanpoblet.github.io/jardineria/'} className='projects-container-img' src='./assets/botanica.png'  alt='project img2' />
            <img onClick={() => window.location.href = 'https://jonathanpoblet.github.io/PasteleriaRiccione/'} className='projects-container-img' src='./assets/riccione.png'  alt='project img3' />
            <img onClick={() => window.location.href = 'https://jonathanpoblet.github.io/Taraborelli-Automobile/'} className='projects-container-img' src='./assets/automobile.png'  alt='project img4' />
        </div>
    </>
  )
}
