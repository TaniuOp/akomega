import { useEffect } from 'react';
import './Home.css';
// import Brugg from '../../assets/brugg_large.jpg';
import Services from './Services/Services';
import Projects from './Projects/Projecsts';
import Contact from './Contact/Contact';
import Widen from '../../assets/widen.jpg';
import Diana from '../../assets/diana.png';
import Alex from '../../assets/alex.png';
import Stefan from '../../assets/stefan.png';
import Ivan from '../../assets/ivan.png';
import Uns from '../../assets/planos.jpg';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const parallaxFactor = 0.2;

      const headerImage = document.querySelector(
        '.home-header img'
      ) as HTMLImageElement;
      if (headerImage) {
        headerImage.style.transform = `translateY(${
          scrollTop * parallaxFactor
        }px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='home-container'>
      <header className='home-header'>
        <section className='big-image'>
          <h1 className='big-image-text'>AK Omega AG</h1>
          <p> Design & Konstruktion im modernstem Stil.</p>
        </section>
        <img src={Widen} alt='image' />
      </header>

      <main>
        <section className='concept-section'>
          <p className='concept-text'>
            Wir sind ein Architekturbüro, dass sich durch sein soziales,
            ökologisches und kulturelles Bewusstsein auszeichnet.
          </p>
          <p className='concept-text'>
            Mit Berücksichtigung der neusten Generation von technologischen
            Verfahren, welche Umweltinnovationen beinhalten, bieten wir Ihnen
            die bestmögliche Lösung für Ihr Projekt.
          </p>
        </section>

        <section>
          <Services />
        </section>

        <section className='projects'>
          <h2 className='projects-title'> PROJEKTE</h2>
          <Projects />
        </section>

        <section className='team'>
          <h2>ÜBER UNS</h2>
          <div className='about-section'>
            <div className='about-section-text'>
              <p className='about-us-texts'>
                AK Omega AG ist ein Bauunternehmen mit mehr als 10 Jahren
                Erfahrung, das sich auf den Wohnungsbau spezialisiert hat. Mit
                Anerkennung im Kanton Aargau.
              </p>

              <p className='about-us-texts'>
                Darüber hinaus verfügen wir über ein professionelles Team von
                Spezialisten in jedem Arbeitsbereich (Baumeister, Sanitär,
                Elektro, Landschaftsbau...) für die Ausführung und ganzheitliche
                Entwicklung unserer Projekte.
              </p>
            </div>

            <img className='about-us-img' src={Uns} alt='us' />
          </div>

          <div className='about-us-extra'>
            <h3>Mehr als 27.000 Quadratmeter Bau entwickelt.</h3>
          </div>

          <div className='about-us-images-container'>
            <div className='person-container'>
              <img
                src={Diana}
                className='about-us-image'
                alt='ak omega ag team'
              />
              <p className='person-name'>Diana Heger</p>
              {/* <p className='person-description'>Projektleiter </p> */}
              <p className='person-description'>Senior Architektin</p>
            </div>

            <div className='person-container'>
              <img
                src={Stefan}
                className='about-us-image'
                alt='ak omega ag team'
              />
              <p className='person-name'>Stefan S.</p>
              <p className='person-description'>Bauherr</p>
            </div>
            <div className='person-container'>
              <img
                src={Ivan}
                className='about-us-image'
                alt='ak omega ag team'
              />
              <p className='person-name'>Ivan J.</p>
              <p className='person-description'>Administration</p>
            </div>
            <div className='person-container'>
              <img
                src={Alex}
                className='about-us-image'
                alt='ak omega ag team'
              />
              <p className='person-name'>Alexandra G.</p>
              <p className='person-description'>Architektin</p>
            </div>
            <div className='person-container'>
              <img
                src={Widen}
                className='about-us-image'
                alt='ak omega ag team'
              />
              <p className='person-name'>Ali</p>
              <p className='person-description'>Bauleiter</p>
            </div>
            <div className='person-container'>
              <img
                src={Widen}
                className='about-us-image'
                alt='ak omega ag team'
              />
              <p className='person-name'>Roberto</p>
              <p className='person-description'>Bauzeichnerin</p>
            </div>
          </div>
        </section>

        <section className='contact-container'>
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Home;
