import logo from '../images/logo.svg';
import {pageLinks, socialLinks} from '../data-js';
import PageLinks from './PageLink';
import PageIcons from './PageIcons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads"/>
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/*<!-- left this comment on purpose -->*/}
        <PageLinks parentClass="nav-links" itemClass="nav-link"/>
        <PageIcons parentClass="nav-icons" itemClass="nav-icon"/>
      </div>
    </nav>
  );
};

export default Navbar;