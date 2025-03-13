import {pageLinks, socialLinks} from '../data-js';
import PageLinks from './PageLink';
import PageIcons from './PageIcons';

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass={"footer-links"} itemClass={"footer-link"}/>
      <PageIcons parentClass={"footer-icons"} itemClass={"nav-icon"}/>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
};

export default Footer;