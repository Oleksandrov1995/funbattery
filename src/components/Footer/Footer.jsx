import './Footer.css'
import { Link } from 'react-scroll'
export const Footer = () => {
    return(
        <section className='footer'>

<ul className='footer-list'>


        <li>
          <Link
            to="questions"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="footer-text"
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
        <li>
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="footer-text"
          >
            Контакти
          </Link>
        </li>
      </ul>
      <p>© 2024 FunBattery</p>
      <p>Made by <a className="footer-text" href="https://www.linkedin.com/in/oleksii-oleksandrov/">Oleksii Oleksandrov</a></p>

        </section>
    )
}