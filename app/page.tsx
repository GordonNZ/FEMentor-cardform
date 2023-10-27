import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import './home.css';

export default function Home() {
  return (
    <main className='cards-main'>
      <div className='cards-background'>
        <Image
          src={`/images/bg-card-back.png`}
          alt='back card illustration'
          width={0}
          height={0}
          sizes='100vw'
          // style={{ width: '20vw', height: 'auto' }}
          className='backCard'
        />
        <Image
          src={`/images/bg-card-front.png`}
          alt='front card illustration'
          width={0}
          height={0}
          sizes='100vw'
          // style={{ width: '20vw', height: 'auto' }}
          className='frontCard'
        />
        <div className='card-numbers'></div>
        <div className='card-name'></div>
        <div className='card-date'></div>
        <div className='card-cvc'></div>
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
