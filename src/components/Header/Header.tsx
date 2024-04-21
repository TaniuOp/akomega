import './Header.css';
import Logo from '../../assets/akomegaag_logo.png';

const Header = () => {
  //   const [showMenu, setShowMenu] = useState(false);

  //   const toggleMenu = () => {
  //     setShowMenu(!showMenu);
  //   };

  return (
    <header className='header'>
      <div className='header-logo'>
        <img src={Logo} alt='Logo' />
      </div>
      {/* <nav className={`header-nav ${showMenu ? 'show-menu' : ''}`}>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/projects'>Projects</a>
          </li>
          <li>
            <a href='/team'>Team</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </nav> */}
      {/* <button className="header-menu-toggle" onClick={toggleMenu} style={{ display: window.innerWidth <= 768  ? 'block' : 'none' }}>
                &#9776;
            </button> */}
    </header>
  );
};

export default Header;
