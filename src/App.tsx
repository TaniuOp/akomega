import AKLogo from '/akomegaag_logo.png';
import './App.css';

function App() {
  return (
    <>
      <div>
        <a href='https://www.traumheim-ag.ch/' target='_blank'>
          <img src={AKLogo} className='logo' alt='Vite logo' />
        </a>
      </div>
      <h1>AK OMEGA AG</h1>
      <div className='card'>
        <p>Comming Soon</p>
      </div>
    </>
  );
}

export default App;
