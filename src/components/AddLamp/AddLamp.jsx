
import './AddLamp.css';

export const AddLamp = ({ modalOpen }) => {
 

  const handleModalOpen = () => {
  modalOpen();
  };
 
  return (
    <section id="chooseColor" className="product">
      <h2 className='addLamp-title'>ХАРАКТЕРИСТИКИ</h2>
      <img
          className="addLamp-img"
          src={require('Images/addLamp-img.jpg')}
          alt="Lamp"
        />
          <ul className="addLamp-list">
      <li className="addLamp-item"> Тип лампи - світлодіодна</li>
      <li className="addLamp-item"> Колірна температура - 6500 К</li>
      <li className="addLamp-item"> Форма колби - груша</li>
      <li className="addLamp-item">  Інтенсивність - 15 Вт.
      </li>
      <li className="addLamp-item">  При повному заряді акумуляторів працює до – 6 годин</li>
      </ul>
     
      <button
             onClick={handleModalOpen}
              className="product-button"
              type="button"
            >
              Замовити зараз
            </button>
     
    </section>
  );
};
