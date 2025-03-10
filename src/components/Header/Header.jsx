import './header.css';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href='#home'>HOME</a>
          </li>

          <li>
            <a href='#resume'>RESUME</a>
          </li>

          <li>
            <a href='#projects'>PROJECTS</a>
          </li>

          <li>
            <a
              style={{ backgroundColor: '#000', color: '#fff' }}
              href='https://api.whatsapp.com/send?phone=541130565913'
              target='_blank'
            >
              CONTACT ME!
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
