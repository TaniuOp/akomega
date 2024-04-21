import './Services.css'; // Assuming you have a CSS file for styling
import RenderOne from '../../../assets/render_one.jpg';
import RenderTwo from '../../../assets/render_two.jpg';
import RenderThree from '../../../assets/render_three.jpg';

const Services = () => {
  return (
    <div className='grid-container'>
      {/* First Row */}
      <div className='grid-item image'>
        <img src={RenderOne} alt='render-ak' />
      </div>
      <div className='grid-item text'>
        <div>
          <p>ARCHITEKTURKONZEPTION</p>
          <p className='grid-texts'>
            Unsere Projekte sind mit moderner Ästhetik und neuen Ideen
            gestaltet, um die besten Raumerlebnisse für ihre Besucher zu
            generieren.
          </p>
        </div>
      </div>
      <div className='grid-item image'>
        <img src={RenderTwo} alt='render-ak' />
      </div>

      {/* Second Row */}
      <div className='grid-item text'>
        <div>
          <p>PLANUNG</p>
          <p className='grid-texts'>
            Unser Team Ihnen bei der Konzeption und Umsetzung Ihrer Idee. Wir
            haben das Wissen und die Erfahrung, um jedes Projekt zu entwickeln.
          </p>
        </div>
      </div>
      <div className='grid-item image'>
        <img src={RenderThree} alt='render-ak' />
      </div>
      <div className='grid-item text'>
        <div>
          <p>BAULEITUNG</p>
          <p className='grid-texts'>
            Wir haben die besten Verbündeten im Bauwesen, überwachen jedes
            unserer Projekte und garantieren die Verwendung der besten
            Materialien, technologischen Prozesse und Bausysteme.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
