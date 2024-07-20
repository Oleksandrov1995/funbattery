import CountTimeDown from '../CountTimeDown/CountTimeDown';
import './Proposal.css';



let price = 472;
let todayPrice = 236;


export const Proposal = ({ modalOpen }) => {
  const handleModalOpen = () => {
    modalOpen();
    };
  return (
    <section className="proposal-section">
      <h2>Освітлений будинок навіть без електроенергії</h2>
      <ul className="proposal-list">
      <li className="proposal-item">Світить та одночасно заряджається від електромережі просто вкручена в цоколь</li>
      <li className="proposal-item">Продовжує світитися без електроенергії в мережі від акумулятора</li>
      <li className="proposal-item">Вмикається та вимикається вашим вимикачем в кімнаті, вкрутили та забули</li>
      </ul>
      <div className="proposal-allPrice">
        <img
          src={require('../../Images/prices1.png')}
          alt="Шаблон ціни тижня"
        />
        <span className="proposal-price price-text">{price} ГРН</span>
        <span className="proposal-todayPrice price-text">{todayPrice} ГРН</span>
      </div>
      <h3 className="proposal-text">Пропозиція діє ще:</h3>
<CountTimeDown/>
<button
             onClick={handleModalOpen}
              className="product-button"
              type="button"
            >
              Замовити зараз
            </button>
      <p className='proposal-text'>Залишилося <span style={{ background: '#ff671e' }}>11</span> штук по акції</p>
    </section>
  );
};
