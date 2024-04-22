import './Projects.css';
import BruggImage from '../../../assets/brugg_large.jpg';
import Myrten from '../../../assets/myrtenstrasse.jpg';
import Boden from '../../../assets/bodenfelstrasse.jpg';
import Widen from '../../../assets/widen.jpg';
import Ober from '../../../assets/oberkulm.png';
import Bahnhof from '../../../assets/bahnhofstrasse.png';
import Render from '../../../assets/image_ai_two.jpg';
import Logo from '../../../assets/akomegaag_logo.png';

const Projects = () => {
  return (
    <div className='projects-container'>
      <div className='projects-title-container'>
        <div className='projects-intro'>
          <h2>WAS BAUEN WIR JETZT</h2>
          <div className='projects-text-container'>
            <p className='projects-text'>
              Unter unseren jüngsten Projekten finden Sie drei
              Wohngemeinschaften.
            </p>

            <p className='projects-text'>
              Wir sind in der Lage, unsere Skizzen für die Bedürfnisse und
              Anforderungen unserer Kunden in die Realität umzusetzen.
            </p>

            <p className='projects-text'>
              Kontaktieren Sie uns noch heute, um weitere Informationen zu
              erhalten.
            </p>
          </div>
        </div>
        <div className='projects-logo'>
          <img src={Logo} alt='Logo' className='projects-logo-img' />
          <img src={Render} alt='projcts-ak' className='projects-title-img' />
        </div>
      </div>
      <div>
        <div className='brugg-container'>
          <img src={BruggImage} alt='brugg' className='brugg-img' />

          <div className='brugg-text-container'>
            <h3 className='brugg-title'>Terrassenhäuser BRUGG</h3>
            <p className='brugg-text'>
              Bei unserem Entwurf wurde darauf geachtet, luxuriöse
              Familienresidenzen mit einer gut ausgebauten Infrastruktur und
              Minergie-P zu schaffen
            </p>
            <h4 className='brugg-text-title'>Chilhalde, Umiken </h4>
            <ul>
              <li>4 1/5 Terrassenhäuser ​</li>
              <li>Terrassenhäuser</li>
              <li>3 1/2 Zimmerwohnungen</li>
              <li>2 1/2 Zimmerwohnungen</li>
              <li>Grundstücksfläche: 5'723m²</li>
              <li>Verfügbarkeit nach Vereinbarung</li>
              <li>Preis pro Quadratmeter für Minergie-P-Haus</li>
            </ul>

            <div className='item-list-container'>
              <div className='column'>
                <h3 className='brugg-points-big'>7000+ </h3>
                <h4 className='brugg-points-small'>Meter gebaut</h4>
              </div>
              <div className='column'>
                <h3 className='brugg-points-big'>10 </h3>
                <h4 className='brugg-points-small'>soziale Bereiche</h4>
              </div>
              <div className='column'>
                <h3 className='brugg-points-big'>13</h3>
                <h4 className='brugg-points-small'>Terrassenhäuser</h4>
              </div>
              <div className='column'>
                <h3 className='brugg-points-big'>CHF 680'000.</h3>
                <h4 className='brugg-points-small'>- ab</h4>
              </div>
            </div>

            <div className='projects-more-info-container'>
              <button
                className='projects-more-info'
                onClick={() =>
                  window.open('https://www.traumheim-ag.ch/', '_blank')
                }
              >
                Mehr Info
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='projects-grid-container'>
        <div className='projects-grid'>
          <div className='projects-grid-image'>
            <img src={Myrten} alt='brugg' className='projects-images' />
          </div>
          <div className='projects-grid-content'>
            <h4 className='projects-grid-title'>MYRTENSTRASSE</h4>
            <p className='projects-grid-description'>
              Die 2 MFH Myrtenstrasse soll auf jeden Fall beeindrucken und
              bietet viele Möglichkeiten, die Natur zu genießen, die Sie umgibt.
              Es hat eine außergewöhnliche Lage im Zentrum von Menziken, wir
              empfehlen Ihnen, sich einen kurzen Einblick in dieses Projekt zu
              verschaffen.
            </p>
          </div>
          <p className='projects-grid-adress'>
            Myrtenstrasse 6+8 5737 Menziken AG
          </p>
        </div>
        <div className='projects-grid'>
          <div className='projects-grid-image'>
            <img src={Widen} alt='brugg' className='projects-images' />
          </div>
          <div className='projects-grid-content'>
            <h4 className='projects-grid-title'>SCHÄCHENFELDSTRASSE</h4>
            <p className='projects-grid-description'>
              Unser Design hat dafür gesorgt, dass luxuriöse Familienresidenzen
              eine gut ausgebaute Infrastruktur und Minergie-P-zertifiziert
              sind. Wir empfehlen Ihnen, sich dieses Meisterwerk bei jeder
              Gelegenheit anzusehen .
            </p>
          </div>
          <p className='projects-grid-adress'>
            Schachenfeldstrasse 19+21 8967 Widen
          </p>
        </div>
        <div className='projects-grid'>
          <div className='projects-grid-image'>
            <img src={Boden} alt='brugg' className='projects-images' />
          </div>
          <div className='projects-grid-content'>
            <h4 className='projects-grid-title'>BODENFELDSTRASSE</h4>
            <p className='projects-grid-description'>
              Als öffentlicher Raum ist das Wohngebäude eines unserer
              Lieblingsprojekte. Aus unserer Sicht die perfekte Kombination aus
              Design und Funktionalität.
            </p>
          </div>
          <p className='projects-grid-adress'>
            Bodenfeldstrasse 1 5737 Menziken AG
          </p>
        </div>
        <div className='projects-grid'>
          <div className='projects-grid-image'>
            <img src={Ober} alt='brugg' className='projects-images' />
          </div>
          <div className='projects-grid-content'>
            <h4 className='projects-grid-title'>OBERKULM</h4>
            <p className='projects-grid-description'>
              Die MFH Oberkulm ist definitiv darauf ausgelegt, zu beeindrucken
              und den Reaktionen der Besucher nach zu urteilen, genau das
              schafft sie.
            </p>
          </div>
          <p className='projects-grid-adress'>Schrägweg 21 5727 Oberkulm</p>
        </div>
        <div className='projects-grid'>
          <div className='projects-grid-image'>
            <img src={Bahnhof} alt='brugg' className='projects-images' />
          </div>
          <div className='projects-grid-content'>
            <h4 className='projects-grid-title'>BAHNHOFSTRASSE</h4>
            <p className='projects-grid-description'>
              Unser Design stellte sicher, dass behinderte Besucher leicht
              zugänglich sind und gleichzeitig ein königliches und
              majestätisches Ambiente erhalten bleiben. Wir empfehlen Ihnen,
              dieses Meisterwerk bei jeder Gelegenheit zu sehen.
            </p>
          </div>
          <p className='projects-grid-adress'>
            Bahnhofstrasse 18 5737 Menziken
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
