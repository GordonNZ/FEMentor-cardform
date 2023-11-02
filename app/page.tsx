'use client';
import Image from 'next/image';
import styles from './page.module.css';
import './home.css';
import { useState } from 'react';
import Form from './_components/form/form';

type CardData = {
  numbers: string;
  name: string;
  month: string;
  year: string;
  code: string;
};

export default function Home() {
  const [cardDetails, setCardDetails] = useState<CardData>({
    numbers: '0000 0000 0000 0000',
    name: 'Jane Appleseed',
    month: '00',
    year: '00',
    code: '000',
  });

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
      <Form cardDetails={cardDetails} setCardDetails={setCardDetails} />
    </main>
  );
}
