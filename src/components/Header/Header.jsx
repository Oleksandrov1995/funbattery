import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';

export const Header = () => {




  return (
    <header className='header-section'>
          <ul className={'header-list' }>
  
      
        <li className="header-item">
          <Link
            to="questions"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="header-text"
          >
            Запитання
          </Link>
        </li>
        <li>
          <Link
            to="feadback"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="footer-text"
          >
            Швидке замовлення
          </Link>
        </li>
        <li className="header-item">
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="header-text"
          >
            Контакти
          </Link>
        </li>
      </ul>
   
    </header>
  );
};
