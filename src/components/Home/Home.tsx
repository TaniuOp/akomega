import { useEffect } from 'react';
import './Home.css';
import Brugg from '../../assets/brugg_large.jpg';
import Services from './Services/Services';
import Projects from './Projects/Projecsts';
import Contact from './Contact/Contact';

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
        <img src={Brugg} alt='image' />
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
          <div className={'about-section'}>
            <p className='about-us-texts'>
              AK Omega AG ist ein Bauunternehmen mit mehr als 10 Jahren
              Erfahrung, das sich auf den Wohnungsbau spezialisiert hat. Mit
              Anerkennung im Kanton Aargau.
            </p>

            <p className='about-us-texts'>
              Das Team arbeitet unter der Leitung der Architekturabteilung, die
              von der Architektin Diana Heger geführt wird. Der Leiter der
              Bauabteilung ist Stefan Schüpfer. Die administrative und
              immobilienwirtschaftliche Projektleitung liegt bei Ivan J.
            </p>

            <p className='about-us-texts'>
              Darüber hinaus verfügen wir über ein professionelles Team von
              Spezialisten in jedem Arbeitsbereich (Baumeister, Sanitär,
              Elektro, Landschaftsbau...) für die Ausführung und ganzheitliche
              Entwicklung unserer Projekte.
            </p>
          </div>
          <div className='about-us-extra'>
            <h3>Mehr als 27.000 Quadratmeter Bau entwickelt.</h3>
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
