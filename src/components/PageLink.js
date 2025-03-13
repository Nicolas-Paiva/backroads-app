import {pageLinks} from '../data-js';

const PageLinks = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        const {id, href, icon} = link;
        return (
          <li key={id}>
            <a href={href} target="_blank" rel="noreferrer" className={itemClass}
            ><i className={icon}></i
            >{link.text}</a>
          </li>
        );
      })}
    </ul>
  );
};


export default PageLinks;