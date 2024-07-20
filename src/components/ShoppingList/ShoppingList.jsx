import './ShoppingList.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { sendMessage } from 'utilities/sendMessage';

export const ShoppingList = ({ modalOpen, modalClose }) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [post, setPost] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [noCall, setNoCall] = useState(false);
  const [question, setQuestion] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const [productQuantity, setProductQuantity] = useState(1);

  const productPrice = 236; // Ціна за штуку
  const totalAmount = productPrice * productQuantity;

  useEffect(() => {
    if (isSuccess) {
      Notify.success('Дякуємо! Заявка прийнята.');
      setTimeout(() => setIsSuccess(false), 4000);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isFailure) {
      Notify.failure('Введіть Ваш номер телефону');
      setTimeout(() => setIsFailure(false), 4000);
    }
  }, [isFailure]);

  const handleFormSubmit = async e => {
    e.preventDefault();
    const phoneRegex = /^\d{10,12}$/;
    if (!phoneRegex.test(phone)) {
      setIsFailure(true);
      return;
    }
    sendMessage(`Нова заявка! Хочу жилет!!!
      \nТовар: 'Лампочка'
      \nЗагальна сума: ${totalAmount}
      \nІм'я: ${name}
      \nТелефон: ${phone}
      \nНаселений пункт: ${location}
      \nПошта: ${post}
      \nОплата: ${paymentMethod}
      \nНе Дзвонити?: ${noCall}
      \nЗапитання: ${question}
      `);
    setIsSuccess(true);
    setName('');
    setPhone('');
    setLocation('');
    setPost('');
    setPaymentMethod('');
    setNoCall(false);
    setQuestion('');
    setProductQuantity(1);
    handleModalClose();
  };

  const handleModalClose = async () => {
    modalClose();
  };

  const incrementQuantity = () => {
    setProductQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setProductQuantity(prevQuantity =>
      prevQuantity > 1 ? prevQuantity - 1 : 1
    );
  };
  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={'modal'}
      >
        <Box className={'modalBox'}>
          <AiOutlineCloseCircle
            size={30}
            onClick={handleModalClose}
            className="modalButtonClose"
          />
          <h2 className="shoppingList-title">Ваше замовлення: Лампочка</h2>
          <div className="quantity-controls">
            <RemoveCircleOutlineIcon onClick={decrementQuantity} />
            <span>Кількість: {productQuantity} шт.</span>
            <AddCircleIcon onClick={incrementQuantity} />
          </div>
          <p>Ціна за штуку - {productPrice} гривень</p>
          <p className="shoppingList-totalPrice">
            Загальна сума: {totalAmount} гривень
          </p>
          <form className="shoppingList-form" onSubmit={handleFormSubmit}>
            <ul>
              <li>
                <label>
                  ПІБ одержувача
                  <input
                    className="shoppingList-formInput"
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </label>
              </li>
              <li>
                <label>
                  Телефон
                  <input
                    className="shoppingList-formInput"
                    type="tel"
                    name="phone"
                    placeholder="099-999-99-99"
                    value={phone}
                    onChange={e =>
                      setPhone(e.target.value.replace(/\D/g, '').slice(0, 12))
                    }
                  />
                </label>
              </li>
              <li>
                <label>
                  Населений пункт
                  <input
                    className="shoppingList-formInput"
                    type="text"
                    name="location"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                  />
                </label>
              </li>
              <li>
                <label>
                  Номер відділення Нової пошти або індекс Укрпошти
                  <input
                    className="shoppingList-formInput"
                    type="text"
                    name="post"
                    value={post}
                    onChange={e => setPost(e.target.value)}
                  />
                </label>
              </li>
            </ul>

            <section>
              <p className="shoppingList-paymentTitle">Спосіб оплати</p>
              <label>
                <input
                  className="shoppingList-payment"
                  type="radio"
                  checked={paymentMethod === 'imposed'}
                  name="paymentMethod"
                  value="imposed"
                  onChange={e => setPaymentMethod(e.target.value)}
                />
                При отриманні у відділенні пошти (накладний платіж)
              </label>
              <label>
                <input
                  className="shoppingList-payment"
                  type="radio"
                  checked={paymentMethod === 'card'}
                  name="paymentMethod"
                  value="card"
                  onChange={e => setPaymentMethod(e.target.value)}
                />
                Оплата на картку (надішлемо смс із номером картки для оплати)
              </label>
            </section>
            <label className="shoppingList-checkbox">
              <input
                className="shoppingList-payment"
                type="checkbox"
                checked={noCall}
                onChange={e => setNoCall(e.target.checked)}
              />
              Надіслати посилку без дзвінка менеджера
            </label>
            <input
              className="shoppingList-questionInput"
              type="text"
              name="question"
              value={question}
              placeholder="Залишіть Ваше запитання чи уточнення за необхідності"
              onChange={e => setQuestion(e.target.value)}
            />
            <p className="shoppingList-totalPrice">
              Загальна сума: {totalAmount} гривень
            </p>
            <button type="submit">Замовити</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
