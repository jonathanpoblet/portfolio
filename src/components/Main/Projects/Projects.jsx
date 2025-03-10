import './projects.css';

export default function Projects() {
  return (
    <>
      <h2 className='projects-title'>PROJECTS</h2>
      <div className='projects-container'>
        <img
          onClick={() => (window.location.href = 'https://titangym.cloud')}
          className='projects-container-img'
          src='./assets/titangym.png'
          alt='titan cloud'
        />
        <img
          onClick={() => (window.location.href = 'https://ironzone.site')}
          className='projects-container-img'
          src='./assets/ironzone.png'
          alt='ironzone'
        />
        <img
          onClick={() => (window.location.href = 'https://agromaquinaria.cloud')}
          className='projects-container-img'
          src='./assets/agro.png'
          alt='agro'
        />
        <img
          onClick={() =>
            (window.location.href = 'https://jonathanpoblet.github.io/Taraborelli-Automobile/')
          }
          className='projects-container-img'
          src='./assets/automobile.png'
          alt='project img4'
        />
      </div>
    </>
  );
}
