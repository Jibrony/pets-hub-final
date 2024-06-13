import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import '../css/AboutUs.css';

function AboutUs() {
  return (
    <Container className="about-us-container">
      <div className="section">
        <h2>¿Quiénes Somos?</h2>
        <p>Somos una organización dedicada al bienestar de las mascotas. Nuestra misión es proporcionar un lugar seguro y amoroso para todas las mascotas.</p>
      </div>
      <div className="section">
        <h2>Sobre el Sitio Web</h2>
        <p>Nuestro sitio web ofrece una plataforma para la adopción de mascotas, información sobre vacunaciones y reportes de desapariciones. Trabajamos arduamente para mantener a las mascotas felices y saludables.</p>
      </div>
      <div className="section">
        <h2>Novedades</h2>
        <p>Mantente al día con nuestras últimas novedades y eventos. Organizamos campañas de vacunación, jornadas de adopción y más.</p>
      </div>
      <div className="section team">
        <h2>Equipo de Desarrollo</h2>
        <div className="team-banner">
          <div className="team-member">
            <div className="member-image">
              <img src="https://i.ibb.co/b5Yz2kj/Whats-App-Image-2024-06-12-at-16-29-37.jpg" alt="Integrante 1" />
            </div>
            <div className="member-info">
              <h3 className='text-center'>Jesús Alberto Carballo Caballero</h3>
              <p>Full Stack Developer</p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src="https://i.ibb.co/TRxBGzV/Whats-App-Image-2024-06-12-at-16-24-23.jpg" alt="Integrante 2" />
            </div>
            <div className="member-info">
              <h3 className='text-center'>Andrey Julian Gutierrez Arce</h3>
              <p>Frontend Developer</p>
            </div>
          </div>
          <div className="team-member">
            <div className="member-image">
              <img src="https://i.ibb.co/Xb2GtXC/Whats-App-Image-2024-06-12-at-16-29-19.jpg" alt="Integrante 3" />
            </div>
            <div className="member-info">
              <h3 className='text-center'>Zulidany Ignacio Sánchez</h3>
              <p>Designer, Layout & Investor</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <h2>Herramientas de Desarrollo</h2>
        <div className="tools-grid">
          <div className="tool">
            <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="React" style={{borderRadius: '8px'}}/>
            <p>React</p>
          </div>
          <div className="tool">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" style={{borderRadius: '8px'}}/>
            <p>JavaScript</p>
          </div>
          <div className="tool">
            <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="Node.js" style={{borderRadius: '8px'}}/>
            <p>Node.js</p>
          </div>
          <div className="tool">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF9UXfrx8TWM7eyKB1jdIk66ZoGVmTtqWjKQ&s" alt="MySQL Workbench" style={{borderRadius: '8px'}}/>
            <p>MySQL</p>
          </div>
          <div className="tool">
            <img src="https://images.credly.com/images/1c2c86e1-16ce-4e4d-a425-d1ac96bb026d/express.png" alt="Express Generator" style={{borderRadius: '8px'}}/>
            <p>Express</p>
          </div>
          <div className="tool">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png" alt="Visual Studio Code" style={{borderRadius: '8px'}}/>
            <p>VS Code</p>
          </div>
        </div>

      </div>
    </Container>
  );
}

export default AboutUs;