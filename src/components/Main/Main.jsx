import './Main.css';
import React from 'react';
export const Main = () => {
  return (
    <section className="main-container">
      <h1 className="main-title">
        АКУМУЛЯТОРНА ЛАМПОЧКА КОТРА ПРАЦЮЄ З ТА БЕЗ ЕЛЕКТРИКИ
      </h1>
      <div className="main-container-img">
        <div className="main-discount">
          {' '}
          <img
            className="main-discount-img"
            src={require('Images/discount.png')}
            alt="discount"
          />
          <p className="main-discount-text">-50%</p>
        </div>
        <img
          className="main-img"
          src={require('Images/mainImage.jpg')}
          alt="discount"
        />
      </div>
      <div className="main-titles">
        <ul className="main-benefits">
          <li>
            <h3>Оплата при отриманні</h3>
          </li>
          <li>
            <h3>Відправка в день замовлення</h3>
          </li>
          <li>
            <h3>Контроль якості</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};
