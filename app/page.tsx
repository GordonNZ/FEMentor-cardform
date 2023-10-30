'use client';
import Image from 'next/image';
import styles from './page.module.css';
import './home.css';
import { useState } from 'react';

export default function Home() {
  const [cardDetails, setCardDetails] = useState({
    numbers: '0000 0000 0000 0000',
    name: 'Jane Appleseed',
    month: '00',
    year: '00',
    code: '000',
  });
  // const [cardNumbers, setCardNumbers] = useState('0000 0000 0000 0000');
  // const [cardName, setCardName] = useState('Jane Appleseed');
  // const [cardMonth, setCardMonth] = useState(0o00);
  // const [cardYear, setCardYear] = useState(0o00);
  // const [cardCode, setCardCode] = useState(00);

  return (
    <main className='cards-main'>
      <div className='cards-background'>
        <div className='cards-img-container'>
          <div className='backCard-container'>
            <Image
              src={`/images/bg-card-back.png`}
              alt='back card illustration'
              width={0}
              height={0}
              sizes='100vw'
              // style={{ width: '20vw', height: 'auto' }}
              className='backCard'
            />
            <p className='card-cvc'>{cardDetails.code}</p>
          </div>
          <div className='frontCard-container'>
            <Image
              src={`/images/bg-card-front.png`}
              alt='front card illustration'
              width={0}
              height={0}
              sizes='100vw'
              // style={{ width: '20vw', height: 'auto' }}
              className='frontCard'
            />
            <Image
              src={`/images/card-logo.svg`}
              alt='card logo'
              width={0}
              height={0}
              sizes='100vw'
              className='cardLogo'
            />
            <p className='card-numbers'>{cardDetails.numbers}</p>
            <p className='card-name'>{cardDetails.name}</p>
            <p className='card-date'>
              {cardDetails.month}/{cardDetails.year}
            </p>
          </div>
        </div>
      </div>
      <section className='card-details'>
        <form className='card-form'>
          <label>Cardholder Name</label>
          <input placeholder='e.g. Jane Appleseed' type='text'></input>
          <label>Card Number</label>
          <input placeholder='e.g. 1234 5678 9123 0000' type='text'></input>
          <div className='card-date-cvc-container'>
            <div className='card-date-container'>
              <label>Exp. Date (mm/yy)</label>
              <div className='card-date-input-container'>
                <input placeholder='MM' type='text'></input>
                <input placeholder='YY' type='text'></input>
              </div>
            </div>
            <div className='card-cvc-container'>
              <label>CVC</label>
              <input placeholder='e.g. 123 ' type='text'></input>
            </div>
          </div>
          <button className='card-button'>Confirm</button>
        </form>
      </section>
    </main>
  );
}
